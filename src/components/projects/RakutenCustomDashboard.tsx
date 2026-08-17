import { useState } from 'react';
import { Database, AlertCircle, ShieldCheck, Cpu, Clock, DollarSign, ArrowRight, Sparkles, Globe, FileText } from 'lucide-react';

export default function RakutenCustomDashboard() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [simulationInput, setSimulationInput] = useState<string>('Nintendo Switch OLED (No JAN Code)');
  const [simResults, setSimResults] = useState<any>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const RAG_STEPS = [
    { title: 'Product Input', desc: 'Nintendo Switch OLED (No JAN)', icon: Cpu, color: '#3B82F6' },
    { title: 'Source Discovery', desc: 'Google Search APIs + Web Scrapers', icon: Globe, color: '#8B5CF6' },
    { title: 'RAG Retrieval', desc: 'Match warranty docs & listing data', icon: Database, color: '#6366F1' },
    { title: 'LLM Reasoning', desc: 'Resolve ambiguity: Manufacturer = Nintendo', icon: Sparkles, color: '#EC4899' },
    { title: 'Master DB Check', desc: 'Cross-check Nintendo eligibility rules', icon: ShieldCheck, color: '#10B981' },
    { title: 'Output Evidence', desc: 'Eligibility: VALID. Saving audit log.', icon: FileText, color: '#06B6D4' }
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    setSimResults(null);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < RAG_STEPS.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setSimResults({
          status: 'SUCCESS',
          manufacturer: 'Nintendo Co., Ltd.',
          confidence: '98.4%',
          eligibility: 'ELIGIBLE (Standard 1-Year Extended)',
          evidence: 'Verified Nintendo warranty descriptions from official support.nintendo.co.jp. Model OLED matches active catalog.',
          cost: '$0.0016',
          time: '2.84s'
        });
      }
    }, 800);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', textAlign: 'left' }}>

      {/* Grid of 4 major panels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', width: '100%' }} className="responsive-dashboard-grid">
        
        {/* Row 1 Grid: Challenge & GenAI Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
          
          {/* Box 1: 01 Challenge */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)', color: '#a78bfa', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>01</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Challenge
              </h4>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
              Over 40,000 products are excluded from extended warranty sales because the shop did not set a JAN code, making it impossible to identify the manufacturer and verify eligibility.
            </p>

            {/* Before Diagram */}
            <div>
              <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                BEFORE: Manual, Time-Consuming Process
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Product Info', desc: 'Raw entry' },
                  { label: 'Missing JAN', desc: 'No ID code', bad: true },
                  { label: 'Manual Research', desc: 'Web search' },
                  { label: 'Unknown Mfg', desc: 'No match', bad: true },
                  { label: 'Warranty Excluded', desc: 'Lost sale', bad: true }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ 
                      padding: '6px 10px', 
                      borderRadius: '8px', 
                      backgroundColor: step.bad ? 'rgba(239, 68, 68, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                      border: step.bad ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '0.7rem',
                      textAlign: 'center',
                      minWidth: '80px'
                    }}>
                      <div style={{ color: step.bad ? '#ef4444' : '#e2e8f0', fontWeight: 600 }}>{step.label}</div>
                      <div style={{ fontSize: '0.55rem', color: '#64748b', marginTop: '2px' }}>{step.desc}</div>
                    </div>
                    {idx < 4 && <ArrowRight size={10} style={{ color: '#475569' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Challenge Dotted Box */}
            <div style={{ 
              border: '1px dashed rgba(139, 92, 246, 0.25)', 
              borderRadius: '10px', 
              padding: '12px 16px', 
              backgroundColor: 'rgba(139, 92, 246, 0.01)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 700 }}>Key Challenge Summary</div>
              <ul style={{ paddingLeft: '14px', listStyleType: 'disc', margin: 0, fontSize: '0.75rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Manufacturer data is scattered across websites, documents, and search listings.</li>
                <li>Inconsistent and unstructured text entries make simple rules-based automation impossible.</li>
                <li>Manual research requires significant team hours, is subject to errors, and does not scale.</li>
              </ul>
            </div>

            {/* Result alert */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
              <AlertCircle size={14} style={{ color: '#ef4444', flexShrink: 0 }} />
              <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                <strong>Result:</strong> Lost revenue, poor customer experience, and operational inefficiency.
              </span>
            </div>
          </div>

          {/* Box 2: 02 GenAI Solution */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>02</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                GenAI Solution
              </h4>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
              A GenAI + RAG-powered platform that retrieves, understands, and validates manufacturer information to support warranty eligibility decisions.
            </p>

            {/* RAG Pipeline Flowchart */}
            <div>
              <div style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.02em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>RAG Pipeline Architecture</span>
                {isSimulating && <span style={{ fontSize: '0.7rem', color: '#10b981', textTransform: 'none' }}>Processing simulation...</span>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 110px), 1fr))', gap: '10px' }}>
                {RAG_STEPS.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isActive = activeStep === idx;
                  const isPassed = activeStep > idx;

                  return (
                    <div 
                      key={idx} 
                      style={{ 
                        padding: '8px 10px', 
                        borderRadius: '8px', 
                        backgroundColor: isActive ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255, 255, 255, 0.01)',
                        border: isActive ? `1.5px solid ${step.color}` : isPassed ? `1px solid ${step.color}60` : '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <StepIcon size={12} style={{ color: isActive ? step.color : '#64748b' }} />
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: isActive ? '#ffffff' : '#94a3b8' }}>
                          {idx + 1}. {step.title}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.55rem', color: isActive ? '#93c5fd' : '#64748b', lineHeight: 1.3 }}>
                        {step.desc}
                      </div>
                      {isPassed && (
                        <div style={{ position: 'absolute', top: '4px', right: '4px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Simulation Trigger */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <input 
                type="text" 
                value={simulationInput}
                onChange={(e) => setSimulationInput(e.target.value)}
                disabled={isSimulating}
                style={{
                  flex: 1,
                  backgroundColor: '#07070a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                style={{
                  backgroundColor: '#3B82F6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  opacity: isSimulating ? 0.6 : 1,
                  transition: 'opacity 0.2s'
                }}
              >
                Run RAG
              </button>
            </div>

            {/* Simulation Results Output */}
            {simResults && (
              <div style={{ 
                padding: '12px', 
                borderRadius: '8px', 
                backgroundColor: 'rgba(16, 185, 129, 0.03)', 
                border: '1px solid rgba(16, 185, 129, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                animation: 'fadeIn 0.3s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '4px', marginBottom: '4px' }}>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Decision: {simResults.eligibility}</span>
                  <span style={{ color: '#94a3b8' }}>Latency: {simResults.time} | API Cost: {simResults.cost}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>
                  <strong>Found Manufacturer:</strong> {simResults.manufacturer} (Confidence: {simResults.confidence})
                </div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.3, marginTop: '2px' }}>
                  <strong>Evidence:</strong> {simResults.evidence}
                </div>
              </div>
            )}

            {/* Technology Stack & Models list */}
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                Technology Stack & Models
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {[
                  { name: 'GPT-4o-mini-search-preview', desc: 'Web search discovery' },
                  { name: 'Llama 3 70B (Bedrock)', desc: 'EAN extraction parsing' },
                  { name: 'spaCy NLP', desc: 'Fallback entity mapping' },
                  { name: 'AWS S3 & Python', desc: 'Serverless architecture' }
                ].map((tech, idx) => (
                  <span key={idx} style={{ 
                    fontSize: '0.65rem', 
                    padding: '3px 8px', 
                    borderRadius: '6px', 
                    border: '1px solid rgba(255, 255, 255, 0.05)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    color: '#e2e8f0'
                  }} title={tech.desc}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Row 2 Grid: Results & Client Impact */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

          {/* Box 3: 03 Results */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(99, 102, 241, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>03</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Results
              </h4>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Coverage & Accuracy Matrix
            </div>

            {/* Accuracy Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <th style={{ padding: '6px 4px', color: '#64748b', fontWeight: 600 }}>Scenario</th>
                    <th style={{ padding: '6px 4px', color: '#64748b', fontWeight: 600 }}>Coverage</th>
                    <th style={{ padding: '6px 4px', color: '#64748b', fontWeight: 600 }}>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'With JAN Codes', coverage: '85-92%', accuracy: 'High', color: '#10b981' },
                    { scenario: 'Without JAN Codes', coverage: '70-80%', accuracy: 'Moderate-High', color: '#f59e0b' },
                    { scenario: 'Overall System', coverage: '~70-80%', accuracy: '~75%', color: '#3b82f6', bold: true }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ 
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                      backgroundColor: row.bold ? 'rgba(255,255,255,0.01)' : 'transparent',
                      fontWeight: row.bold ? 700 : 400
                    }}>
                      <td style={{ padding: '8px 4px', color: row.bold ? '#ffffff' : '#cbd5e1' }}>{row.scenario}</td>
                      <td style={{ padding: '8px 4px', color: row.color, fontWeight: 700 }}>{row.coverage}</td>
                      <td style={{ padding: '8px 4px', color: '#e2e8f0' }}>{row.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Numeric Indicators */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
              
              {/* Average Latency Box */}
              <div style={{ 
                flex: 1, 
                padding: '12px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(255,255,255,0.01)', 
                border: '1px solid rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Clock size={20} style={{ color: '#60a5fa' }} />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>Sub-5 sec</div>
                  <div style={{ fontSize: '0.58rem', color: '#64748b', marginTop: '1px' }}>Avg response latency</div>
                </div>
              </div>

              {/* API cost Box */}
              <div style={{ 
                flex: 1, 
                padding: '12px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(255,255,255,0.01)', 
                border: '1px solid rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <DollarSign size={20} style={{ color: '#10b981' }} />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#10b981' }}>$0.001-$0.003</div>
                  <div style={{ fontSize: '0.58rem', color: '#64748b', marginTop: '1px' }}>Cost per API invocation</div>
                </div>
              </div>

            </div>
          </div>

          {/* Box 4: 04 Client Impact */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>04</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Client Impact
              </h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '14px' }}>
              {[
                { 
                  title: 'Expanded Warranty Eligibility', 
                  desc: 'Enables identification of manufacturers for products without JAN codes, unlocking extended warranty sales opportunities and new revenue.', 
                  color: '#10b981' 
                },
                { 
                  title: 'Operational Efficiency', 
                  desc: 'Automates a previously manual, highly time-consuming research and verification process with scalable, AI-driven workflows.', 
                  color: '#3b82f6' 
                },
                { 
                  title: 'Improved Customer Experience', 
                  desc: 'More products become instantly eligible for warranties, reducing checkout friction and improving conversion at point of purchase.', 
                  color: '#8b5cf6' 
                },
                { 
                  title: 'Data-Driven Decisions', 
                  desc: 'Structured extraction evidence and auditable verification logs ensure full operational transparency and compliance.', 
                  color: '#06b6d4' 
                }
              ].map((impact, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: impact.color, 
                    marginTop: '6px', 
                    flexShrink: 0,
                    boxShadow: `0 0 6px ${impact.color}`
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>
                      {impact.title}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.3 }}>
                      {impact.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
