export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface StatItem {
  value: string;
  label: string;
  iconName?: string;
}
