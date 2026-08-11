import { useEffect, useState } from 'react';
import useMagnetic from '../hooks/useMagnetic';
import { Mail, Download, Clock } from 'lucide-react';

export default function Contact() {
  const [localTime, setLocalTime] = useState('');
  const [typedText, setTypedText] = useState('');

  const emailRef = useMagnetic(0.2) as React.RefObject<HTMLAnchorElement>;
  const linkedinRef = useMagnetic(0.2) as React.RefObject<HTMLAnchorElement>;
  const githubRef = useMagnetic(0.2) as React.RefObject<HTMLAnchorElement>;
  const resumeRef = useMagnetic(0.2) as React.RefObject<HTMLAnchorElement>;

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };

      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetText = "Let's build intelligent products together!";
    let index = 0;
    let isDeleting = false;
    let timer: number;

    const tick = () => {
      if (!isDeleting) {
        setTypedText(targetText.slice(0, index + 1));
        index++;
        
        if (index === targetText.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 3000);
          return;
        }
        
        timer = setTimeout(tick, 70 + Math.random() * 50);
      } else {
        setTypedText(targetText.slice(0, index - 1));
        index--;
        
        if (index === 0) {
          isDeleting = false;
          timer = setTimeout(tick, 1000);
          return;
        }
        
        timer = setTimeout(tick, 40);
      }
    };

    tick();

    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" data-section="contact" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '40px' }}>

      {/* Large Cinematic CTA */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '36px',
          padding: '80px 0'
        }}
      >
        <span style={{ color: '#3B82F6', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Get In Touch
        </span>

        <h1
          className="title-large"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            maxWidth: '950px',
            lineHeight: 1.1,
            background: 'linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            minHeight: '1.2em'
          }}
        >
          {typedText}
          <span 
            style={{ 
              color: '#3B82F6', 
              animation: 'cursor-blink 0.8s step-end infinite',
              WebkitTextFillColor: '#3B82F6',
              marginLeft: '2px',
              fontWeight: 300
            }}
          >
            |
          </span>
        </h1>

        {/* Connection Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a
            ref={emailRef}
            href="mailto:namanmehta711@gmail.com"
            className="btn btn-primary"
            data-cursor="pointer"
            data-magnetic="true"
            style={{ padding: '16px 32px' }}
          >
            <Mail size={18} />
            Email Naman
          </a>

          <a
            ref={linkedinRef}
            href="https://linkedin.com/in/naman711"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            data-cursor="pointer"
            data-magnetic="true"
            style={{ padding: '16px 32px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>

          <a
            ref={githubRef}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            data-cursor="pointer"
            data-magnetic="true"
            style={{ padding: '16px 32px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            GitHub
          </a>

          <a
            ref={resumeRef}
            href="/Naman_Mehta_Resume.pdf"
            download
            className="btn btn-secondary"
            data-cursor="pointer"
            data-magnetic="true"
            style={{ padding: '16px 32px' }}
          >
            <Download size={18} />
            Get Resume
          </a>
        </div>
      </div>

      {/* Footer Meta Details */}
      <div
        style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          width: '100%',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}
      >
        <div>
          © {currentYear} Naman Mehta. All Rights Reserved.
        </div>

        {/* Ticking clock showing IST Time zone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={14} style={{ color: '#3B82F6' }} />
          <span>Local Time:</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'monospace' }}>
            {localTime}
          </span>
          <span>(IST / GMT+5:30)</span>
        </div>
      </div>

    </section>
  );
}
