import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import type { Role } from '../../data/experience';
import { ROLES as roles } from '../../data/experience';

export default function Experience() {
  const [expandedRole, setExpandedRole] = useState<string | null>('current');

  const toggleExpand = (id: string) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <section id="experience" data-section="experience" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Professional Journey
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Work Experience
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px' }}>
          Over eight years of experience building, deploying, and supporting enterprise software systems in pharma, retail, and manufacturing.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        {roles.map((role: Role) => {
          const isExpanded = expandedRole === role.id;
          return (
            <div
              key={role.id}
              className="glass-panel"
              style={{
                width: '100%',
                border: isExpanded ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid var(--border-color)',
                backgroundColor: isExpanded ? 'rgba(59, 130, 246, 0.02)' : 'var(--glass-bg)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Card Header (Always Visible) */}
              <button
                onClick={() => toggleExpand(role.id)}
                className="experience-header"
                data-cursor="pointer"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--glass-bg)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isExpanded ? '#3B82F6' : 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                      {role.title}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#3B82F6', fontWeight: 500, marginTop: '2px' }}>
                      {role.company}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  {/* Meta details on wide viewports */}
                  <div className="experience-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} />
                      {role.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <MapPin size={12} />
                      {role.location}
                    </span>
                  </div>

                  {isExpanded ? (
                    <ChevronUp size={20} style={{ color: '#3B82F6' }} />
                  ) : (
                    <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />
                  )}
                </div>
              </button>

              {/* Expandable Body */}
              {isExpanded && (
                <div
                  className="experience-body"
                  style={{
                    animation: 'slide-fade-in 0.3s ease-out'
                  }}
                >
                  <p className="body-normal" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.6 }}>
                    {role.summary}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px', listStyleType: 'disc' }}>
                    {role.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
