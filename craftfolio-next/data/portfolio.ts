import type { NavLink, Experience, Project, Skill, TechItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Sanketh Ganji",
  role: "Software Engineer",
  tagline: "Building enterprise-grade software with precision and craft.",
  shortBio:
    "3+ years crafting full-stack applications across Angular, .NET, Flutter, and cloud platforms. Passionate about clean architecture and seamless user experiences.",
  longBio:
    "I'm a Software Engineer at Greater Than Educational Technologies, where I build scalable enterprise systems that serve thousands of users daily. My work spans the full stack — from pixel-perfect Angular interfaces to robust .NET APIs and cross-platform Flutter apps. I care deeply about performance, maintainability, and the craft behind great software.",
  email: "sankethganji@email.com",
  location: "India",
  yearsOfExperience: 3,
  projectsDelivered: 8,
  technologiesMastered: 12,
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "gtet",
    role: "Software Developer",
    company: "Greater Than Educational Technologies",
    period: "June 2024 — Present",
    type: "full-time",
    description: [
      "Developing and maintaining scalable full-stack web applications powering enterprise HRMS and learning management systems.",
      "Architected the Nspira Self Service Portal — a comprehensive employee platform handling attendance, payroll, and leave workflows for 5,000+ users.",
      "Built the NLeader Approval Management system that reduced approval cycle times by 60% through automated workflow hierarchies.",
      "Collaborating cross-functionally with product, design, and QA teams to ship high-quality releases on tight schedules.",
    ],
    technologies: ["Angular", ".NET Core", "C#", "PostgreSQL", "REST APIs", "Power BI"],
    index: 0,
  },
  {
    id: "freelance",
    role: "Freelance Full Stack Developer",
    company: "Independent Projects",
    period: "Jan 2021 — May 2024",
    type: "freelance",
    description: [
      "Delivered end-to-end web and mobile solutions for clients across education, retail, and logistics sectors.",
      "Built a flight booking request mobile application with Flutter, integrating approval workflows and real-time status updates.",
      "Developed a full-featured e-commerce platform with Angular frontend and .NET Core backend, supporting 200+ daily active users.",
      "Continuously improved application performance, achieving 40% reduction in API response times through query optimization.",
    ],
    technologies: ["Angular", "Flutter", "Dart", ".NET", "C#", "Oracle", "Bootstrap"],
    index: 1,
  },
];

export const projects: Project[] = [
  {
    id: "nspira",
    title: "Nspira Self Service Portal",
    category: "Enterprise HRMS",
    description:
      "A comprehensive employee self-service platform managing the full HR lifecycle for a large educational institution.",
    longDescription:
      "End-to-end HRMS platform built for Nspira, serving 5,000+ employees. The system handles everything from attendance tracking and leave management to payroll processing and employee onboarding, dramatically reducing HR administrative overhead.",
    technologies: ["Angular 16", ".NET Core 8", "C#", "PostgreSQL", "SignalR", "Power BI"],
    features: [
      "Real-time attendance tracking with geo-fencing",
      "Automated payroll computation with tax deductions",
      "Multi-tier leave management with approval chains",
      "Role-based access control and audit logging",
      "Integrated Power BI dashboards for HR analytics",
    ],
    status: "live",
    year: "2024",
    index: 0,
  },
  {
    id: "nleader",
    title: "NLeader Approval Management",
    category: "Workflow Automation",
    description:
      "Enterprise workflow automation platform that streamlines approval hierarchies across organizational processes.",
    longDescription:
      "NLeader is a sophisticated approval management engine that models complex organizational hierarchies and routes requests through configurable approval chains. It handles everything from purchase orders and travel requests to policy exceptions and budget approvals.",
    technologies: ["Angular 15", ".NET Core 7", "C#", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Dynamic approval hierarchy configuration",
      "Parallel and sequential approval routing",
      "Real-time notification system",
      "Delegation and escalation rules",
      "Complete audit trail and compliance reporting",
    ],
    status: "live",
    year: "2024",
    index: 1,
  },
  {
    id: "flight-booking",
    title: "Flight Booking Request System",
    category: "Mobile Application",
    description:
      "Cross-platform mobile app enabling employees to submit and track corporate flight booking requests.",
    longDescription:
      "A Flutter-based mobile application that digitizes the corporate travel request process. Employees can submit booking requests with details, managers receive instant notifications, and the entire approval chain is transparent in real time.",
    technologies: ["Flutter", "Dart", ".NET Core", "C#", "Oracle DB", "REST APIs"],
    features: [
      "Intuitive booking request form with validation",
      "Real-time approval status tracking",
      "Push notification integration",
      "Offline support with sync capabilities",
      "Admin panel for policy management",
    ],
    status: "completed",
    year: "2023",
    index: 2,
  },
  {
    id: "ecommerce",
    title: "Shopping Web Application",
    category: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with product catalog, cart management, and order processing.",
    longDescription:
      "A complete e-commerce solution with Angular frontend and .NET Core backend. Features include real-time inventory management, a recommendation engine, and seamless payment integration — serving 200+ daily active users.",
    technologies: ["Angular", ".NET Core", "C#", "SQL Server", "Stripe API", "SCSS"],
    features: [
      "Product catalog with advanced filtering",
      "Shopping cart with persistent sessions",
      "Secure payment gateway integration",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    status: "completed",
    year: "2022",
    index: 3,
  },
];

export const skills: Skill[] = [
  { name: "Angular", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "HTML / CSS", category: "frontend", level: 92 },
  { name: "Bootstrap / SCSS", category: "frontend", level: 85 },
  { name: ".NET Core", category: "backend", level: 88 },
  { name: "C#", category: "backend", level: 88 },
  { name: "REST APIs", category: "backend", level: 87 },
  { name: "PostgreSQL", category: "database", level: 82 },
  { name: "Oracle DB", category: "database", level: 78 },
  { name: "SQL Server", category: "database", level: 80 },
  { name: "Flutter", category: "mobile", level: 75 },
  { name: "Dart", category: "mobile", level: 72 },
  { name: "Power BI", category: "tools", level: 78 },
  { name: "Git / GitHub", category: "tools", level: 88 },
  { name: "Docker", category: "tools", level: 70 },
];

export const techStack: TechItem[] = [
  { name: "Angular", category: "Frontend", color: "#DD0031" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: ".NET Core", category: "Backend", color: "#512BD4" },
  { name: "C#", category: "Language", color: "#239120" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1" },
  { name: "Oracle", category: "Database", color: "#F80000" },
  { name: "Flutter", category: "Mobile", color: "#02569B" },
  { name: "Dart", category: "Language", color: "#0175C2" },
  { name: "Power BI", category: "Analytics", color: "#F2C811" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "Git", category: "Tools", color: "#F05032" },
  { name: "REST API", category: "Backend", color: "#25A162" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/sankethganji",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/sankethganji",
    icon: "linkedin",
  },
  {
    platform: "Email",
    url: "mailto:sankethganji@email.com",
    icon: "mail",
  },
];
