export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  bestFor: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  organization: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  problem: string;
  solution: string;
  outcome: string;
  metric: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface WhoWeHelpItem {
  title: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ContactFormState {
  success: boolean;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
