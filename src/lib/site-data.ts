import type { NavLink, Service, ProcessStep, Testimonial } from "./types";

export const siteConfig = {
  name: "Chabad Source",
  tagline: "Empowering Non-Profits to Do More",
  description:
    "Design, CRM, and outreach services built for organizations that change the world.",
  contactEmail: "hello@chabadsource.com",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    id: "design",
    title: "Design",
    description:
      "Professional branding, print materials, and digital design that captures your organization's mission and resonates with your community.",
    icon: "palette",
  },
  {
    id: "crm",
    title: "CRM Management",
    description:
      "Streamlined donor and contact management so you can focus on your mission, not spreadsheets. Setup, migration, and ongoing support.",
    icon: "database",
  },
  {
    id: "outreach",
    title: "Client Outreach",
    description:
      "Strategic email campaigns, newsletters, and engagement workflows that keep your community connected and informed.",
    icon: "megaphone",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery Call",
    description:
      "We learn about your organization, goals, and challenges in a free consultation.",
  },
  {
    title: "Custom Plan",
    description:
      "We design a tailored strategy and scope specifically for your needs and budget.",
  },
  {
    title: "Execution",
    description:
      "Our team delivers high-quality work on your timeline with regular check-ins.",
  },
  {
    title: "Ongoing Support",
    description:
      "We stay with you for maintenance, updates, and growth as your organization evolves.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Chabad Source transformed how we communicate with our donors. Professional, responsive, and genuinely caring about our mission.",
    name: "Sarah M.",
    organization: "Community Outreach Center",
  },
  {
    quote:
      "They set up our entire CRM system in a week and trained our team. We went from chaos to clarity overnight.",
    name: "Rabbi David K.",
    organization: "Midwest Jewish Federation",
  },
  {
    quote:
      "The design work was outstanding. Our new branding perfectly captures who we are and what we stand for.",
    name: "Rachel L.",
    organization: "Youth Education Initiative",
  },
];

export const serviceOptions = [
  "Design",
  "CRM Management",
  "Client Outreach",
  "Multiple Services",
  "Not Sure Yet",
];

export const aboutText = {
  heading: "Who We Are",
  paragraphs: [
    "Chabad Source is a dedicated team of professionals who understand the unique needs of non-profit organizations. We provide the behind-the-scenes support that lets you focus on what matters most — your mission.",
    "From branding and design to CRM setup and donor outreach, we handle the operational heavy lifting so your team can make a bigger impact. Think of us as your virtual back office, built specifically for organizations that change the world.",
  ],
};
