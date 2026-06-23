export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "full-time" | "freelance" | "contract";
  description: string[];
  technologies: string[];
  index: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  status: "live" | "development" | "completed";
  year: string;
  image?: string;
  link?: string;
  github?: string;
  index: number;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "mobile";
  level: number;
  icon?: string;
}

export interface TechItem {
  name: string;
  category: string;
  color: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface MousePosition {
  x: number;
  y: number;
}
