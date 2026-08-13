export interface TimelineStep {
  id: string;
  title: string;
  iconName: 'Briefcase' | 'Terminal' | 'Cloud' | 'Cpu' | 'BrainCircuit' | 'Milestone';
  subtitle: string;
  description: string;
  impact: string;
}

export interface Role {
  id: string;
  company: string;
  logo: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 'problems',
    title: 'Business Problems',
    iconName: 'Briefcase',
    subtitle: 'Where everything begins',
    description: 'Began by directly analyzing core operational leaks in enterprise settings. Rather than writing code immediately, focused on understanding the financial impact, user bottlenecks, and manual overhead in Pharma, Finance, and Retail.',
    impact: 'Developed an innate business-first mindset, focusing strictly on delivering measurable ROI.'
  },
  {
    id: 'automation',
    title: 'Cognitive Automation',
    iconName: 'Terminal',
    subtitle: 'Scaling operations with scripts',
    description: 'Wrote advanced Python scripts, optical character recognition engines (OCR), and robotic process automations (RPA). Replaced fragile manual workflows with resilient event-driven background routines.',
    impact: 'Automated data processes across 33 countries, yielding millions of dollars in annual run-rate savings.'
  },
  {
    id: 'infrastructure',
    title: 'Cloud & Infrastructure',
    iconName: 'Cloud',
    subtitle: 'High-availability foundations',
    description: 'Designed secure, auto-scaling backend infrastructure on AWS. Managed multi-region VPC architectures, pricing intelligence databases, and high-frequency API systems supporting tens of thousands of requests.',
    impact: 'Engineered backend databases processing millions of rows with zero unplanned downtime.'
  },
  {
    id: 'iot',
    title: 'Edge AI & Vision IoT',
    iconName: 'Cpu',
    subtitle: 'Applying computer vision physically',
    description: 'Developed and integrated computer vision models (SageMaker) with physical edge hardware (AWS IoT Greengrass). Built custom vision inspection systems directly inside Finance environments.',
    impact: 'Deployed real-time vision pipelines, saving millions in manufacturing scrap costs.'
  },
  {
    id: 'genai',
    title: 'Generative AI & MCP',
    iconName: 'BrainCircuit',
    subtitle: 'The cognitive agent era',
    description: 'Engineered advanced RAG pipelines, prompt systems, and autonomous agent frameworks. Built specialized Model Context Protocol (MCP) servers allowing LLMs to interact securely with legacy enterprise databases.',
    impact: 'Delivered conversational pricing intelligence and autonomous warranty processing platforms.'
  },
  {
    id: 'forward',
    title: 'Forward Deployed Engineering',
    iconName: 'Milestone',
    subtitle: 'Bridging the product gap',
    description: 'Operating at the intersection of product, engineering, and client operations. Deploying directly alongside cross-functional enterprise teams to diagnose constraints, design system architectures, and deliver custom, production-grade products rapidly.',
    impact: 'Led cross-functional client integrations driving $12M+ in validated business value.'
  }
];

export const ROLES: Role[] = [
  {
    id: 'srm',
    company: 'SRM Technologies',
    logo: 'srm_logo.png',
    title: 'Associate Project Manager / Forward Deployed Engineer',
    period: 'Feb 2025 - Current',
    location: 'Bengaluru, India',
    summary:
      'Building enterprise GenAI products using Python, LLMs, LangChain, and AWS to automate complex business workflows.',
    highlights: [
      'Built Python GenAI platform with LangChain, OpenAI & AWS. Designed resilient prompt engineering with LLM fallback.'
    ]
  },
  {
    id: 'zs-crt',
    company: 'ZS Associates',
    logo: 'ZS_Associates.svg',
    title: 'Product Lead / Senior Consultant',
    period: 'Jan 2023 - Feb 2025',
    location: 'Gurugram, India',
    summary:
      'Led enterprise automation products for global pharmaceutical organizations.',
    highlights: [
      'Reduced manual validation effort by 90%. Led cross-functional product delivery.',
      'Owned Agile roadmap and product releases.'
    ]
  },
  {
    id: 'zs-nlp',
    company: 'ZS Associates',
    logo: 'ZS_Associates.svg',
    title: 'Business Technology Solutions Consultant',
    period: 'Jan 2022 - Dec 2022',
    location: 'Gurugram, India',
    summary:
      'Delivered AI-powered NLP solutions with measurable commercial impact.',
    highlights: [
      'Delivered $3M+ annual business value. Built NLP engine for HCP engagement insights.',
      'Improved sales effectiveness with AI recommendations.'
    ]
  },
  {
    id: 'zs-extract-ai',
    company: 'ZS Associates',
    logo: 'ZS_Associates.svg',
    title: 'Intelligent Automation Product Lead',
    period: 'Jul 2021 - Dec 2021',
    location: 'Gurugram, India',
    summary:
      'Led AI document automation products for Top 10 global pharma clients.',
    highlights: [
      'Saved $6M by reducing integration time by 70%.Led a 15+ member AI delivery team.',
      'Delivered 30% cost reduction and 300% revenue growth.'
    ]
  },
  {
    id: 'zs-digital-data',
    company: 'ZS Associates',
    logo: 'ZS_Associates.svg',
    title: 'Product Owner – Intelligent Data Workforce',
    period: 'Jan 2021 - Sep 2021',
    location: 'Gurugram, India',
    summary:
      'Owned AI-powered master data products for Life Sciences organizations.',
    highlights: [
      'Improved duplicate detection by 3×.Achieved 95%+ AI matching accuracy.',
      'Owned product lifecycle end-to-end.'
    ]
  },
  {
    id: 'zs-survey-link',
    company: 'ZS Associates',
    logo: 'ZS_Associates.svg',
    title: 'Associate Consultant',
    period: 'Aug 2019 - Dec 2020',
    location: 'Gurugram, India',
    summary:
      'Built intelligent automation solutions for enterprise quality assurance.',
    highlights: [
      'Reduced execution time by 50%. Cut manual effort by 40%.',
      'Built automation using Python & RPA.'
    ]
  },
  {
    id: 'zs-sales-rpa',
    company: 'ZS Associates',
    logo: 'ZS_Associates.svg',
    title: 'Associate / Developer',
    period: 'Jun 2018 - Jul 2019',
    location: 'Gurugram, India',
    summary:
      'Delivered enterprise RPA solutions for global pharmaceutical operations.',
    highlights: [
      'Automated reporting across 33+ markets.Saved $280K annually.',
      'Improved data accuracy from 76% to 98%.'
    ]
  }
];
