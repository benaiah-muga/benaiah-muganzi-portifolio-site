export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl: string;
  imageUrl: string;
}

export interface Experience {
  category: string;
  items: string[];
  iconName: string; // Lucide icon name mapped
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  iconType: 'cloud' | 'code' | 'db' | 'ai';
}