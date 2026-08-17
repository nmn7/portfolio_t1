import { useState } from 'react';
import { AlertCircle, ShieldCheck, CheckCircle2, Search, Plus, Users, Terminal, Layers, Camera, Tag, TrendingUp, Settings } from 'lucide-react';

export default function CrtCustomDashboard() {
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

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
                  <polygon points={`${conn.to},22 ${conn.to - 5},19 ${conn.to - 5},25`} fill="rgba(255,255,255,0.3)" />
                </g>
              ))}

              {/* Steps */}
              {[
                {
                  x: 50, name: 'Research', icon: (
                    <g>
                      <circle cx="50" cy="22" r="6" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                      <line x1="54" y1="26" x2="59" y2="31" stroke="#3B82F6" strokeWidth="1.5" />
                    </g>
                  )
                },
                {
                  x: 150, name: 'Match', icon: (
                    <g>
                      <circle cx="145" cy="22" r="2.5" fill="#06B6D4" />
                      <circle cx="155" cy="17" r="2.5" fill="#06B6D4" />
                      <circle cx="155" cy="27" r="2.5" fill="#06B6D4" />
                      <path d="M147.5,22 L152.5,17 M147.5,22 L152.5,27" stroke="#06B6D4" strokeWidth="1.5" />
                    </g>
                  )
                },
                {
                  x: 250, name: 'Validate', icon: (
                    <g>
                      <circle cx="250" cy="22" r="8" fill="none" stroke="#10B981" strokeWidth="1.5" />
                      <path d="M247,22 L249,24 L253,19" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  )
                },
                {
                  x: 350, name: 'Enrich', icon: (
                    <g>
                      <ellipse cx="350" cy="17" rx="6" ry="2.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                      <path d="M344,17 v4.5 c0 1.2 2.7 2.5 6 2.5 s6 -1.3 6 -2.5 v-4.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                      <path d="M344,21.5 v4.5 c0 1.2 2.7 2.5 6 2.5 s6 -1.3 6 -2.5 v-4.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                    </g>
                  )
                },
                {
                  x: 450, name: 'Evidence', icon: (
                    <g>
                      <path d="M445,15 h4 l2.5,2.5 h7.5 v11 h-14 Z" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinejoin="round" />
                      <line x1="448" y1="21" x2="456" y2="21" stroke="#8B5CF6" strokeWidth="1" />
                      <line x1="448" y1="24" x2="454" y2="24" stroke="#8B5CF6" strokeWidth="1" />
                    </g>
                  )
                },
                {
                  x: 550, name: 'Rules', icon: (
                    <g>
                      <rect x="544" y="14" width="12" height="15" rx="1.5" fill="none" stroke="#EC4899" strokeWidth="1.5" />
                      <line x1="548" y1="18" x2="552" y2="18" stroke="#EC4899" strokeWidth="1.5" />
                      <line x1="548" y1="21" x2="552" y2="21" stroke="#EC4899" strokeWidth="1.5" />
                      <line x1="548" y1="24" x2="552" y2="24" stroke="#EC4899" strokeWidth="1.5" />
                    </g>
                  )
                },
                {
                  x: 650, name: 'COT', icon: (
                    <g>
                      <path d="M644,17 L649,12 h6 v6 L648,25 Z" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
                      <circle cx="651" cy="15" r="1.2" fill="#10B981" />
                    </g>
                  )
                }
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

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
          <div className="crt-workspace-split" style={{ display: 'flex', minHeight: '480px' }}>

            {/* Left Sidebar */}
            <div className="crt-workspace-sidebar" style={{
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '12px' }}>

                {/* Research Summary Area Chart */}
                <div style={{ backgroundColor: '#161726', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Research Summary</span>
                    <span style={{ fontSize: '0.65rem', color: '#94A3B8', backgroundColor: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>Last 7 Days ▾</span>
                  </div>

                  {/* Stats line */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 70px), 1fr))', gap: '8px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

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
