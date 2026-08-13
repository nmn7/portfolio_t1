import { useState, useEffect } from 'react';
import Loader from '../components/ui/Loader';
import CustomCursor from '../components/ui/CustomCursor';
import Navbar from '../components/navigation/Navbar';
import Hero from '../sections/Hero/Hero';
import MyStory from '../sections/About/MyStory';
import FeaturedProjects from '../sections/Work/FeaturedProjects';
import ImpactDashboard from '../sections/About/ImpactDashboard';
import TechLandscape from '../sections/Capabilities/TechLandscape';
import Experience from '../sections/Work/Experience';
import Certifications from '../sections/Work/Certifications';
import Contact from '../sections/Contact/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'engineer' | 'consultant'>('engineer');

  useEffect(() => {
    if (viewMode === 'consultant') {
      document.body.classList.add('mode-consultant');
    } else {
      document.body.classList.remove('mode-consultant');
    }
  }, [viewMode]);

  useEffect(() => {
    // Scroll progress listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Observe all main sections
    const elements = document.querySelectorAll('main > section, .reveal-on-scroll');
    elements.forEach((el) => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="app-container">
          {/* Custom Trail Cursor */}
          <CustomCursor />

          {/* Top Scroll Indicator */}
          <div className="scroll-progress-container" aria-hidden="true">
            <div 
              className="scroll-progress-bar" 
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Sticky Navigation */}
          <Navbar viewMode={viewMode} setViewMode={setViewMode} />

          {/* Main Layout Sections */}
          <main style={{ padding: '0 24px' }}>
            {/* Hero & Stats */}
            <Hero />
            
            {/* Career Timeline */}
            <MyStory />

            {/* Immersive Projects Case Studies */}
            <FeaturedProjects viewMode={viewMode} />

            {/* ROI Metrics Dashboard */}
            <ImpactDashboard />

            {/* Tech Cluster Constellation */}
            <TechLandscape viewMode={viewMode} />


            {/* Roles Accordions */}
            <Experience />

            <Certifications />

            {/* Cinematic Contact Footer */}
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
