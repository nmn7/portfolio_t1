import { useState, useEffect } from 'react';
import { ArrowRight, Layers, ShieldAlert, Cpu, BarChart3, Database, AlertCircle, ShieldCheck, Search, Lightbulb, Check, Terminal, Star, Volume2, XCircle, TrendingUp, Clock, Activity, Settings, RefreshCw, Filter, Tag, Camera, Plus, Users, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  heroMetric: string;
  metricsLabel: string;
  techs: string[];
  problem: string;
  discovery: string;
  constraints: string;
  implementation: string;
  challenges: string;
  lessons: string;
  architecture: React.ReactNode;
}

interface FeaturedProjectsProps {
  viewMode: 'engineer' | 'consultant';
}

function CrtCustomDashboard() {
  const [selectedLookup, setSelectedLookup] = useState({
    id: '123456',
    name: 'ABC Health Center',
    status: 'Active',
    category: 'Disproportionate Share Hospital (DSH)',
    address: '123 Main St, Springfield, IL 62701, USA'
  });

  const [sourceImageErrors, setSourceImageErrors] = useState<Record<string, boolean>>({});

  const sources = [
    { id: 'model_n', name: 'Model N', label: 'Customer Master', color: '#3B82F6', textIcon: 'N' },
    { id: 'dea', name: 'DEA', label: 'DEA Portal', color: '#F59E0B', textIcon: '★' },
    { id: 'ihin', name: 'ihin', label: 'HIN Portal', color: '#10B981', textIcon: 'ℹ' },
    { id: 'hrsa', name: 'hrsa', label: '340B Program', color: '#EF4444', textIcon: 'H' },
    { id: 'npi', name: 'npi', label: 'NPPES Registry', color: '#06B6D4', textIcon: 'NPI' },
    { id: 'google', name: 'google', label: 'Search & Maps', color: '#EC4899', textIcon: 'G' },
    { id: 'mdm', name: 'mdm', label: 'Master Data', color: '#8B5CF6', textIcon: '🗄' },
    { id: 'excel', name: 'excel', label: 'User Spreadsheets', color: '#10B981', textIcon: '📊' },
    { id: 'other', name: 'other', label: 'Client Catalogs', color: '#64748B', textIcon: '➕' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'left', width: '100%' }}>


      {/* Row 1: Problem & Product */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>

        {/* The Problem */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.01)',
          border: '1px solid rgba(239, 68, 68, 0.15)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <AlertCircle size={16} />
            The Problem
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Customer intelligence was fragmented across portals, databases, and files. Analysts and commercial teams had to manually research the same customer across multiple sources, reconcile identities, validate conflicting information, and collect evidence before the customer could be reliably classified.
          </p>
        </div>

        {/* The Product */}
        <div style={{
          backgroundColor: 'rgba(16, 185, 129, 0.01)',
          border: '1px solid rgba(16, 185, 129, 0.15)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <ShieldCheck size={16} />
            The Product
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            CRT turns fragmented customer research into a repeatable validation workflow by automating compilation across sources and providing a unified cockpit.
          </p>
          
          {/* Responsive SVG pipeline flow */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            marginTop: 'auto'
          }}>
            <svg viewBox="0 0 700 70" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
              {/* Connectors */}
              {[
                { from: 72, to: 128 },
                { from: 172, to: 228 },
                { from: 272, to: 328 },
                { from: 372, to: 428 },
                { from: 472, to: 528 },
                { from: 572, to: 628 }
              ].map((conn, cIdx) => (
                <g key={cIdx}>
                  <line x1={conn.from} y1="22" x2={conn.to} y2="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <polygon points={`${conn.to},22 ${conn.to-5},19 ${conn.to-5},25`} fill="rgba(255,255,255,0.3)" />
                </g>
              ))}

              {/* Steps */}
              {[
                { x: 50, name: 'Research', icon: (
                  <g>
                    <circle cx="50" cy="22" r="6" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                    <line x1="54" y1="26" x2="59" y2="31" stroke="#3B82F6" strokeWidth="1.5" />
                  </g>
                )},
                { x: 150, name: 'Match', icon: (
                  <g>
                    <circle cx="145" cy="22" r="2.5" fill="#06B6D4" />
                    <circle cx="155" cy="17" r="2.5" fill="#06B6D4" />
                    <circle cx="155" cy="27" r="2.5" fill="#06B6D4" />
                    <path d="M147.5,22 L152.5,17 M147.5,22 L152.5,27" stroke="#06B6D4" strokeWidth="1.5" />
                  </g>
                )},
                { x: 250, name: 'Validate', icon: (
                  <g>
                    <circle cx="250" cy="22" r="8" fill="none" stroke="#10B981" strokeWidth="1.5" />
                    <path d="M247,22 L249,24 L253,19" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                )},
                { x: 350, name: 'Enrich', icon: (
                  <g>
                    <ellipse cx="350" cy="17" rx="6" ry="2.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                    <path d="M344,17 v4.5 c0 1.2 2.7 2.5 6 2.5 s6 -1.3 6 -2.5 v-4.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                    <path d="M344,21.5 v4.5 c0 1.2 2.7 2.5 6 2.5 s6 -1.3 6 -2.5 v-4.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                  </g>
                )},
                { x: 450, name: 'Evidence', icon: (
                  <g>
                    <path d="M445,15 h4 l2.5,2.5 h7.5 v11 h-14 Z" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinejoin="round" />
                    <line x1="448" y1="21" x2="456" y2="21" stroke="#8B5CF6" strokeWidth="1" />
                    <line x1="448" y1="24" x2="454" y2="24" stroke="#8B5CF6" strokeWidth="1" />
                  </g>
                )},
                { x: 550, name: 'Rules', icon: (
                  <g>
                    <rect x="544" y="14" width="12" height="15" rx="1.5" fill="none" stroke="#EC4899" strokeWidth="1.5" />
                    <line x1="548" y1="18" x2="552" y2="18" stroke="#EC4899" strokeWidth="1.5" />
                    <line x1="548" y1="21" x2="552" y2="21" stroke="#EC4899" strokeWidth="1.5" />
                    <line x1="548" y1="24" x2="552" y2="24" stroke="#EC4899" strokeWidth="1.5" />
                  </g>
                )},
                { x: 650, name: 'COT', icon: (
                  <g>
                    <path d="M644,17 L649,12 h6 v6 L648,25 Z" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="651" cy="15" r="1.2" fill="#10B981" />
                  </g>
                )}
              ].map((step, sIdx) => (
                <g key={sIdx}>
                  {/* Step Icon Container Circle */}
                  <circle cx={step.x} cy="22" r="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  {step.icon}
                  {/* Step Name */}
                  <text x={step.x} y="54" fill="var(--text-secondary)" fontSize="9" fontWeight="600" textAnchor="middle">{step.name}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>

      </div>

      {/* Row 2: Research Across Multiple Data Sources */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <h4 style={{ fontSize: '0.85rem', color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
          Research Across Multiple Data Sources
        </h4>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', width: '100%', justifyContent: 'space-between', overflowX: 'auto', paddingBottom: '4px' }}>
          {sources.map((source, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              padding: '12px 8px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              flex: 1,
              minWidth: '90px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: `${source.color}15`,
                border: `1px solid ${source.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: source.color,
                overflow: 'hidden'
              }}>
                {sourceImageErrors[source.id] ? (
                  source.textIcon
                ) : (
                  <img
                    src={`/images/sources/${source.id}.png`}
                    onError={() => setSourceImageErrors(prev => ({ ...prev, [source.id]: true }))}
                    alt={source.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                )}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', overflow: 'hidden' }}>
                {source.name}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', overflow: 'hidden' }}>
                {source.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: How 340B Check Works & End-to-End Workflow */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>

        {/* How 340B Check Works */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h4 style={{ fontSize: '0.85rem', color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            How 340B Check Works
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Extract / identify customer using DEA, HIN, NPI identifiers',
              'Navigate HRSA 340B database using Selenium browser automation',
              'Search and retrieve 340B ID / Covered Entity details',
              'Determine eligibility category and Active/Inactive status',
              'Capture and store screenshot evidence for compliance checks'
            ].map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: '#3B82F6',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  {idx + 1}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* 340B Lookup Result subcard */}
          <div style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px' }}>
              340B Lookup Result
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '8px', fontSize: '0.75rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>340B ID:</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{selectedLookup.id}</span>

              <span style={{ color: 'var(--text-secondary)' }}>Entity Name:</span>
              <span style={{ fontWeight: 600, color: '#10B981' }}>{selectedLookup.name}</span>

              <span style={{ color: 'var(--text-secondary)' }}>Status:</span>
              <span><span style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10B981', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700 }}>ACTIVE</span></span>

              <span style={{ color: 'var(--text-secondary)' }}>Category:</span>
              <span style={{ color: 'var(--text-primary)' }}>{selectedLookup.category}</span>

              <span style={{ color: 'var(--text-secondary)' }}>Address:</span>
              <span style={{ color: 'var(--text-secondary)' }}>{selectedLookup.address}</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: 'rgba(16,185,129,0.06)',
              border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: '6px',
              padding: '6px',
              fontSize: '0.75rem',
              color: '#10B981',
              fontWeight: 600,
              marginTop: '4px'
            }}>
              <CheckCircle2 size={12} />
              Evidence Captured &amp; Archived
            </div>
          </div>
        </div>

        {/* End-to-End Workflow */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h4 style={{ fontSize: '0.85rem', color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            End-to-End Workflow
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { num: '1', title: 'Input / Trigger', desc: 'Customer ID, DEA, HIN, Name, Address', color: '#3B82F6', icon: <Users size={12} /> },
              { num: '2', title: 'Automated Research', desc: 'Python + Selenium search directories', color: '#F59E0B', icon: <Terminal size={12} /> },
              { num: '3', title: 'Match & Validate', desc: 'Reconcile entities & cross-check key fields', color: '#10B981', icon: <Layers size={12} /> },
              { num: '4', title: 'Evidence Collection', desc: 'Capture screenshots and generate compliance log', color: '#8B5CF6', icon: <Camera size={12} /> },
              { num: '5', title: 'Business Rules & COT', desc: 'Apply rules to recommend final Class of Trade', color: '#EC4899', icon: <Tag size={12} /> }
            ].map((flow, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '10px 14px'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: flow.color,
                  color: '#000000',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {flow.num}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{flow.title}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{flow.desc}</span>
                </div>
                <div style={{ color: flow.color, opacity: 0.8 }}>
                  {flow.icon}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px dashed var(--border-color)',
            borderRadius: '8px',
            padding: '10px',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <span><strong>Human Review &amp; Approval:</strong> Analyst evaluates match criteria &amp; confirms or overrides COT.</span>
          </div>
        </div>

      </div>

      {/* Row 4: PowerApps Dashboard Mockup (Main Feature) */}
      <div>
        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <Settings size={14} style={{ color: '#8B5CF6' }} />
          Microsoft PowerApps Interactive Portal
        </h4>

        {/* PowerApps Mockup Window */}
        <div style={{
          backgroundColor: '#0A0B14',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          {/* Header Bar */}
          <div style={{
            backgroundColor: '#501650', // PowerApps deep purple/plum
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
            {/* Left side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '18px',
                height: '18px',
                backgroundColor: '#FFFFFF',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '0.65rem',
                color: '#501650'
              }}>
                P
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>PowerApps</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>|</span>
              <span style={{ fontSize: '0.8rem', color: '#E9D6E9', fontWeight: 600 }}>Customer Research Tool (CRT)</span>
            </div>

            {/* Middle: Search input box */}
            <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', color: '#C8B0C8' }} />
              <input
                type="text"
                placeholder="Search by Customer Name, Address, DEA, HIN, NPI, 340B ID..."
                readOnly
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 12px 6px 32px',
                  fontSize: '0.75rem',
                  color: '#FFFFFF',
                  outline: 'none'
                }}
              />
            </div>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#E9D6E9' }}>
              <Plus size={16} style={{ cursor: 'pointer' }} />
              <span style={{ cursor: 'pointer', fontSize: '1rem' }}>🔔</span>
              <span style={{ cursor: 'pointer', fontSize: '0.9rem' }}>❓</span>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#9c27b0',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                NM
              </div>
            </div>
          </div>

          {/* Sub Workspace split */}
          <div style={{ display: 'flex', minHeight: '480px' }}>

            {/* Left Sidebar */}
            <div style={{
              width: '160px',
              backgroundColor: '#111222',
              borderRight: '1px solid rgba(255,255,255,0.03)',
              padding: '16px 8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {[
                  { name: 'Home', icon: '🏠', active: true },
                  { name: 'Dashboard', icon: '📊', active: false },
                  { name: 'Search', icon: '🔍', active: false },
                  { name: 'Research', icon: '🔬', active: false },
                  { name: 'Customers', icon: '👥', active: false },
                  { name: 'Evidence', icon: '📁', active: false },
                  { name: 'Reports', icon: '📈', active: false },
                  { name: 'Admin', icon: '⚙️', active: false }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    backgroundColor: item.active ? 'rgba(116, 39, 116, 0.15)' : 'transparent',
                    color: item.active ? '#EC4899' : '#94A3B8',
                    fontSize: '0.75rem',
                    fontWeight: item.active ? 700 : 500,
                    cursor: 'pointer'
                  }}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '0 8px', fontSize: '0.65rem', color: '#475569' }}>
                <div>CRT v2.4.1</div>
                <div style={{ marginTop: '2px' }}>© 2025 All rights</div>
              </div>
            </div>

            {/* Main Content Workspace Panel */}
            <div style={{ flex: 1, backgroundColor: '#0E0F1A', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflowX: 'auto' }}>

              {/* Workspace Grid Row 1 (4 Cards) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>

                {/* 1. Customer Profile */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#EC4899', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    👤 Customer Profile
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>{selectedLookup.name}</span>
                    <span style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '2px', lineHeight: 1.3 }}>{selectedLookup.address}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '0.65rem', color: '#94A3B8' }}>
                    <div>DEA: <span style={{ color: '#FFFFFF' }}>5678985678</span></div>
                    <div>HIN: <span style={{ color: '#FFFFFF' }}>1234567890</span></div>
                    <div>NPI: <span style={{ color: '#FFFFFF' }}>1234567890</span></div>
                    <div>340B: <span style={{ color: '#FFFFFF' }}>{selectedLookup.id}</span></div>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#3B82F6', fontWeight: 600, marginTop: 'auto', display: 'inline-block' }}>View Full Profile →</span>
                </div>

                {/* 2. Source Validation */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ✔️ Source Validation
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '0.65rem' }}>
                    {[
                      'DEA', 'HIBCC (HIN)', 'HRSA 340B', 'NPI Registry',
                      'Google Search', 'MDM', 'Excel Files', 'Other Sources'
                    ].map((src, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94A3B8' }}>
                        <span style={{ color: '#10B981' }}>●</span>
                        <span>{src}</span>
                      </div>
                    ))}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#3B82F6', fontWeight: 600, marginTop: 'auto', display: 'inline-block' }}>View All Sources →</span>
                </div>

                {/* 3. Evidence */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#8B5CF6', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    📁 Evidence
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', flex: 1, minHeight: '60px' }}>
                    {[1, 2, 3, 4, 5, 6].map((ev) => (
                      <div key={ev} style={{
                        backgroundColor: '#1E2038',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '4px'
                      }}>
                        <div style={{ width: '100%', height: '2px', backgroundColor: '#334155' }} />
                        <div style={{ width: '80%', height: '2px', backgroundColor: '#334155' }} />
                        <div style={{ width: '60%', height: '2px', backgroundColor: '#334155' }} />
                      </div>
                    ))}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#3B82F6', fontWeight: 600, marginTop: '6px', display: 'inline-block' }}>View All Evidence →</span>
                </div>

                {/* 4. COT Classification */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    🏷️ COT Classification
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '0.65rem', color: '#94A3B8' }}>Recommended COT:</span>
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>Hospital</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#94A3B8' }}>
                    <div>Confidence: <span style={{ color: '#10B981', fontWeight: 700 }}>92%</span></div>
                    <div>Matched: <span style={{ color: '#FFFFFF', fontWeight: 700 }}>24/24</span></div>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10B981',
                    borderRadius: '4px',
                    padding: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: 'auto'
                  }}>
                    Approved
                  </div>
                </div>

              </div>

              {/* Workspace Grid Row 2 (Research Summary Graph & Recent Research Table) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>

                {/* Research Summary Area Chart */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Research Summary</span>
                    <span style={{ fontSize: '0.65rem', color: '#94A3B8', backgroundColor: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>Last 7 Days ▾</span>
                  </div>

                  {/* Stats line */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '0.6rem', color: '#94A3B8' }}>Total Research</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>128 <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 500 }}>↑ 18%</span></div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.6rem', color: '#94A3B8' }}>Completed</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>96 <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 500 }}>↑ 20%</span></div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.6rem', color: '#94A3B8' }}>In Progress</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>18 <span style={{ fontSize: '0.65rem', color: '#EF4444', fontWeight: 500 }}>↓ 5%</span></div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.6rem', color: '#94A3B8' }}>Exceptions</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>14 <span style={{ fontSize: '0.65rem', color: '#EF4444', fontWeight: 500 }}>↓ 12%</span></div>
                    </div>
                  </div>

                  {/* Sparkline Graph */}
                  <div style={{ flex: 1, minHeight: '90px', position: 'relative' }}>
                    <svg viewBox="0 0 300 90" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                      <defs>
                        <linearGradient id="purpleAreaGradCrt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="15" y1="15" x2="285" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="15" y1="35" x2="285" y2="35" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="15" y1="55" x2="285" y2="55" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="15" y1="75" x2="285" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                      {/* Area Path */}
                      <path d="M15,70 L60,60 L105,50 L150,55 L195,35 L240,65 L285,20 L285,75 L15,75 Z" fill="url(#purpleAreaGradCrt)" />
                      {/* Line Path */}
                      <path d="M15,70 L60,60 L105,50 L150,55 L195,35 L240,65 L285,20" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      
                      {/* Points */}
                      <circle cx="15" cy="70" r="3" fill="#EC4899" />
                      <circle cx="60" cy="60" r="3" fill="#EC4899" />
                      <circle cx="105" cy="50" r="3" fill="#EC4899" />
                      <circle cx="150" cy="55" r="3" fill="#EC4899" />
                      <circle cx="195" cy="35" r="3" fill="#EC4899" />
                      <circle cx="240" cy="65" r="3" fill="#EC4899" />
                      <circle cx="285" cy="20" r="3" fill="#EC4899" />

                      {/* Labels */}
                      <text x="15" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 05</text>
                      <text x="60" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 06</text>
                      <text x="105" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 07</text>
                      <text x="150" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 08</text>
                      <text x="195" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 09</text>
                      <text x="240" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 10</text>
                      <text x="285" y="86" fill="#475569" fontSize="7" textAnchor="middle">May 11</text>
                    </svg>
                  </div>
                </div>

                {/* Recent Research Table */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Recent Research</span>
                    <span style={{ fontSize: '0.75rem', color: '#3B82F6', fontWeight: 600 }}>Recent Research</span>
                  </div>

                  {/* Table */}
                  <div style={{ flex: 1, overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.65rem', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#64748B' }}>
                          <th style={{ padding: '6px 4px' }}>Customer</th>
                          <th style={{ padding: '6px 4px' }}>Research ID</th>
                          <th style={{ padding: '6px 4px' }}>Status</th>
                          <th style={{ padding: '6px 4px' }}>COT</th>
                          <th style={{ padding: '6px 4px' }}>Updated</th>
                        </tr>
                      </thead>
                      <tbody style={{ color: '#94A3B8' }}>
                        {[
                          { name: 'ABC Health Center', id: 'CRT-2024-000567', status: 'Completed', color: '#10B981', cot: 'Hospital', date: 'May 11, 2025' },
                          { name: 'XYZ Pharmacy', id: 'CRT-2024-000566', status: 'Completed', color: '#10B981', cot: 'Retail Pharm.', date: 'May 11, 2025' },
                          { name: 'HealthPlus Clinic', id: 'CRT-2024-000565', status: 'In Progress', color: '#3B82F6', cot: 'Clinic', date: 'May 11, 2025' },
                          { name: 'Wellness Hospital', id: 'CRT-2024-000564', status: 'Completed', color: '#10B981', cot: 'Hospital', date: 'May 10, 2025' },
                          { name: 'CarePoint LTC', id: 'CRT-2024-000563', status: 'Exception', color: '#EF4444', cot: 'LTC Facility', date: 'May 10, 2025' }
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', cursor: 'pointer', backgroundColor: selectedLookup.name === row.name ? 'rgba(255,255,255,0.02)' : 'transparent' }} onClick={() => setSelectedLookup({
                            id: row.id.split('-')[2],
                            name: row.name,
                            status: row.status,
                            category: row.cot,
                            address: row.name === 'ABC Health Center' ? '123 Main St, Springfield, IL 62701, USA' : row.name === 'XYZ Pharmacy' ? '456 Retail Blvd, Chicago, IL 60611, USA' : row.name === 'HealthPlus Clinic' ? '789 Medical Dr, Peoria, IL 61602, USA' : row.name === 'Wellness Hospital' ? '101 Wellness Ave, Rockford, IL 61101, USA' : '202 Care Rd, Decatur, IL 62521, USA'
                          })}>
                            <td style={{ padding: '6px 4px', fontWeight: 600, color: '#FFFFFF' }}>{row.name}</td>
                            <td style={{ padding: '6px 4px', fontFamily: 'monospace' }}>{row.id}</td>
                            <td style={{ padding: '6px 4px' }}>
                              <span style={{
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '3px',
                                backgroundColor: `${row.color}15`,
                                color: row.color,
                                fontSize: '0.6rem',
                                fontWeight: 700
                              }}>
                                {row.status}
                              </span>
                            </td>
                            <td style={{ padding: '6px 4px' }}>{row.cot}</td>
                            <td style={{ padding: '6px 4px' }}>{row.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Actions Bar */}
              <div style={{
                backgroundColor: '#161726',
                border: '1px solid rgba(255,255,255,0.03)',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8' }}>Quick Actions:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[
                    { name: 'New Research', icon: '➕' },
                    { name: 'Search Customer', icon: '🔍' },
                    { name: 'Upload Excel', icon: '📁' },
                    { name: 'View Evidence', icon: '📄' },
                    { name: 'Generate Report', icon: '📊' },
                    { name: 'Manage Rules', icon: '⚙️' }
                  ].map((act, i) => (
                    <button key={i} style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      fontSize: '0.65rem',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>{act.icon}</span>
                      <span>{act.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Row 5: Multi-Client Architecture & Business Impact */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>

        {/* Multi-Client Architecture (Mini details) */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.85rem', color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            Multi-Client Architecture
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            CRT is engineered as a core runtime engine that coordinates data extraction, matching, evidence compilation, and rule execution. It dynamically loads client-specific schemas (Pfizer, AbbVie, Amgen) to execute custom validations.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            <div style={{ borderLeft: '2px solid #8B5CF6', paddingLeft: '12px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)' }}>Core Pipeline Engine</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Uniform data collection &amp; processing pipelines.</div>
            </div>
            <div style={{ borderLeft: '2px solid #10B981', paddingLeft: '12px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)' }}>Client Configuration Layer</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Isolates rulesets, credentials, and custom directory sources per client.</div>
            </div>
          </div>
        </div>

        {/* Business Impact Grid */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <TrendingUp size={16} />
            Business Impact Delivered
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { val: '70%+', label: 'Reduction in research time' },
              { val: '60%+', label: 'Reduction in manual effort' },
              { val: '3X+', label: 'Increase in research throughput' },
              { val: '90%+', label: 'Improved data accuracy' }
            ].map((impact, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '10px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981' }}>{impact.val}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.2 }}>{impact.label}</div>
              </div>
            ))}
          </div>
          <ul style={{ paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <li>Improved COT assignment accuracy preventing downstream billing disputes.</li>
            <li>Faster customer onboarding and prompt issues resolution.</li>
            <li>Drastically reduced chargeback failures from master database mismatches.</li>
            <li>Reusable platform architecture deployed across multiple global pharma accounts.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

function MaciCustomDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      {/* Row 1: Problem & Solution Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {/* The Problem Card */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.02)',
          border: '1px solid rgba(239, 68, 68, 0.15)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <ShieldAlert size={16} />
            The Problem
          </h4>
          <p className="body-normal" style={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            Traditional STEM (Sales Training Effectiveness & Management) and coaching framework suffered from low coverage, high cost, and long delays:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, listStyle: 'none' }}>
            {[
              'Slow feedback cycle (~3 months)',
              'High manual effort & cost',
              'Low coverage (<1% sample size)',
              'No real-time insights',
              'Inconsistent & subjective assessments'
            ].map((err, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <XCircle size={14} style={{ color: '#EF4444', flexShrink: 0 }} />
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Solution Card */}
        <div style={{
          backgroundColor: 'rgba(34, 197, 94, 0.02)',
          border: '1px solid rgba(34, 197, 94, 0.15)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#22C55E', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <Lightbulb size={16} />
            The Solution
          </h4>
          <p className="body-normal" style={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            MACI automates the end-to-end evaluation pipeline - from audio ingestion to AI-based scoring and automated coaching insights:
          </p>

          {/* 7-Step Solution Pipeline Icons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
            {[
              { label: 'Ingest', icon: Database },
              { label: 'Convert', icon: RefreshCw },
              { label: 'Transcribe', icon: Volume2 },
              { label: 'Analyze', icon: Search },
              { label: 'Score', icon: BarChart3 },
              { label: 'Report', icon: Terminal },
              { label: 'Improve', icon: TrendingUp }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1, minWidth: '45px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(34, 197, 94, 0.05)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22C55E'
                  }}>
                    <StepIcon size={14} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center' }}>{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>



      {/* Row 3: Interactive Dashboards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>

        {/* Left Side: MACI WEB DASHBOARD */}
        <div className="glass-panel" style={{
          padding: '24px',
          background: 'rgba(9, 7, 20, 0.7)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8B5CF6' }}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#A78BFA', letterSpacing: '0.05em' }}>MACI WEB DASHBOARD</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
              <Clock size={10} />
              <span>May 01 - May 22, 2024</span>
              <Filter size={10} style={{ marginLeft: '4px', cursor: 'pointer' }} />
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {[
              { val: '1,248', label: 'Total Calls', trend: '+15%' },
              { val: '92/100', label: 'Avg Value', trend: '+10%' },
              { val: '76%', label: 'Msg Delivery', trend: '+5%' },
              { val: '66%', label: 'Rep Perf.', trend: '+8%' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255,255,255,0.03)',
                borderRadius: '8px',
                padding: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{stat.val}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{stat.label}</div>
                <div style={{ fontSize: '0.55rem', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Donut and Line Chart Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '12px', alignItems: 'center' }}>

            {/* Call Value Optimization Donut */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>Call Value Split</span>
              <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  {/* Red (Low) */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="50 100" strokeDashoffset="0" />
                  {/* Yellow (Medium) */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="22 100" strokeDashoffset="-50" />
                  {/* Green (High) */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#22C55E" strokeWidth="3" strokeDasharray="28 100" strokeDashoffset="-72" />
                </svg>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>1,248</span>
                  <span style={{ fontSize: '0.45rem', color: 'var(--text-secondary)' }}>Calls</span>
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '6px', fontSize: '0.55rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#22C55E' }}>● High</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#F59E0B' }}>● Med</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#EF4444' }}>● Low</span>
              </div>
            </div>

            {/* Trend Chart */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600, textAlign: 'left' }}>Trend Over Time</span>
              <svg viewBox="0 0 140 70" style={{ width: '100%', height: '70px', overflow: 'visible' }}>
                {/* Grid Lines */}
                <line x1="0" y1="10" x2="140" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="35" x2="140" y2="35" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="60" x2="140" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                {/* Trend Lines */}
                {/* Line 1 (Goal Score - Purple) */}
                <path d="M 0 50 Q 30 20 60 40 T 120 15 T 140 25" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
                {/* Line 2 (Message Delivery - Green) */}
                <path d="M 0 55 Q 35 45 70 30 T 110 40 T 140 20" fill="none" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />

                {/* X Axis labels */}
                <text x="5" y="68" fill="#64748B" fontSize="5">May 12</text>
                <text x="70" y="68" fill="#64748B" fontSize="5" textAnchor="middle">May 16</text>
                <text x="135" y="68" fill="#64748B" fontSize="5" textAnchor="end">May 21</text>
              </svg>
            </div>

          </div>

          {/* Table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, textAlign: 'left' }}>Recent Call Analysis</span>
            <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.65rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <th style={{ padding: '6px 8px', color: 'var(--text-secondary)' }}>Call ID</th>
                    <th style={{ padding: '6px 8px', color: 'var(--text-secondary)' }}>Rep</th>
                    <th style={{ padding: '6px 8px', color: 'var(--text-secondary)', textAlign: 'center' }}>Score</th>
                    <th style={{ padding: '6px 8px', color: 'var(--text-secondary)', textAlign: 'center' }}>Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '...2228', rep: 'rep_0311', score: 92, sent: 'Positive', sColor: '#22C55E', sBg: 'rgba(34, 197, 94, 0.1)' },
                    { id: '...3001', rep: 'rep_0371', score: 54, sent: 'Neutral', sColor: '#F59E0B', sBg: 'rgba(245, 158, 11, 0.1)' },
                    { id: '...2007', rep: 'rep_1274', score: 32, sent: 'Negative', sColor: '#EF4444', sBg: 'rgba(239, 68, 68, 0.1)' },
                    { id: '...2225', rep: 'rep_0531', score: 68, sent: 'Neutral', sColor: '#F59E0B', sBg: 'rgba(245, 158, 11, 0.1)' }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                      <td style={{ padding: '6px 8px', fontFamily: 'monospace' }}>{row.id}</td>
                      <td style={{ padding: '6px 8px', color: 'var(--text-secondary)' }}>{row.rep}</td>
                      <td style={{ padding: '6px 8px', fontWeight: 600, color: row.score >= 80 ? '#22C55E' : row.score >= 50 ? '#F59E0B' : '#EF4444', textAlign: 'center' }}>
                        {row.score}
                      </td>
                      <td style={{ padding: '6px 8px', textAlign: 'center' }}>
                        <span style={{
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.55rem',
                          fontWeight: 600,
                          backgroundColor: row.sBg,
                          color: row.sColor
                        }}>{row.sent}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Side: EXAMPLE CALL ANALYSIS VIEW */}
        <div className="glass-panel" style={{
          padding: '24px',
          background: 'rgba(9, 7, 20, 0.7)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>EXAMPLE CALL ANALYSIS VIEW</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>Call ID: ES-2024-03-1288</span>
            </div>
            <span style={{
              padding: '4px 8px',
              borderRadius: '6px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              color: '#22C55E',
              fontSize: '0.65rem',
              fontWeight: 700,
              border: '1px solid rgba(34, 197, 94, 0.25)'
            }}>
              High Value Call
            </span>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Call Value Score</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22C55E' }}>88</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>/ 100</span>
              </div>
              <div style={{ display: 'flex', gap: '1px', color: '#F59E0B' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={8} fill={i < 4 ? '#F59E0B' : 'none'} stroke="#F59E0B" />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>HCP Sentiment</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <span style={{
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#22C55E',
                  fontSize: '0.65rem',
                  fontWeight: 700
                }}>Positive</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.55rem', color: 'var(--text-secondary)' }}>
                <Activity size={8} style={{ color: '#22C55E' }} />
                <span>Responsive</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Key Message Delivery</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>85%</span>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: '#8B5CF6' }}></div>
              </div>
            </div>
          </div>

          {/* Share of Voice indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: 'var(--text-secondary)' }}>
              <span>Rep: 62%</span>
              <span>HCP: 38%</span>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: '62%', height: '100%', backgroundColor: '#3B82F6' }}></div>
              <div style={{ width: '38%', height: '100%', backgroundColor: '#EC4899' }}></div>
            </div>
          </div>

          {/* Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-primary)', fontWeight: 700 }}>Key Messages Verified</span>
              <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>6 / 7</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { text: 'Efficacy in reducing hospitalizations', ok: true },
                { text: 'Dosing options & titration schedules', ok: true },
                { text: 'Long-term safety profile & contraindications', ok: true },
                { text: 'Dosing convenience for chronic care', ok: true },
                { text: 'Comparative efficacy vs legacy treatments', ok: true },
                { text: 'Patient adherence strategies & support', ok: true },
                { text: 'Dosing adjustments in hepatic impairment', ok: false }
              ].map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.65rem' }}>
                  {msg.ok ? (
                    <Check size={10} style={{ color: '#22C55E', flexShrink: 0 }} />
                  ) : (
                    <XCircle size={10} style={{ color: '#EF4444', flexShrink: 0 }} />
                  )}
                  <span style={{ color: msg.ok ? 'var(--text-secondary)' : '#FCA5A5' }}>{msg.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Objections & Questions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
            {/* Objections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#EC4899', fontWeight: 700 }}>Objections Identified</span>
                <span style={{ fontSize: '0.65rem', color: '#EC4899', fontWeight: 700 }}>2</span>
              </div>
              <ul style={{ paddingLeft: '10px', margin: 0, fontSize: '0.6rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                <li>Share of voice comparisons</li>
                <li>Cost / Insurance Access</li>
              </ul>
            </div>

            {/* Questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#3B82F6', fontWeight: 700 }}>Questions Raised</span>
                <span style={{ fontSize: '0.65rem', color: '#3B82F6', fontWeight: 700 }}>3</span>
              </div>
              <ul style={{ paddingLeft: '10px', margin: 0, fontSize: '0.6rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                <li>Onset of action timing?</li>
                <li>Drug-drug interactions?</li>
                <li>Real-world outcome evidence?</li>
              </ul>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

interface FeaturedProjectsProps {
  viewMode: 'engineer' | 'consultant';
}

export default function FeaturedProjects({ viewMode }: FeaturedProjectsProps) {
  const [activeProj, setActiveProj] = useState<string>('bms');
  const [slideIndex, setSlideIndex] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);

  const projects: CaseStudy[] = [
    {
      id: 'bms',
      title: 'AI Pricing Intelligence Platform',
      subtitle: 'International Reference Pricing (IRP) & Most Favored Nation (MFN) Decision Support',
      industry: 'Pharmaceuticals',
      heroMetric: 'Enterprise AI',
      metricsLabel: 'Production Deployment (Claude + MCP | AWS Redshift)',
      techs: ['Claude MCP', 'Claude 4.6 Sonnet', 'AWS Redshift', 'AWS Glue', 'AWS Lambda', 'Python', 'SQL', 'IAM', 'AWS Secrets Manager'],
      problem: 'Global pricing teams needed to evaluate how pricing changes across reference countries impacted international drug pricing under IRP and MFN regulations. The existing workflow depended on manual SQL analysis, fragmented pricing datasets, and repeated engineering support, making scenario analysis slow, error-prone, and difficult to scale for regulatory decision making.',
      discovery: 'Analysis of existing workflows identified three major bottlenecks: Business users relied on technical teams for SQL-based analysis; Historical pricing data existed across multiple Redshift datasets; Traditional dashboards answered historical questions but couldn\'t support interactive "what-if" pricing scenarios. This created an opportunity for secure AI-assisted analytics.',
      constraints: 'Sensitive pricing data could never be exposed directly to an LLM. Every SQL query required governance, validation, and auditability. AI-generated insights had to execute entirely within enterprise AWS infrastructure. Responses needed deterministic execution suitable for regulated pharmaceutical environments.',
      implementation: 'Engineered a production-ready MCP server to bridge Claude AI with Amazon Redshift securely. Built semantic query capabilities, validation layers, and governance controls to deliver fast, accurate, and auditable pricing analytics for global regulatory decision making.',
      challenges: 'Handling schema mismatch across multi-market historical datasets. Resolved by writing a pre-processing AWS Glue integration to standardize pricing variables.',
      lessons: 'Designed and implemented a secure Claude Model Context Protocol (MCP) layer that translates natural language into validated SQL before executing governed queries against Amazon Redshift. MCP acts as a semantic gateway that understands business intent, generates parameterized SQL, validates against governance rules, executes queries securely, and returns accurate, auditable insights in seconds.',
      architecture: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}>
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#090D16" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" fill="#475569">
              <polygon points="0 0, 8 3, 0 6" />
            </marker>
            <marker id="arrowActive" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" fill="#3B82F6">
              <polygon points="0 0, 8 3, 0 6" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="1200" height="320" fill="url(#bgGrad)" rx="16" />

          {/* Subtle grid lines for consultant/enterprise aesthetic */}
          <g stroke="#1E293B" strokeWidth="0.5" opacity="0.4">
            <line x1="0" y1="80" x2="1200" y2="80" />
            <line x1="0" y1="240" x2="1200" y2="240" />
            <line x1="300" y1="0" x2="300" y2="320" />
            <line x1="600" y1="0" x2="600" y2="320" />
            <line x1="900" y1="0" x2="900" y2="320" />
          </g>

          {/* ==================== FLOW CONNECTORS & PULSE PARTICLES ==================== */}

          {/* Connector 1 */}
          <g transform="translate(185, 120)">
            <line x1="0" y1="0" x2="45" y2="0" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="0" y1="0" x2="45" y2="0" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 35" markerEnd="url(#arrowActive)">
              <animate attributeName="stroke-dashoffset" values="45;0" dur="2s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Connector 2 */}
          <g transform="translate(435, 120)">
            <line x1="0" y1="0" x2="45" y2="0" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="0" y1="0" x2="45" y2="0" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="10 35" markerEnd="url(#arrowActive)">
              <animate attributeName="stroke-dashoffset" values="45;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Connector 3 */}
          <g transform="translate(685, 120)">
            <line x1="0" y1="0" x2="45" y2="0" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="0" y1="0" x2="45" y2="0" stroke="#10B981" strokeWidth="2" strokeDasharray="10 35" markerEnd="url(#arrowActive)">
              <animate attributeName="stroke-dashoffset" values="45;0" dur="2s" begin="1.0s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Connector 4 */}
          <g transform="translate(935, 120)">
            <line x1="0" y1="0" x2="45" y2="0" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="0" y1="0" x2="45" y2="0" stroke="#06B6D4" strokeWidth="2" strokeDasharray="10 35" markerEnd="url(#arrowActive)">
              <animate attributeName="stroke-dashoffset" values="45;0" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </line>
          </g>


          {/* ==================== STAGE 1: REQUEST ==================== */}
          <g transform="translate(45, 60)">
            <rect x="0" y="0" width="140" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="0" y="0" width="140" height="4" fill="#3B82F6" rx="2" />

            {/* Minimal Icon: User / Query */}
            <circle cx="70" cy="38" r="14" fill="#3B82F6" fillOpacity="0.15" />
            <path d="M62 44 C62 39 66 37 70 37 C74 37 78 39 78 44" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="70" cy="31" r="4.5" fill="#3B82F6" />

            <text x="70" y="74" fill="#F8FAFC" fontSize="13" fontWeight="600" textAnchor="middle">Natural Input</text>
            <text x="70" y="94" fill="#94A3B8" fontSize="11" textAnchor="middle">Pricing, IRP, MFN</text>
            <text x="70" y="108" fill="#64748B" fontSize="10" textAnchor="middle">Business Queries</text>
          </g>


          {/* ==================== STAGE 2: CLAUDE AI ==================== */}
          <g transform="translate(295, 60)">
            <rect x="0" y="0" width="140" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="0" y="0" width="140" height="4" fill="#8B5CF6" rx="2" />

            {/* Minimal Icon: AI Brain/Context */}
            <circle cx="70" cy="38" r="14" fill="#8B5CF6" fillOpacity="0.15" />
            <path d="M63 38 L67 34 L71 42 L75 34 L79 38" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            <text x="70" y="74" fill="#F8FAFC" fontSize="13" fontWeight="600" text-anchor="middle">Claude AI</text>
            <text x="70" y="94" fill="#94A3B8" fontSize="11" text-anchor="middle">Intent Parsing</text>
            <text x="70" y="108" fill="#64748B" fontSize="10" text-anchor="middle">&amp; Context Engine</text>
          </g>


          {/* ==================== STAGE 3: MCP LAYER ==================== */}
          <g transform="translate(545, 60)">
            <rect x="0" y="0" width="140" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="0" y="0" width="140" height="4" fill="#10B981" rx="2" />

            {/* Minimal Icon: Gateway / Tools */}
            <circle cx="70" cy="38" r="14" fill="#10B981" fillOpacity="0.15" />
            <rect x="63" y="32" width="14" height="12" rx="2" fill="none" stroke="#10B981" strokeWidth="2" />
            <circle cx="70" cy="38" r="2" fill="#10B981" />

            <text x="70" y="74" fill="#F8FAFC" fontSize="13" fontWeight="600" text-anchor="middle">MCP Layer</text>
            <text x="70" y="94" fill="#94A3B8" fontSize="11" text-anchor="middle">Semantic Gateway</text>
            <text x="70" y="108" fill="#64748B" fontSize="10" text-anchor="middle">&amp; Router</text>

            {/* Subtle active highlight glow */}
            <rect x="0" y="0" width="140" height="120" rx="10" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
            </rect>
          </g>


          {/* ==================== STAGE 4: DATA LAYER ==================== */}
          <g transform="translate(795, 60)">
            <rect x="0" y="0" width="140" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="0" y="0" width="140" height="4" fill="#06B6D4" rx="2" />

            {/* Minimal Icon: Database / Warehouse */}
            <circle cx="70" cy="38" r="14" fill="#06B6D4" fillOpacity="0.15" />
            <ellipse cx="70" cy="34" rx="6" ry="2.5" fill="none" stroke="#06B6D4" strokeWidth="1.5" />
            <path d="M64 34 v5 c0 1.4 2.7 2.5 6 2.5 s6 -1.1 6 -2.5 v-5" fill="none" stroke="#06B6D4" strokeWidth="1.5" />
            <path d="M64 39 v5 c0 1.4 2.7 2.5 6 2.5 s6 -1.1 6 -2.5 v-5" fill="none" stroke="#06B6D4" strokeWidth="1.5" />

            <text x="70" y="74" fill="#F8FAFC" fontSize="13" fontWeight="600" text-anchor="middle">Data Layer</text>
            <text x="70" y="94" fill="#94A3B8" fontSize="11" text-anchor="middle">AWS Glue &amp;</text>
            <text x="70" y="108" fill="#64748B" fontSize="10" text-anchor="middle">Amazon Redshift</text>
          </g>


          {/* ==================== STAGE 5: RESPONSE ==================== */}
          <g transform="translate(1045, 60)">
            <rect x="0" y="0" width="110" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="0" y="0" width="110" height="4" fill="#3B82F6" rx="2" />

            {/* Minimal Icon: Insights / Dashboard */}
            <circle cx="55" cy="38" r="14" fill="#3B82F6" fillOpacity="0.15" />
            <path d="M48 43 L48 39 M52 43 L52 35 M56 43 L56 32 M60 43 L60 37" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />

            <text x="55" y="74" fill="#F8FAFC" fontSize="13" fontWeight="600" text-anchor="middle">Insights</text>
            <text x="55" y="94" fill="#94A3B8" fontSize="11" text-anchor="middle">Dashboards &amp;</text>
            <text x="55" y="108" fill="#64748B" fontSize="10" text-anchor="middle">Audit Trail</text>
          </g>


          {/* ==================== FOOTER STATUS BAR ==================== */}
          <g transform="translate(45, 220)">
            <rect x="0" y="0" width="1110" height="50" rx="6" fill="#0B132B" stroke="#1E293B" strokeWidth="1" />

            {/* Status indicator live pulse */}
            <circle cx="24" cy="25" r="4" fill="#10B981">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>

            <text x="40" y="29" fill="#94A3B8" fontSize="11" fontWeight="500">Architecture Pipeline Status: <tspan fill="#10B981" fontWeight="600">Operational</tspan></text>

            <text x="1070" y="29" fill="#64748B" fontSize="11" textAnchor="end">Secure Enterprise Gateway</text>
          </g>

        </svg>
      )
    },
    {
      id: 'rakuten',
      title: 'GenAI Manufacturer Validation Platform',
      subtitle: 'Automating Warranty Claims Validation using LLM Agents',
      industry: 'Retail & E-commerce',
      heroMetric: '30% Less',
      metricsLabel: 'Manual Warranty Claims Verification Effort',
      techs: ['GenAI', 'LLM Agent', 'Node.js', 'TypeScript', 'Vector DB'],
      problem: 'Validating device claims against manufacturer warranty descriptions was entirely manual, creating long customer queues and return processing delays.',
      discovery: 'Large language models could analyze unstructured warranty pdf docs and identify validation requirements.',
      constraints: 'Strict SLA constraints: claim assessment must happen within 10 seconds.',
      implementation: 'Built a warranty extraction RAG pipeline. Using semantic searches over device manuals, it provides clean extraction of warranty variables, verifying claims automatically.',
      challenges: 'Minimizing LLM hallucination of warranty expiration timelines. Resolved by feeding structured prompt models strictly bound to retrieved manual context.',
      lessons: 'Constrained prompts are vital when building deterministic systems with LLMs.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Warranty Claim</text>

          <rect x="140" y="70" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">RAG Prompt</text>

          <rect x="280" y="70" width="100" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="330" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">LLM Inference</text>

          <line x1="90" y1="90" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="230" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'crt',
      title: 'Customer Research Tool (CRT)',
      subtitle: 'Intelligent Customer Research & Class of Trade (COT) Platform',
      industry: 'Pharmaceuticals & Operations',
      heroMetric: 'Multi-Client',
      metricsLabel: 'Pfizer, AbbVie, Amgen and more',
      techs: ['Python', 'Selenium', 'PowerApps', 'SharePoint', 'Azure Functions', 'Azure Storage', 'Excel'],
      problem: 'Customer intelligence was fragmented across portals, databases and files. Analysts had to manually research the same customer across multiple sources, reconcile identities, validate conflicting information and collect evidence before the customer could be reliably classified.',
      discovery: 'CRT turns fragmented customer research into a repeatable validation workflow by automating multi-source data compilation and providing a unified PowerApps cockpit for classification and approval.',
      constraints: 'Scraping automation must handle rate-limiting and rotating proxies across third-party networks, maintaining auditable validation logs for compliance.',
      implementation: 'Built a selenium-based automated extraction worker coordinating multiple directories. The portal is deployed in Microsoft PowerApps, connecting queries through Azure Functions.',
      challenges: 'Handling proxy failures and portal updates. Mitigated by designing auto-retry pipelines and centralized rule catalogs.',
      lessons: 'Multi-client tooling benefits from shared processing engines with tenant-specific configuration mappings.',
      architecture: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 220" style={{ width: '100%', height: 'auto', maxWidth: '1000px' }}>
          <defs>
            <linearGradient id="bgGradCrt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B0914" />
              <stop offset="100%" stopColor="#1E1238" />
            </linearGradient>
            <linearGradient id="nodeGradCrt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#251E3D" />
              <stop offset="100%" stopColor="#17122B" />
            </linearGradient>
            <marker id="arrowCrt" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" fill="#475569">
              <polygon points="0 0, 6 2, 0 4" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="1000" height="220" fill="url(#bgGradCrt)" rx="16" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />

          {/* Title Area */}
          <rect x="20" y="20" width="960" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <text x="40" y="44" fill="#F8FAFC" fontSize="13" fontWeight="700">CRT MULTI-CLIENT ARCHITECTURE</text>
          <text x="960" y="44" fill="#10B981" fontSize="11" fontWeight="600" textAnchor="end">CORE RUNTIME ENGINE</text>

          {/* Core Engine Node Row */}
          {[
            { name: 'Extraction Engine', desc: 'Python & Selenium RPA', x: 40 },
            { name: 'Matching & Validation', desc: 'Fuzzy Identifiers Reconcile', x: 220 },
            { name: 'Evidence Service', desc: 'Document & Screen Capture', x: 400 },
            { name: 'Rule Engine', desc: 'COT Criteria Evaluator', x: 580 },
            { name: 'Reporting & APIs', desc: 'SharePoint & PowerApps Sync', x: 760 }
          ].map((engine, idx) => (
            <g key={idx} transform={`translate(${engine.x}, 80)`}>
              <rect width="150" height="60" rx="8" fill="url(#nodeGradCrt)" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              <rect width="150" height="3" fill="#8B5CF6" rx="1.5" />
              <text x="75" y="25" fill="#F8FAFC" fontSize="10" fontWeight="700" textAnchor="middle">{engine.name}</text>
              <text x="75" y="45" fill="#94A3B8" fontSize="8" textAnchor="middle">{engine.desc}</text>
              {idx < 4 && (
                <line x1="150" y1="30" x2="180" y2="30" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowCrt)" />
              )}
            </g>
          ))}

          {/* Connectors to client profiles */}
          <line x1="200" y1="140" x2="200" y2="160" stroke="#475569" strokeWidth="1.5" />
          <line x1="500" y1="140" x2="500" y2="160" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="140" x2="800" y2="160" stroke="#475569" strokeWidth="1.5" />

          {/* Client profiles row */}
          {[
            { name: 'Pfizer Profile', rule: 'Pfizer Rules & DEA Sync', x: 100 },
            { name: 'AbbVie Profile', rule: 'AbbVie Rules & iHIN Sync', x: 400 },
            { name: 'Amgen Profile', rule: 'Amgen Rules & HRSA Sync', x: 700 }
          ].map((client, idx) => (
            <g key={idx} transform={`translate(${client.x}, 160)`}>
              <rect width="200" height="40" rx="6" fill="#0B0914" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" />
              <rect width="4" height="40" fill="#10B981" rx="2" />
              <text x="15" y="18" fill="#10B981" fontSize="9" fontWeight="700">{client.name}</text>
              <text x="15" y="30" fill="#94A3B8" fontSize="8">{client.rule}</text>
            </g>
          ))}

        </svg>
      )
    },
    {
      id: 'extract',
      title: 'Extract.AI — Intelligent Document Processing Platform',
      subtitle: 'Enterprise Document Intelligence OCR',
      industry: 'FinTech & Ops',
      heroMetric: '70% Faster',
      metricsLabel: 'System Integration & $6M Operational Savings',
      techs: ['OCR', 'Python', 'PyTorch', 'AWS Textract', 'FastAPI'],
      problem: 'Manual entry of invoices and vendor service contracts took a 40-person accounting team hours to process, causing delayed payments and billing errors.',
      discovery: 'Document formats varied drastically by vendor, requiring a layout-aware OCR extraction pipeline.',
      constraints: 'Strict regulatory guidelines demanded high extraction accuracy (>99%) before automated accounting updates.',
      implementation: 'Created an intelligent ingestion routing framework. Led a 15-member team to deploy dynamic document templates coupled with custom Transformer layout models that extract key-value fields.',
      challenges: 'Parsing low-resolution scanned PDFs. Resolved by writing a pre-processing image pipeline utilizing binarization and skew-correction filters.',
      lessons: 'Technology integration speed is the ultimate product metric for enterprise SaaS.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Vendor PDF</text>

          <rect x="130" y="70" width="110" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Layout-Transformer</text>

          <rect x="290" y="70" width="90" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="335" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">ERP Database</text>

          <line x1="90" y1="90" x2="130" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="240" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'maci',
      title: 'MACI — AI-Powered Call Value Optimization',
      subtitle: 'Transforming manual STEM audio audits into end-to-end conversational intelligence platform processing call recordings, delivering automated scorecard reporting and performance analytics',
      industry: 'Pharma & AI',
      heroMetric: '$3M+',
      metricsLabel: 'Annual Cost Savings & 70% Rep Performance Boost',
      techs: [
        'AWS S3', 'AWS EC2', 'AWS SageMaker', 'API Gateway',
        'Google USE', 'AWS Comprehend', 'spaCy', 'NLTK',
        'Word2Vec', 'PyTorch', 'AWS Transcribe', 'Google STT',
        'Azure Speech', 'Rev API', 'ffmpeg', 'Python', 'Shell Scripting'
      ],
      problem: 'Traditional STEM (Sales Training Effectiveness & Management) and coaching suffered from slow feedback cycles (~3 months), high manual effort & cost, low coverage (<1% sample size), lack of real-time insights, and inconsistent, subjective assessments.',
      discovery: 'Automating the end-to-end evaluation pipeline - from audio ingestion to AI-based scoring and automated coaching insights - eliminates manual review bottlenecks and scales quality assurance.',
      constraints: 'High-accuracy transcribing with custom medical/pharma dictionaries, PII removal (anonymization via NER/Regex), low-latency audio conversion (WAV to MP3 via FFmpeg on EC2), and secure data classification matching regulatory requirements.',
      implementation: 'Deployed an end-to-end conversational intelligence platform processing call recordings. Features semantic matching via Google USE and sentiment analysis via AWS Comprehend, delivering automated scorecard reporting and performance analytics.',
      challenges: 'Handling speech-to-text accuracy for diverse accents and medical jargon. Resolved by training custom pronunciation dictionaries and using semantic matching to align transcripts with product message guidelines.',
      lessons: 'Transitioning from manual evaluation to AI-driven pipelines reduces feedback latency from months to minutes, achieves 100% audit coverage, and delivers deterministic scoring guidelines that scale training outcomes.',
      architecture: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 240" style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}>
          <defs>
            <linearGradient id="bgGradMaci" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A0B14" />
              <stop offset="100%" stopColor="#120E2E" />
            </linearGradient>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E1E38" />
              <stop offset="100%" stopColor="#14142B" />
            </linearGradient>
            <filter id="glowMaci" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <marker id="arrowMaci" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" fill="#475569">
              <polygon points="0 0, 6 2, 0 4" />
            </marker>
            <marker id="arrowMaciActive" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" fill="#8B5CF6">
              <polygon points="0 0, 6 2, 0 4" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="1200" height="240" fill="url(#bgGradMaci)" rx="16" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />

          {/* Grid lines */}
          <g stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5">
            <line x1="0" y1="70" x2="1200" y2="70" />
            <line x1="0" y1="170" x2="1200" y2="170" />
            <line x1="300" y1="0" x2="300" y2="240" />
            <line x1="600" y1="0" x2="600" y2="240" />
            <line x1="900" y1="0" x2="900" y2="240" />
          </g>

          {/* Connector lines with moving dash array animation */}
          {[
            { from: 135, to: 165 },
            { from: 285, to: 315 },
            { from: 435, to: 465 },
            { from: 585, to: 615 },
            { from: 735, to: 765 },
            { from: 885, to: 915 },
            { from: 1035, to: 1065 }
          ].map((conn, idx) => (
            <g key={idx} transform="translate(0, 110)">
              <line x1={conn.from} y1="0" x2={conn.to} y2="0" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowMaci)" />
              <line x1={conn.from} y1="0" x2={conn.to} y2="0" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 12" markerEnd="url(#arrowMaciActive)">
                <animate attributeName="stroke-dashoffset" values="18;0" dur="1.5s" repeatCount="indefinite" />
              </line>
            </g>
          ))}

          {/* Pipeline Nodes */}
          {[
            { title: 'Ingest', desc: 'MAA zip via SFTP', color: '#3B82F6', x: 15 },
            { title: 'Convert', desc: 'WAV > MP3 (FFmpeg)', color: '#06B6D4', x: 165 },
            { title: 'Transcribe', desc: 'Custom medical STT', color: '#8B5CF6', x: 315 },
            { title: 'Anonymize', desc: 'PII Scrubbing (NER)', color: '#EC4899', x: 465 },
            { title: 'Semantic Match', desc: 'Google USE model', color: '#F59E0B', x: 615 },
            { title: 'Sentiment', desc: 'AWS Comprehend HCP', color: '#10B981', x: 765 },
            { title: 'Score', desc: 'Coaching Analytics', color: '#84CC16', x: 915 },
            { title: 'Report', desc: 'Dashboard & Insights', color: '#6366F1', x: 1065 }
          ].map((node, idx) => (
            <g key={idx} transform={`translate(${node.x}, 50)`}>
              {/* Card Base */}
              <rect x="0" y="0" width="120" height="120" rx="12" fill="url(#nodeGrad)" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              {/* Accent top border */}
              <rect x="0" y="0" width="120" height="4" fill={node.color} rx="2" />

              {/* Glowing ring under card if active/hovered style */}
              <rect x="0" y="0" width="120" height="120" rx="12" fill="none" stroke={node.color} strokeWidth="1" opacity="0.15" />

              {/* Step Number */}
              <text x="10" y="24" fill="#475569" fontSize="10" fontWeight="800">0{idx + 1}</text>

              {/* Node Title */}
              <text x="60" y="55" fill="#F8FAFC" fontSize="12" fontWeight="700" textAnchor="middle">{node.title}</text>

              {/* Node Desc */}
              <text x="60" y="80" fill="#94A3B8" fontSize="9" textAnchor="middle">
                {node.desc.split(' (')[0]}
              </text>
              {node.desc.includes('(') && (
                <text x="60" y="94" fill="#64748B" fontSize="8" textAnchor="middle">
                  {node.desc.slice(node.desc.indexOf('('))}
                </text>
              )}
            </g>
          ))}

          {/* Footer status line */}
          <g transform="translate(15, 195)">
            <rect width="1170" height="30" rx="6" fill="#06060F" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="15" cy="15" r="3" fill="#10B981">
              <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="28" y="19" fill="#64748B" fontSize="9">Live ingestion channel active: sftp://maa-inbound.maci-prod.internal</text>
            <text x="1150" y="19" fill="#10B981" fontSize="9" fontWeight="600" textAnchor="end">PIPELINE OPERATIONAL</text>
          </g>
        </svg>
      )
    },
    {
      id: 'workforce',
      title: 'Intelligent Digital Data Workforce — HCP/HCO Matching',
      subtitle: 'Automated Practitioner-to-Organization Precision Alignments',
      industry: 'Healthcare & Operations',
      heroMetric: '99% Match',
      metricsLabel: 'Precision Alignments across Dynamic Hospital Rosters',
      techs: ['Elasticsearch', 'Python', 'FastAPI', 'scikit-learn', 'SQL'],
      problem: 'Manually cross-referencing Healthcare Providers (HCP) with Healthcare Organizations (HCO) database records was highly inefficient and subject to regulatory errors.',
      discovery: 'Machine learning semantic match models could automatically resolve entity resolution anomalies across dynamic hospital rosters.',
      constraints: 'Matching algorithms must maintain strict HIPAA compliance and preserve clear auditable logs.',
      implementation: 'Built an entity resolution engine using Elasticsearch fuzzy matching and a custom layout model to score practitioner associations.',
      challenges: 'Resolving duplicate records with minor name variants. Resolved by writing a pre-processing phonetic standardization utility.',
      lessons: 'Data precision in healthcare databases is paramount for operational integrity.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">HCP/HCO Rosters</text>

          <rect x="140" y="70" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Matching Model</text>

          <rect x="280" y="70" width="100" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="330" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Aligned Registry</text>

          <line x1="90" y1="90" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="230" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'smartvision',
      title: 'Smart Vision',
      subtitle: 'Manufacturing Computer Vision at the Edge',
      industry: 'Manufacturing & Tech',
      heroMetric: '45m → 1m',
      metricsLabel: 'Cleaning Inspection Time & $5-6M Savings',
      techs: ['AWS IoT Greengrass', 'SageMaker', 'React', 'Node.js', 'OpenCV'],
      problem: 'Manual quality control of silicon wafer cleaning cycles required 45 minutes of microscope inspect cycles per batch, bottlenecking manufacturing output.',
      discovery: 'Identified that edge nodes could capture high-resolution imagery during the chemical spray sequence, detecting residue clusters via neural networks.',
      constraints: 'Factory floor had poor internet connectivity; latency was unacceptable for cloud-based inference.',
      implementation: 'Designed a localized computer vision inference container. Models trained in AWS SageMaker were deployed onto physical edge servers using AWS IoT Greengrass. The system runs OpenCV filters followed by segmentation models, feeding a local React web dashboard.',
      challenges: 'Model accuracy drift due to camera lens fogging on chemical lines. Mitigated by designing an automated self-cleaning air nozzle triggered by drift alerts.',
      lessons: 'Edge computing is paramount in physical operations. Bringing intelligence to the data source removes network bottlenecks.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">IP Camera</text>

          <rect x="130" y="70" width="110" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="185" y="90" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">IoT Greengrass</text>
          <text x="185" y="102" fill="#3B82F6" fontSize="8" textAnchor="middle">SageMaker Model</text>

          <rect x="290" y="70" width="90" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="335" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">React Monitor</text>

          <line x1="90" y1="90" x2="130" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="240" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

          <text x="110" y="85" fill="#A3A3A3" fontSize="8" textAnchor="middle">RTSP</text>
          <text x="265" y="85" fill="#A3A3A3" fontSize="8" textAnchor="middle">WebSockets</text>
        </svg>
      )
    }
  ];

  const currentProj = projects.find(p => p.id === activeProj) || projects[0];

  useEffect(() => {
    setIsCompiling(true);

    const projectLogsMap: Record<string, string[]> = {
      bms: [
        `[ok] Claude MCP server initialized`,
        `[ok] authentication & authorization verified`,
        `[ok] natural language prompt received`,
        `[ok] intent classification completed`,
        `[ok] sql generated and validated`,
        `[ok] governance rules passed`,
        `[ok] query executed on Amazon Redshift`,
        `[ok] response generated in 3.2s`,
        `$ execution completed successfully.`
      ],
      smartvision: [
        `[ok] connection to wafer camera feed active`,
        `[ok] SageMaker inference container loaded`,
        `[ok] wafer chemical spray sequence detected`,
        `[ok] OpenCV filtering initialized`,
        `[ok] defect segmentation execution started`,
        `[ok] lens fogging check passed: anomaly index 0.02`,
        `[ok] database synced to React wafer cockpit`,
        `$ edge inference completed in 0.85s`
      ],
      extract: [
        `[ok] document pdf binary ingested`,
        `[ok] skew-correction filter applied`,
        `[ok] image binarization successful`,
        `[ok] transformer layout grid generated`,
        `[ok] text lines extraction verified (>99.4%)`,
        `[ok] ERP transaction payloads constructed`,
        `$ document extraction completed successfully.`
      ],
      crt: [
        `[ok] SharePoint connection verified`,
        `[ok] Azure Functions triggers online`,
        `[ok] Selenium crawling sessions initialized`,
        `[ok] proxy rotation routing confirmed`,
        `[ok] pharmaceutical directories parsed`,
        `$ intelligence compilation completed.`
      ],
      rakuten: [
        `[ok] claim manual query string parsed`,
        `[ok] device manuals vector space search active`,
        `[ok] retrieved text chunks validated`,
        `[ok] hallucination guard rails verified`,
        `[ok] warranty response compiled`,
        `$ warranty claim verified in 6.4s`
      ],
      maci: [
        `[ok] connection to audio stream verified`,
        `[ok] Whisper transcription listener active`,
        `[ok] semantic matching query pipeline online`,
        `[ok] context-bound prompt generation success`,
        `$ live conversation assistance operational.`
      ],
      workforce: [
        `[ok] provider entity directory synced`,
        `[ok] Elasticsearch scoring criteria online`,
        `[ok] HIPAA compliance checks completed`,
        `[ok] phonetic standardizer applied`,
        `$ record alignments processed successfully.`
      ]
    };

    const initialLog = currentProj.id === 'bms'
      ? `$ initializing AI Pricing Intelligence Platform...`
      : `$ initializing environment for ${currentProj.title}...`;

    setConsoleLogs([initialLog]);

    const logs = projectLogsMap[currentProj.id] || [
      `[ok] connecting to database clusters...`,
      `[ok] loading schema mappings and metrics indices...`,
      `[ok] verifying telemetry pipelines: latency check 12ms...`,
      `[ok] system session secure (token verified)...`,
      `$ execution compiled successfully.`
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        const nextLog = logs[logIndex];
        setConsoleLogs(prev => {
          // Guard against state mismatch during async unmounts
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
      <div style={{ marginBottom: '60px' }}>
        <h2 className="title-section">
          Featured Projects
        </h2>
        <p className="body-lead" style={{ maxWidth: '600px' }}>
          {viewMode === 'engineer'
            ? 'Immersive case studies representing core technical architectures, operational constraints, and commercial scale.'
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
                ← Prev Slide
              </button>
              <button
                onClick={() => setSlideIndex(prev => (prev + 1) % projects.length)}
                data-cursor="pointer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '12px' }}
              >
                Next Slide →
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
                🏢 Business Challenge
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].problem}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🔍 Strategic Discovery
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].discovery}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                💼 Business Outcome
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
        <div className="grid-layout" style={{ width: '100%', alignItems: 'stretch' }}>

          {/* Project Selector List (Left Side) */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {projects.map((proj) => {
              const isSelected = activeProj === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProj(proj.id)}
                  className="glass-panel"
                  data-cursor="pointer"
                  data-project={proj.id}
                  style={{
                    width: '100%',
                    padding: '20px',
                    textAlign: 'left',
                    border: isSelected ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.04)',
                    backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.03)' : 'rgba(11, 11, 11, 0.4)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    outline: 'none',
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontSize: '0.8rem', color: isSelected ? '#3B82F6' : '#A3A3A3', fontWeight: 600, textTransform: 'uppercase' }}>
                      {proj.industry}
                    </span>
                    <ArrowRight size={14} style={{ color: isSelected ? '#3B82F6' : 'transparent', transition: 'color 0.3s ease' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: isSelected ? '#F5F5F5' : '#A3A3A3', transition: 'color 0.3s ease' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: isSelected ? '#A3A3A3' : '#737373', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', margin: 0 }}>
                    {proj.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Case Study Panel (Right Side) */}
          <div style={{ gridColumn: 'span 8' }} className="glass-panel">
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Header / Hero Metric Banner */}
              <div className="case-study-header">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Case Study
                  </span>
                  <h2 style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {currentProj.title}
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
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

                {/* Row 3: Architecture Diagram Panel */}
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

            </div>
          </div>

        </div>
      )}
    </section>
  );
}
