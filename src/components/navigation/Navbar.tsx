import { useEffect, useState } from 'react';
import useMagnetic from '../../hooks/useMagnetic';
import { Download, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../data/site';

interface NavbarProps {
  viewMode: 'engineer' | 'consultant';
  setViewMode: (mode: 'engineer' | 'consultant') => void;
}

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resumeBtnRef = useMagnetic(0.25) as React.RefObject<HTMLAnchorElement>;

  const navItems = NAV_ITEMS;

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
      className="animate-slide-down"
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
        {/* Left: Logo & Theme Switch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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

          {/* Theme Toggle (Dark / Light Switch) */}
          <div
            onClick={() => setViewMode(viewMode === 'engineer' ? 'consultant' : 'engineer')}
            data-cursor="pointer"
            aria-label="Toggle theme mode"
            style={{
              width: '56px',
              height: '28px',
              borderRadius: '14px',
              backgroundColor: viewMode === 'engineer' ? '#000000' : '#e4e4e7',
              border: viewMode === 'engineer' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.08)',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0 6px',
              boxSizing: 'border-box',
              transition: 'background-color 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Moon Icon (Left) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '14px',
              height: '14px',
              color: '#ffffff',
              opacity: viewMode === 'engineer' ? 1 : 0,
              transition: 'opacity 200ms ease'
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9z" />
              </svg>
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Sun Icon (Right) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '14px',
              height: '14px',
              color: '#ffffff',
              opacity: viewMode === 'consultant' ? 1 : 0,
              transition: 'opacity 200ms ease'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>

            {/* Sliding circular knob */}
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                position: 'absolute',
                top: '2px',
                left: viewMode === 'engineer' ? '30px' : '2px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                transition: 'left 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 2
              }}
            />
          </div>
        </div>

        {/* Links */}
        <div
          className="nav-links-desktop"
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



          {/* CTA Download Resume */}
          <a
            ref={resumeBtnRef}
            href={`${import.meta.env.BASE_URL}Naman_Mehta_Resume.pdf`}
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

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          style={{
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: viewMode === 'consultant' ? '#1F1F2E' : '#F5F5F5',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation overlay menu */}
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          backgroundColor: viewMode === 'consultant' ? 'rgba(243, 243, 248, 0.98)' : 'rgba(11, 11, 11, 0.98)',
          border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: activeSection === item.id ? (viewMode === 'consultant' ? '#2563EB' : '#3B82F6') : (viewMode === 'consultant' ? '#1F1F2E' : '#A3A3A3'),
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'block',
                  padding: '8px 0',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Download Resume CTA */}
        <a
          href={`${import.meta.env.BASE_URL}Naman_Mehta_Resume.pdf`}
          download
          onClick={() => setIsMobileMenuOpen(false)}
          className="btn btn-secondary"
          style={{
            padding: '12px 20px',
            fontSize: '0.9rem',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: viewMode === 'consultant' ? '1px solid #1F1F2E' : '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: viewMode === 'consultant' ? '#1F1F2E' : 'rgba(255, 255, 255, 0.04)',
            color: viewMode === 'consultant' ? '#F3F3F8' : '#F5F5F5',
            marginTop: '8px'
          }}
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
    </nav>
  );
}
