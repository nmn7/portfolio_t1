import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import FeaturedProjects from './components/FeaturedProjects';
import ImpactDashboard from './components/ImpactDashboard';
import TechLandscape from './components/TechLandscape';
import EngineeringPlayground from './components/EngineeringPlayground';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import WritingThoughts from './components/WritingThoughts';
import Contact from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

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
          <Navbar />

          {/* Main Layout Sections */}
          <main style={{ padding: '0 24px' }}>
            {/* Hero & Stats */}
            <Hero />
            
            {/* Career Timeline */}
            <MyStory />

            {/* Immersive Projects Case Studies */}
            <FeaturedProjects />

            {/* ROI Metrics Dashboard */}
            <ImpactDashboard />

            {/* Tech Cluster Constellation */}
            <TechLandscape />

            {/* Architecture Flow Simulator */}
            <EngineeringPlayground />

            {/* Roles Accordions */}
            <Experience />

            {/* Badges Grid */}
            <Certifications />

            {/* Publishing Board */}
            <WritingThoughts />

            {/* Cinematic Contact Footer */}
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
