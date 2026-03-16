export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  results: { metric: string; value: string }[];
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  week: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
  stagger?: number;
}
