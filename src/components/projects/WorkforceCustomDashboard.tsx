import { useState } from 'react';
import { Database, AlertCircle, ShieldCheck, Cpu, Sparkles, Globe, Users, Building, Activity, Settings } from 'lucide-react';

export default function WorkforceCustomDashboard() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [recordA, setRecordA] = useState<string>('Dr. Robt. J. Smith, 120 Main St, NY');
  const [recordB, setRecordB] = useState<string>('Robert Smith MD, 120 Main Avenue, New York');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [matchResult, setMatchResult] = useState<any>(null);

  const PIPELINE_STEPS = [
    { title: 'Ingest', desc: 'Raw records loaded from Informatica MDM', icon: Database, color: '#3B82F6' },
    { title: 'Cleanse & Standardize', desc: 'Normalized fields (St -> Street, Robt. -> Robert)', icon: Settings, color: '#8B5CF6' },
    { title: 'Enrich', desc: 'Google Maps spatial geocoding matching', icon: Globe, color: '#6366F1' },
    { title: 'Block', desc: 'Multi-layer phonetic index blocking', icon: Activity, color: '#EC4899' },
    { title: 'Feature Eng.', desc: 'Generate Levenshtein, Jaro-Winkler distances', icon: Cpu, color: '#10B981' },
    { title: 'Score & Classify', desc: 'XGBoost match probability evaluation', icon: Sparkles, color: '#F59E0B' },
    { title: 'Route & Merge', desc: 'Auto-merge or flag for Human Oversight', icon: ShieldCheck, color: '#06B6D4' }
  ];

  const handleRunMatching = () => {
    setIsProcessing(true);
    setActiveStep(0);
    setMatchResult(null);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < PIPELINE_STEPS.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsProcessing(false);

        // Simulating the output based on names
        const namesMatch = recordA.toLowerCase().includes('smith') && recordB.toLowerCase().includes('smith');
        if (namesMatch) {
          setMatchResult({
            score: '97.4%',
            action: 'AUTO-MERGE',
            actionColor: '#10B981',
            levenshtein: '3',
            jaroWinkler: '0.94',
            spatialMatch: 'MATCHED (Coords match within 2m)',
            evidence: 'Cleaned name matches "Robert Smith". Address normalization resolved "St" -> "Street" and "Avenue" -> "Street" at spatial lat/long.'
          });
        } else {
          setMatchResult({
            score: '42.1%',
            action: 'REJECT / INDEPENDENT',
            actionColor: '#EF4444',
            levenshtein: '14',
            jaroWinkler: '0.55',
            spatialMatch: 'MISMATCH (Different zip codes)',
            evidence: 'Low phonetic score and geographic distance exceed maximum merge threshold.'
          });
        }
      }
    }, 600);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', textAlign: 'left' }}>

      {/* Main Grid: Challenge & Architecture */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', width: '100%' }} className="responsive-dashboard-grid">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

          {/* 1. Challenge Card */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(239, 68, 68, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>CHALLENGE</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Data Stewardship Backlog
              </h4>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
              Explosive volumes of multi-source vendor & CRM data created massive backlogs in manual data stewardship queues. Legacy deterministic rules collapsed under typos, abbreviations, nicknames, address variations & multi-location practices.
            </p>

            {/* Why Existing Failed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                Why Existing Process Failed:
              </span>
              <ul style={{ paddingLeft: '14px', listStyleType: 'disc', margin: 0, fontSize: '0.75rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Exact-match deterministic rules couldn't handle complex variations, typos & structural differences.</li>
                <li>Unnormalized address elements & inconsistent formatting led to false positives/negatives.</li>
                <li>Heavy manual intervention caused queue overflow and high operational overhead.</li>
              </ul>
            </div>

            {/* Result banner */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
              <AlertCircle size={14} style={{ color: '#ef4444', flexShrink: 0 }} />
              <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                <strong>Result:</strong> Paralyzed governance queues and inefficiencies at scale.
              </span>
            </div>
          </div>

          {/* 2. Technical Architecture & Pipeline */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(99, 102, 241, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>SOLUTION</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                End-to-End ML Pipeline
              </h4>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
              An automated machine learning entity resolution pipeline cleansing, blocking, scoring and auto-merging records.
            </p>

            {/* Pipeline Stage Indicators */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 110px), 1fr))', gap: '10px' }}>
              {PIPELINE_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.01)',
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
                    <div style={{ fontSize: '0.55rem', color: isActive ? '#c7d2fe' : '#64748b', lineHeight: 1.3 }}>
                      {step.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Record Matching Interactive Sandbox Panel */}
        <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '0.8rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Interactive Record Matching Sandbox</span>
            {isProcessing && <span style={{ fontSize: '0.7rem', color: '#10b981', textTransform: 'none' }}>Running XGBoost scorer...</span>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Source Record A</label>
              <input
                type="text"
                value={recordA}
                onChange={(e) => setRecordA(e.target.value)}
                disabled={isProcessing}
                style={{
                  width: '100%',
                  backgroundColor: '#07070a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Source Record B</label>
              <input
                type="text"
                value={recordB}
                onChange={(e) => setRecordB(e.target.value)}
                disabled={isProcessing}
                style={{
                  width: '100%',
                  backgroundColor: '#07070a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <button
            onClick={handleRunMatching}
            disabled={isProcessing}
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#3B82F6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              opacity: isProcessing ? 0.6 : 1
            }}
          >
            Execute XGBoost Scorer
          </button>

          {matchResult && (
            <div style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(59, 130, 246, 0.03)',
              border: '1px solid rgba(59, 130, 246, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: matchResult.actionColor }}>
                  Match Result: {matchResult.action}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                  XGBoost Score: <strong>{matchResult.score}</strong>
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 100px), 1fr))', gap: '12px', fontSize: '0.7rem' }}>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Levenshtein Dist:</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>{matchResult.levenshtein}</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Jaro-Winkler Dist:</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>{matchResult.jaroWinkler}</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Geocoding Match:</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>{matchResult.spatialMatch}</span>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.4, marginTop: '4px' }}>
                <strong>Evidence Audit Log:</strong> {matchResult.evidence}
              </div>
            </div>
          )}
        </div>

        {/* Row 3 Grid: Model Techniques, Tech Stack & Client Impact */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

          {/* Box 4: ML Models & Key Techniques */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)', color: '#c084fc', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>ML ENGINE</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Model & Techniques
              </h4>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 700, marginBottom: '6px' }}>Classification Model</div>
              <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 700 }}>XGBoost (Final Model)</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '2px' }}>Benchmarked models: Logistic Regression, Random Forest, XGBoost</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 700 }}>Key Techniques Deployed:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '8px' }}>
                {[
                  'Data Clean & Standardize',
                  'Custom Name Dicts',
                  'Address Normalization',
                  'Google Maps Geocoding',
                  'Phonetic Blocking',
                  'Gap-driven Feature Eng.'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={12} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Box 5: Client Impact */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>CLIENT IMPACT</span>
              <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                Measurable Impact
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  title: 'Reduces stewardship backlogs by >90%',
                  desc: 'Eliminates queue stagnation and manual overhead through automated record deduplication and candidate pair resolution.',
                  icon: Users,
                  color: '#10b981'
                },
                {
                  title: 'Prevents operational queue overflow',
                  desc: 'Provides continuous streaming pipelines resolving pairs in real-time, preventing peak load bottlenecks.',
                  icon: Activity,
                  color: '#3b82f6'
                },
                {
                  title: 'Automates high-confidence merges',
                  desc: 'Saves steward time by only routing borderline classification results to human reviewers.',
                  icon: ShieldCheck,
                  color: '#8b5cf6'
                },
                {
                  title: 'Cleaner, reliable master registries',
                  desc: 'Delivers precisions required for medical compliance, sales reporting, and HIPAA governance audits.',
                  icon: Building,
                  color: '#06b6d4'
                }
              ].map((impact, idx) => {
                const ImpactIcon = impact.icon;
                return (
                  <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      backgroundColor: `${impact.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ImpactIcon size={14} style={{ color: impact.color }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>{impact.title}</span>
                      <span style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.3 }}>{impact.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Tech Stack, Data Sources & Workflow Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>

          {/* Tech Stack & Sources */}
          <div className="glass-panel" style={{ padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Tech Stack & Data Sources</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Python', 'XGBoost', 'NLTK', 'Google Maps API', 'AWS EC2', 'REST APIs', 'AWS SDK (boto3)', 'Amazon S3', 'Informatica MDM', 'Reltio'].map((tech, idx) => (
                <span key={idx} style={{
                  fontSize: '0.65rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  color: '#cbd5e1'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow (Before vs After) */}
          <div className="glass-panel" style={{ padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Workflow Shift (Before vs After)</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.7rem' }}>
              <div>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>BEFORE:</span>
                <span style={{ color: '#94a3b8', marginLeft: '4px' }}>Raw Data ➔ Manual Review ➔ Deterministic Rules ➔ False Matches ➔ Queue Overflow</span>
              </div>
              <div style={{ borderTop: '1px dashed rgba(255,255,255,0.05)', paddingTop: '6px' }}>
                <span style={{ color: '#10b981', fontWeight: 700 }}>AFTER:</span>
                <span style={{ color: '#94a3b8', marginLeft: '4px' }}>Ingest ➔ Cleanse ➔ Block & Enrich ➔ ML Score & Classify ➔ Auto-merge High Confidence (only borderline to stewards)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Metadata Footer Panel */}
      <div style={{
        padding: '12px 20px',
        borderRadius: '10px',
        backgroundColor: '#07070a',
        border: '1px solid rgba(255,255,255,0.04)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.7rem',
        color: '#64748b'
      }}>
        <span><strong>Industry:</strong> Healthcare, Pharmaceuticals & Medical Compliance</span>
        <span><strong>Scale:</strong> 100K records per quarter (Batch)</span>
        <span><strong>Platform:</strong> AWS EC2</span>
        <span><strong>Language:</strong> Python</span>
      </div>

    </div>
  );
}
