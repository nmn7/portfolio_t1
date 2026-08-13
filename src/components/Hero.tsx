import { useEffect, useState } from 'react';
import useMagnetic from '../hooks/useMagnetic';
import { ArrowRight, Download, Award, ShieldCheck, Activity, Database, Cpu } from 'lucide-react';
import WarpText from './WarpText';
import Aurora from './Aurora';
import Globe from './Globe';

const SUBTITLES = [
  'AI Solutions Engineer',
  'Forward Deployed Engineer',
  'Technical Consultant',
  'Product Engineer',
  'GenAI Builder'
];

export default function Hero() {
  const [subIndex, setSubIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  const projectsBtnRef = useMagnetic(0.2) as React.RefObject<HTMLButtonElement>;
  const resumeBtnRef = useMagnetic(0.2) as React.RefObject<HTMLAnchorElement>;



  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setSubIndex((prev) => (prev + 1) % SUBTITLES.length);
        setFadeState('fade-in');
      }, 500); // Allow fadeout transition to complete
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  const stats = [
    { value: '8+ Years', label: 'Experience', icon: <Activity size={16} /> },
    { value: '25+', label: 'Enterprise Projects', icon: <Database size={16} /> },
    { value: '$12M+', label: 'Business Impact', icon: <Award size={16} /> },
    { value: '3', label: 'Industries Covered', icon: <Cpu size={16} /> },
    { value: 'AWS', label: 'Certified', icon: <ShieldCheck size={16} /> }
  ];

  return (
    <section id="hero" data-section="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '95px 24px 24px 24px' }}>

      {/* Aurora Backdrop */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        <Aurora
          colorStops={["#5227FF","#7cff67","#5227FF"]}
          amplitude={1.0}
          blend={0.5}
        />
      </div>

      <div className="grid-layout" style={{ width: '100%', flex: 1, alignItems: 'center', paddingBottom: '24px' }}>

        {/* Left Content */}
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>

          {/* Name */}
          <WarpText
            text="Naman Mehta"
            color="#FFFFFF"
            fontSize="clamp(3.5rem, 8vw, 6.5rem)"
            fontWeight={900}
            fontFamily="'Outfit', sans-serif"
            align="left"
            className="title-large animate-slide-up delay-150"
            style={{ margin: 0, minHeight: '130px' }}
          />

          {/* Subtitle with vertical slide-fade effect */}
          <div className="animate-slide-up delay-250" style={{ height: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <span
              className={`subtitle-large ${fadeState}`}
              style={{
                color: '#3B82F6',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                opacity: fadeState === 'fade-in' ? 1 : 0,
                transform: fadeState === 'fade-in' ? 'translateY(0)' : 'translateY(10px)',
                display: 'inline-block'
              }}
            >
              {SUBTITLES[subIndex]}
            </span>
          </div>

          {/* Supporting Text */}
          <p className="body-lead animate-slide-up delay-350" style={{ maxWidth: '600px', margin: 0 }}>
            I design and build AI-powered enterprise products that solve complex business problems across Pharma, Retail, and Finance product thinking, cloud engineering, and intelligent automation.
          </p>

          {/* Call to Actions */}
          <div className="animate-slide-up delay-450" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
            <button
              ref={projectsBtnRef}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
              data-cursor="pointer"
              data-magnetic="true"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <a
              ref={resumeBtnRef}
              href={`${import.meta.env.BASE_URL}Naman_Mehta_Resume.pdf`}
              download
              className="btn btn-secondary"
              data-cursor="pointer"
              data-magnetic="true"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right Globe Column */}
        <div
          className="animate-slide-up delay-400 hero-globe-container"
          style={{
            gridColumn: 'span 5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
          }}
        >
          <Globe />
        </div>
      </div>

      {/* Stats Below */}
      <div
        className="animate-slide-up delay-550"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          width: '100%',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '150px'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--glass-bg)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3B82F6',
              }}
            >
              {stat.icon}
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Outfit', sans-serif" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
