export interface TechItem {
  name: string;
  desc: string;
  usedIn?: string[];
  valueDeliver?: string[];
}

export interface Cluster {
  title: string;
  iconName: 'Brain' | 'Settings' | 'Cloud' | 'Users';
  color: string;
  glowColor: string;
  iconBg: string;
  items: TechItem[];
}

export const CLUSTERS: Cluster[] = [
  {
    title: 'Generative AI & Applied AI',
    iconName: 'Brain',
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
    iconName: 'Settings',
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
    iconName: 'Cloud',
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
    iconName: 'Users',
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
