import type {
  NavLink,
  Service,
  ProcessStep,
  Testimonial,
  CaseStudy,
  TeamMember,
  WhoWeHelpItem,
  ValueItem,
} from "./types";

export const siteConfig = {
  name: "Chabad Source",
  tagline: "You focus on your mission. We handle the rest.",
  description:
    "Design, CRM, and operations services built for non-profits, educational institutions, and mission-driven organizations that need systems that scale with their impact.",
  contactEmail: "info@chabadsource.com",
  footerDescription:
    "You focus on your mission. We handle the systems, design, and operations. Professional services for non-profits, educational institutions, and mission-driven organizations.",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const aboutText = {
  heading: "About Chabad Source",
  intro:
    "Chabad Source is a boutique consulting practice specializing in design, CRM solutions, and business operations optimization for mission-driven organizations. We work with non-profits, educational institutions, and growing organizations that need systems that scale with their impact.",
  background: [
    "Chabad Source was founded by a team with deep experience in non-profit operations, CRM architecture, design, and process optimization. With a background spanning both creative services and strategic consulting, we've helped organizations of all sizes streamline their operations, build their brand, and create systems that support their mission.",
    "Our experience includes working with national non-profits managing complex donor relationships, educational institutions tracking student outcomes and fundraising, and growing organizations scaling their outreach and community engagement. Across all these contexts, we've seen the same pattern: organizations overwhelmed by manual processes, disconnected systems, and technology that doesn't scale.",
  ],
  workingTogether:
    "When you work with Chabad Source, you're working with a partner who takes the time to understand your organization, your challenges, and your goals. We're not here to sell you features or push unnecessary complexity. We're here to build systems that work. You can expect clear communication, transparent processes, and solutions that are designed for your team to maintain.",
};

export const values: ValueItem[] = [
  {
    title: "Clarity",
    description:
      "We communicate in plain language, document everything, and ensure you understand how your systems work.",
  },
  {
    title: "Reliability",
    description:
      "We deliver on time, on budget, and to spec. When we commit to something, we follow through.",
  },
  {
    title: "Stewardship",
    description:
      "We treat your systems, data, and budget with care. We build solutions that last and avoid unnecessary complexity.",
  },
  {
    title: "Impact",
    description:
      "We measure success by the time and resources we free up for your team to focus on what matters most.",
  },
];

export const whoWeHelp: WhoWeHelpItem[] = [
  {
    title: "Non-Profits & Educational Institutions",
    description:
      "Organizations managing donors, programs, and outcomes across multiple systems that need streamlined operations and professional branding.",
    icon: "heart",
  },
  {
    title: "Growing Teams",
    description:
      "Teams overwhelmed by manual processes and ready to scale operations efficiently with better systems and automation.",
    icon: "users",
  },
  {
    title: "Organizations Outgrowing Their Setup",
    description:
      "Organizations that started with basic tools and need architecture, design, and processes that scale with their growing impact.",
    icon: "trending-up",
  },
];

export const services: Service[] = [
  {
    id: "design",
    title: "Design & Branding",
    description:
      "Whether you're establishing your identity or refreshing your look, we create professional branding and design that captures your mission and resonates with your community.",
    icon: "palette",
    deliverables: [
      "Brand identity and logo design",
      "Print materials (brochures, flyers, event programs)",
      "Digital design (social media, email templates, web graphics)",
      "Style guides and brand documentation",
      "Presentation and pitch deck design",
      "Annual report design",
    ],
    bestFor:
      "Organizations looking to establish or refresh their visual identity, or those needing consistent, professional materials for outreach and fundraising.",
  },
  {
    id: "crm",
    title: "CRM Setup & Architecture",
    description:
      "Design and build scalable CRM solutions that grow with your organization. From initial setup to complex implementations, we handle the technical work so you can focus on relationships.",
    icon: "database",
    deliverables: [
      "CRM strategy and roadmap",
      "Data model design and setup",
      "Contact and donor management configuration",
      "User training and documentation",
      "Data migration from legacy systems",
      "Ongoing optimization and support",
    ],
    bestFor:
      "Organizations planning a new CRM implementation, or those with existing systems that need structure, cleanup, and optimization.",
  },
  {
    id: "outreach",
    title: "Client & Donor Outreach",
    description:
      "Strategic communication campaigns that keep your community connected and your donors engaged. From email campaigns to newsletters and engagement workflows.",
    icon: "megaphone",
    deliverables: [
      "Email campaign strategy and execution",
      "Newsletter design and management",
      "Donor communication workflows",
      "Community engagement sequences",
      "Event promotion and follow-up",
      "Analytics and performance reporting",
    ],
    bestFor:
      "Teams looking to improve donor retention, community engagement, or those needing professional communication without hiring in-house staff.",
  },
  {
    id: "automation",
    title: "Process Automation",
    description:
      "Replace manual, repetitive work with intelligent automation. We build workflows, approval processes, and integrations that save time and reduce errors across your organization.",
    icon: "zap",
    deliverables: [
      "Workflow design and development",
      "Approval process automation",
      "Data synchronization between systems",
      "Automated reporting and alerts",
      "Donor acknowledgment automation",
      "Error handling and monitoring",
    ],
    bestFor:
      "Teams spending too much time on manual data entry, routing, or process management. Organizations ready to scale operations without scaling headcount.",
  },
  {
    id: "reporting",
    title: "Reporting & Analytics",
    description:
      "Turn your data into actionable insights. Custom reports, dashboards, and analytics that help your team make better decisions and demonstrate impact to stakeholders.",
    icon: "bar-chart",
    deliverables: [
      "Executive dashboards",
      "Custom report development",
      "Impact measurement and visualization",
      "KPI tracking and metrics",
      "Automated report distribution",
      "Data quality improvements",
    ],
    bestFor:
      "Organizations that need better visibility into operations, fundraising, program outcomes, or need to report impact to board members and funders.",
  },
  {
    id: "operations",
    title: "Operations Consulting",
    description:
      "Beyond specific tools, we help optimize your broader operations. Process design, system audits, and recommendations for better efficiency across your organization.",
    icon: "settings",
    deliverables: [
      "System integration architecture",
      "Process mapping and optimization",
      "Tech stack audits and recommendations",
      "Cross-platform workflow design",
      "Operational documentation",
      "Change management support",
    ],
    bestFor:
      "Organizations with multiple systems that need to work together, or teams looking to optimize operations and reduce overhead.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery & Diagnosis",
    description:
      "We listen to your challenges, audit your current systems, and identify opportunities for improvement.",
  },
  {
    title: "Architecture & Roadmap",
    description:
      "We design a solution that fits your needs, timeline, and budget. Clear scope, clear expectations.",
  },
  {
    title: "Implementation & Delivery",
    description:
      "We build, test, and deliver. Your team stays informed throughout, and we document everything we create.",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "We stick around to ensure everything runs smoothly and evolves with your organization.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "nonprofit-fundraising",
    clientType: "National Non-Profit",
    problem:
      "Manual data entry and donor management processes were consuming 15+ hours per week across the development team.",
    solution:
      "Designed and implemented automated CRM workflows for donor onboarding, gift processing, and acknowledgment, plus a complete branding refresh for donor-facing materials.",
    outcome: "Reduced manual data entry by 70%",
    metric: "15 hours/week → 4.5 hours/week saved",
  },
  {
    id: "education-integration",
    clientType: "Educational Institution",
    problem:
      "Student information lived in one system, fundraising in another, and program management in a third. No single source of truth.",
    solution:
      "Architected a unified CRM solution with custom integrations to the student information system and program management tools, plus new branded reporting templates.",
    outcome: "Unified view of students, donors, and programs",
    metric: "3 systems → 1 platform, 50% faster reporting",
  },
  {
    id: "growing-org-operations",
    clientType: "Growing Community Organization",
    problem:
      "Outreach and community engagement teams were drowning in manual processes. Communication tracking, event management, and follow-ups all required manual work.",
    solution:
      "Built comprehensive automation for community outreach, event management, and engagement tracking with professional branded communications.",
    outcome: "Automated 80% of manual outreach tasks",
    metric: "2 hours/day saved per team member, 25% faster engagement",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Principal Consultant & Founder",
    bio: "15+ years of experience in CRM architecture and non-profit operations. Passionate about building systems that scale with your mission.",
  },
  {
    name: "Jordan Chen",
    role: "Senior Solutions Architect",
    bio: "Specializes in complex integrations and automation. Turns manual processes into elegant, scalable solutions for mission-driven organizations.",
  },
  {
    name: "Taylor Kim",
    role: "Operations & Design Lead",
    bio: "Expert in process optimization, branding, and visual communication. Helps organizations see the big picture while managing the details.",
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
      "The design work was outstanding — and the automation they built saves us hours every week. Our new branding perfectly captures who we are.",
    name: "Rachel L.",
    organization: "Youth Education Initiative",
  },
];

export const serviceOptions = [
  "Design & Branding",
  "CRM Setup & Architecture",
  "Client & Donor Outreach",
  "Process Automation",
  "Reporting & Analytics",
  "Operations Consulting",
  "Multiple Services",
  "Not Sure Yet",
];

export const budgetOptions = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
  "Prefer to discuss",
];
