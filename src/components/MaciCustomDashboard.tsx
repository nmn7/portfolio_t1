import { ShieldAlert, Lightbulb, Database, RefreshCw, Volume2, Search, BarChart3, Terminal, TrendingUp, Clock, Filter, Activity, Star, Check, XCircle } from 'lucide-react';

export default function MaciCustomDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      {/* Row 1: Problem & Solution Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
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
