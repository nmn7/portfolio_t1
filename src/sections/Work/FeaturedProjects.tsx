import { useState, useEffect } from 'react';
import { Layers, ShieldAlert, Cpu, BarChart3, Database, AlertCircle, ShieldCheck, Search, Lightbulb, Check, Terminal, Settings } from 'lucide-react';

import {
  cardConfigMap,
  renderLeftGraphic,
  getRgbValues,
  projects,
  PROJECT_LOGS_MAP
} from '../../data/projects';

import CrtCustomDashboard from '../../components/projects/CrtCustomDashboard';
import MaciCustomDashboard from '../../components/projects/MaciCustomDashboard';
import ExtractCustomDashboard from '../../components/projects/ExtractCustomDashboard';
import RakutenCustomDashboard from '../../components/projects/RakutenCustomDashboard';
import WorkforceCustomDashboard from '../../components/projects/WorkforceCustomDashboard';

interface FeaturedProjectsProps {
  viewMode: 'engineer' | 'consultant';
}

export default function FeaturedProjects({ viewMode }: FeaturedProjectsProps) {
  const [activeProj, setActiveProj] = useState<string>('bms');
  const [slideIndex, setSlideIndex] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);

  // Interaction Upgrade States
  const [prevOffset, setPrevOffset] = useState({ x: 0, y: 0 });
  const [nextOffset, setNextOffset] = useState({ x: 0, y: 0 });
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  const displayProjects = projects;

  const currentProj = displayProjects.find(p => p.id === activeProj) || displayProjects[0];

  const handlePrevProject = () => {
    const currentIndex = displayProjects.findIndex(p => p.id === activeProj);
    const prevIndex = (currentIndex - 1 + displayProjects.length) % displayProjects.length;
    setActiveProj(displayProjects[prevIndex].id);

    // Smooth scroll to the top of the projects section
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextProject = () => {
    const currentIndex = displayProjects.findIndex(p => p.id === activeProj);
    const nextIndex = (currentIndex + 1) % displayProjects.length;
    setActiveProj(displayProjects[nextIndex].id);

    // Smooth scroll to the top of the projects section
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Magnetic Button Interaction Helpers
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = (setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    setOffset({ x: 0, y: 0 });
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNextProject();
      } else if (e.key === 'ArrowLeft') {
        handlePrevProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProj]);

  useEffect(() => {
    setIsCompiling(true);

    const initialLog = currentProj.id === 'bms'
      ? `$ initializing AI Pricing Intelligence Platform...`
      : `$ initializing environment for ${currentProj.title}...`;

    setConsoleLogs([initialLog]);

    const logs = PROJECT_LOGS_MAP[currentProj.id] || [
      '[ok] connecting to database clusters...',
      '[ok] loading schema mappings and metrics indices...',
      '[ok] verifying telemetry pipelines: latency check 12ms...',
      '[ok] system session secure (token verified)...',
      '$ execution compiled successfully.'
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        const nextLog = logs[logIndex];
        setConsoleLogs(prev => {
          if (!prev) return [];
          const list = [...prev];
          list.push(nextLog);
          return list;
        });
        logIndex++;
      } else {
        setIsCompiling(false);
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [activeProj]);


  return (
    <section id="projects" data-section="projects" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 className="title-section">
          Featured Projects
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px' }}>
          {viewMode === 'engineer'
            ? 'Enterprise AI, automation, and digital products built around real operational problems.'
            : 'High-level business outcomes, operational cost savings, and client leadership results.'}
        </p>
      </div>

      {viewMode === 'consultant' ? (
        /* Consultant Pitch Deck Slide View */
        <div
          className="glass-panel"
          style={{
            width: '100%',
            padding: '36px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            position: 'relative'
          }}
        >
          {/* Top Control Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Executive Briefing Slide {slideIndex + 1} of {projects.length}
              </span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                {projects[slideIndex].title}
              </h2>
            </div>
            {/* Slider Arrows */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setSlideIndex(prev => (prev - 1 + projects.length) % projects.length)}
                data-cursor="pointer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '12px' }}
              >
                â† Prev Slide
              </button>
              <button
                onClick={() => setSlideIndex(prev => (prev + 1) % projects.length)}
                data-cursor="pointer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '12px' }}
              >
                Next Slide â†’
              </button>
            </div>
          </div>

          {/* Slide Deck ROI Dashboard Hero Banner */}
          <div
            style={{
              padding: '32px',
              borderRadius: '16px',
              background: 'rgba(59, 130, 246, 0.03)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--success-color)', fontFamily: "'Outfit', sans-serif" }}>
                {projects[slideIndex].heroMetric}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 600 }}>
                {projects[slideIndex].metricsLabel}
              </div>
            </div>
            <div style={{ maxWidth: '550px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Commercial Objective
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].subtitle}
              </p>
            </div>
          </div>

          {/* 3-Column Pitch Deck Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ðŸ¢ Business Challenge
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].problem}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ðŸ” Strategic Discovery
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].discovery}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ðŸ’¼ Business Outcome
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].lessons}
              </p>
            </div>

          </div>

          {/* Bullet Navigation Dots */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: slideIndex === idx ? 'var(--accent-color)' : 'var(--border-color)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      ) : (
        /* Render Engineer Mode Code Panel */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', overflow: 'visible' }}>

          {/* Project Selector List (Horizontal Flex Slider Layout) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', overflow: 'visible', margin: '24px 0' }}>
            {/* Left Chevron Button */}
            <button
              onClick={handlePrevProject}
              onMouseMove={(e) => handleMouseMove(e, setPrevOffset)}
              onMouseLeave={() => {
                handleMouseLeave(setPrevOffset);
                setIsPrevHovered(false);
              }}
              onMouseEnter={() => setIsPrevHovered(true)}
              data-cursor="pointer"
              aria-label="Previous project"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: isPrevHovered
                  ? `1px solid ${cardConfigMap[activeProj]?.badgeColor || 'rgba(255, 255, 255, 0.15)'}`
                  : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: isPrevHovered
                  ? `rgba(${getRgbValues(cardConfigMap[activeProj]?.badgeColor || '#3B82F6')}, 0.12)`
                  : 'rgba(11, 11, 11, 0.5)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                fontSize: '1rem',
                transition: 'border-color 350ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <span style={{
                transform: `translate(${prevOffset.x}px, ${prevOffset.y}px)`,
                transition: prevOffset.x === 0 && prevOffset.y === 0
                  ? 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                  : 'none',
                display: 'inline-block'
              }}>&lt;</span>
            </button>

            {/* Flat Flex Cards Row */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flex: 1,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                padding: '8px 0'
              }}
              className="hide-scrollbar"
            >
              {displayProjects.map((proj, idx) => {
                const isSelected = activeProj === proj.id;
                const cardConfig = cardConfigMap[proj.id];
                if (!cardConfig) return null;

                return (
                  <div
                    key={proj.id}
                    onClick={() => {
                      setActiveProj(proj.id);
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`selector-project-card stagger-entrance-card ${isSelected ? 'active-card' : ''}`}
                    style={{
                      animationDelay: `${idx * 60}ms`,
                      flexGrow: isSelected ? 2.2 : 1,
                      flexShrink: 0,
                      flexBasis: '0px',
                      backgroundColor: isSelected ? 'rgba(9, 13, 29, 0.6)' : 'rgba(11, 11, 11, 0.45)',
                      border: isSelected ? `2px solid ${cardConfig.badgeColor}` : '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: isSelected ? `0 0 20px ${cardConfig.glowColor}` : 'none',
                      borderRadius: '12px',
                      display: 'flex',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      opacity: isSelected ? 1 : 0.65
                    }}
                  >
                    {/* Left Column: Graphic (35% width) */}
                    <div style={{
                      width: '35%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.01)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      {renderLeftGraphic(proj.id)}
                    </div>

                    {/* Right Column: Content (65% width) */}
                    <div style={{
                      width: '65%',
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                      minWidth: 0
                    }}>
                      {/* Top Header line */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
                          {/* Index Badge */}
                          <span style={{
                            fontSize: '0.6rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            backgroundColor: cardConfig.badgeColor,
                            padding: '1px 5px',
                            borderRadius: '4px',
                            lineHeight: 1,
                            flexShrink: 0
                          }}>
                            {`0${idx + 1}`}
                          </span>
                          <span className="project-card-title" style={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                            {cardConfig.shortTitle}
                          </span>
                        </div>

                        {/* Subtitle */}
                        <span className="project-card-subtitle" style={{
                          fontSize: '0.6rem',
                          color: '#94a3b8',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}>
                          {cardConfig.shortSubtitle}
                        </span>
                      </div>

                      {/* Middle row: Tags */}
                      <div className="nudge-on-hover" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', margin: '4px 0' }}>
                        {cardConfig.cardTags.map((tag, tIdx) => (
                          <span key={tIdx} style={{
                            fontSize: '0.55rem',
                            color: '#a3b3cc',
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '1px 4px',
                            borderRadius: '4px',
                            whiteSpace: 'nowrap'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Outcome */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#10b981', minWidth: 0 }}>
                        <span style={{ fontSize: '0.55rem', flexShrink: 0 }}>ðŸ“ˆ</span>
                        <span className="project-card-outcome" style={{
                          fontSize: '0.55rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          color: '#10b981'
                        }}>
                          {cardConfig.cardOutcome}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNextProject}
              onMouseMove={(e) => handleMouseMove(e, setNextOffset)}
              onMouseLeave={() => {
                handleMouseLeave(setNextOffset);
                setIsNextHovered(false);
              }}
              onMouseEnter={() => setIsNextHovered(true)}
              data-cursor="pointer"
              aria-label="Next project"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: isNextHovered
                  ? `1px solid ${cardConfigMap[activeProj]?.badgeColor || 'rgba(255, 255, 255, 0.15)'}`
                  : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: isNextHovered
                  ? `rgba(${getRgbValues(cardConfigMap[activeProj]?.badgeColor || '#3B82F6')}, 0.12)`
                  : 'rgba(11, 11, 11, 0.5)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                fontSize: '1rem',
                transition: 'border-color 350ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <span style={{
                transform: `translate(${nextOffset.x}px, ${nextOffset.y}px)`,
                transition: nextOffset.x === 0 && nextOffset.y === 0
                  ? 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                  : 'none',
                display: 'inline-block'
              }}>&gt;</span>
            </button>
          </div>

          {/* Detailed Case Study Panel (Takes Full Width) */}
          <div style={{ width: '100%' }} className="glass-panel">
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Header / Hero Metric Banner */}
              <div className="case-study-header">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 className="case-study-title">
                    {currentProj.title}
                  </h2>
                  <p className="case-study-subtitle">
                    {currentProj.subtitle}
                  </p>
                </div>

                {/* Big Metric Badge */}
                {currentProj.id === 'bms' ? (
                  <div
                    style={{
                      padding: '20px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(34, 197, 94, 0.03)',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                      minWidth: '240px',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      flexShrink: 0
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ color: '#22C55E' }}>
                        <Cpu size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22C55E' }}>
                          Enterprise AI
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          Production Deployment
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)' }}>
                        Claude + MCP
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)' }}>
                        AWS Redshift
                      </span>
                    </div>
                  </div>
                ) : currentProj.id === 'crt' ? null : (
                  <div
                    style={{
                      padding: '16px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(34, 197, 94, 0.05)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      minWidth: '180px',
                      textAlign: 'center',
                      flexShrink: 0
                    }}
                  >
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22C55E', fontFamily: "'Outfit', sans-serif" }}>
                      {currentProj.heroMetric}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#A3A3A3', marginTop: '4px', lineHeight: 1.3 }}>
                      {currentProj.metricsLabel}
                    </div>
                  </div>
                )}
              </div>

              {/* Structured Content Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {currentProj.id === 'maci' ? (
                  <MaciCustomDashboard />
                ) : currentProj.id === 'crt' ? (
                  <CrtCustomDashboard />
                ) : currentProj.id === 'extract' ? (
                  <ExtractCustomDashboard />
                ) : currentProj.id === 'rakuten' ? (
                  <RakutenCustomDashboard />
                ) : currentProj.id === 'workforce' ? (
                  <WorkforceCustomDashboard />
                ) : currentProj.id === 'bms' ? (
                  <>
                    {/* Row 1: Challenge & Constraints */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'left' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <AlertCircle size={16} style={{ color: '#EF4444' }} />
                          Business Challenge
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                          Global pricing teams needed to evaluate how pricing changes across reference countries impacted international drug pricing under IRP and MFN regulations.
                        </p>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginTop: '8px' }}>
                          The existing workflow depended on manual SQL analysis, fragmented pricing datasets, and repeated engineering support, making scenario analysis slow, error-prone, and difficult to scale for regulatory decision making.
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <ShieldCheck size={16} style={{ color: '#3B82F6' }} />
                          Enterprise Constraints
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <li>Sensitive pricing data could never be exposed directly to an LLM.</li>
                          <li>Every SQL query required governance, validation, and auditability.</li>
                          <li>AI-generated insights had to execute entirely within enterprise AWS infrastructure.</li>
                          <li>Responses needed deterministic execution suitable for regulated pharmaceutical environments.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Row 2: Discovery & Solution */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'left' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Search size={16} style={{ color: '#06B6D4' }} />
                          Discovery
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '10px' }}>
                          Analysis of existing workflows identified three major bottlenecks:
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <li>Business users relied on technical teams for SQL-based analysis.</li>
                          <li>Historical pricing data existed across multiple Redshift datasets.</li>
                          <li>Traditional dashboards answered historical questions but couldn't support interactive "what-if" pricing scenarios.</li>
                        </ul>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginTop: '10px' }}>
                          This created an opportunity for secure AI-assisted analytics.
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Lightbulb size={16} style={{ color: '#22C55E' }} />
                          Solution
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '10px' }}>
                          Designed and implemented a secure Claude Model Context Protocol (MCP) layer that translates natural language into validated SQL before executing governed queries against Amazon Redshift.
                        </p>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '10px' }}>
                          MCP acts as a semantic gateway that:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {[
                            'Understands business intent',
                            'Generates parameterized SQL',
                            'Validates against governance rules',
                            'Executes queries securely',
                            'Returns accurate, auditable insights in seconds'
                          ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                              <Check size={14} style={{ color: '#22C55E', flexShrink: 0 }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Row 1: Problem & Constraints */}
                    <div className="responsive-grid">
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <ShieldAlert size={14} style={{ color: '#EF4444' }} />
                          The Problem
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.problem}
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Layers size={14} style={{ color: '#3B82F6' }} />
                          Constraints
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.constraints}
                        </p>
                      </div>
                    </div>

                    {/* Row 2: Discovery & Lessons */}
                    <div className="responsive-grid">
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Layers size={14} style={{ color: '#06B6D4' }} />
                          Discovery
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.discovery}
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <BarChart3 size={14} style={{ color: '#22C55E' }} />
                          Key Lessons
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.lessons}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Row 3: Architecture Diagram Panel (Hidden for custom dashboards) */}
                {currentProj.id !== 'extract' && currentProj.id !== 'maci' && currentProj.id !== 'crt' && currentProj.id !== 'rakuten' && currentProj.id !== 'workforce' && (
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <Database size={14} style={{ color: '#8B5CF6' }} />
                      System Architecture
                    </h4>
                    <div
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '180px'
                      }}
                    >
                      {currentProj.architecture}
                    </div>
                  </div>
                )}

                {/* Row 2.5: Simulated Compiling Log (Computer Animation) */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {currentProj.id === 'bms' ? (
                      <Terminal size={14} style={{ color: '#8B5CF6' }} />
                    ) : (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
                    )}
                    Verification Console
                  </h4>
                  <div
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid rgba(59, 130, 246, 0.15)',
                      borderRadius: '12px',
                      padding: '16px',
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      color: '#22C55E',
                      minHeight: '130px',
                      boxShadow: 'inset 0 0 10px rgba(34, 197, 94, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      gap: '4px',
                      overflow: 'hidden'
                    }}
                  >
                    {consoleLogs.map((log, idx) => (
                      <div key={idx} style={{ color: log?.startsWith('[ok]') ? '#22C55E' : log?.startsWith('$') ? '#3B82F6' : 'var(--text-primary)' }}>
                        {log}
                      </div>
                    ))}
                    {isCompiling && <span className="typing-cursor" style={{ color: '#22C55E' }} />}
                  </div>
                </div>

                {/* Row 4: Technology Stack */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Settings size={14} style={{ color: '#3B82F6' }} />
                    Technology Stack
                  </h4>
                  {currentProj.id === 'maci' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                      {[
                        { cat: 'Cloud / Infra', techs: ['AWS S3', 'AWS SageMaker', 'API Gateway'] },
                        { cat: 'NLP / ML', techs: ['Google MUSE', 'AWS Comprehend', 'spaCy', 'NLTK', 'Word2Vec'] },
                        { cat: 'Speech-to-Text', techs: ['AWS Transcribe', 'Google STT', 'Microsoft Azure Speech', 'Rev API'] },
                        { cat: 'Audio Processing', techs: ['ffmpeg'] },
                        { cat: 'Languages', techs: ['Python'] }
                      ].map((stack, idx) => (
                        <div key={idx} style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '12px',
                          padding: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}>
                          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>
                            {stack.cat}
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {stack.techs.map((t, tIdx) => (
                              <span key={tIdx} style={{
                                fontSize: '0.65rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-secondary)'
                              }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {currentProj.techs.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: 'var(--glass-bg)',
                            border: '1px solid var(--border-color)',
                            fontSize: '0.8rem',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>



              {/* Row 6: Secondary Scroll Navigation Links */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '16px',
                  padding: '0 4px'
                }}
              >
                {/* Previous Project text button */}
                <button
                  onClick={() => {
                    const idx = displayProjects.findIndex(p => p.id === activeProj);
                    const prevProj = displayProjects[(idx - 1 + displayProjects.length) % displayProjects.length];
                    setActiveProj(prevProj.id);
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-cursor="pointer"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
                >
                  â† Previous Project
                </button>

                {/* Dots indicator */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {displayProjects.map((proj, idx) => {
                    const isSelected = activeProj === proj.id;
                    const cardConfig = cardConfigMap[proj.id];
                    return (
                      <button
                        key={proj.id}
                        onClick={() => {
                          setActiveProj(proj.id);
                          const el = document.getElementById('projects');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        data-cursor="pointer"
                        style={{
                          width: isSelected ? '28px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          backgroundColor: isSelected ? (cardConfig?.badgeColor || '#3B82F6') : '#27272a',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          transition: 'width 550ms cubic-bezier(0.22, 1, 0.36, 1), background-color 550ms cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                        aria-label={`Go to project ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                {/* Next Project text button */}
                <button
                  onClick={handleNextProject}
                  data-cursor="pointer"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#3B82F6',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#3B82F6'; }}
                >
                  Next Project âž”
                </button>
              </div>

            </div>
          </div>

          {/* Standing Project Pill Navigation Status Bar */}
          <div className="project-navigation-bar">
            {/* Left: Projects Button */}
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              data-cursor="pointer"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '0.75rem',
                color: '#ffffff',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'border-color 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
            >
              <span>â† Projects</span>
            </button>

            {/* Center: Index and Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.8rem', color: '#ffffff', flexWrap: 'wrap' }}>
              {/* Grid Icon representation */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 3px)', gap: '2px', color: '#64748b' }}>
                {[...Array(9)].map((_, i) => (
                  <span key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                ))}
              </div>
              <span style={{ fontWeight: 700, display: 'flex', gap: '4px' }}>
                <span style={{ color: '#3B82F6' }}>{`0${displayProjects.findIndex(p => p.id === activeProj) + 1}`}</span>
                <span style={{ color: '#475569' }}>{` / 0${displayProjects.length}`}</span>
              </span>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>
                {cardConfigMap[activeProj]?.shortTitle || ''}
              </span>
              {(() => {
                const short = (cardConfigMap[activeProj]?.shortTitle || '').toLowerCase().trim();
                const full = (currentProj.title || '').toLowerCase().trim();
                const isDuplicate = short === full || full.includes(short) || short.includes(full) || short.substring(0, 15) === full.substring(0, 15);
                return !isDuplicate && (
                  <span style={{ color: '#64748b' }}>
                    {currentProj.title}
                  </span>
                );
              })()}
            </div>

            {/* Right: Next Project with Dynamic Title */}
            <button
              onClick={handleNextProject}
              data-cursor="pointer"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span style={{ color: '#64748b' }}>Next:</span>
              <span style={{ color: '#3B82F6', fontWeight: 600 }}>
                {(() => {
                  const idx = displayProjects.findIndex(p => p.id === activeProj);
                  const nextProj = displayProjects[(idx + 1) % displayProjects.length];
                  return cardConfigMap[nextProj.id]?.shortTitle || '';
                })()}
              </span>
              <span style={{ color: '#3B82F6' }}>âž”</span>
            </button>
          </div>

        </div>
      )}
    </section>
  );
}
