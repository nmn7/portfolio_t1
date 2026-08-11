import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export default function Experience() {
  const [expandedRole, setExpandedRole] = useState<string | null>('current');

  const roles: Role[] = [
    {
      id: 'srm',
      company: 'SRM Technologies',
      title: 'Associate Project Manager / Forward Deployed Engineer',
      period: 'Feb 2025 - Current',
      location: 'Bengaluru, India',
      summary:
        'Building enterprise GenAI products using Python, LLMs, LangChain, and AWS to automate complex business workflows.',
      highlights: [
        'Built Python GenAI platform with LangChain, OpenAI & AWS. Designed resilient prompt engineering with LLM fallback.'
      ]
    },
    {
      id: 'zs-crt',
      company: 'ZS Associates',
      title: 'Product Lead / Senior Consultant',
      period: 'Jan 2023 - Feb 2025',
      location: 'Gurugram, India',
      summary:
        'Led enterprise automation products for global pharmaceutical organizations.',
      highlights: [
        'Reduced manual validation effort by 90%. Led cross-functional product delivery.',
        'Owned Agile roadmap and product releases.'
      ]
    },
    {
      id: 'zs-nlp',
      company: 'ZS Associates',
      title: 'NLP Solution Lead / Consultant',
      period: 'Jan 2022 - Dec 2022',
      location: 'Gurugram, India',
      summary:
        'Delivered AI-powered NLP solutions with measurable commercial impact.',
      highlights: [
        'Delivered $3M+ annual business value. Built NLP engine for HCP engagement insights.',
        'Improved sales effectiveness with AI recommendations.'
      ]
    },
    {
      id: 'zs-extract-ai',
      company: 'ZS Associates',
      title: 'Intelligent Automation Product Lead',
      period: 'Jul 2021 - Dec 2021',
      location: 'Gurugram, India',
      summary:
        'Led AI document automation products for Top 10 global pharma clients.',
      highlights: [
        'Saved $6M by reducing integration time by 70%.Led a 15+ member AI delivery team.',
        'Delivered 30% cost reduction and 300% revenue growth.'
      ]
    },
    {
      id: 'zs-digital-data',
      company: 'ZS Associates',
      title: 'Product Owner – Intelligent Data Workforce',
      period: 'Jan 2021 - Sep 2021',
      location: 'Gurugram, India',
      summary:
        'Owned AI-powered master data products for Life Sciences organizations.',
      highlights: [
        'Improved duplicate detection by 3×.Achieved 95%+ AI matching accuracy.',
        'Owned product lifecycle end-to-end.'
      ]
    },
    {
      id: 'zs-survey-link',
      company: 'ZS Associates',
      title: 'Associate Consultant / Developer',
      period: 'Aug 2019 - Dec 2020',
      location: 'Gurugram, India',
      summary:
        'Built intelligent automation solutions for enterprise quality assurance.',
      highlights: [
        'Reduced execution time by 50%. Cut manual effort by 40%.',
        'Built automation using Python & RPA.'
      ]
    },
    {
      id: 'zs-sales-rpa',
      company: 'ZS Associates',
      title: 'Associate / Developer',
      period: 'Jun 2018 - Jul 2019',
      location: 'Gurugram, India',
      summary:
        'Delivered enterprise RPA solutions for global pharmaceutical operations.',
      highlights: [
        'Automated reporting across 33+ markets.Saved $280K annually.',
        'Improved data accuracy from 76% to 98%.'
      ]
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <section id="experience" data-section="experience" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '60px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Professional Journey
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Work Experience
        </h2>
        <p className="body-lead" style={{ maxWidth: '600px' }}>
          Over eight years of experience building, deploying, and supporting enterprise software systems in pharma, retail, and manufacturing.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        {roles.map((role) => {
          const isExpanded = expandedRole === role.id;
          return (
            <div
              key={role.id}
              className="glass-panel"
              style={{
                width: '100%',
                border: isExpanded ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                backgroundColor: isExpanded ? 'rgba(59, 130, 246, 0.02)' : 'rgba(11, 11, 11, 0.4)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Card Header (Always Visible) */}
              <button
                onClick={() => toggleExpand(role.id)}
                data-cursor="pointer"
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isExpanded ? '#3B82F6' : '#A3A3A3',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#F5F5F5' }}>
                      {role.title}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#3B82F6', fontWeight: 500, marginTop: '2px' }}>
                      {role.company}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  {/* Meta details on wide viewports */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.85rem', color: '#A3A3A3' }}>
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
                    <ChevronDown size={20} style={{ color: '#A3A3A3' }} />
                  )}
                </div>
              </button>

              {/* Expandable Body */}
              {isExpanded && (
                <div
                  style={{
                    padding: '0 24px 24px 84px',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    paddingTop: '20px',
                    animation: 'slide-fade-in 0.3s ease-out'
                  }}
                >
                  <p className="body-normal" style={{ fontSize: '0.95rem', color: '#F5F5F5', marginBottom: '16px', lineHeight: 1.6 }}>
                    {role.summary}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px', listStyleType: 'disc' }}>
                    {role.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: '#A3A3A3', lineHeight: 1.5 }}>
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
