import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, TrendingUp, Zap, Clock, ShieldCheck, Percent } from 'lucide-react';

interface MetricProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function MetricCard({ target, prefix = '', suffix = '', label, description, icon }: MetricProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500; // 1.5s
          const end = target;
          if (start === end) return;

          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out quad formula
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * (end - start) + start);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="glass-panel"
      data-counter="true"
      style={{
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
        background: 'var(--glass-bg)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div 
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: 'rgba(59, 130, 246, 0.06)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3B82F6',
          }}
        >
          {icon}
        </div>
        <ArrowUpRight size={18} style={{ color: 'var(--text-secondary)' }} />
      </div>

      <div>
        <div 
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.1,
            marginBottom: '8px'
          }}
        >
          {prefix}{count}{suffix}
        </div>
        
        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
          {label}
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ImpactDashboard() {
  return (
    <section id="impact" data-section="impact" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '60px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Proven Results
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Business Impact Dashboard
        </h2>
        <p className="body-lead" style={{ maxWidth: '600px' }}>
          Measurable commercial benefits, pipeline automation gains, and capital reductions delivered across global operations.
        </p>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          width: '100%',
        }}
      >
        <MetricCard
          target={12}
          prefix="$"
          suffix="M+"
          label="Business Value Delivered"
          description="Direct revenue generation and capital expenditure savings optimized via custom engineering platforms."
          icon={<TrendingUp size={22} />}
        />
        <MetricCard
          target={15}
          suffix="+"
          label="Enterprise Solutions"
          description="Production systems designed, tested, and shipped to Fortune 500 corporations and global clients."
          icon={<ShieldCheck size={22} />}
        />
        <MetricCard
          target={70}
          suffix="%"
          label="Integration Time Reduction"
          description="Accelerated vendor onboarding and API database synchronization using semantic orchestration."
          icon={<Zap size={22} />}
        />
        <MetricCard
          target={44} // represents 45 -> 1 min (44 min saved)
          prefix="-"
          suffix="m Saved"
          label="Manufacturing Cycle Time"
          description="Inspection timelines optimized from 45 minutes down to 1 minute via localized Greengrass AI nodes."
          icon={<Clock size={22} />}
        />
        <MetricCard
          target={300}
          suffix="%"
          label="Revenue Growth"
          description="Commercial growth enabled by real-time reference pricing and inventory control systems."
          icon={<ArrowUpRight size={22} />}
        />
        <MetricCard
          target={30}
          suffix="%"
          label="Operational Cost Reduction"
          description="Minimized workflow friction and manual overhead by deploying GenAI autonomous agents."
          icon={<Percent size={22} />}
        />
      </div>
    </section>
  );
}
