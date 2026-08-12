import { useState } from 'react';
import { Play, Code, Cpu, Database, Network, MessageSquare, Terminal } from 'lucide-react';

interface PlaygroundItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  explanation: string;
  diagram: React.ReactNode;
}

export default function EngineeringPlayground() {
  const [activeItem, setActiveItem] = useState<string>('mcp');

  const items: PlaygroundItem[] = [
    {
      id: 'mcp',
      title: 'Claude MCP Server',
      category: 'Agent Orchestration',
      icon: <Network size={20} />,
      summary: 'Establishing secure communication boundaries between LLMs and legacy infrastructure.',
      explanation: 'Using the Model Context Protocol, the LLM executes structured actions like querying local databases or fetching files. The host environment manages resource access lists, keeping keys and raw connection strings isolated.',
      diagram: (
        <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="60" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="50" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Claude Client</text>

          <rect x="150" y="60" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="195" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">MCP Host / CLI</text>

          <rect x="290" y="20" width="100" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="340" y="45" fill="#F5F5F5" fontSize="10" textAnchor="middle">SQL Database</text>

          <rect x="290" y="100" width="100" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="340" y="125" fill="#F5F5F5" fontSize="10" textAnchor="middle">Local Filesystem</text>

          <line x1="90" y1="80" x2="150" y2="80" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 240 80 L 265 80 L 265 40 L 290 40" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
          <path d="M 240 80 L 265 80 L 265 120 L 290 120" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'aws',
      title: 'AWS Serverless Endpoint',
      category: 'Cloud Engineering',
      icon: <Terminal size={20} />,
      summary: 'Event-driven, low-latency microservices that scale under corporate loads.',
      explanation: 'Client traffic routes through Amazon API Gateway, passing tokens to a custom Node.js Lambda Authorizer before invoking business logic functions linked directly to durable storage tables.',
      diagram: (
        <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="60" width="70" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="45" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">API Gateway</text>

          <rect x="140" y="20" width="90" height="40" rx="8" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" strokeWidth="1.5" />
          <text x="185" y="45" fill="#F5F5F5" fontSize="10" textAnchor="middle">Lambda Auth</text>

          <rect x="140" y="100" width="90" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="185" y="125" fill="#F5F5F5" fontSize="10" textAnchor="middle">Business Lambda</text>

          <rect x="290" y="60" width="90" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="335" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">DynamoDB Table</text>

          <path d="M 80 80 L 105 80 L 105 40 L 140 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d="M 80 80 L 105 80 L 105 120 L 140 120" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="230" y1="120" x2="260" y2="120" stroke="#3B82F6" strokeWidth="1.5" />
          <path d="M 260 120 L 260 80 L 290 80" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'ai-workflow',
      title: 'AI Agentic Routing',
      category: 'GenAI & Workflows',
      icon: <Cpu size={20} />,
      summary: 'Autonomous classification routing for reliable task execution.',
      explanation: 'Instead of linear scripts, a supervisor model classifies input intents and routes tasks to specialized tools, validating outputs through automated checks before completing execution.',
      diagram: (
        <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="60" width="70" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="45" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Input Intent</text>

          <rect x="130" y="60" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="175" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Router Classifier</text>

          <rect x="270" y="20" width="110" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="325" y="45" fill="#F5F5F5" fontSize="10" textAnchor="middle">Sub-Agent A (Code)</text>

          <rect x="270" y="100" width="110" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="325" y="125" fill="#F5F5F5" fontSize="10" textAnchor="middle">Sub-Agent B (Docs)</text>

          <line x1="80" y1="80" x2="130" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d="M 220 80 L 245 80 L 245 40 L 270 40" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
          <path d="M 220 80 L 245 80 L 245 120 L 270 120" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'rag',
      title: 'Advanced RAG Pipeline',
      category: 'Semantic Search',
      icon: <Database size={20} />,
      summary: 'Leveraging contextual dense embeddings vectors for dynamic context injection.',
      explanation: 'User prompt expressions are parsed into numbers using an embedding model, which are then queried against database vectors using similarity search (e.g. cosine distance) to construct relevant prompt injection snippets.',
      diagram: (
        <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="60" width="70" height="40" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="45" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Prompt Text</text>

          <rect x="130" y="60" width="90" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="175" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Embedder Engine</text>

          <rect x="270" y="60" width="110" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="325" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Vector DB Search</text>

          <line x1="80" y1="80" x2="130" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="220" y1="80" x2="270" y2="80" stroke="#8B5CF6" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'prompt',
      title: 'Prompt Engineering Framework',
      category: 'Structured Reasoning',
      icon: <MessageSquare size={20} />,
      summary: 'Converting raw inputs to structured schema actions reliably.',
      explanation: 'Constructing robust prompting layers including System Instructions, Few-Shot examples, Dynamic Context strings, and rigid output constraints to enforce structural JSON schemas.',
      diagram: (
        <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="10" width="110" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="65" y="28" fill="#F5F5F5" fontSize="8" textAnchor="middle">System Persona</text>

          <rect x="10" y="60" width="110" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="65" y="78" fill="#F5F5F5" fontSize="8" textAnchor="middle">Dynamic Context</text>

          <rect x="10" y="110" width="110" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="65" y="128" fill="#F5F5F5" fontSize="8" textAnchor="middle">Schema Enforcer</text>

          <rect x="180" y="60" width="80" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="220" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">LLM Compile</text>

          <rect x="300" y="60" width="90" height="40" rx="8" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" strokeWidth="1.5" />
          <text x="345" y="85" fill="#F5F5F5" fontSize="10" textAnchor="middle">Valid JSON Object</text>

          <path d="M 120 25 L 150 25 L 150 80 L 180 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="120" y1="75" x2="180" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <path d="M 120 125 L 150 125 L 150 90 L 180 90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="260" y1="80" x2="300" y2="80" stroke="#8B5CF6" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  const currentItem = items.find(i => i.id === activeItem) || items[0];

  return (
    <section id="playground" data-section="playground" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Interactive Lab
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Engineering Playground
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px' }}>
          Explore interactive architectures detailing semantic API integrations, secure model routing, and production serverless setups.
        </p>
      </div>

      <div className="grid-layout" style={{ width: '100%', alignItems: 'stretch' }}>

        {/* Playground Selector Grid (Left Side) */}
        <div style={{ gridColumn: 'span 5', display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          {items.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className="glass-panel"
                data-cursor="pointer"
                style={{
                  padding: '20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid var(--border-color)',
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.03)' : 'var(--glass-bg)',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.3s ease',
                  transform: isActive ? 'translateX(5px)' : 'translateX(0)'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#3B82F6' : 'var(--bg-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#3B82F6', fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Visualizer Panel (Right Side) */}
        <div style={{ gridColumn: 'span 7' }} className="glass-panel">
          <div style={{ padding: '36px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Interactive Simulator
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#22C55E', fontWeight: 600 }}>
                  <Play size={12} fill="#22C55E" />
                  Live Flow
                </span>
              </div>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {currentItem.title}
              </h2>
              <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--text-primary)' }}>
                {currentItem.summary}
              </p>
            </div>

            {/* Interactive SVG Render Area */}
            <div
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '220px'
              }}
            >
              {currentItem.diagram}
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Code size={14} />
                How It Works
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {currentItem.explanation}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
