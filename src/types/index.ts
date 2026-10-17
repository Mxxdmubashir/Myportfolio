export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Automotive' | 'AR/VR' | 'Utilities';
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  iconName: string;
  accentColor: string;
  status: 'Completed' | 'In Active Development' | 'Production Ready';
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Work' | 'Education';
  description: string[];
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

