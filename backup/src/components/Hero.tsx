import { useEffect, useState, useRef } from 'react';
import useMagnetic from '../hooks/useMagnetic';
import { ArrowRight, Download, Award, ShieldCheck, Activity, Database, Cpu } from 'lucide-react';

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

  const visualRef = useRef<SVGSVGElement>(null);

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

  // Simple mouse move reaction for the visual vector portrait
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!visualRef.current) return;
      const rect = visualRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const elements = visualRef.current.querySelectorAll('.parallax-node');
      elements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        (el as SVGElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        (el as SVGElement).style.transition = 'transform 0.2s ease-out';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '8+ Years', label: 'Experience', icon: <Activity size={16} /> },
    { value: '25+', label: 'Enterprise Projects', icon: <Database size={16} /> },
    { value: '$12M+', label: 'Business Impact', icon: <Award size={16} /> },
    { value: '3', label: 'Industries Covered', icon: <Cpu size={16} /> },
    { value: 'AWS', label: 'Certified', icon: <ShieldCheck size={16} /> }
  ];

  return (
    <section id="hero" data-section="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '140px 24px 60px 24px' }}>

      {/* Aurora Backdrop */}
      <div className="aurora-bg">
        <div className="aurora-circle aurora-1" />
        <div className="aurora-circle aurora-2" />
        <div className="aurora-circle aurora-3" />
      </div>

      <div className="grid-layout" style={{ width: '100%', flex: 1, alignItems: 'center' }}>

        {/* Left Content */}
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '28px', textAlign: 'left' }}>

          {/* Badge */}
          <div
            data-animate="fade-in"
            style={{
              alignSelf: 'flex-start',
              padding: '6px 14px',
              borderRadius: '30px',
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#3B82F6',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block', boxShadow: '0 0 8px #22C55E' }} />
            Available for AI Engineering & Product Roles
          </div>

          {/* Name */}
          <h1 className="title-large" style={{ margin: 0 }} data-reveal="true">
            Naman Mehta
          </h1>

          {/* Subtitle with vertical slide-fade effect */}
          <div style={{ height: '50px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
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
          <p className="body-lead" style={{ maxWidth: '600px', margin: 0 }} data-animate="fade-in">
            I design and build AI-powered enterprise products that solve complex business problems across Pharma, Retail, and Manufacturing—combining product thinking, cloud engineering, and intelligent automation.
          </p>

          {/* Call to Actions */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }} data-animate="fade-in">
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
              href="/Naman_Mehta_Resume.pdf"
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

        {/* Right Portrait Graphic */}
        <div
          style={{
            gridColumn: 'span 5',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          }}
          data-animate="fade-in"
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '1/1',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              position: 'relative',
              background: 'radial-gradient(circle, rgba(11,11,11,0.2) 0%, rgba(59,130,246,0.05) 100%)',
              boxShadow: '0 30px 100px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(59, 130, 246, 0.1)'
            }}
          >
            {/* Animated Interactive SVG Tech Art (acting as organic profile portrait) */}
            <svg
              ref={visualRef}
              viewBox="0 0 200 200"
              style={{ width: '75%', height: '75%', overflow: 'visible' }}
            >
              {/* Outer rotating orbit lines */}
              <circle cx="100" cy="100" r="70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
              <circle cx="100" cy="100" r="90" stroke="rgba(59,130,246,0.05)" strokeWidth="1" fill="none" strokeDasharray="5 15" />

              {/* Parallax node clusters */}
              <g className="parallax-node" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                <circle cx="100" cy="50" r="5" fill="#3B82F6" opacity="0.8" filter="drop-shadow(0 0 5px #3B82F6)" />
                <circle cx="50" cy="130" r="4" fill="#8B5CF6" opacity="0.7" />
                <circle cx="150" cy="130" r="4" fill="#06B6D4" opacity="0.7" />

                <line x1="100" y1="50" x2="50" y2="130" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <line x1="50" y1="130" x2="150" y2="130" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <line x1="150" y1="130" x2="100" y2="50" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              </g>

              <g className="parallax-node" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                <circle cx="100" cy="100" r="15" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
                <path d="M93 100 L107 100 M100 93 L100 107" stroke="#3B82F6" strokeWidth="2" />

                <circle cx="70" cy="80" r="3" fill="#22C55E" opacity="0.8" />
                <circle cx="130" cy="80" r="3" fill="#3B82F6" opacity="0.8" />
                <circle cx="100" cy="150" r="3" fill="#8B5CF6" opacity="0.8" />

                <line x1="100" y1="100" x2="70" y2="80" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="100" y1="100" x2="130" y2="80" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="100" y1="100" x2="100" y2="150" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Glowing decorative rings */}
              <circle cx="100" cy="100" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
              <circle cx="100" cy="100" r="30" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" fill="none" strokeDasharray="1 5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Below */}
      <div
        data-animate="fade-in"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '60px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3B82F6',
              }}
            >
              {stat.icon}
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F5F5F5', fontFamily: "'Outfit', sans-serif" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A3A3A3', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
