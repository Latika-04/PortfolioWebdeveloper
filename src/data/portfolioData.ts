import {
  PersonalInfo,
  QuickStat,
  SkillCategory,
  NetworkNode,
  WorkExperience,
  ProjectItem,
  CertificationItem,
  CompetitionItem,
  MindsetStep,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'M. S. LAXMI PRALATIKA',
  role: 'Web Developer',
  tagline: 'HTML • CSS • JavaScript • REST APIs • Full-Stack Fundamentals',
  bioSummary:
    'I build responsive, reusable web experiences and backend APIs with a strong foundation in software engineering and AI/ML.',
  email: 'laxmipralatika22820@gmail.com',
  linkedIn: 'https://linkedin.com/in/lpralatikams46',
  gitHub: 'https://github.com/Latika-04',
  location: 'Hyderabad, India',
  education: {
    degree: 'B.Tech Computer Science & Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    college: 'AVN Institute of Engineering and Technology',
    location: 'Ibrahimpatnam, Hyderabad',
    cgpa: '8.88 / 10',
    backlogs: 'No Backlogs',
    graduation: '2027',
  },
};

export const quickStats: QuickStat[] = [
  {
    id: 'cgpa',
    value: '8.88/10',
    label: 'CGPA',
    sublabel: 'Consistent Academic Excellence',
    iconName: 'GraduationCap',
  },
  {
    id: 'grad',
    value: '2027',
    label: 'Graduation',
    sublabel: 'B.Tech CSE (AI & ML)',
    iconName: 'Calendar',
  },
  {
    id: 'backlogs',
    value: '0',
    label: 'Backlogs',
    sublabel: 'Clean Academic Record',
    iconName: 'CheckCircle2',
  },
  {
    id: 'projects',
    value: '3+',
    label: 'Major Projects',
    sublabel: 'Web & AI/ML Implementations',
    iconName: 'Code2',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    isPrimary: true,
    description: 'Core focus: Crafting responsive, accessible, component-driven user interfaces.',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup & Web Standards' },
      { name: 'CSS3', level: 'Responsive Layouts & Flex/Grid' },
      { name: 'JavaScript (ES6+)', level: 'Async, DOM & Modern JS' },
      { name: 'Responsive Web Design', level: 'Mobile-First & Fluid Grids' },
      { name: 'Reusable UI Components', level: 'Modular Architecture' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Building robust RESTful services and server architectures.',
    skills: [
      { name: 'Python', level: 'Core & Scripting' },
      { name: 'FastAPI', level: 'High-Performance REST APIs' },
      { name: 'Node.js', level: 'Server Runtime Fundamentals' },
      { name: 'REST API Design', level: 'Endpoints, Status Codes & Auth' },
      { name: 'Java', level: 'OOP & Standard Libraries' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational and document storage solutions.',
    skills: [
      { name: 'MySQL', level: 'Queries, Schema Design & Joins' },
      { name: 'MongoDB', level: 'Document Models & CRUD' },
    ],
  },
  {
    id: 'tools',
    title: 'Version Control & Tools',
    description: 'Collaborative development workflow and tooling.',
    skills: [
      { name: 'Git', level: 'Branching, Commits & Merges' },
      { name: 'GitHub', level: 'Collaboration & Repositories' },
      { name: 'VS Code', level: 'Primary IDE & Extensions' },
      { name: 'Jupyter Notebook', level: 'Data & Model Exploration' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Debugging',
    description: 'Quality assurance and systematic evaluation.',
    skills: [
      { name: 'Test Case Design', level: 'Structured Scenarios' },
      { name: 'Iterative Evaluation', level: 'Metric Tracking' },
      { name: 'Debugging', level: 'DevTools & Problem Isolation' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    description: 'Foundational engineering disciplines.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Problem Solving' },
      { name: 'OOP', level: 'Object-Oriented Architecture' },
      { name: 'DBMS', level: 'Database Management Systems' },
      { name: 'Operating Systems', level: 'Process & Memory Concepts' },
      { name: 'Computer Networks', level: 'Protocols & Architecture' },
    ],
  },
];

export const networkNodes: NetworkNode[] = [
  {
    id: 'core',
    label: 'WEB DEVELOPMENT',
    category: 'core',
    description: 'Central hub integrating modular frontend interfaces, resilient backend APIs, robust databases, and version-controlled deployment.',
    codeSnippet: `const stack = {\n  focus: "Web Engineering",\n  approach: "Responsive & Modular"\n};`,
    x: 50,
    y: 50,
  },
  {
    id: 'html5',
    label: 'HTML5',
    category: 'frontend',
    description: 'Semantic markup structuring accessible, SEO-optimized web documents with clean DOM hierarchy.',
    codeSnippet: `<main class="container">\n  <article id="feature">\n    <h1>Accessible & Semantic</h1>\n  </article>\n</main>`,
    x: 18,
    y: 22,
  },
  {
    id: 'css3',
    label: 'CSS3',
    category: 'frontend',
    description: 'Modern styling utilizing CSS Grid, Flexbox, custom properties, and smooth animations.',
    codeSnippet: `@media (min-width: 768px) {\n  .grid-layout {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}`,
    x: 50,
    y: 12,
  },
  {
    id: 'js',
    label: 'JavaScript',
    category: 'frontend',
    description: 'Dynamic scripting with ES6+, async/await promises, event handling, and DOM manipulation.',
    codeSnippet: `async function fetchUserData(endpoint) {\n  const res = await fetch(endpoint);\n  return await res.json();\n}`,
    x: 82,
    y: 22,
  },
  {
    id: 'responsive',
    label: 'Responsive Design',
    category: 'frontend',
    description: 'Mobile-first design principles guaranteeing flawless rendering across phones, tablets, and ultra-wide desktops.',
    codeSnippet: `/* Fluid container scaling */\n.fluid-viewport {\n  width: clamp(320px, 90vw, 1200px);\n}`,
    x: 85,
    y: 65,
  },
  {
    id: 'rest-api',
    label: 'REST APIs',
    category: 'backend',
    description: 'Designing modular FastAPI endpoints, structured JSON payloads, and HTTP status code handling.',
    codeSnippet: `@app.get("/api/v1/predict")\ndef predict_risk(data: HealthInput):\n    return {"status": "success", "risk": 0.12}`,
    x: 65,
    y: 88,
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    category: 'tool',
    description: 'Disciplined version control, pull requests, branch management, and collaborative code reviews.',
    codeSnippet: `$ git checkout -b feat/responsive-nav\n$ git commit -m "feat: add mobile drawer navigation"\n$ git push origin feat/responsive-nav`,
    x: 35,
    y: 88,
  },
  {
    id: 'databases',
    label: 'Databases',
    category: 'db',
    description: 'Structured queries in MySQL and flexible schema handling in MongoDB for persistent data integrity.',
    codeSnippet: `SELECT u.id, u.username, COUNT(p.id) as total_posts\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id\nGROUP BY u.id;`,
    x: 15,
    y: 65,
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 'aicte-internship',
    role: 'Web Development Intern',
    organization: 'AICTE Virtual Internship Program',
    program: 'Virtual Internship',
    points: [
      'Built efficient, reusable and responsive web components using HTML5, CSS3 and JavaScript, following software engineering best practices to improve compatibility and user experience.',
      'Collaborated with a development team using Git and GitHub for version control, debugging and feature delivery across multiple modules.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'Responsive Design'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'portfolio-website',
    title: 'RESPONSIVE PORTFOLIO WEBSITE',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    description:
      'Designed and built a responsive, reusable portfolio website using HTML5, CSS3 and JavaScript, implementing interactive UI components for enhanced user engagement.',
    points: [
      'Designed and built a responsive, reusable portfolio website using HTML5, CSS3 and JavaScript, implementing interactive UI components for enhanced user engagement.',
      'Optimized layout and styling for cross-device compatibility, improving usability across desktop and mobile browsers.',
    ],
    githubUrl: 'https://github.com/Latika-04/portfolio',
    type: 'frontend',
    stats: [
      { label: 'Responsive', value: 'Mobile First' },
      { label: 'Standard', value: 'HTML5/CSS3' },
      { label: 'Interaction', value: 'ES6+ Logic' },
    ],
    mockupType: 'portfolio-browser',
  },
  {
    id: 'healthcare-risk-prediction',
    title: 'HEALTHCARE RISK PREDICTION',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'NumPy', 'Pandas'],
    description:
      'Architected and delivered scalable, modular REST APIs from scratch using Python and FastAPI for model training and disease-risk inference across multiple simulated client nodes.',
    points: [
      'Architected and delivered scalable, modular REST APIs from scratch using Python and FastAPI for model training and disease-risk inference across multiple simulated client nodes.',
      'Designed data preprocessing and feature engineering pipelines, testing and tuning models to raise prediction accuracy to approximately 85%.',
    ],
    githubUrl: 'https://github.com/Latika-04/healthcare-risk-prediction',
    type: 'ai-ml',
    stats: [
      { label: 'Accuracy', value: '~85%' },
      { label: 'Backend API', value: 'FastAPI' },
      { label: 'Pipelines', value: 'Scikit-learn' },
    ],
    mockupType: 'healthcare-analytics',
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-sql',
    title: 'HackerRank SQL Silver Badge',
    issuer: 'HackerRank',
    badgeLevel: 'Silver Badge',
    type: 'certification',
  },
  {
    id: 'cert-python',
    title: 'HackerRank Python Bronze Badge',
    issuer: 'HackerRank',
    badgeLevel: 'Bronze Badge',
    type: 'certification',
  },
  {
    id: 'cert-aicte',
    title: 'AICTE Virtual Internship Certificate',
    issuer: 'AICTE',
    badgeLevel: 'Internship Certified',
    type: 'certification',
  },
];

export const competitions: CompetitionItem[] = [
  {
    id: 'sih-2024',
    title: 'Smart India Hackathon 2024',
    level: 'National Level',
    description:
      'Collaborated with a multidisciplinary team to architect and deliver an AI-enabled solution for a government problem statement.',
    type: 'competition',
  },
  {
    id: 'msme-ideathon',
    title: 'MSME Ideathon 5.0',
    level: 'National Level',
    description:
      'Proposed a scalable, technology-driven solution to improve operational efficiency for MSMEs.',
    type: 'competition',
  },
];

export const mindsetSteps: MindsetStep[] = [
  {
    step: '01',
    title: 'BUILD',
    description: 'Design semantic structures and write modular code focusing on clarity and reusability.',
    action: 'Architecting solution modules & endpoints',
    iconName: 'Hammer',
  },
  {
    step: '02',
    title: 'TEST',
    description: 'Formulate structured test scenarios across edge cases, responsive breakpoints, and API payloads.',
    action: 'Evaluating test cases & validating metrics',
    iconName: 'CheckSquare',
  },
  {
    step: '03',
    title: 'DEBUG',
    description: 'Systematically isolate bottlenecks using browser DevTools, logging, and inspection.',
    action: 'Analyzing stack traces & performance profiling',
    iconName: 'Bug',
  },
  {
    step: '04',
    title: 'IMPROVE',
    description: 'Refactor code, optimize asset delivery, and harden error-handling for long-term maintainability.',
    action: 'Refining architecture & enhancing UX',
    iconName: 'TrendingUp',
  },
];
