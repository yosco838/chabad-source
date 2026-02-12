export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
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

export interface ContactFormState {
  success: boolean;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
