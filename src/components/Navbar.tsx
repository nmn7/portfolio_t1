import { useEffect, useState } from 'react';
import useMagnetic from '../hooks/useMagnetic';
import { Download } from 'lucide-react';

interface NavbarProps {
  viewMode: 'engineer' | 'consultant';
  setViewMode: (mode: 'engineer' | 'consultant') => void;
}

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const resumeBtnRef = useMagnetic(0.25) as React.RefObject<HTMLAnchorElement>;

  const navItems = [
    { label: 'Work', href: '#story', id: 'story' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Capabilities', href: '#landscape', id: 'landscape' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    // Detect scroll for background changes
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Detect intersecting section to highlight Navbar links
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Target center viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '16px 24px' : '28px 24px',
        transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          borderRadius: '40px',
          border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
          backgroundColor: viewMode === 'consultant' ? (isScrolled ? 'rgba(243, 243, 248, 0.9)' : 'rgba(243, 243, 248, 0.65)') : (isScrolled ? 'rgba(11, 11, 11, 0.75)' : 'rgba(11, 11, 11, 0.45)'),
          boxShadow: viewMode === 'consultant' ? (isScrolled ? '0 10px 30px rgba(31, 31, 46, 0.04)' : 'none') : (isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.5)' : 'none'),
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          data-cursor="pointer"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: '1.4rem',
            color: viewMode === 'consultant' ? '#1F1F2E' : '#F5F5F5',
            textDecoration: 'none',
            letterSpacing: '-0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          NM
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3B82F6', display: 'inline-block' }} />
        </a>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              listStyle: 'none',
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  data-cursor="pointer"
                  style={{
                    color: activeSection === item.id ? (viewMode === 'consultant' ? '#2563EB' : '#F5F5F5') : (viewMode === 'consultant' ? '#1F1F2E' : '#A3A3A3'),
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '25%',
                        width: '50%',
                        height: '2px',
                        backgroundColor: viewMode === 'consultant' ? '#2563EB' : '#3B82F6',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Reading Mode Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '30px',
              border: '1px solid var(--border-color)',
              marginRight: '8px'
            }}
          >
            <button
              onClick={() => setViewMode('engineer')}
              data-cursor="pointer"
              style={{
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: viewMode === 'engineer' ? '#3B82F6' : 'transparent',
                color: viewMode === 'engineer' ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              ⚙️ Eng
            </button>
            <button
              onClick={() => setViewMode('consultant')}
              data-cursor="pointer"
              style={{
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: viewMode === 'consultant' ? '#3B82F6' : 'transparent',
                color: viewMode === 'consultant' ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              💼 Cons
            </button>
          </div>

          {/* CTA Download Resume */}
          <a
            ref={resumeBtnRef}
            href="/Naman_Mehta_Resume.pdf"
            download
            className="btn btn-secondary"
            data-cursor="pointer"
            data-magnetic="true"
            style={{
              padding: '8px 16px',
              fontSize: '0.85rem',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: viewMode === 'consultant' ? '1px solid #1F1F2E' : '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: viewMode === 'consultant' ? '#1F1F2E' : 'rgba(255, 255, 255, 0.04)',
              color: viewMode === 'consultant' ? '#F3F3F8' : '#F5F5F5',
            }}
          >
            <Download size={14} style={{ color: viewMode === 'consultant' ? '#F3F3F8' : '#F5F5F5' }} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
