import { useEffect, useRef, useState } from 'react';
import { Briefcase, Cpu, Cloud, BrainCircuit, Terminal, Milestone } from 'lucide-react';

interface TimelineStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  impact: string;
}

const STEPS: TimelineStep[] = [
  {
    id: 'problems',
    title: 'Business Problems',
    icon: <Briefcase size={20} />,
    subtitle: 'Where everything begins',
    description: 'Began by directly analyzing core operational leaks in enterprise settings. Rather than writing code immediately, focused on understanding the financial impact, user bottlenecks, and manual overhead in Pharma, Finance, and Retail.',
    impact: 'Developed an innate business-first mindset, focusing strictly on delivering measurable ROI.'
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: <Terminal size={20} />,
    subtitle: 'Scaling efficiency',
    description: 'Mastered Intelligent Automation using Python scripting, Selenium, PowerApps, and enterprise RPA tools (Automation Anywhere, Blue Prism). Designed self-healing workflows to process thousands of transactions without human error.',
    impact: 'Automated manual workloads, reducing process execution times from hours to seconds.'
  },
  {
    id: 'cloud',
    title: 'Cloud Systems',
    icon: <Cloud size={20} />,
    subtitle: 'Architecting scalable infrastructure',
    description: 'Transitioned automation to serverless and distributed environments. Architected secure, highly-available cloud data pipelines using AWS Lambda, Glue, Redshift, and S3 to process large enterprise datasets.',
    impact: 'Built cloud pipelines handling millions of data points with 99.99% system availability.'
  },
  {
    id: 'ai',
    title: 'Applied AI & Vision',
    icon: <Cpu size={20} />,
    subtitle: 'Bringing intelligence to the edge',
    description: 'Developed and integrated computer vision models (SageMaker) with physical edge hardware (AWS IoT Greengrass). Built custom vision inspection systems directly inside manufacturing environments.',
    impact: 'Deployed real-time vision pipelines, saving millions in manufacturing scrap costs.'
  },
  {
    id: 'genai',
    title: 'Generative AI & MCP',
    icon: <BrainCircuit size={20} />,
    subtitle: 'The cognitive agent era',
    description: 'Engineered advanced RAG pipelines, prompt systems, and autonomous agent frameworks. Built specialized Model Context Protocol (MCP) servers allowing LLMs to interact securely with legacy enterprise databases.',
    impact: 'Delivered conversational pricing intelligence and autonomous warranty processing platforms.'
  },
  {
    id: 'forward',
    title: 'Forward Deployed Engineering',
    icon: <Milestone size={20} />,
    subtitle: 'Bridging the product gap',
    description: 'Operating at the intersection of product, engineering, and client operations. Deploying directly alongside cross-functional enterprise teams to diagnose constraints, design system architectures, and deliver custom, production-grade products rapidly.',
    impact: 'Led cross-functional client integrations driving $12M+ in validated business value.'
  }
];

export default function MyStory() {
  const [activeStep, setActiveStep] = useState<string>('problems');
  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // active when step is around center viewport
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveStep(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Copy the refs object values to a local array inside the effect
    const elementsToObserve = Object.values(stepRefs.current).filter(Boolean) as HTMLDivElement[];
    elementsToObserve.forEach(el => observer.observe(el));

    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="story" data-section="story" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 className="title-section">
          My Story
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px' }}>
          My career evolution has been a deliberate progression from understanding enterprise operations to deploying advanced autonomous systems.
        </p>
      </div>

      <div className="grid-layout" style={{ position: 'relative', alignItems: 'start' }}>

        {/* Left Side: Timeline (8 columns) */}
        <div
          style={{
            gridColumn: 'span 8',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            paddingLeft: '24px'
          }}
        >
          {/* Central Vertical Connector Line */}
          <div
            style={{
              position: 'absolute',
              left: '43px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(255, 255, 255, 0.05) 100%)',
              zIndex: 0
            }}
          />

          {STEPS.map((step, index) => {
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                id={step.id}
                ref={el => { stepRefs.current[step.id] = el; }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  position: 'relative',
                  zIndex: 1,
                  transform: isActive ? 'translateX(10px)' : 'translateX(0)',
                  opacity: isActive ? 1 : 0.4,
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Timeline Icon Badge */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#3B82F6' : 'var(--bg-color)',
                    border: isActive ? '2px fill #3B82F6' : '1px solid var(--border-color)',
                    boxShadow: isActive ? '0 0 15px rgba(59, 130, 246, 0.6)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'all 0.4s ease',
                    flexShrink: 0,
                    marginTop: '12px'
                  }}
                >
                  {step.icon}
                </div>

                {/* Story Content Card */}
                <div
                  className="glass-panel"
                  style={{
                    flex: 1,
                    padding: '24px',
                    border: isActive ? '1px solid rgba(59, 130, 246, 0.25)' : '1px solid var(--border-color)',
                    backgroundColor: isActive ? 'rgba(59, 130, 246, 0.02)' : 'var(--glass-bg)',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{ fontSize: '1.4rem', color: isActive ? '#3B82F6' : 'var(--text-primary)' }}>
                      {step.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, fontStyle: 'italic' }}>
                    {step.subtitle}
                  </h4>

                  <p className="body-normal">
                    {step.description}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '12px',
                      marginTop: '8px',
                      fontSize: '0.9rem',
                      color: '#22C55E',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '6px'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Outcome:</span>
                    <span>{step.impact}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Portrait Image (4 columns) */}
        <div
          style={{
            gridColumn: 'span 4',
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '12px',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--glass-bg)',
              boxShadow: 'var(--shadow-premium)'
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}naman_portrait.png`}
              alt="Naman Mehta Professional Portrait"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                display: 'block',
                filter: 'grayscale(15%) contrast(105%)',
                border: '1px solid var(--border-color)'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
