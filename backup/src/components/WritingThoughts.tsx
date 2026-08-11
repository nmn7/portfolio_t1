import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface Article {
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  color: string;
}

export default function WritingThoughts() {
  const articles: Article[] = [
    {
      category: 'AI & Data Integration',
      title: 'The Model Context Protocol (MCP) Blueprint: Securing LLM Database Connections',
      readTime: '6 min read',
      date: 'June 2026',
      summary: 'Exploring how Model Context Protocol (MCP) servers function as isolated API gateways, enabling language models to safely compile parameterized queries against AWS Redshift without exposing database infrastructure.',
      color: '#3B82F6'
    },
    {
      category: 'System Design',
      title: 'Decoupling React Renders Under 5,000+ IoT Sensor Updates Per Second',
      readTime: '8 min read',
      date: 'April 2026',
      summary: 'A deep dive into bypassing React Virtual DOM diffing during high-frequency time-series ingestion. Explains using HTML5 Canvas contexts directly to paint plant telemetry charts.',
      color: '#22C55E'
    },
    {
      category: 'Product Strategy',
      title: 'The Forward Deployed Engineering Manual: Aligning Sprints to Business Impact',
      readTime: '5 min read',
      date: 'February 2026',
      summary: 'Why AI projects fail in discovery. An actionable framework for analyzing raw client operations, identifying process bottlenecks, and compiling systems metrics directly into validated dollars.',
      color: '#8B5CF6'
    }
  ];

  return (
    <section id="thoughts" data-section="thoughts" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '60px' }}>
        <span style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Industry Insights
        </span>
        <h2 className="title-section" style={{ marginTop: '8px' }}>
          Writing & Thoughts
        </h2>
        <p className="body-lead" style={{ maxWidth: '600px' }}>
          Articles explaining enterprise AI architectures, edge computing constraints, and product orchestration frameworks.
        </p>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%',
        }}
      >
        {articles.map((art, index) => (
          <div
            key={index}
            className="glass-panel"
            data-cursor="pointer"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'rgba(11, 11, 11, 0.4)',
              cursor: 'pointer'
            }}
          >
            <div>
              {/* Card Meta Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: art.color, 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em' 
                  }}
                >
                  {art.category}
                </span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#737373' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    {art.readTime}
                  </span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.25rem', color: '#F5F5F5', fontWeight: 600, marginBottom: '12px', lineHeight: 1.4 }}>
                {art.title}
              </h3>

              {/* Summary */}
              <p style={{ fontSize: '0.9rem', color: '#A3A3A3', lineHeight: 1.6 }}>
                {art.summary}
              </p>
            </div>

            {/* Read Article Trigger */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                color: '#F5F5F5',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '16px'
              }}
            >
              <BookOpen size={16} style={{ color: '#3B82F6' }} />
              <span>Read Article</span>
              <ArrowUpRight size={14} style={{ color: '#A3A3A3', marginLeft: 'auto' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
