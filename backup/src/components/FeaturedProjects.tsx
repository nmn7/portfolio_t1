import { useState } from 'react';
import { ArrowRight, Layers, ShieldAlert, Cpu, BarChart3, Database } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  heroMetric: string;
  metricsLabel: string;
  techs: string[];
  problem: string;
  discovery: string;
  constraints: string;
  implementation: string;
  challenges: string;
  lessons: string;
  architecture: React.ReactNode;
}

export default function FeaturedProjects() {
  const [activeProj, setActiveProj] = useState<string>('bms');

  const projects: CaseStudy[] = [
    {
      id: 'bms',
      title: 'Bristol Myers Squibb',
      subtitle: 'IRP + MFN Pricing Intelligence System',
      industry: 'Pharmaceuticals',
      heroMetric: 'Real-time',
      metricsLabel: 'International Reference Pricing Analysis',
      techs: ['Claude MCP', 'AWS Redshift', 'AWS Glue', 'Claude 3.5 Sonnet', 'Python'],
      problem: 'Pharma pricing managers struggled with delayed, manual calculations of International Reference Pricing (IRP) and Most Favored Nation (MFN) drug pricing compliance across global markets, leading to regulatory risks and revenue leakages.',
      discovery: 'Managers required secure access to legacy SQL databases containing market historical sales data, combined with real-time regulatory compliance schemas.',
      constraints: 'Database access must follow strict enterprise data governance guidelines. LLMs cannot have direct, unmitigated database query permissions.',
      implementation: 'Engineered a specialized Claude Model Context Protocol (MCP) server that acts as a secure semantic gateway. When a user asks natural language questions, Claude triggers the MCP server to build and execute parameterized SQL queries on AWS Redshift, verifying compliance in seconds.',
      challenges: 'Handling schema mismatch across multi-market historical datasets. Resolved by writing a pre-processing AWS Glue integration to standardize pricing variables.',
      lessons: 'Semantic query compilation via MCP increases analytical velocity by 10x compared to standard dashboard BI reporting.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          {/* Nodes */}
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Claude Client</text>
          
          <rect x="140" y="70" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Claude MCP Server</text>
          
          <rect x="280" y="30" width="100" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="330" y="55" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Redshift DW</text>

          <rect x="280" y="110" width="100" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="330" y="135" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">AWS Glue / ETL</text>

          {/* Links */}
          <line x1="90" y1="90" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 230 90 L 255 90 L 255 50 L 280 50" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
          <path d="M 230 90 L 255 90 L 255 130 L 280 130" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />

          {/* Labels */}
          <text x="115" y="85" fill="#A3A3A3" fontSize="8" textAnchor="middle">Schema</text>
          <text x="255" y="25" fill="#A3A3A3" fontSize="8" textAnchor="middle">SQL Query</text>
          <text x="255" y="155" fill="#A3A3A3" fontSize="8" textAnchor="middle">Data Feed</text>
        </svg>
      )
    },
    {
      id: 'smartvision',
      title: 'Smart Vision',
      subtitle: 'Manufacturing Computer Vision at the Edge',
      industry: 'Manufacturing & Tech',
      heroMetric: '45m → 1m',
      metricsLabel: 'Cleaning Inspection Time & $5-6M Savings',
      techs: ['AWS IoT Greengrass', 'SageMaker', 'React', 'Node.js', 'OpenCV'],
      problem: 'Manual quality control of silicon wafer cleaning cycles required 45 minutes of microscope inspect cycles per batch, bottlenecking manufacturing output.',
      discovery: 'Identified that edge nodes could capture high-resolution imagery during the chemical spray sequence, detecting residue clusters via neural networks.',
      constraints: 'Factory floor had poor internet connectivity; latency was unacceptable for cloud-based inference.',
      implementation: 'Designed a localized computer vision inference container. Models trained in AWS SageMaker were deployed onto physical edge servers using AWS IoT Greengrass. The system runs OpenCV filters followed by segmentation models, feeding a local React web dashboard.',
      challenges: 'Model accuracy drift due to camera lens fogging on chemical lines. Mitigated by designing an automated self-cleaning air nozzle triggered by drift alerts.',
      lessons: 'Edge computing is paramount in physical operations. Bringing intelligence to the data source removes network bottlenecks.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">IP Camera</text>
          
          <rect x="130" y="70" width="110" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="185" y="90" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">IoT Greengrass</text>
          <text x="185" y="102" fill="#3B82F6" fontSize="8" textAnchor="middle">SageMaker Model</text>
          
          <rect x="290" y="70" width="90" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="335" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">React Monitor</text>

          <line x1="90" y1="90" x2="130" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="240" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          
          <text x="110" y="85" fill="#A3A3A3" fontSize="8" textAnchor="middle">RTSP</text>
          <text x="265" y="85" fill="#A3A3A3" fontSize="8" textAnchor="middle">WebSockets</text>
        </svg>
      )
    },
    {
      id: 'extract',
      title: 'Extract.AI',
      subtitle: 'Enterprise Document Intelligence OCR',
      industry: 'FinTech & Ops',
      heroMetric: '70% Faster',
      metricsLabel: 'System Integration & $6M Operational Savings',
      techs: ['OCR', 'Python', 'PyTorch', 'AWS Textract', 'FastAPI'],
      problem: 'Manual entry of invoices and vendor service contracts took a 40-person accounting team hours to process, causing delayed payments and billing errors.',
      discovery: 'Document formats varied drastically by vendor, requiring a layout-aware OCR extraction pipeline.',
      constraints: 'Strict regulatory guidelines demanded high extraction accuracy (>99%) before automated accounting updates.',
      implementation: 'Created an intelligent ingestion routing framework. Led a 15-member team to deploy dynamic document templates coupled with custom Transformer layout models that extract key-value fields.',
      challenges: 'Parsing low-resolution scanned PDFs. Resolved by writing a pre-processing image pipeline utilizing binarization and skew-correction filters.',
      lessons: 'Technology integration speed is the ultimate product metric for enterprise SaaS.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Vendor PDF</text>
          
          <rect x="130" y="70" width="110" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Layout-Transformer</text>
          
          <rect x="290" y="70" width="90" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="335" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">ERP Database</text>

          <line x1="90" y1="90" x2="130" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="240" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'crt',
      title: 'Customer Research Tool',
      subtitle: 'Pharma Client Categorization Platform',
      industry: 'Pharmaceuticals',
      heroMetric: 'Multi-Client',
      metricsLabel: 'Deployment (AbbVie, Pfizer, J&J, Teva, Amgen)',
      techs: ['Python', 'Selenium', 'PowerApps', 'SharePoint', 'Azure Functions'],
      problem: 'Sales teams manually searched public portals and clinical databases to classify pharmacy networks, missing critical client opportunities.',
      discovery: 'Identified a need for a unified portal that automatically gathers sales intelligence from diverse web directories.',
      constraints: 'Third-party client platforms had dynamic HTML structures that broke standard web scraper hooks.',
      implementation: 'Deployed a scalable crawler platform driven by Python and Selenium. Constructed an intuitive UI using Microsoft PowerApps, which queries classification jobs via Azure Functions.',
      challenges: 'Handling scraping rate-limits. Resolved by implementing headless browser sessions with dynamic proxy rotation and randomized request sleep intervals.',
      lessons: 'Client-facing tools succeed when integrated directly into the platforms the sales teams already use.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(163,163,163,0.08)" stroke="#A3A3A3" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">PowerApps UI</text>
          
          <rect x="140" y="70" width="90" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Selenium Worker</text>
          
          <rect x="280" y="70" width="100" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="330" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Client Directories</text>

          <line x1="90" y1="90" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="230" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'rakuten',
      title: 'Rakuten Warranty AI',
      subtitle: 'GenAI Manufacturer Validation Platform',
      industry: 'Retail & E-commerce',
      heroMetric: '30% Less',
      metricsLabel: 'Manual Warranty Claims Verification Effort',
      techs: ['GenAI', 'LLM Agent', 'Node.js', 'TypeScript', 'Vector DB'],
      problem: 'Validating device claims against manufacturer warranty descriptions was entirely manual, creating long customer queues and return processing delays.',
      discovery: 'Large language models could analyze unstructured warranty pdf docs and identify validation requirements.',
      constraints: 'Strict SLA constraints: claim assessment must happen within 10 seconds.',
      implementation: 'Built a warranty extraction RAG pipeline. Using semantic searches over device manuals, it provides clean extraction of warranty variables, verifying claims automatically.',
      challenges: 'Minimizing LLM hallucination of warranty expiration timelines. Resolved by feeding structured prompt models strictly bound to retrieved manual context.',
      lessons: 'Constrained prompts are vital when building deterministic systems with LLMs.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Warranty Claim</text>
          
          <rect x="140" y="70" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">RAG Prompt</text>
          
          <rect x="280" y="70" width="100" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="330" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">LLM Inference</text>

          <line x1="90" y1="90" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="230" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'controltower',
      title: 'Digital Control Tower',
      subtitle: 'Manufacturing Real-time Analytics System',
      industry: 'Manufacturing',
      heroMetric: 'Live IoT',
      metricsLabel: 'Plant intelligence and anomaly tracking',
      techs: ['React', 'Node.js', 'Socket.io', 'InfluxDB', 'Docker'],
      problem: 'Plant operations lacked visibility, relying on end-of-day sheets that delayed crucial safety and efficiency anomaly detections.',
      discovery: 'Identified a need for a live dashboard displaying sub-second sensor metrics from production machinery.',
      constraints: 'System must process up to 5,000 sensor pulses per second with minimal dashboard rendering lag.',
      implementation: 'Engineered a time-series ingestion worker using Node.js and InfluxDB. Configured a React frontend featuring optimized chart renderings updated via web sockets.',
      challenges: 'React virtual DOM re-renders crashing browsers under high data velocity. Resolved by decoupling the data pipeline from React state, updating Canvas graphs directly.',
      lessons: 'Sometimes standard state management is the bottleneck. Direct DOM modifications are occasionally necessary for raw speed.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">IoT Sensors</text>
          
          <rect x="140" y="70" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">InfluxDB Cache</text>
          
          <rect x="280" y="70" width="100" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="330" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Canvas Graph</text>

          <line x1="90" y1="90" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="230" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  const currentProj = projects.find(p => p.id === activeProj) || projects[0];

  return (
    <section id="projects" data-section="projects" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '60px' }}>
        <h2 className="title-section">
          Featured Projects
        </h2>
        <p className="body-lead" style={{ maxWidth: '600px' }}>
          Immersive case studies representing core technical architectures, operational constraints, and commercial scale.
        </p>
      </div>

      <div className="grid-layout" style={{ width: '100%', alignItems: 'stretch' }}>
        
        {/* Project Selector List (Left Side) */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {projects.map((proj) => {
            const isSelected = activeProj === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProj(proj.id)}
                className="glass-panel"
                data-cursor="pointer"
                data-project={proj.id}
                style={{
                  width: '100%',
                  padding: '20px',
                  textAlign: 'left',
                  border: isSelected ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.04)',
                  backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.03)' : 'rgba(11, 11, 11, 0.4)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  outline: 'none',
                  transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span style={{ fontSize: '0.8rem', color: isSelected ? '#3B82F6' : '#A3A3A3', fontWeight: 600, textTransform: 'uppercase' }}>
                    {proj.industry}
                  </span>
                  <ArrowRight size={14} style={{ color: isSelected ? '#3B82F6' : 'transparent', transition: 'color 0.3s ease' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: isSelected ? '#F5F5F5' : '#A3A3A3', transition: 'color 0.3s ease' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: isSelected ? '#A3A3A3' : '#737373', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  {proj.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Panel (Right Side) */}
        <div style={{ gridColumn: 'span 8' }} className="glass-panel">
          <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Header / Hero Metric Banner */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '24px' }}>
              <div>
                <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Case Study
                </span>
                <h2 style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '8px' }}>
                  {currentProj.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#A3A3A3' }}>
                  {currentProj.subtitle}
                </p>
              </div>

              {/* Big Metric Badge */}
              <div 
                style={{
                  padding: '16px 24px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  minWidth: '180px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22C55E', fontFamily: "'Outfit', sans-serif" }}>
                  {currentProj.heroMetric}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#A3A3A3', marginTop: '4px', lineHeight: 1.3 }}>
                  {currentProj.metricsLabel}
                </div>
              </div>
            </div>

            {/* Structured Content Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Row 1: Problem & Constraints */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#F5F5F5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <ShieldAlert size={14} style={{ color: '#EF4444' }} />
                    The Problem
                  </h4>
                  <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                    {currentProj.problem}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#F5F5F5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Layers size={14} style={{ color: '#3B82F6' }} />
                    Constraints
                  </h4>
                  <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                    {currentProj.constraints}
                  </p>
                </div>
              </div>

              {/* Row 2: Discovery & Lessons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#F5F5F5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Layers size={14} style={{ color: '#06B6D4' }} />
                    Discovery
                  </h4>
                  <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                    {currentProj.discovery}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#F5F5F5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <BarChart3 size={14} style={{ color: '#22C55E' }} />
                    Key Lessons
                  </h4>
                  <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                    {currentProj.lessons}
                  </p>
                </div>
              </div>

              {/* Row 3: Architecture Diagram Panel */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#F5F5F5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Database size={14} style={{ color: '#8B5CF6' }} />
                  System Architecture
                </h4>
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '180px'
                  }}
                >
                  {currentProj.architecture}
                </div>
              </div>

              {/* Row 4: Implementation details */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#F5F5F5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Cpu size={14} style={{ color: '#3B82F6' }} />
                  Implementation & Core Tech
                </h4>
                <p className="body-normal" style={{ fontSize: '0.95rem', marginBottom: '16px' }}>
                  {currentProj.implementation}
                </p>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentProj.techs.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.8rem',
                        color: '#F5F5F5'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
