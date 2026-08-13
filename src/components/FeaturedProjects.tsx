import { useState, useEffect } from 'react';
import { Layers, ShieldAlert, Cpu, BarChart3, Database, AlertCircle, ShieldCheck, Search, Lightbulb, Check, Terminal, Settings } from 'lucide-react';

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

import CrtCustomDashboard from './CrtCustomDashboard';
import MaciCustomDashboard from './MaciCustomDashboard';
import ExtractCustomDashboard from './ExtractCustomDashboard';
import RakutenCustomDashboard from './RakutenCustomDashboard';
import WorkforceCustomDashboard from './WorkforceCustomDashboard';

const cardConfigMap: Record<string, {
  shortTitle: string;
  shortSubtitle: string;
  cardTags: string[];
  cardOutcome: string;
  badgeColor: string;
  glowColor: string;
}> = {
  bms: {
    shortTitle: 'AI Pricing Intelligence Platform',
    shortSubtitle: 'International Reference Pricing (IRP) & Most Favored Nation (MFN) Decision Support',
    cardTags: ['Pharma', 'Enterprise AI'],
    cardOutcome: 'Enterprise AI Decision Support',
    badgeColor: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.25)'
  },
  rakuten: {
    shortTitle: 'GenAI Manufacturer Validation Platform',
    shortSubtitle: 'Automating Warranty Claims Validation using LLM Agents',
    cardTags: ['Retail', 'GenAI'],
    cardOutcome: '30% Less Claims Effort',
    badgeColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.25)'
  },
  crt: {
    shortTitle: 'Customer Research Tool (CRT)',
    shortSubtitle: 'Intelligent Customer Research & Class of Trade (COT) Platform',
    cardTags: ['Pharma', 'Power Platform'],
    cardOutcome: '90% Less Manual Validation',
    badgeColor: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.25)'
  },
  extract: {
    shortTitle: 'Extract.AI — Intelligent Document Processing Platform',
    shortSubtitle: 'Turning unstructured invoices, contracts and documents into structured, validated data — at scale.',
    cardTags: ['Pharma', 'GenAI'],
    cardOutcome: '$6M+ Impact Delivered',
    badgeColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.25)'
  },
  maci: {
    shortTitle: 'MACI — AI-Powered Call Value Optimization',
    shortSubtitle: 'Transforming manual STEM audio audits into end-to-end conversational intelligence platform processing call recordings, delivering automated scorecard reporting and performance analytics',
    cardTags: ['Pharma', 'AI / Analytics'],
    cardOutcome: 'AI-Driven Operations',
    badgeColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.25)'
  },
  workforce: {
    shortTitle: 'Intelligent Digital Data Workforce — HCP/HCO Matching',
    shortSubtitle: 'Automated Practitioner-to-Organization Precision Alignments',
    cardTags: ['Healthcare', 'Operations'],
    cardOutcome: '99% Match Precision',
    badgeColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.25)'
  },
  smartvision: {
    shortTitle: 'Smart Vision',
    shortSubtitle: 'Manufacturing Computer Vision at the Edge',
    cardTags: ['Manufacturing', 'IoT / ML'],
    cardOutcome: '45 min ➔ ~1 min Clearance',
    badgeColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.25)'
  }
};

function renderLeftGraphic(projectId: string) {
  switch (projectId) {
    case 'bms':
      return (
        <svg width="100%" height="100%" viewBox="0 0 80 110" fill="none" style={{ display: 'block' }}>
          <circle cx="40" cy="55" r="30" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
          <line x1="20" y1="35" x2="60" y2="75" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1" />
          <line x1="20" y1="75" x2="60" y2="35" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1" />
          <circle cx="20" cy="35" r="3.5" fill="#3B82F6" />
          <circle cx="60" cy="75" r="3.5" fill="#10B981" />
          <circle cx="20" cy="75" r="3.5" fill="#ea580c" />
          <circle cx="60" cy="35" r="3.5" fill="#8B5CF6" />
        </svg>
      );
    case 'rakuten':
      return (
        <svg width="100%" height="100%" viewBox="0 0 80 110" fill="none" style={{ display: 'block' }}>
          <rect x="20" y="30" width="40" height="50" rx="6" fill="rgba(236, 72, 153, 0.05)" stroke="rgba(236, 72, 153, 0.2)" />
          <path d="M30 55 L38 63 L50 47" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'crt':
      return (
        <svg width="100%" height="100%" viewBox="0 0 80 110" fill="none" style={{ display: 'block' }}>
          <rect x="20" y="25" width="40" height="60" rx="4" fill="rgba(99, 102, 241, 0.05)" stroke="rgba(99, 102, 241, 0.2)" />
          <line x1="28" y1="40" x2="52" y2="40" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
          <line x1="28" y1="55" x2="48" y2="55" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
          <line x1="28" y1="70" x2="50" y2="70" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
        </svg>
      );
    case 'extract':
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
          padding: '8px',
          boxSizing: 'border-box'
        }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 900, color: '#8B5CF6', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Extract.AI</span>
        </div>
      );
    case 'maci':
      return (
        <svg width="100%" height="100%" viewBox="0 0 80 110" fill="none" style={{ display: 'block' }}>
          <line x1="15" y1="40" x2="15" y2="70" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="25" y1="25" x2="25" y2="85" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="35" y1="45" x2="35" y2="65" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="20" x2="45" y2="90" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="55" y1="35" x2="55" y2="75" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="45" x2="65" y2="65" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'workforce':
      return (
        <svg width="100%" height="100%" viewBox="0 0 80 110" fill="none" style={{ display: 'block' }}>
          <circle cx="40" cy="40" r="14" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1" />
          <circle cx="40" cy="40" r="6" fill="#F59E0B" />
          <line x1="40" y1="54" x2="40" y2="80" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5" />
          <rect x="25" y="80" width="30" height="15" rx="3" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.2)" />
        </svg>
      );
    case 'smartvision':
      return (
        <svg width="100%" height="100%" viewBox="0 0 80 110" fill="none" style={{ display: 'block' }}>
          <circle cx="40" cy="55" r="22" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="40" cy="55" r="14" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="90" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" />
          <line x1="10" y1="55" x2="70" y2="55" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
}

const getRgbValues = (hex: string) => {
  if (hex === '#3B82F6') return '59, 130, 246';
  if (hex === '#EC4899') return '236, 72, 153';
  if (hex === '#6366F1') return '99, 102, 241';
  if (hex === '#8B5CF6') return '139, 92, 246';
  if (hex === '#10B981') return '16, 185, 129';
  if (hex === '#F59E0B') return '245, 158, 11';
  if (hex === '#06B6D4') return '6, 182, 212';
  return '59, 130, 246';
};

interface FeaturedProjectsProps {
  viewMode: 'engineer' | 'consultant';
}

export default function FeaturedProjects({ viewMode }: FeaturedProjectsProps) {
  const [activeProj, setActiveProj] = useState<string>('bms');
  const [slideIndex, setSlideIndex] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);

  // Interaction Upgrade States
  const [prevOffset, setPrevOffset] = useState({ x: 0, y: 0 });
  const [nextOffset, setNextOffset] = useState({ x: 0, y: 0 });
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  const projects: CaseStudy[] = [
    {
      id: 'bms',
      title: 'AI Pricing Intelligence Platform',
      subtitle: 'International Reference Pricing (IRP) & Most Favored Nation (MFN) Decision Support',
      industry: 'Pharmaceuticals',
      heroMetric: 'Enterprise AI',
      metricsLabel: 'Production Deployment (Claude + MCP | AWS Redshift)',
      techs: ['Claude MCP', 'Claude 4.6 Sonnet', 'AWS Redshift', 'AWS Glue', 'AWS Lambda', 'Python', 'SQL', 'IAM', 'AWS Secrets Manager'],
      problem: 'Global pricing teams needed to evaluate how pricing changes across reference countries impacted international drug pricing under IRP and MFN regulations. The existing workflow depended on manual SQL analysis, fragmented pricing datasets, and repeated engineering support, making scenario analysis slow, error-prone, and difficult to scale for regulatory decision making.',
      discovery: 'Analysis of existing workflows identified three major bottlenecks: Business users relied on technical teams for SQL-based analysis; Historical pricing data existed across multiple Redshift datasets; Traditional dashboards answered historical questions but couldn\'t support interactive "what-if" pricing scenarios. This created an opportunity for secure AI-assisted analytics.',
      constraints: 'Sensitive pricing data could never be exposed directly to an LLM. Every SQL query required governance, validation, and auditability. AI-generated insights had to execute entirely within enterprise AWS infrastructure. Responses needed deterministic execution suitable for regulated pharmaceutical environments.',
      implementation: 'Engineered a production-ready MCP server to bridge Claude AI with Amazon Redshift securely. Built semantic query capabilities, validation layers, and governance controls to deliver fast, accurate, and auditable pricing analytics for global regulatory decision making.',
      challenges: 'Handling schema mismatch across multi-market historical datasets. Resolved by writing a pre-processing AWS Glue integration to standardize pricing variables.',
      lessons: 'Designed and implemented a secure Claude Model Context Protocol (MCP) layer that translates natural language into validated SQL before executing governed queries against Amazon Redshift. MCP acts as a semantic gateway that understands business intent, generates parameterized SQL, validates against governance rules, executes queries securely, and returns accurate, auditable insights in seconds.',
      architecture: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1380 750" style={{ width: '100%', height: 'auto', maxWidth: '1380px', overflow: 'visible' }}>
          <defs>
            <linearGradient id="bgGradBms" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#070814" />
              <stop offset="100%" stopColor="#0e0f22" />
            </linearGradient>

            <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" fill="#475569">
              <polygon points="0 0, 8 3, 0 6" />
            </marker>
            <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" fill="#10b981">
              <polygon points="0 0, 8 3, 0 6" />
            </marker>
            <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" fill="#3b82f6">
              <polygon points="0 0, 8 3, 0 6" />
            </marker>
            <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" fill="#ef4444">
              <polygon points="0 0, 8 3, 0 6" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="1380" height="750" fill="url(#bgGradBms)" rx="16" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* ==================== CONNECTORS ==================== */}
          {/* Connector 1 -> 2 */}
          <line x1="180" y1="320" x2="230" y2="320" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Connector 2 -> 3 */}
          <line x1="410" y1="320" x2="490" y2="320" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
          <foreignObject x="410" y="280" width="80" height="80">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '14px', textAlign: 'center', pointerEvents: 'none' }}>
              <span style={{ fontSize: '0.55rem', color: '#a78bfa', fontWeight: 700, lineHeight: 1.1 }}>Skill Trigger &amp; Flow</span>
              <span style={{ fontSize: '0.55rem', color: '#3b82f6', fontWeight: 700, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: '2px' }}>🔒 MCP Tool</span>
            </div>
          </foreignObject>

          {/* Connector 3 -> 4 */}
          <line x1="670" y1="320" x2="730" y2="320" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
          <foreignObject x="670" y="290" width="60" height="30">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', pointerEvents: 'none' }}>
              <span style={{ fontSize: '0.55rem', color: '#f97316', fontWeight: 700 }}>MCP API Call</span>
            </div>
          </foreignObject>

          {/* Connector 4 -> 5 */}
          <line x1="940" y1="320" x2="980" y2="320" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Connector 5 -> Output stack */}
          <path d="M 1140 320 L 1155 320 L 1155 225 L 1170 225" stroke="#475569" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
          <path d="M 1140 320 L 1170 320" stroke="#475569" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
          <path d="M 1140 320 L 1155 320 L 1155 415 L 1170 415" stroke="#475569" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

          {/* ==================== FEEDBACK LOOPS ==================== */}
          {/* Top Green Feedback Loop */}
          <path d="M 1060 140 L 1060 115 L 100 115 L 100 140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" fill="none" markerEnd="url(#arrowGreen)" />
          <rect x="380" y="105" width="460" height="20" rx="4" fill="#070814" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
          <text x="610" y="118" fill="#10b981" fontSize="8" fontWeight="700" textAnchor="middle">
            Immediate Step: Final AI Insights (Based on Scenario Data) Delivers Recommendations
          </text>

          {/* Bottom Blue Feedback Loop */}
          <path d="M 1265 260 L 1265 520 L 80 520 L 80 500" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" fill="none" markerEnd="url(#arrowBlue)" />
          <path d="M 290 520 L 290 500" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" fill="none" markerEnd="url(#arrowBlue)" />
          <rect x="540" y="510" width="140" height="20" rx="4" fill="#070814" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="0.5" />
          <text x="610" y="523" fill="#3b82f6" fontSize="8" fontWeight="700" textAnchor="middle">🔒 Returns Secured Data</text>

          {/* Bottom Red Feedback Loop */}
          <path d="M 1265 450 L 1265 550 L 120 550 L 120 500" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" fill="none" markerEnd="url(#arrowRed)" />
          <rect x="540" y="540" width="140" height="20" rx="4" fill="#070814" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="0.5" />
          <text x="610" y="553" fill="#ef4444" fontSize="8" fontWeight="700" textAnchor="middle">🗄️ Returns Raw Results</text>


          {/* ==================== CARDS ==================== */}
          {/* Card 1: IRP Analyst */}
          <foreignObject x="20" y="140" width="160" height="360">
            <div style={{
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(124, 58, 237, 0.02)',
              border: '1.5px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>1</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>IRP Analyst</span>
              </div>

              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                border: '1.5px solid rgba(124, 58, 237, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <p style={{
                fontSize: '0.75rem',
                color: '#94a3b8',
                lineHeight: 1.4,
                margin: 0,
                marginTop: '10px'
              }}>
                Performs Scenario Comparison and Revenue Impact Analysis
              </p>

              <div style={{
                marginTop: 'auto',
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                fontSize: '1rem',
                opacity: 0.8
              }}>
                <span>📊</span>
                <span>📈</span>
                <span>📄</span>
              </div>
            </div>
          </foreignObject>

          {/* Card 2: Claude Desktop */}
          <foreignObject x="230" y="140" width="180" height="360">
            <div style={{
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(37, 99, 235, 0.02)',
              border: '1.5px solid rgba(37, 99, 235, 0.3)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>2</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Claude Desktop</span>
              </div>

              <div style={{
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                borderRadius: '6px',
                padding: '6px',
                textAlign: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}>
                <span>🤖</span> AI Business Assistant - Skill
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6' }}>
                    <span>🧠</span> Claude Brain
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.3 }}>
                    AI reasoning &amp; analysis capability
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6' }}>
                    <span>⚙️</span> Scenario Engine
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.3 }}>
                    Calculations &amp; scenario processing engine
                  </div>
                </div>
              </div>
            </div>
          </foreignObject>

          {/* Card 3: AWS MCP Server */}
          <foreignObject x="490" y="140" width="180" height="360">
            <div style={{
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(234, 88, 12, 0.02)',
              border: '1.5px solid rgba(234, 88, 12, 0.3)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>3</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>AWS MCP Server</span>
              </div>

              <div style={{ fontSize: '0.65rem', color: '#ea580c', fontWeight: 700, textAlign: 'center', opacity: 0.9 }}>
                Secure Query Gateway &amp; MCP Tool Orchestrator
              </div>

              <div style={{
                backgroundColor: 'rgba(234, 88, 12, 0.08)',
                border: '1px dashed rgba(234, 88, 12, 0.3)',
                borderRadius: '8px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#f97316'
              }}>
                <span style={{ fontSize: '1.8rem' }}>📟</span>
                <span style={{ fontSize: '1.4rem' }}>🔗</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                {[
                  { icon: '🔒', text: 'Secure Gateway' },
                  { icon: '⚙️', text: 'Tool Orchestration' },
                  { icon: '👤', text: 'Access Control' },
                  { icon: '🔄', text: 'Query Management' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}>
                    <span style={{ fontSize: '0.75rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.65rem', color: '#e2e8f0', fontWeight: 600 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </foreignObject>

          {/* Card 4: Amazon Redshift */}
          <foreignObject x="730" y="140" width="210" height="360">
            <div style={{
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(79, 70, 229, 0.02)',
              border: '1.5px solid rgba(79, 70, 229, 0.3)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#4f46e5',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>4</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Amazon Redshift</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', color: '#6366f1', fontSize: '1.5rem', margin: '4px 0' }}>
                <span>🗄️</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '8px', flex: 1 }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  justifyContent: 'center'
                }}>
                  {[
                    { label: 'Pricing Tables', icon: '📋' },
                    { label: 'MFN Tables', icon: '📋' },
                    { label: 'Stored Procs', icon: '⚙️' }
                  ].map((tbl, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      padding: '4px',
                      borderRadius: '4px'
                    }}>
                      <span style={{ fontSize: '0.65rem' }}>{tbl.icon}</span>
                      <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#e2e8f0', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{tbl.label}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  border: '1px dashed rgba(99, 102, 241, 0.4)',
                  backgroundColor: 'rgba(99, 102, 241, 0.02)',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  gap: '4px'
                }}>
                  <span style={{ fontSize: '1.1rem' }}>⚙️</span>
                  <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#818cf8', lineHeight: 1.2 }}>Scenario Calculation Engine</span>
                </div>
              </div>

              <div style={{
                fontSize: '0.6rem',
                color: '#64748b',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '6px',
                fontWeight: 500
              }}>
                Centralized Logic &amp; Governed Data Access
              </div>
            </div>
          </foreignObject>

          {/* Card 5: Final AI Insights & Recommendations */}
          <foreignObject x="980" y="140" width="160" height="360">
            <div style={{
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(16, 185, 129, 0.02)',
              border: '1.5px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>5</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Final Insights</span>
              </div>

              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(5, 150, 105, 0.1)',
                border: '2px solid #059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '12px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <polyline points="9 15 11 17 15 13" />
                </svg>
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', marginTop: '4px' }}>
                AI Recommendations
              </div>

              <p style={{
                fontSize: '0.7rem',
                color: '#94a3b8',
                lineHeight: 1.4,
                margin: 0
              }}>
                Delivers actionable insights and revenue impact recommendations based on scenario outcomes.
              </p>
            </div>
          </foreignObject>

          {/* Output Stack (Column 6) */}
          <foreignObject x="1170" y="190" width="190" height="260">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1.5px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff'
              }}>
                <span style={{ color: '#10b981', fontSize: '1rem' }}>✔️</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#10b981' }}>Secured Data</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>(Processed Results)</span>
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                border: '1.5px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff'
              }}>
                <span style={{ color: '#3b82f6', fontSize: '1rem' }}>🔒</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#3b82f6' }}>Secured Data</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>(Validated Results)</span>
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1.5px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff'
              }}>
                <span style={{ color: '#ef4444', fontSize: '1rem' }}>🗄️</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#ef4444' }}>Raw Results</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>(For Analysis)</span>
                </div>
              </div>
            </div>
          </foreignObject>

          {/* Legend Area */}
          <rect x="20" y="590" width="1340" height="135" rx="8" fill="#070814" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          <text x="36" y="612" fill="#ffffff" fontSize="9" fontWeight="800" letterSpacing="0.05em" opacity="0.6">LEGEND</text>

          <foreignObject x="30" y="625" width="1320" height="90">
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', color: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '150px' }}>
                <span style={{ fontSize: '1.2rem', color: '#7c3aed' }}>👤</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa' }}>IRP Analyst</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8', lineHeight: 1.3 }}>Business user who defines scenarios and reviews analysis results.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '150px' }}>
                <span style={{ fontSize: '1.2rem', color: '#2563eb' }}>🤖</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6' }}>Claude Desktop</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8', lineHeight: 1.3 }}>AI assistant that interprets requests, executes skills and orchestrates flow.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '150px' }}>
                <span style={{ fontSize: '1.2rem', color: '#ea580c' }}>📟</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316' }}>AWS MCP Server</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8', lineHeight: 1.3 }}>Secure intermediary that manages tool invocation and query execution.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '150px' }}>
                <span style={{ fontSize: '1.2rem', color: '#4f46e5' }}>🗄️</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#818cf8' }}>Amazon Redshift</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8', lineHeight: 1.3 }}>Centralized data warehouse containing pricing, MFN tables and calculation logic.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '150px' }}>
                <span style={{ fontSize: '1.2rem', color: '#059669' }}>📄</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#34d399' }}>Final Insights</span>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8', lineHeight: 1.3 }}>AI-generated insights and recommendations based on scenario outcomes.</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '12px', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.6rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>⤎ ⤏</span>
                  <span style={{ color: '#94a3b8' }}>Returns Secured Data (Processed)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.6rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 700 }}>⤎ ⤏</span>
                  <span style={{ color: '#94a3b8' }}>Returns Secured Data (Validated)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.6rem' }}>
                  <span style={{ color: '#ef4444', fontWeight: 700 }}>⤎ ⤏</span>
                  <span style={{ color: '#94a3b8' }}>Returns Raw Results (For Analysis)</span>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      )
    },
    {
      id: 'rakuten',
      title: 'GenAI Manufacturer Validation Solution',
      subtitle: 'Automating Manufacturer Identification & Warranty Eligibility with GenAI + RAG',
      industry: 'Retail & E-commerce',
      heroMetric: 'Sub-5 sec',
      metricsLabel: 'Average Response Time Per Request',
      techs: ['GPT-4o-mini', 'AWS Bedrock', 'Claude 3.5 Haiku', 'Llama 3 70B', 'spaCy', 'LangChain', 'Python'],
      problem: 'Over 40,000 products are excluded from extended warranty sales because the shop did not set a JAN code, making it impossible to identify the manufacturer and verify eligibility.',
      discovery: 'A GenAI + RAG-powered platform that retrieves, understands, and validates manufacturer information to support warranty eligibility decisions.',
      constraints: 'SLA limit: Average response time per request must be Sub-5 sec. API cost must remain under $0.001 - $0.003 per call.',
      implementation: 'Built an automated search and extraction RAG pipeline. The system queries GPT-4o-mini with web search for source discovery across listings, sites, and documents, then routes to AWS Bedrock (Llama 3 70B) for structured EAN processing, using spaCy NLP for response parsing fallback.',
      challenges: 'Handling unstructured, scattered data and minimizing extraction errors for items missing JAN codes. Mitigated by using multi-source verification and cross-checking candidate manufacturers against a master database.',
      lessons: 'Structured evidence and audit logs are key to building reliable LLM validation networks for compliance and transparency.',
      architecture: null
    },
    {
      id: 'crt',
      title: 'Customer Research Tool (CRT)',
      subtitle: 'Intelligent Customer Research & Class of Trade (COT) Platform',
      industry: 'Pharmaceuticals & Operations',
      heroMetric: 'Multi-Client',
      metricsLabel: 'Pfizer, AbbVie, Amgen and more',
      techs: ['Python', 'Selenium', 'PowerApps', 'SharePoint', 'Azure Functions', 'Azure Storage', 'Excel'],
      problem: 'Customer intelligence was fragmented across portals, databases and files. Analysts had to manually research the same customer across multiple sources, reconcile identities, validate conflicting information and collect evidence before the customer could be reliably classified.',
      discovery: 'CRT turns fragmented customer research into a repeatable validation workflow by automating multi-source data compilation and providing a unified PowerApps cockpit for classification and approval.',
      constraints: 'Scraping automation must handle rate-limiting and rotating proxies across third-party networks, maintaining auditable validation logs for compliance.',
      implementation: 'Built a selenium-based automated extraction worker coordinating multiple directories. The portal is deployed in Microsoft PowerApps, connecting queries through Azure Functions.',
      challenges: 'Handling proxy failures and portal updates. Mitigated by designing auto-retry pipelines and centralized rule catalogs.',
      lessons: 'Multi-client tooling benefits from shared processing engines with tenant-specific configuration mappings.',
      architecture: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 220" style={{ width: '100%', height: 'auto', maxWidth: '1000px' }}>
          <defs>
            <linearGradient id="bgGradCrt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B0914" />
              <stop offset="100%" stopColor="#1E1238" />
            </linearGradient>
            <linearGradient id="nodeGradCrt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#251E3D" />
              <stop offset="100%" stopColor="#17122B" />
            </linearGradient>
            <marker id="arrowCrt" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" fill="#475569">
              <polygon points="0 0, 6 2, 0 4" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="1000" height="220" fill="url(#bgGradCrt)" rx="16" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />

          {/* Title Area */}
          <rect x="20" y="20" width="960" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <text x="40" y="44" fill="#F8FAFC" fontSize="13" fontWeight="700">CRT MULTI-CLIENT ARCHITECTURE</text>
          <text x="960" y="44" fill="#10B981" fontSize="11" fontWeight="600" textAnchor="end">CORE RUNTIME ENGINE</text>

          {/* Core Engine Node Row */}
          {[
            { name: 'Extraction Engine', desc: 'Python & Selenium RPA', x: 40 },
            { name: 'Matching & Validation', desc: 'Fuzzy Identifiers Reconcile', x: 220 },
            { name: 'Evidence Service', desc: 'Document & Screen Capture', x: 400 },
            { name: 'Rule Engine', desc: 'COT Criteria Evaluator', x: 580 },
            { name: 'Reporting & APIs', desc: 'SharePoint & PowerApps Sync', x: 760 }
          ].map((engine, idx) => (
            <g key={idx} transform={`translate(${engine.x}, 80)`}>
              <rect width="150" height="60" rx="8" fill="url(#nodeGradCrt)" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              <rect width="150" height="3" fill="#8B5CF6" rx="1.5" />
              <text x="75" y="25" fill="#F8FAFC" fontSize="10" fontWeight="700" textAnchor="middle">{engine.name}</text>
              <text x="75" y="45" fill="#94A3B8" fontSize="8" textAnchor="middle">{engine.desc}</text>
              {idx < 4 && (
                <line x1="150" y1="30" x2="180" y2="30" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowCrt)" />
              )}
            </g>
          ))}

          {/* Connectors to client profiles */}
          <line x1="200" y1="140" x2="200" y2="160" stroke="#475569" strokeWidth="1.5" />
          <line x1="500" y1="140" x2="500" y2="160" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="140" x2="800" y2="160" stroke="#475569" strokeWidth="1.5" />

          {/* Client profiles row */}
          {[
            { name: 'Pfizer Profile', rule: 'Pfizer Rules & DEA Sync', x: 100 },
            { name: 'AbbVie Profile', rule: 'AbbVie Rules & iHIN Sync', x: 400 },
            { name: 'Amgen Profile', rule: 'Amgen Rules & HRSA Sync', x: 700 }
          ].map((client, idx) => (
            <g key={idx} transform={`translate(${client.x}, 160)`}>
              <rect width="200" height="40" rx="6" fill="#0B0914" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" />
              <rect width="4" height="40" fill="#10B981" rx="2" />
              <text x="15" y="18" fill="#10B981" fontSize="9" fontWeight="700">{client.name}</text>
              <text x="15" y="30" fill="#94A3B8" fontSize="8">{client.rule}</text>
            </g>
          ))}

        </svg>
      )
    },
    {
      id: 'extract',
      title: 'Extract.AI — Intelligent Document Processing Platform',
      subtitle: 'Turning unstructured invoices, contracts and documents into structured, validated data — at scale.',
      industry: 'Enterprise Automation & FinTech',
      heroMetric: '70% Faster',
      metricsLabel: 'System Integration & $6M Operational Savings',
      techs: ['Azure Form Recognizer', 'Python', 'AWS S3', 'AWS EC2', 'REST APIs', 'JSON / CSV', 'Business Rules Engine'],
      problem: 'Millions of financial documents were trapped in PDFs, scans and images. Manual extraction caused delays, high operational costs, keying errors and limited downstream analytics.',
      discovery: 'Template-based parsing breaks down with layout changes and requires constant manual rework. AI-powered extraction handles multiple layouts with zero template creation, making it highly flexible, scalable, and future-ready.',
      constraints: 'Strict regulatory guidelines demanded high extraction accuracy (>99.4%) and data classification audits before automated accounting updates. Processing must handle extreme layout variations without hardcoded templates.',
      implementation: 'Designed an end-to-end intelligent processing platform: Secure ingestion of invoices/contracts ➔ Azure Form Recognizer AI understanding ➔ Python normalization engine ➔ Configurable Business Rules Engine (duplicates, missing fields, dates) ➔ Structured JSON/CSV output & Analytics ingestion.',
      challenges: 'High customization effort per vendor implementation and downstream format variations. OCR inaccuracies on low-quality scans created exceptions. Resolved by building a configuration-driven rule catalog and a confidence-scored Human-in-the-Loop review queue.',
      lessons: 'Extract.AI transformed document processing from a manual, repetitive task into a reusable intelligent capability — unlocking speed, accuracy and measurable business value ($6M+ operational savings) at enterprise scale.',
      architecture: (
        <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <rect x="10" y="70" width="80" height="40" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="50" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Vendor PDF</text>

          <rect x="130" y="70" width="110" height="40" rx="8" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="185" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">Form Recognizer</text>

          <rect x="290" y="70" width="90" height="40" rx="8" fill="rgba(6, 182, 212, 0.08)" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="335" y="95" fill="#F5F5F5" fontSize="10" textAnchor="middle" fontWeight="600">ERP Database</text>

          <line x1="90" y1="90" x2="130" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="240" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'maci',
      title: 'MACI — AI-Powered Call Value Optimization',
      subtitle: 'Transforming manual STEM audio audits into end-to-end conversational intelligence platform processing call recordings, delivering automated scorecard reporting and performance analytics',
      industry: 'Pharma & AI',
      heroMetric: '$3M+',
      metricsLabel: 'Annual Cost Savings & 70% Rep Performance Boost',
      techs: [
        'AWS S3', 'AWS EC2', 'AWS SageMaker', 'API Gateway',
        'Google USE', 'AWS Comprehend', 'spaCy', 'NLTK',
        'Word2Vec', 'PyTorch', 'AWS Transcribe', 'Google STT',
        'Azure Speech', 'Rev API', 'ffmpeg', 'Python', 'Shell Scripting'
      ],
      problem: 'Traditional STEM (Sales Training Effectiveness & Management) and coaching suffered from slow feedback cycles (~3 months), high manual effort & cost, low coverage (<1% sample size), lack of real-time insights, and inconsistent, subjective assessments.',
      discovery: 'Automating the end-to-end evaluation pipeline - from audio ingestion to AI-based scoring and automated coaching insights - eliminates manual review bottlenecks and scales quality assurance.',
      constraints: 'High-accuracy transcribing with custom medical/pharma dictionaries, PII removal (anonymization via NER/Regex), low-latency audio conversion (WAV to MP3 via FFmpeg on EC2), and secure data classification matching regulatory requirements.',
      implementation: 'Deployed an end-to-end conversational intelligence platform processing call recordings. Features semantic matching via Google USE and sentiment analysis via AWS Comprehend, delivering automated scorecard reporting and performance analytics.',
      challenges: 'Handling speech-to-text accuracy for diverse accents and medical jargon. Resolved by training custom pronunciation dictionaries and using semantic matching to align transcripts with product message guidelines.',
      lessons: 'Transitioning from manual evaluation to AI-driven pipelines reduces feedback latency from months to minutes, achieves 100% audit coverage, and delivers deterministic scoring guidelines that scale training outcomes.',
      architecture: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 240" style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}>
          <defs>
            <linearGradient id="bgGradMaci" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A0B14" />
              <stop offset="100%" stopColor="#120E2E" />
            </linearGradient>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E1E38" />
              <stop offset="100%" stopColor="#14142B" />
            </linearGradient>
            <filter id="glowMaci" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <marker id="arrowMaci" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" fill="#475569">
              <polygon points="0 0, 6 2, 0 4" />
            </marker>
            <marker id="arrowMaciActive" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto" fill="#8B5CF6">
              <polygon points="0 0, 6 2, 0 4" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="1200" height="240" fill="url(#bgGradMaci)" rx="16" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />

          {/* Grid lines */}
          <g stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5">
            <line x1="0" y1="70" x2="1200" y2="70" />
            <line x1="0" y1="170" x2="1200" y2="170" />
            <line x1="300" y1="0" x2="300" y2="240" />
            <line x1="600" y1="0" x2="600" y2="240" />
            <line x1="900" y1="0" x2="900" y2="240" />
          </g>

          {/* Connector lines with moving dash array animation */}
          {[
            { from: 135, to: 165 },
            { from: 285, to: 315 },
            { from: 435, to: 465 },
            { from: 585, to: 615 },
            { from: 735, to: 765 },
            { from: 885, to: 915 },
            { from: 1035, to: 1065 }
          ].map((conn, idx) => (
            <g key={idx} transform="translate(0, 110)">
              <line x1={conn.from} y1="0" x2={conn.to} y2="0" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowMaci)" />
              <line x1={conn.from} y1="0" x2={conn.to} y2="0" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 12" markerEnd="url(#arrowMaciActive)">
                <animate attributeName="stroke-dashoffset" values="18;0" dur="1.5s" repeatCount="indefinite" />
              </line>
            </g>
          ))}

          {/* Pipeline Nodes */}
          {[
            { title: 'Ingest', desc: 'MAA zip via SFTP', color: '#3B82F6', x: 15 },
            { title: 'Convert', desc: 'WAV > MP3 (FFmpeg)', color: '#06B6D4', x: 165 },
            { title: 'Transcribe', desc: 'Custom medical STT', color: '#8B5CF6', x: 315 },
            { title: 'Anonymize', desc: 'PII Scrubbing (NER)', color: '#EC4899', x: 465 },
            { title: 'Semantic Match', desc: 'Google USE model', color: '#F59E0B', x: 615 },
            { title: 'Sentiment', desc: 'AWS Comprehend HCP', color: '#10B981', x: 765 },
            { title: 'Score', desc: 'Coaching Analytics', color: '#84CC16', x: 915 },
            { title: 'Report', desc: 'Dashboard & Insights', color: '#6366F1', x: 1065 }
          ].map((node, idx) => (
            <g key={idx} transform={`translate(${node.x}, 50)`}>
              {/* Card Base */}
              <rect x="0" y="0" width="120" height="120" rx="12" fill="url(#nodeGrad)" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              {/* Accent top border */}
              <rect x="0" y="0" width="120" height="4" fill={node.color} rx="2" />

              {/* Glowing ring under card if active/hovered style */}
              <rect x="0" y="0" width="120" height="120" rx="12" fill="none" stroke={node.color} strokeWidth="1" opacity="0.15" />

              {/* Step Number */}
              <text x="10" y="24" fill="#475569" fontSize="10" fontWeight="800">0{idx + 1}</text>

              {/* Node Title */}
              <text x="60" y="55" fill="#F8FAFC" fontSize="12" fontWeight="700" textAnchor="middle">{node.title}</text>

              {/* Node Desc */}
              <text x="60" y="80" fill="#94A3B8" fontSize="9" textAnchor="middle">
                {node.desc.split(' (')[0]}
              </text>
              {node.desc.includes('(') && (
                <text x="60" y="94" fill="#64748B" fontSize="8" textAnchor="middle">
                  {node.desc.slice(node.desc.indexOf('('))}
                </text>
              )}
            </g>
          ))}

          {/* Footer status line */}
          <g transform="translate(15, 195)">
            <rect width="1170" height="30" rx="6" fill="#06060F" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="15" cy="15" r="3" fill="#10B981">
              <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="28" y="19" fill="#64748B" fontSize="9">Live ingestion channel active: sftp://maa-inbound.maci-prod.internal</text>
            <text x="1150" y="19" fill="#10B981" fontSize="9" fontWeight="600" textAnchor="end">PIPELINE OPERATIONAL</text>
          </g>
        </svg>
      )
    },
    {
      id: 'workforce',
      title: 'Intelligent Digital Data Workforce — HCP/HCO Matching',
      subtitle: 'Enterprise ML Entity Resolution & Master Data Management Pipeline',
      industry: 'Healthcare, Pharmaceuticals & Medical Compliance',
      heroMetric: '>90%',
      metricsLabel: 'Reduction in Manual Stewardship Backlogs',
      techs: ['Python', 'XGBoost', 'NLTK', 'Google Maps API', 'AWS EC2', 'S3'],
      problem: 'Explosive volumes of multi-source vendor & CRM data created massive backlogs in manual data stewardship queues. Legacy deterministic rules collapsed under typos, abbreviations, nicknames, address variations & multi-location practices.',
      discovery: 'An automated machine learning entity resolution pipeline cleansing, blocking, scoring and auto-merging records.',
      constraints: 'Matching algorithms must maintain strict medical compliance and preserve clear auditable logs.',
      implementation: 'Built an entity resolution engine using Google Maps spatial geocoding, multi-layer phonetic blocking, and an XGBoost model to score and auto-merge practitioner associations.',
      challenges: 'Resolving duplicate records with minor name variants and inconsistent formats. Mitigated by using Jaro-Winkler and Levenshtein distances and spatial matches.',
      lessons: 'Cleaner, reliable HCP/HCO master registries are vital for medical compliance, sales reporting, and HIPAA governance.',
      architecture: null
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
    }
  ];

  const displayProjects = projects;

  const currentProj = displayProjects.find(p => p.id === activeProj) || displayProjects[0];

  const handlePrevProject = () => {
    const currentIndex = displayProjects.findIndex(p => p.id === activeProj);
    const prevIndex = (currentIndex - 1 + displayProjects.length) % displayProjects.length;
    setActiveProj(displayProjects[prevIndex].id);

    // Smooth scroll to the top of the projects section
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextProject = () => {
    const currentIndex = displayProjects.findIndex(p => p.id === activeProj);
    const nextIndex = (currentIndex + 1) % displayProjects.length;
    setActiveProj(displayProjects[nextIndex].id);

    // Smooth scroll to the top of the projects section
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Magnetic Button Interaction Helpers
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = (setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    setOffset({ x: 0, y: 0 });
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNextProject();
      } else if (e.key === 'ArrowLeft') {
        handlePrevProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProj]);

  useEffect(() => {
    setIsCompiling(true);

    const projectLogsMap: Record<string, string[]> = {
      bms: [
        `[ok] Claude MCP server initialized`,
        `[ok] authentication & authorization verified`,
        `[ok] natural language prompt received`,
        `[ok] intent classification completed`,
        `[ok] sql generated and validated`,
        `[ok] governance rules passed`,
        `[ok] query executed on Amazon Redshift`,
        `[ok] response generated in 3.2s`,
        `$ execution completed successfully.`
      ],
      smartvision: [
        `[ok] connection to wafer camera feed active`,
        `[ok] SageMaker inference container loaded`,
        `[ok] wafer chemical spray sequence detected`,
        `[ok] OpenCV filtering initialized`,
        `[ok] defect segmentation execution started`,
        `[ok] lens fogging check passed: anomaly index 0.02`,
        `[ok] database synced to React wafer cockpit`,
        `$ edge inference completed in 0.85s`
      ],
      extract: [
        `[ok] document pdf binary ingested`,
        `[ok] skew-correction filter applied`,
        `[ok] image binarization successful`,
        `[ok] transformer layout grid generated`,
        `[ok] text lines extraction verified (>99.4%)`,
        `[ok] ERP transaction payloads constructed`,
        `$ document extraction completed successfully.`
      ],
      crt: [
        `[ok] SharePoint connection verified`,
        `[ok] Azure Functions triggers online`,
        `[ok] Selenium crawling sessions initialized`,
        `[ok] proxy rotation routing confirmed`,
        `[ok] pharmaceutical directories parsed`,
        `$ intelligence compilation completed.`
      ],
      rakuten: [
        `[ok] claim manual query string parsed`,
        `[ok] device manuals vector space search active`,
        `[ok] retrieved text chunks validated`,
        `[ok] hallucination guard rails verified`,
        `[ok] warranty response compiled`,
        `$ warranty claim verified in 6.4s`
      ],
      maci: [
        `[ok] connection to audio stream verified`,
        `[ok] Whisper transcription listener active`,
        `[ok] semantic matching query pipeline online`,
        `[ok] context-bound prompt generation success`,
        `$ live conversation assistance operational.`
      ],
      workforce: [
        `[ok] provider entity directory synced`,
        `[ok] Elasticsearch scoring criteria online`,
        `[ok] HIPAA compliance checks completed`,
        `[ok] phonetic standardizer applied`,
        `$ record alignments processed successfully.`
      ]
    };

    const initialLog = currentProj.id === 'bms'
      ? `$ initializing AI Pricing Intelligence Platform...`
      : `$ initializing environment for ${currentProj.title}...`;

    setConsoleLogs([initialLog]);

    const logs = projectLogsMap[currentProj.id] || [
      `[ok] connecting to database clusters...`,
      `[ok] loading schema mappings and metrics indices...`,
      `[ok] verifying telemetry pipelines: latency check 12ms...`,
      `[ok] system session secure (token verified)...`,
      `$ execution compiled successfully.`
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        const nextLog = logs[logIndex];
        setConsoleLogs(prev => {
          // Guard against state mismatch during async unmounts
          if (!prev) return [];
          const list = [...prev];
          list.push(nextLog);
          return list;
        });
        logIndex++;
      } else {
        setIsCompiling(false);
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [activeProj]);

  return (
    <section id="projects" data-section="projects" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 className="title-section">
          Featured Projects
        </h2>
        <p className="body-lead" style={{ maxWidth: '900px' }}>
          {viewMode === 'engineer'
            ? 'Enterprise AI, automation, and digital products built around real operational problems.'
            : 'High-level business outcomes, operational cost savings, and client leadership results.'}
        </p>
      </div>

      {viewMode === 'consultant' ? (
        /* Consultant Pitch Deck Slide View */
        <div
          className="glass-panel"
          style={{
            width: '100%',
            padding: '36px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            position: 'relative'
          }}
        >
          {/* Top Control Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Executive Briefing Slide {slideIndex + 1} of {projects.length}
              </span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                {projects[slideIndex].title}
              </h2>
            </div>
            {/* Slider Arrows */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setSlideIndex(prev => (prev - 1 + projects.length) % projects.length)}
                data-cursor="pointer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '12px' }}
              >
                ← Prev Slide
              </button>
              <button
                onClick={() => setSlideIndex(prev => (prev + 1) % projects.length)}
                data-cursor="pointer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '12px' }}
              >
                Next Slide →
              </button>
            </div>
          </div>

          {/* Slide Deck ROI Dashboard Hero Banner */}
          <div
            style={{
              padding: '32px',
              borderRadius: '16px',
              background: 'rgba(59, 130, 246, 0.03)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--success-color)', fontFamily: "'Outfit', sans-serif" }}>
                {projects[slideIndex].heroMetric}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 600 }}>
                {projects[slideIndex].metricsLabel}
              </div>
            </div>
            <div style={{ maxWidth: '550px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Commercial Objective
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].subtitle}
              </p>
            </div>
          </div>

          {/* 3-Column Pitch Deck Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🏢 Business Challenge
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].problem}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🔍 Strategic Discovery
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].discovery}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                💼 Business Outcome
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {projects[slideIndex].lessons}
              </p>
            </div>

          </div>

          {/* Bullet Navigation Dots */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: slideIndex === idx ? 'var(--accent-color)' : 'var(--border-color)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      ) : (
        /* Render Engineer Mode Code Panel */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', overflow: 'visible' }}>

          {/* Project Selector List (Horizontal Flex Slider Layout) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', overflow: 'visible', margin: '24px 0' }}>
            {/* Left Chevron Button */}
            <button
              onClick={handlePrevProject}
              onMouseMove={(e) => handleMouseMove(e, setPrevOffset)}
              onMouseLeave={() => {
                handleMouseLeave(setPrevOffset);
                setIsPrevHovered(false);
              }}
              onMouseEnter={() => setIsPrevHovered(true)}
              data-cursor="pointer"
              aria-label="Previous project"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: isPrevHovered
                  ? `1px solid ${cardConfigMap[activeProj]?.badgeColor || 'rgba(255, 255, 255, 0.15)'}`
                  : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: isPrevHovered
                  ? `rgba(${getRgbValues(cardConfigMap[activeProj]?.badgeColor || '#3B82F6')}, 0.12)`
                  : 'rgba(11, 11, 11, 0.5)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                fontSize: '1rem',
                transition: 'border-color 350ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <span style={{
                transform: `translate(${prevOffset.x}px, ${prevOffset.y}px)`,
                transition: prevOffset.x === 0 && prevOffset.y === 0
                  ? 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                  : 'none',
                display: 'inline-block'
              }}>&lt;</span>
            </button>

            {/* Flat Flex Cards Row */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flex: 1,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                padding: '8px 0'
              }}
              className="hide-scrollbar"
            >
              {displayProjects.map((proj, idx) => {
                const isSelected = activeProj === proj.id;
                const cardConfig = cardConfigMap[proj.id];
                if (!cardConfig) return null;

                return (
                  <div
                    key={proj.id}
                    onClick={() => {
                      setActiveProj(proj.id);
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`selector-project-card stagger-entrance-card ${isSelected ? 'active-card' : ''}`}
                    style={{
                      animationDelay: `${idx * 60}ms`,
                      flexGrow: isSelected ? 2.2 : 1,
                      flexShrink: 0,
                      flexBasis: '0px',
                      backgroundColor: isSelected ? 'rgba(9, 13, 29, 0.6)' : 'rgba(11, 11, 11, 0.45)',
                      border: isSelected ? `2px solid ${cardConfig.badgeColor}` : '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: isSelected ? `0 0 20px ${cardConfig.glowColor}` : 'none',
                      borderRadius: '12px',
                      display: 'flex',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      opacity: isSelected ? 1 : 0.65
                    }}
                  >
                    {/* Left Column: Graphic (35% width) */}
                    <div style={{
                      width: '35%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.01)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      {renderLeftGraphic(proj.id)}
                    </div>

                    {/* Right Column: Content (65% width) */}
                    <div style={{
                      width: '65%',
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                      minWidth: 0
                    }}>
                      {/* Top Header line */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
                          {/* Index Badge */}
                          <span style={{
                            fontSize: '0.6rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            backgroundColor: cardConfig.badgeColor,
                            padding: '1px 5px',
                            borderRadius: '4px',
                            lineHeight: 1,
                            flexShrink: 0
                          }}>
                            {`0${idx + 1}`}
                          </span>
                          <span className="project-card-title" style={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                            {cardConfig.shortTitle}
                          </span>
                        </div>

                        {/* Subtitle */}
                        <span className="project-card-subtitle" style={{
                          fontSize: '0.6rem',
                          color: '#94a3b8',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}>
                          {cardConfig.shortSubtitle}
                        </span>
                      </div>

                      {/* Middle row: Tags */}
                      <div className="nudge-on-hover" style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', margin: '4px 0' }}>
                        {cardConfig.cardTags.map((tag, tIdx) => (
                          <span key={tIdx} style={{
                            fontSize: '0.55rem',
                            color: '#a3b3cc',
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '1px 4px',
                            borderRadius: '4px',
                            whiteSpace: 'nowrap'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Outcome */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#10b981', minWidth: 0 }}>
                        <span style={{ fontSize: '0.55rem', flexShrink: 0 }}>📈</span>
                        <span className="project-card-outcome" style={{
                          fontSize: '0.55rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          color: '#10b981'
                        }}>
                          {cardConfig.cardOutcome}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNextProject}
              onMouseMove={(e) => handleMouseMove(e, setNextOffset)}
              onMouseLeave={() => {
                handleMouseLeave(setNextOffset);
                setIsNextHovered(false);
              }}
              onMouseEnter={() => setIsNextHovered(true)}
              data-cursor="pointer"
              aria-label="Next project"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: isNextHovered
                  ? `1px solid ${cardConfigMap[activeProj]?.badgeColor || 'rgba(255, 255, 255, 0.15)'}`
                  : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: isNextHovered
                  ? `rgba(${getRgbValues(cardConfigMap[activeProj]?.badgeColor || '#3B82F6')}, 0.12)`
                  : 'rgba(11, 11, 11, 0.5)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                fontSize: '1rem',
                transition: 'border-color 350ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <span style={{
                transform: `translate(${nextOffset.x}px, ${nextOffset.y}px)`,
                transition: nextOffset.x === 0 && nextOffset.y === 0
                  ? 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                  : 'none',
                display: 'inline-block'
              }}>&gt;</span>
            </button>
          </div>

          {/* Detailed Case Study Panel (Takes Full Width) */}
          <div style={{ width: '100%' }} className="glass-panel">
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Header / Hero Metric Banner */}
              <div className="case-study-header">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 className="case-study-title">
                    {currentProj.title}
                  </h2>
                  <p className="case-study-subtitle">
                    {currentProj.subtitle}
                  </p>
                </div>

                {/* Big Metric Badge */}
                {currentProj.id === 'bms' ? (
                  <div
                    style={{
                      padding: '20px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(34, 197, 94, 0.03)',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                      minWidth: '240px',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      flexShrink: 0
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ color: '#22C55E' }}>
                        <Cpu size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22C55E' }}>
                          Enterprise AI
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          Production Deployment
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)' }}>
                        Claude + MCP
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)' }}>
                        AWS Redshift
                      </span>
                    </div>
                  </div>
                ) : currentProj.id === 'crt' ? null : (
                  <div
                    style={{
                      padding: '16px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(34, 197, 94, 0.05)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      minWidth: '180px',
                      textAlign: 'center',
                      flexShrink: 0
                    }}
                  >
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22C55E', fontFamily: "'Outfit', sans-serif" }}>
                      {currentProj.heroMetric}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#A3A3A3', marginTop: '4px', lineHeight: 1.3 }}>
                      {currentProj.metricsLabel}
                    </div>
                  </div>
                )}
              </div>

              {/* Structured Content Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {currentProj.id === 'maci' ? (
                  <MaciCustomDashboard />
                ) : currentProj.id === 'crt' ? (
                  <CrtCustomDashboard />
                ) : currentProj.id === 'extract' ? (
                  <ExtractCustomDashboard />
                ) : currentProj.id === 'rakuten' ? (
                  <RakutenCustomDashboard />
                ) : currentProj.id === 'workforce' ? (
                  <WorkforceCustomDashboard />
                ) : currentProj.id === 'bms' ? (
                  <>
                    {/* Row 1: Challenge & Constraints */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'left' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <AlertCircle size={16} style={{ color: '#EF4444' }} />
                          Business Challenge
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                          Global pricing teams needed to evaluate how pricing changes across reference countries impacted international drug pricing under IRP and MFN regulations.
                        </p>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginTop: '8px' }}>
                          The existing workflow depended on manual SQL analysis, fragmented pricing datasets, and repeated engineering support, making scenario analysis slow, error-prone, and difficult to scale for regulatory decision making.
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <ShieldCheck size={16} style={{ color: '#3B82F6' }} />
                          Enterprise Constraints
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <li>Sensitive pricing data could never be exposed directly to an LLM.</li>
                          <li>Every SQL query required governance, validation, and auditability.</li>
                          <li>AI-generated insights had to execute entirely within enterprise AWS infrastructure.</li>
                          <li>Responses needed deterministic execution suitable for regulated pharmaceutical environments.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Row 2: Discovery & Solution */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'left' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Search size={16} style={{ color: '#06B6D4' }} />
                          Discovery
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '10px' }}>
                          Analysis of existing workflows identified three major bottlenecks:
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', listStyleType: 'disc', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <li>Business users relied on technical teams for SQL-based analysis.</li>
                          <li>Historical pricing data existed across multiple Redshift datasets.</li>
                          <li>Traditional dashboards answered historical questions but couldn't support interactive "what-if" pricing scenarios.</li>
                        </ul>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginTop: '10px' }}>
                          This created an opportunity for secure AI-assisted analytics.
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Lightbulb size={16} style={{ color: '#22C55E' }} />
                          Solution
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '10px' }}>
                          Designed and implemented a secure Claude Model Context Protocol (MCP) layer that translates natural language into validated SQL before executing governed queries against Amazon Redshift.
                        </p>
                        <p className="body-normal" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '10px' }}>
                          MCP acts as a semantic gateway that:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {[
                            'Understands business intent',
                            'Generates parameterized SQL',
                            'Validates against governance rules',
                            'Executes queries securely',
                            'Returns accurate, auditable insights in seconds'
                          ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                              <Check size={14} style={{ color: '#22C55E', flexShrink: 0 }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Row 1: Problem & Constraints */}
                    <div className="responsive-grid">
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <ShieldAlert size={14} style={{ color: '#EF4444' }} />
                          The Problem
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.problem}
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Layers size={14} style={{ color: '#3B82F6' }} />
                          Constraints
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.constraints}
                        </p>
                      </div>
                    </div>

                    {/* Row 2: Discovery & Lessons */}
                    <div className="responsive-grid">
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <Layers size={14} style={{ color: '#06B6D4' }} />
                          Discovery
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.discovery}
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <BarChart3 size={14} style={{ color: '#22C55E' }} />
                          Key Lessons
                        </h4>
                        <p className="body-normal" style={{ fontSize: '0.95rem' }}>
                          {currentProj.lessons}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Row 3: Architecture Diagram Panel (Hidden for custom dashboards) */}
                {currentProj.id !== 'extract' && currentProj.id !== 'maci' && currentProj.id !== 'crt' && currentProj.id !== 'rakuten' && currentProj.id !== 'workforce' && (
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <Database size={14} style={{ color: '#8B5CF6' }} />
                      System Architecture
                    </h4>
                    <div
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        border: '1px solid var(--border-color)',
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
                )}

                {/* Row 2.5: Simulated Compiling Log (Computer Animation) */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {currentProj.id === 'bms' ? (
                      <Terminal size={14} style={{ color: '#8B5CF6' }} />
                    ) : (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
                    )}
                    Verification Console
                  </h4>
                  <div
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid rgba(59, 130, 246, 0.15)',
                      borderRadius: '12px',
                      padding: '16px',
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      color: '#22C55E',
                      minHeight: '130px',
                      boxShadow: 'inset 0 0 10px rgba(34, 197, 94, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      gap: '4px',
                      overflow: 'hidden'
                    }}
                  >
                    {consoleLogs.map((log, idx) => (
                      <div key={idx} style={{ color: log?.startsWith('[ok]') ? '#22C55E' : log?.startsWith('$') ? '#3B82F6' : 'var(--text-primary)' }}>
                        {log}
                      </div>
                    ))}
                    {isCompiling && <span className="typing-cursor" style={{ color: '#22C55E' }} />}
                  </div>
                </div>

                {/* Row 4: Technology Stack */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Settings size={14} style={{ color: '#3B82F6' }} />
                    Technology Stack
                  </h4>
                  {currentProj.id === 'maci' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                      {[
                        { cat: 'Cloud / Infra', techs: ['AWS S3', 'AWS SageMaker', 'API Gateway'] },
                        { cat: 'NLP / ML', techs: ['Google MUSE', 'AWS Comprehend', 'spaCy', 'NLTK', 'Word2Vec'] },
                        { cat: 'Speech-to-Text', techs: ['AWS Transcribe', 'Google STT', 'Microsoft Azure Speech', 'Rev API'] },
                        { cat: 'Audio Processing', techs: ['ffmpeg'] },
                        { cat: 'Languages', techs: ['Python'] }
                      ].map((stack, idx) => (
                        <div key={idx} style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '12px',
                          padding: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}>
                          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>
                            {stack.cat}
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {stack.techs.map((t, tIdx) => (
                              <span key={tIdx} style={{
                                fontSize: '0.65rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-secondary)'
                              }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {currentProj.techs.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: 'var(--glass-bg)',
                            border: '1px solid var(--border-color)',
                            fontSize: '0.8rem',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>



              {/* Row 6: Secondary Scroll Navigation Links */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '16px',
                  padding: '0 4px'
                }}
              >
                {/* Previous Project text button */}
                <button
                  onClick={() => {
                    const idx = displayProjects.findIndex(p => p.id === activeProj);
                    const prevProj = displayProjects[(idx - 1 + displayProjects.length) % displayProjects.length];
                    setActiveProj(prevProj.id);
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-cursor="pointer"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
                >
                  ← Previous Project
                </button>

                {/* Dots indicator */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {displayProjects.map((proj, idx) => {
                    const isSelected = activeProj === proj.id;
                    const cardConfig = cardConfigMap[proj.id];
                    return (
                      <button
                        key={proj.id}
                        onClick={() => {
                          setActiveProj(proj.id);
                          const el = document.getElementById('projects');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        data-cursor="pointer"
                        style={{
                          width: isSelected ? '28px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          backgroundColor: isSelected ? (cardConfig?.badgeColor || '#3B82F6') : '#27272a',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          transition: 'width 550ms cubic-bezier(0.22, 1, 0.36, 1), background-color 550ms cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                        aria-label={`Go to project ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                {/* Next Project text button */}
                <button
                  onClick={handleNextProject}
                  data-cursor="pointer"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#3B82F6',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#3B82F6'; }}
                >
                  Next Project ➔
                </button>
              </div>

            </div>
          </div>

          {/* Standing Project Pill Navigation Status Bar */}
          <div className="project-navigation-bar">
            {/* Left: Projects Button */}
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              data-cursor="pointer"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '0.75rem',
                color: '#ffffff',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'border-color 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
            >
              <span>← Projects</span>
            </button>

            {/* Center: Index and Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.8rem', color: '#ffffff', flexWrap: 'wrap' }}>
              {/* Grid Icon representation */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 3px)', gap: '2px', color: '#64748b' }}>
                {[...Array(9)].map((_, i) => (
                  <span key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                ))}
              </div>
              <span style={{ fontWeight: 700, display: 'flex', gap: '4px' }}>
                <span style={{ color: '#3B82F6' }}>{`0${displayProjects.findIndex(p => p.id === activeProj) + 1}`}</span>
                <span style={{ color: '#475569' }}>{` / 0${displayProjects.length}`}</span>
              </span>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>
                {cardConfigMap[activeProj]?.shortTitle || ''}
              </span>
              {(() => {
                const short = (cardConfigMap[activeProj]?.shortTitle || '').toLowerCase().trim();
                const full = (currentProj.title || '').toLowerCase().trim();
                const isDuplicate = short === full || full.includes(short) || short.includes(full) || short.substring(0, 15) === full.substring(0, 15);
                return !isDuplicate && (
                  <span style={{ color: '#64748b' }}>
                    {currentProj.title}
                  </span>
                );
              })()}
            </div>

            {/* Right: Next Project with Dynamic Title */}
            <button
              onClick={handleNextProject}
              data-cursor="pointer"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span style={{ color: '#64748b' }}>Next:</span>
              <span style={{ color: '#3B82F6', fontWeight: 600 }}>
                {(() => {
                  const idx = displayProjects.findIndex(p => p.id === activeProj);
                  const nextProj = displayProjects[(idx + 1) % displayProjects.length];
                  return cardConfigMap[nextProj.id]?.shortTitle || '';
                })()}
              </span>
              <span style={{ color: '#3B82F6' }}>➔</span>
            </button>
          </div>

        </div>
      )}
    </section>
  );
}
