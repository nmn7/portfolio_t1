import { useState } from 'react';
import { Cpu, Terminal, Cloud, Monitor, Compass } from 'lucide-react';

interface TechItem {
  name: string;
  desc: string;
}

interface Cluster {
  title: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  items: TechItem[];
}

export default function TechLandscape() {
  const [selectedTech, setSelectedTech] = useState<TechItem>({
    name: 'Model Context Protocol (MCP)',
    desc: 'Bridges language models directly to databases, APIs, and client-side environments securely under enterprise parameters.'
  });

  const clusters: Cluster[] = [
    {
      title: 'Generative AI',
      icon: <Cpu size={18} />,
      color: '#3B82F6',
      glowColor: 'rgba(59, 130, 246, 0.15)',
      items: [
        { name: 'Claude 3.5', desc: 'Core cognitive LLM model used for complex system orchestrations and semantic code transformations.' },
        { name: 'LangChain', desc: 'Constructing robust model chains, agentic state loops, and custom prompt routing engines.' },
        { name: 'AWS Bedrock', desc: 'Hosting secure, private LLM endpoints inside compliance-bound VPC networks.' },
        { name: 'MCP', desc: 'Bridges language models directly to databases, APIs, and client-side environments securely.' },
        { name: 'RAG Pipelines', desc: 'Retrieval Augmented Generation using semantic search vector spaces to query proprietary corporate data.' },
        { name: 'Prompt Engineering', desc: 'Developing strict, parameterized structured prompting architectures to yield deterministic outcomes.' }
      ]
    },
    {
      title: 'Cloud Systems',
      icon: <Cloud size={18} />,
      color: '#22C55E',
      glowColor: 'rgba(34, 197, 94, 0.15)',
      items: [
        { name: 'AWS Cloud', desc: 'Primary cloud suite for host scaling, secure identity management, and serverless compute clusters.' },
        { name: 'AWS Lambda', desc: 'Deploying lightweight, event-driven serverless APIs that scale automatically under load.' },
        { name: 'Redshift DW', desc: 'Managing petabyte-scale data warehousing to power pricing and inventory business intelligence.' },
        { name: 'AWS Glue', desc: 'Automating schema discoverability, raw ETL jobs, and standardizing diverse global data sets.' },
        { name: 'Amazon S3', desc: 'Highly durable file repository storage for documents, image assets, and database backups.' }
      ]
    },
    {
      title: 'Intelligent Automation',
      icon: <Terminal size={18} />,
      color: '#8B5CF6',
      glowColor: 'rgba(139, 92, 246, 0.15)',
      items: [
        { name: 'Python', desc: 'Core programming language utilized for data munging, scripting, NLP, and model fine-tuning.' },
        { name: 'Automation Anywhere', desc: 'Designing enterprise RPA workflows to automate structured legacy desktop operations.' },
        { name: 'Blue Prism', desc: 'Architecting secure, queue-managed software robot workforces inside financial systems.' }
      ]
    },
    {
      title: 'Frontend Engineering',
      icon: <Monitor size={18} />,
      color: '#06B6D4',
      glowColor: 'rgba(6, 182, 212, 0.15)',
      items: [
        { name: 'React', desc: 'Constructing clean, high-performance web dashboards for live sensor visualization and data queries.' },
        { name: 'TypeScript', desc: 'Insisting on compile-time type safety to secure complex client operations and state flows.' },
        { name: 'Tailwind CSS', desc: 'Rapidly composing responsive, maintainable layouts across desktop and mobile screens.' }
      ]
    },
    {
      title: 'Product & Consulting',
      icon: <Compass size={18} />,
      color: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.15)',
      items: [
        { name: 'Discovery & Framing', desc: 'Gathering raw enterprise constraints and translating them into targeted development plans.' },
        { name: 'Technical Roadmapping', desc: 'Aligning multi-quarter software development cycles to core business indicators (KPIs).' },
        { name: 'Stakeholder Management', desc: 'Communicating complex AI capabilities and infrastructure risks to client CTOs and VP groups.' },
        { name: 'Agile Delivery', desc: 'Orchestrating rapid development sprints to release production-ready products iteratively.' }
      ]
    }
  ];

  return (
    <section id="landscape" data-section="landscape" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '60px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Stack Constellation
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Technology Landscape
        </h2>
        <p className="body-lead" style={{ maxWidth: '600px' }}>
          Hover or click on any capability tag below to see how I leverage it to deliver production-grade products.
        </p>
      </div>

      <div className="grid-layout" style={{ width: '100%', alignItems: 'start' }}>
        
        {/* Constellation Grid (Left Side) */}
        <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {clusters.map((cluster, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                background: 'rgba(11,11,11,0.4)',
                boxShadow: `0 15px 40px ${cluster.glowColor}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: cluster.color }}>
                {cluster.icon}
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#F5F5F5' }}>
                  {cluster.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cluster.items.map((item, idx) => {
                  const isHovered = selectedTech.name === item.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedTech(item)}
                      onMouseEnter={() => setSelectedTech(item)}
                      data-cursor="pointer"
                      style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        backgroundColor: isHovered ? cluster.color : 'rgba(255, 255, 255, 0.02)',
                        border: isHovered ? `1px solid ${cluster.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                        color: isHovered ? '#000000' : '#A3A3A3',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        outline: 'none'
                      }}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Insights Inspector (Right Side) */}
        <div 
          style={{ 
            gridColumn: 'span 4', 
            position: 'sticky', 
            top: '120px' 
          }}
          className="glass-panel"
        >
          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              System Insight
            </span>
            <h3 style={{ fontSize: '1.4rem', color: '#F5F5F5' }}>
              {selectedTech.name}
            </h3>
            <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
              {selectedTech.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
