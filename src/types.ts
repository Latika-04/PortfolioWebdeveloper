export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bioSummary: string;
  email: string;
  linkedIn: string;
  gitHub: string;
  location: string;
  education: {
    degree: string;
    specialization: string;
    college: string;
    location: string;
    cgpa: string;
    backlogs: string;
    graduation: string;
  };
}

export interface QuickStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  isPrimary?: boolean;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface NetworkNode {
  id: string;
  label: string;
  category: 'core' | 'frontend' | 'backend' | 'tool' | 'db';
  description: string;
  codeSnippet?: string;
  x: number; // percentage coordinates for visual placement
  y: number;
}

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  program: string;
  points: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  points: string[];
  githubUrl: string;
  type: 'frontend' | 'ai-ml' | 'cv';
  stats: {
    label: string;
    value: string;
  }[];
  mockupType: 'portfolio-browser' | 'healthcare-analytics' | 'deepfake-vision';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeLevel?: string;
  type: 'certification';
}

export interface CompetitionItem {
  id: string;
  title: string;
  level: string;
  description: string;
  type: 'competition';
}

export interface MindsetStep {
  step: string;
  title: string;
  description: string;
  action: string;
  iconName: string;
}
