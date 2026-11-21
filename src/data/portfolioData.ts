import { Project, Skill, ProcessStep, Testimonial, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shandana Wazir',
  initials: 'SW',
  role: 'Software Developer',
  tagline: 'I build digital experiences that matter.',
  highlightWord: 'experiences',
  bio: "I'm Shandana Wazir, a passionate full-stack developer who loves turning ideas into scalable, beautiful, and performant web applications.",
  aboutMeText: "I'm a full-stack developer with a strong focus on building modern, responsive, and user-friendly web applications. I enjoy solving complex problems and continuously learning new technologies.",
  location: 'Peshawar, Pakistan',
  email: 'mailto:shandanawazir4@gmail.com',
  phone: '+92 332 5832439',
  availability: 'Open to Work',
  availabilityStatus: 'Open to new opportunities',
  experienceYears: '4+',
  projectsCount: '20+',
  satisfactionRate: '99%',
  socials: {
    github: 'https://github.com/shandanawazir',
    linkedin: 'https://linkedin.com/in/shandanawazir',
    twitter: 'https://twitter.com/shandanawazir',
    email: 'mailto:shandanawazir4@gmail.com',
  },
};

export const SKILLS: Skill[] = [
  { name: 'JavaScript / TypeScript', percentage: 95 },
  { name: 'React / Next.js', percentage: 90 },
  { name: 'Node.js / Express', percentage: 85 },
  { name: 'Python / Django', percentage: 75 },
  { name: 'SQL / MongoDB', percentage: 80 },
  { name: 'HTML / CSS / Tailwind', percentage: 95 },
];

export const PROJECTS: Project[] = [
  {
    id: 'fintrack',
    name: 'FinTrack Dashboard',
    category: 'Full Stack',
    description: 'A modern finance dashboard for tracking expenses, budgets, and analytics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    image: '/images/fintrack.png',
    githubUrl: 'https://github.com/shandanawazir/fintrack-dashboard',
    liveUrl: 'https://fintrack-demo.shandanawazir.dev',
    featured: true,
    highlights: [
      'Real-time cash flow and balance forecasting with Chart.js visualization',
      'Automated categorized transaction tagging with 99.4% accuracy',
      'Multi-currency support with dynamic FX exchange rate feeds',
      'Exportable financial reports in CSV, PDF, and interactive spreadsheets'
    ]
  },
  {
    id: 'shopvista',
    name: 'ShopVista E-commerce',
    category: 'Full Stack',
    description: 'A feature-rich e-commerce platform with product management, shopping cart, and secure checkout experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/shopvista-crop.png',
    githubUrl: 'https://github.com/shandanawazir/shopvista-ecommerce',
    liveUrl: 'https://shopvista-demo.shandanawazir.dev',
    featured: true,
    highlights: [
      'Comprehensive product catalog with faceted search and instant filtering',
      'Stripe Payment Elements integration for Apple Pay, cards, and Google Pay',
      'Admin dashboard with real-time inventory tracking and order fulfillment',
      'JWT token-based authentication with role-based access control'
    ]
  },
  {
    id: 'taskify',
    name: 'Taskify AI',
    category: 'Web App',
    description: 'An intelligent productivity application for managing tasks, deadlines, and team collaboration.',
    technologies: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS'],
    image: '/images/taskify.png',
    githubUrl: 'https://github.com/shandanawazir/taskify-ai',
    liveUrl: 'https://taskify-demo.shandanawazir.dev',
    featured: true,
    highlights: [
      'AI assistant that breaks complex roadmap goals into actionable daily tickets',
      'Live drag-and-drop Kanban sprint boards powered by Firebase Firestore',
      'Smart deadline risk alerts predicting sprint delays',
      'Collaborative team workspaces with nested threaded comments'
    ]
  },
  {
    id: 'cloudpulse',
    name: 'CloudPulse DevOps Monitor',
    category: 'DevOps / Tooling',
    description: 'Zero-latency cloud infrastructure monitoring and anomaly detection dashboard.',
    technologies: ['Next.js', 'Go', 'Docker', 'InfluxDB', 'Tailwind CSS'],
    image: '/images/fintrack.png',
    githubUrl: 'https://github.com/shandanawazir/cloudpulse-monitor',
    liveUrl: 'https://cloudpulse-demo.shandanawazir.dev',
    featured: false,
    highlights: [
      'Live container health metrics polling across multi-region Kubernetes clusters',
      'Custom webhook alert dispatcher to Slack, PagerDuty, and Discord'
    ]
  },
  {
    id: 'neuralchat',
    name: 'NeuralChat Enterprise',
    category: 'AI / Full Stack',
    description: 'Enterprise AI knowledge assistant with RAG vector search across private documentation.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'React'],
    image: '/images/taskify.png',
    githubUrl: 'https://github.com/shandanawazir/neuralchat-enterprise',
    liveUrl: 'https://neuralchat-demo.shandanawazir.dev',
    featured: false,
    highlights: [
      'Hybrid semantic vector retrieval over PDF, Notion, and Confluence docs',
      'Granular data sovereignty permissions ensuring zero leak of confidential specs'
    ]
  }
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understanding goals, requirements, and project scope.',
    iconName: 'Search',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Planning architecture, technology stack, and project roadmap.',
    iconName: 'FileText',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Creating wireframes and beautiful user interfaces.',
    iconName: 'PenTool',
  },
  {
    step: '04',
    title: 'Develop',
    description: 'Writing clean, scalable, and efficient code.',
    iconName: 'Code',
  },
  {
    step: '05',
    title: 'Test',
    description: 'Testing functionality, performance, and cross-browser compatibility.',
    iconName: 'ShieldCheck',
  },
  {
    step: '06',
    title: 'Deploy',
    description: 'Deploying projects and ensuring a smooth launch.',
    iconName: 'Rocket',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aleena Khan',
    role: 'CEO',
    company: 'TechSolutions',
    content: 'Shandana is an exceptional developer! She delivered our project on time with clean code and amazing attention to detail. Highly recommended!',
    avatar: '/images/hamza-crop.png',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'NexaScale Digital',
    content: 'Working with Abdullah was a breath of fresh air. His technical depth in React and scalable backend architecture helped us launch our SaaS platform 3 weeks ahead of schedule.',
    avatar: '/images/hamza-ai.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Founder & CTO',
    company: 'CloudPulse Labs',
    content: 'The level of polish and attention to responsive design Abdullah delivers is world class. Every animation, state transition, and API endpoint runs flawlessly.',
    avatar: '/images/hamza-crop.png',
    rating: 5,
  },
];

export const STATS: StatItem[] = [
  { value: '20+', label: 'Happy Clients', iconName: 'Users' },
  { value: '20+', label: 'Projects Completed', iconName: 'Layers' },
  { value: '4+', label: 'Years Experience', iconName: 'Briefcase' },
  { value: '99%', label: 'Satisfaction Rate', iconName: 'Star' },
];
