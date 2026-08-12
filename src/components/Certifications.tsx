import { Award, Cloud, Settings, Cpu } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  id: string;
  color: string;
  glow: string;
  icon: React.ReactNode;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      id: 'AWS-CCP-8798',
      color: '#FF9900',
      glow: 'rgba(255, 153, 0, 0.15)',
      icon: <Cloud size={24} />
    },
    {
      title: 'SAFe Practitioner',
      issuer: 'Scaled Agile, Inc.',
      id: 'SAFE-SP-2342',
      color: '#3B82F6',
      glow: 'rgba(59, 130, 246, 0.15)',
      icon: <Cpu size={24} />
    },
    {
      title: 'Automation Anywhere Certified Advanced RPA Professional',
      issuer: 'Automation Anywhere',
      id: 'AA-ADV-4592',
      color: '#8B5CF6',
      glow: 'rgba(139, 92, 246, 0.15)',
      icon: <Settings size={24} />
    },
    {
      title: 'Blue Prism Certified Developer',
      issuer: 'Blue Prism',
      id: 'BP-DEV-3112',
      color: '#06B6D4',
      glow: 'rgba(6, 182, 212, 0.15)',
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="certifications" data-section="certifications" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Validated Credentials
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Certifications
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px' }}>
          Industry-standard credentials validating cloud architecture, enterprise agile delivery, and intelligent automation capabilities.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          width: '100%',
        }}
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              border: '1px solid var(--border-color)',
              background: 'var(--glass-bg)',
              boxShadow: `0 15px 40px ${cert.glow}`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Corner Decorative Ring Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${cert.glow} 0%, transparent 70%)`,
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: cert.color
              }}
            >
              {cert.icon}
            </div>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '6px', lineHeight: 1.4 }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                {cert.issuer}
              </p>

              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--glass-bg)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)'
                }}
              >
                ID: {cert.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
