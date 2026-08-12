import { useState } from 'react';
import { Brain, Settings, Cloud, Users, Check, ChevronRight, Sparkles, Compass, PenTool, Code, Rocket, RefreshCw } from 'lucide-react';

interface TechItem {
  name: string;
  desc: string;
  usedIn?: string[];
  valueDeliver?: string[];
}

interface Cluster {
  title: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  iconBg: string;
  items: TechItem[];
}

interface TechLandscapeProps {
  viewMode?: 'engineer' | 'consultant';
}

export default function TechLandscape({ viewMode = 'engineer' }: TechLandscapeProps) {
  const [selectedTech, setSelectedTech] = useState<TechItem>({
    name: 'S3',
    desc: 'Used as the document and asset layer in AI and automation workflows—supporting ingestion, processing, and secure retrieval at scale.',
    usedIn: ['RAG Pipelines', 'Document Automation', 'AI Workflows', 'Backup & Archival'],
    valueDeliver: ['Secure, scalable storage for enterprise data', 'Reliable foundation for AI/automation pipelines', 'Cost-optimised and highly durable solutions']
  });

  const clusters: Cluster[] = [
    {
      title: 'Generative AI & Applied AI',
      icon: <Brain size={20} />,
      color: '#3B82F6',
      glowColor: 'rgba(59, 130, 246, 0.15)',
      iconBg: 'rgba(59, 130, 246, 0.08)',
      items: [
        {
          name: 'Claude',
          desc: 'High-performance cognitive language model used for complex prompt logic, agent reasoning, and code generation.',
          usedIn: ['Agentic Workflows', 'Prompt Chains', 'SQL Generation', 'Code Analysis'],
          valueDeliver: ['Advanced cognitive reasoning', 'High-accuracy text processing', 'Secure schema mapping']
        },
        {
          name: 'AWS Bedrock',
          desc: 'Secure API service for deploying and scaling foundation models inside virtual private clouds.',
          usedIn: ['Enterprise AI', 'Model Hosting', 'VPC Security', 'Agent Scaling'],
          valueDeliver: ['VPC-isolated model safety', 'Scalable token throughput', 'Compliance-bound security']
        },
        {
          name: 'LLMs',
          desc: 'Large Language Models serving as central reasoning engines to extract structured data from documents.',
          usedIn: ['Semantic Matching', 'Document Parsing', 'Entity Resolution', 'Text Synthesis'],
          valueDeliver: ['Structured entity extraction', 'Flexible context ingestion', 'Enhanced process automation']
        },
        {
          name: 'LangChain',
          desc: 'Framework to build context-aware, reasoning applications with chains, state machines, and agents.',
          usedIn: ['Agent Loops', 'Prompt Routing', 'State Orchestration', 'Tool Calling'],
          valueDeliver: ['Deterministic agent flows', 'Seamless model switching', 'Modular chain components']
        },
        {
          name: 'MCP',
          desc: 'Model Context Protocol linking LLM agents directly with local data sources and secure runtime engines.',
          usedIn: ['Database Connectors', 'Secure Gateways', 'System Integrations', 'Live Data Queries'],
          valueDeliver: ['Controlled data access', 'Real-time context loading', 'Governed tool execution']
        },
        {
          name: 'RAG',
          desc: 'Retrieval Augmented Generation connecting LLMs with private knowledge bases using vector embeddings.',
          usedIn: ['Semantic Search', 'Knowledge Access', 'Manuals Indexing', 'Document Retrieval'],
          valueDeliver: ['Zero-hallucination queries', 'Vast data indexing support', 'Up-to-date business context']
        },
        {
          name: 'Prompt Engineering',
          desc: 'Developing strict, parameterized structured prompting architectures to yield deterministic outcomes.',
          usedIn: ['Output Structuring', 'Guardrail Enforcement', 'Few-Shot Examples', 'Deterministic Flows'],
          valueDeliver: ['Consistent JSON payloads', 'Reliable model safety bounds', 'Optimized token utilization']
        },
        {
          name: 'AI Agents',
          desc: 'Autonomous cognitive loops designed to execute multi-step tools and adapt workflows based on outcomes.',
          usedIn: ['Complex Decision Loops', 'Auto-correcting Workflows', 'API Coordination', 'Incident Resolution'],
          valueDeliver: ['Autonomous task completion', 'Reduced manual intervention', 'Adaptive business logic execution']
        }
      ]
    },
    {
      title: 'Intelligent Automation',
      icon: <Settings size={20} />,
      color: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      iconBg: 'rgba(16, 185, 129, 0.08)',
      items: [
        {
          name: 'Python',
          desc: 'Core programming language utilized for data munging, scripting, NLP, and model fine-tuning.',
          usedIn: ['ETL Pipelines', 'Model Fine-Tuning', 'Automated Crawling', 'Systems Scripting'],
          valueDeliver: ['Extensible library ecosystem', 'Rapid prototyping ability', 'High-performance processing']
        },
        {
          name: 'Automation Anywhere',
          desc: 'Designing enterprise RPA workflows to automate structured legacy desktop operations.',
          usedIn: ['Desktop Automation', 'Legacy Screen Scraping', 'Repetitive Tasks', 'Data Reconciliations'],
          valueDeliver: ['Zero human entry errors', 'Round-the-clock operations', 'Legacy software integration']
        },
        {
          name: 'Blue Prism',
          desc: 'Architecting secure, queue-managed software robot workforces inside financial systems.',
          usedIn: ['Queue-based Workers', 'Financial Transaction Audits', 'Secure Bot Pools', 'Compliance Tracking'],
          valueDeliver: ['Scalable enterprise bot pools', 'Auditable action trails', 'High-security runtime guardrails']
        },
        {
          name: 'REST APIs',
          desc: 'Building scalable integrations to connect disparate software platforms and stream data.',
          usedIn: ['System Integrations', 'Data Streaming', 'Microservice Networks', 'Webhook Triggers'],
          valueDeliver: ['Standardized communication', 'Decoupled server nodes', 'Low-latency state syncing']
        },
        {
          name: 'Selenium',
          desc: 'Browser automation framework to programmatically navigate pages and extract dynamic content.',
          usedIn: ['Headless Scraping', 'Dynamic Portal Scraping', 'Automated Testing', 'Form Filling'],
          valueDeliver: ['Dynamic page interaction', 'Headless script execution', 'Automated UI sanity checks']
        },
        {
          name: 'OCR',
          desc: 'Extracting digital text from structured or unstructured documents using machine learning.',
          usedIn: ['Invoice Processing', 'Contract Scanning', 'Key-Value Extraction', 'PDF Digitization'],
          valueDeliver: ['Rapid document indexing', 'High characters classification', 'Structured data output conversion']
        },
        {
          name: 'Process Automation',
          desc: 'Orchestrating workflows to replace manual spreadsheet transfers with API-driven integrations.',
          usedIn: ['Operations Streamlining', 'File System Syncs', 'Alert Orchestrations', 'Data Pipe Triggers'],
          valueDeliver: ['Drastic operational speedups', 'Unified operations flow', 'Fewer operational bottlenecks']
        }
      ]
    },
    {
      title: 'Cloud, Data & AI Infrastructure',
      icon: <Cloud size={20} />,
      color: '#8B5CF6',
      glowColor: 'rgba(139, 92, 246, 0.15)',
      iconBg: 'rgba(139, 92, 246, 0.08)',
      items: [
        {
          name: 'AWS',
          desc: 'Primary cloud suite for host scaling, secure identity management, and serverless compute clusters.',
          usedIn: ['Serverless Architectures', 'High Availability Hosts', 'Cloud Security', 'File Registries'],
          valueDeliver: ['99.99% system availability', 'Flexible pay-as-you-go billing', 'Global data storage compliance']
        },
        {
          name: 'Lambda',
          desc: 'Deploying lightweight, event-driven serverless APIs that scale automatically under load.',
          usedIn: ['Event-Driven APIs', 'Queue Ingestions', 'Automated Scripts', 'Webhook Receivers'],
          valueDeliver: ['Zero infrastructure upkeep', 'Infinite scalability potential', 'Cost-effective CPU runtimes']
        },
        {
          name: 'S3',
          desc: 'Used as the document and asset layer in AI and automation workflows—supporting ingestion, processing, and secure retrieval at scale.',
          usedIn: ['RAG Pipelines', 'Document Automation', 'AI Workflows', 'Backup & Archival'],
          valueDeliver: ['Secure, scalable storage for enterprise data', 'Reliable foundation for AI/automation pipelines', 'Cost-optimised and highly durable solutions']
        },
        {
          name: 'AWS Glue',
          desc: 'Automating schema discoverability, raw ETL jobs, and standardizing diverse global data sets.',
          usedIn: ['Data Warehousing ETL', 'Schema Cataloging', 'Dataset Consolidations', 'Batch Processing'],
          valueDeliver: ['Automated schema discoverability', 'Serverless Spark runtimes', 'Clean data transformations']
        },
        {
          name: 'Redshift',
          desc: 'Managing petabyte-scale data warehousing to power pricing and inventory business intelligence.',
          usedIn: ['Business Intelligence', 'Historical Analytics', 'Complex SQL Queries', 'KPI Accumulation'],
          valueDeliver: ['Sub-second queries at scale', 'Concurrent query auto-scaling', 'Direct S3 data querying']
        },
        {
          name: 'Boto3',
          desc: 'AWS SDK for Python enabling seamless programmatic management of cloud resources.',
          usedIn: ['Cloud Automation Scripts', 'Dynamic S3 Ingestions', 'Model Engine Starts', 'AWS Identity Verifications'],
          valueDeliver: ['Fully scriptable cloud setup', 'Secure boto connections', 'Rapid resource setups']
        },
        {
          name: 'ETL',
          desc: 'Extract, Transform, and Load processes designed to ingest dirty files and output clean database schemas.',
          usedIn: ['Pipeline Data Cleaning', 'Database Migrations', 'Schema Standardizations', 'File Transformations'],
          valueDeliver: ['High data hygiene standards', 'Unified analytics database', 'Reliable pipeline data flows']
        },
        {
          name: 'Cloud Integrations',
          desc: 'Unifying multi-platform cloud systems to coordinate API communications and data synchronization.',
          usedIn: ['Hybrid Cloud Links', 'Webhooks Networks', 'Multi-Service Pipelines', 'Cross-Region Syncs'],
          valueDeliver: ['Seamless cross-cloud routing', 'Reduced system delays', 'Unified architecture maps']
        }
      ]
    },
    {
      title: 'Product, Consulting & Solution Design',
      icon: <Users size={20} />,
      color: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.15)',
      iconBg: 'rgba(245, 158, 11, 0.08)',
      items: [
        {
          name: 'Discovery & Framing',
          desc: 'Structuring initial product inquiries to outline concrete constraints and target release features.',
          usedIn: ['User Interviews', 'Requirement Catalogs', 'Feature Prioritizations', 'Tech Risk Evaluations'],
          valueDeliver: ['Highly aligned stakeholders', 'Clear project scope definitions', 'Identified development risks']
        },
        {
          name: 'Process Mapping',
          desc: 'Visualizing standard operation workflows to target specific manual bottlenecks for automation.',
          usedIn: ['Process Flowcharts', 'Operational Audits', 'Bottleneck Identifications', 'Automation Planning'],
          valueDeliver: ['Clear operational visibility', 'Targeted automation opportunities', 'Standardized team guidelines']
        },
        {
          name: 'Solution Architecture',
          desc: 'Designing scalable database structures, network paths, and component boundaries for systems.',
          usedIn: ['System Architecture Maps', 'Database Schema Design', 'API Boundary Definitions', 'Security Frameworks'],
          valueDeliver: ['Scalable, secure systems', 'Future-proof tech stack selection', 'Clear development blueprints']
        },
        {
          name: 'Mural',
          desc: 'Collaborative digital canvas for virtual workshops, team brainstorms, and mapping process flows.',
          usedIn: ['Virtual Workshops', 'Journey Mapping Sessions', 'Sprint Retro Planning', 'Concept Brainstorming'],
          valueDeliver: ['Highly collaborative team design', 'Centralized feedback collections', 'Intuitive visual concepts']
        },
        {
          name: 'Draw.io',
          desc: 'Visual modeling software for constructing network diagrams, database schemas, and flowcharts.',
          usedIn: ['Database Entity Relations', 'API Flow Visualizations', 'Server Architecture Designs', 'Process Flow Diagrams'],
          valueDeliver: ['Vivid technical documentation', 'Precise component diagrams', 'Open-source editable drawings']
        },
        {
          name: 'Technical Roadmapping',
          desc: 'Planning multi-quarter technical timelines bound directly to corporate goals and release cycles.',
          usedIn: ['Milestone Scheduling', 'Dependency Trackings', 'Resource Capacity Plannings', 'Product Strategy'],
          valueDeliver: ['Predictable release timelines', 'Proactive risk mitigations', 'Strategic technical direction']
        },
        {
          name: 'Stakeholder Management',
          desc: 'Communicating complex technical timelines, AI risks, and budget bounds to VP teams and clients.',
          usedIn: ['Executive Alignments', 'Status Briefing Boards', 'Project Risk Reviews', 'Budget Consultings'],
          valueDeliver: ['High trust relationships', 'Fully informed business leads', 'Swift problem approvals']
        },
        {
          name: 'Agile Delivery',
          desc: 'Orchestrating rapid development sprints to release production-ready products iteratively.',
          usedIn: ['Backlog Grooming Boards', 'Daily Scrum Syncs', 'Sprint Planning Events', 'Retrospectives'],
          valueDeliver: ['Fast feature release cadence', 'High adaptability to changes', 'Transparent delivery timelines']
        }
      ]
    }
  ];

  return (
    <section id="landscape" data-section="landscape" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Capability Stack
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          How I Build Solutions
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px', color: viewMode === 'consultant' ? '#1F1F2E' : 'inherit' }}>
          I combine AI, automation, cloud systems and product thinking to take complex business problems from discovery to delivery.
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
                border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
                background: viewMode === 'consultant' ? '#F3F3F8' : 'rgba(11, 11, 11, 0.4)',
                boxShadow: viewMode === 'consultant' ? 'none' : `0 15px 40px ${cluster.glowColor}`,
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                position: 'relative'
              }}
            >
              {/* Category Icon Circle */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: cluster.iconBg,
                border: `1px solid ${cluster.color}`,
                boxShadow: `0 0 12px ${cluster.glowColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: cluster.color,
                flexShrink: 0
              }}>
                {cluster.icon}
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: viewMode === 'consultant' ? '#1F1F2E' : '#F5F5F5', margin: 0 }}>
                  {cluster.title}
                </h3>

                {/* Capability Tags */}
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
                          backgroundColor: viewMode === 'consultant'
                            ? (isHovered ? cluster.color : 'rgba(31, 31, 46, 0.02)')
                            : (isHovered ? cluster.color : 'rgba(255, 255, 255, 0.02)'),
                          border: viewMode === 'consultant'
                            ? (isHovered ? `1px solid ${cluster.color}` : '1px solid rgba(31, 31, 46, 0.12)')
                            : (isHovered ? `1px solid ${cluster.color}` : '1px solid rgba(255, 255, 255, 0.08)'),
                          color: viewMode === 'consultant'
                            ? (isHovered ? '#FFFFFF' : '#5A5A75')
                            : (isHovered ? '#000000' : '#A3A3A3'),
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          outline: 'none',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Glowing Status Dot on Far Right */}
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: cluster.color,
                boxShadow: `0 0 10px 2px ${cluster.color}`,
                position: 'absolute',
                top: '24px',
                right: '24px'
              }}></div>
            </div>
          ))}
        </div>

        {/* Detailed Insights Inspector (Right Side) */}
        {(() => {
          const activeCluster = clusters.find(c => c.items.some(item => item.name === selectedTech.name)) || clusters[0];
          const ActiveIcon = activeCluster.icon;
          return (
            <div
              style={{
                gridColumn: 'span 4',
                position: 'sticky',
                top: '120px',
                background: viewMode === 'consultant' ? '#F3F3F8' : 'rgba(11, 11, 11, 0.4)',
                border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '24px'
              }}
              className="glass-panel"
            >
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: viewMode === 'consultant' ? '#2563EB' : '#3B82F6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Capability in Context
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: activeCluster.iconBg,
                    border: `1px solid ${activeCluster.color}`,
                    color: activeCluster.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {ActiveIcon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: viewMode === 'consultant' ? '#1F1F2E' : '#F5F5F5', margin: 0 }}>
                    {selectedTech.name === 'S3' ? 'Amazon S3' : selectedTech.name}
                  </h3>
                </div>

                <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: viewMode === 'consultant' ? '#1F1F2E' : '#A3A3A3', margin: 0 }}>
                  {selectedTech.desc}
                </p>

                {/* Used In tags */}
                {selectedTech.usedIn && selectedTech.usedIn.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(59, 130, 246, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Used In
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedTech.usedIn.map((tag, idx) => (
                        <span key={idx} style={{
                          fontSize: '0.7rem',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Value I Deliver checkmarks */}
                {selectedTech.valueDeliver && selectedTech.valueDeliver.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(59, 130, 246, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Value I Deliver
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedTech.valueDeliver.map((val, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <Check size={12} style={{ color: activeCluster.color, flexShrink: 0 }} />
                          <span>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Slide bullet / circles indicators */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '16px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: viewMode === 'consultant' ? '#2563EB' : '#3B82F6',
                      display: 'inline-block'
                    }}
                  />
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: viewMode === 'consultant' ? '1.5px solid #2563EB' : '1.5px solid #3B82F6',
                      display: 'inline-block'
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })()}

      </div>

      {/* Bottom Process Bar: My Approach */}
      <div className="glass-panel" style={{
        marginTop: '32px',
        padding: '20px 24px',
        background: viewMode === 'consultant' ? '#F3F3F8' : 'rgba(9, 7, 20, 0.4)',
        border: viewMode === 'consultant' ? '1px solid rgba(31, 31, 46, 0.08)' : '1px solid var(--border-color)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={16} style={{ color: '#3B82F6' }} />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: viewMode === 'consultant' ? '#1F1F2E' : 'var(--text-primary)' }}>My Approach</span>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {[
            { step: 'Discover', label: 'Understand & Align', icon: Compass },
            { step: 'Design', label: 'Architect & Plan', icon: PenTool },
            { step: 'Build', label: 'Automate & Integrate', icon: Code },
            { step: 'Deploy', label: 'Deliver Value', icon: Rocket },
            { step: 'Evolve', label: 'Optimize & Scale', icon: RefreshCw }
          ].map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: viewMode === 'consultant' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.02)',
                    border: viewMode === 'consultant' ? '1px solid rgba(0,0,0,0.08)' : '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: viewMode === 'consultant' ? '#1F1F2E' : 'var(--text-primary)'
                  }}>
                    <StepIcon size={14} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: viewMode === 'consultant' ? '#1F1F2E' : 'var(--text-primary)' }}>{item.step}</span>
                    <span style={{ fontSize: '0.65rem', color: viewMode === 'consultant' ? '#4A4A4A' : 'var(--text-secondary)' }}>{item.label}</span>
                  </div>
                </div>
                {idx < 4 && <ChevronRight size={14} style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
