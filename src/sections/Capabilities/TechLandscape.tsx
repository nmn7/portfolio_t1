import { useState } from 'react';
import { Brain, Settings, Cloud, Users, Check, ChevronRight, Sparkles, Compass, PenTool, Code, Rocket, RefreshCw } from 'lucide-react';
import type { TechItem, Cluster } from '../../data/skills';
import { CLUSTERS as clusters } from '../../data/skills';

const getIcon = (name: 'Brain' | 'Settings' | 'Cloud' | 'Users') => {
  switch (name) {
    case 'Brain': return <Brain size={20} />;
    case 'Settings': return <Settings size={20} />;
    case 'Cloud': return <Cloud size={20} />;
    case 'Users': return <Users size={20} />;
  }
};

interface TechLandscapeProps {
  viewMode?: 'engineer' | 'consultant';
}

export default function TechLandscape({ viewMode = 'engineer' }: TechLandscapeProps) {
  const [selectedTech, setSelectedTech] = useState<TechItem>({
    name: 'S3',
    desc: 'Used as the document and asset layer in AI and automation workflows—supporting ingestion, processing, and secure retrieval at scale.',
    usedIn: ['RAG Pipelines', 'Document Automation', 'AI Workflows', 'Backup & Archival'],
    valueDeliver: ['Secure, scalable storage for enterprise data', 'Reliable foundation for AI/automation pipelines', 'Cost-optimised and highly durable solutions']
  });

  return (
    <section id="landscape" data-section="landscape" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Capability Stack
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          How I Build Solutions
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px', color: viewMode === 'consultant' ? '#1F1F2E' : 'inherit' }}>
          I combine AI, automation, cloud systems and product thinking to take complex business problems from discovery to delivery.
        </p>
      </div>

      <div className="grid-layout" style={{ width: '100%', alignItems: 'start' }}>

        {/* Constellation Grid (Left Side) */}
        <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {clusters.map((cluster: Cluster, i: number) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '24px',
                border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
                background: viewMode === 'consultant' ? '#F3F3F8' : 'rgba(11, 11, 11, 0.4)',
                boxShadow: viewMode === 'consultant' ? 'none' : `0 15px 40px ${cluster.glowColor}`,
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                position: 'relative'
              }}
            >
              {/* Category Icon Circle */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: cluster.iconBg,
                border: `1px solid ${cluster.color}`,
                boxShadow: `0 0 12px ${cluster.glowColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: cluster.color,
                flexShrink: 0
              }}>
                {getIcon(cluster.iconName)}
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: viewMode === 'consultant' ? '#1F1F2E' : '#F5F5F5', margin: 0 }}>
                  {cluster.title}
                </h3>

                {/* Capability Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cluster.items.map((item: TechItem, idx: number) => {
                    const isHovered = selectedTech.name === item.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedTech(item)}
                        onMouseEnter={() => setSelectedTech(item)}
                        data-cursor="pointer"
                        style={{
                          padding: '6px 14px',
                          borderRadius: '20px',
                          backgroundColor: viewMode === 'consultant'
                            ? (isHovered ? cluster.color : 'rgba(31, 31, 46, 0.02)')
                            : (isHovered ? cluster.color : 'rgba(255, 255, 255, 0.02)'),
                          border: viewMode === 'consultant'
                            ? (isHovered ? `1px solid ${cluster.color}` : '1px solid rgba(31, 31, 46, 0.12)')
                            : (isHovered ? `1px solid ${cluster.color}` : '1px solid rgba(255, 255, 255, 0.08)'),
                          color: viewMode === 'consultant'
                            ? (isHovered ? '#FFFFFF' : '#5A5A75')
                            : (isHovered ? '#000000' : '#A3A3A3'),
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          outline: 'none',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Glowing Status Dot on Far Right */}
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: cluster.color,
                boxShadow: `0 0 10px 2px ${cluster.color}`,
                position: 'absolute',
                top: '24px',
                right: '24px'
              }}></div>
            </div>
          ))}
        </div>

        {/* Detailed Insights Inspector (Right Side) */}
        {(() => {
          const activeCluster = clusters.find((c: Cluster) => c.items.some((item: TechItem) => item.name === selectedTech.name)) || clusters[0];
          const ActiveIcon = getIcon(activeCluster.iconName);
          return (
            <div
              style={{
                gridColumn: 'span 4',
                position: 'sticky',
                top: '120px',
                background: viewMode === 'consultant' ? '#F3F3F8' : 'rgba(11, 11, 11, 0.4)',
                border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '24px'
              }}
              className="glass-panel"
            >
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: viewMode === 'consultant' ? '#2563EB' : '#3B82F6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Capability in Context
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: activeCluster.iconBg,
                    border: `1px solid ${activeCluster.color}`,
                    color: activeCluster.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {ActiveIcon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: viewMode === 'consultant' ? '#1F1F2E' : '#F5F5F5', margin: 0 }}>
                    {selectedTech.name === 'S3' ? 'Amazon S3' : selectedTech.name}
                  </h3>
                </div>

                <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: viewMode === 'consultant' ? '#1F1F2E' : '#A3A3A3', margin: 0 }}>
                  {selectedTech.desc}
                </p>

                {/* Used In tags */}
                {selectedTech.usedIn && selectedTech.usedIn.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(59, 130, 246, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Used In
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedTech.usedIn.map((tag, idx) => (
                        <span key={idx} style={{
                          fontSize: '0.7rem',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Value I Deliver checkmarks */}
                {selectedTech.valueDeliver && selectedTech.valueDeliver.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(59, 130, 246, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Value I Deliver
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedTech.valueDeliver.map((val, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <Check size={12} style={{ color: activeCluster.color, flexShrink: 0 }} />
                          <span>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Slide bullet / circles indicators */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '16px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: viewMode === 'consultant' ? '#2563EB' : '#3B82F6',
                      display: 'inline-block'
                    }}
                  />
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: viewMode === 'consultant' ? '1.5px solid #2563EB' : '1.5px solid #3B82F6',
                      display: 'inline-block'
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })()}

      </div>

      {/* Bottom Process Bar: My Approach */}
      <div className="glass-panel approach-container" style={{
        marginTop: '32px',
        padding: '20px 24px',
        background: viewMode === 'consultant' ? '#F3F3F8' : 'rgba(9, 7, 20, 0.4)',
        border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid var(--border-color)',
        borderRadius: '16px'
      }}>
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={16} style={{ color: '#3B82F6' }} />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: viewMode === 'consultant' ? '#1F1F2E' : 'var(--text-primary)' }}>My Approach</span>
        </div>

        {/* Steps */}
        <div className="approach-steps">
          {[
            { step: 'Discover', label: 'Understand & Align', icon: Compass },
            { step: 'Design', label: 'Architect & Plan', icon: PenTool },
            { step: 'Build', label: 'Automate & Integrate', icon: Code },
            { step: 'Deploy', label: 'Deliver Value', icon: Rocket },
            { step: 'Evolve', label: 'Optimize & Scale', icon: RefreshCw }
          ].map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div key={idx} className="approach-step-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: viewMode === 'consultant' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.02)',
                    border: viewMode === 'consultant' ? '1px solid rgba(0,0,0,0.08)' : '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: viewMode === 'consultant' ? '#1F1F2E' : 'var(--text-primary)'
                  }}>
                    <StepIcon size={14} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: viewMode === 'consultant' ? '#1F1F2E' : 'var(--text-primary)' }}>{item.step}</span>
                    <span style={{ fontSize: '0.65rem', color: viewMode === 'consultant' ? '#4A4A4A' : 'var(--text-secondary)' }}>{item.label}</span>
                  </div>
                </div>
                {idx < 4 && <ChevronRight size={14} className="approach-chevron" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
