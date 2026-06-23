import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  mobilepng,
  web,
  javascript,
  typescript,
  html,
  css,
  git,
  figma,
  docker,
  gtet,
  carrent,
  jobit,
  tripguide,
  csharp,
  dotnetcore,
  angular,
  postgresql,
  bootstrap,
  restapi,
  code
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about",    title: "About"    },
  { id: "work",     title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "tech",     title: "Stack"    },
  { id: "contact",  title: "Contact"  },
];

const services: TService[] = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Database Systems",
    icon: backend,
  },
  {
    title: "Full Stack Applications",
    icon: creator,
  },
  {
    title: "Mobile Application Development",
    icon: mobilepng,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "dotnetcore",
    icon: dotnetcore,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "restapi",
    icon: restapi,
  },

];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Greater Than Educational Technologies",
    icon: gtet,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining scalable full-stack web applications for enterprise systems.",
      "Designing responsive user interfaces and integrating them with efficient backend services.",
      "Collaborating with teams to analyze requirements and deliver reliable software solutions.",
      "Improving application performance, debugging issues, and maintaining clean, maintainable code.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    companyName: "Independent Projects",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining scalable web applications for various use cases.",
      "Designing responsive and user-friendly interfaces for modern web platforms.",
      "Implementing backend services and integrating APIs with frontend systems.",
      "Continuously improving application performance and ensuring code quality.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Sanketh consistently delivers well-structured and maintainable code. He has a strong ability to understand requirements quickly and implement efficient solutions.",
    name: "Team Lead",
    designation: "Senior Software Engineer",
    company: "Nspira ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sanketh demonstrates excellent problem-solving skills and a strong understanding of full-stack development. He collaborates effectively with the team and always focuses on delivering quality work.",
    name: "Project Manager",
    designation: "Software Development Team",
    company: "Greater Than Educational Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sanketh is a quick learner who adapts to new technologies and challenges efficiently. His dedication to building scalable and user-friendly applications makes him a valuable developer.",
    name: "Senior Developer",
    designation: "Engineering Team",
    company: "Greater Than Educational Technologies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "HRMS Management System",
    description:
      "A web-based HRMS platform that manages employee information, leave requests, travel requests, and reporting structures. The system allows administrators and managers to efficiently manage employee records and workflows.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "dot net",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Shopping Web Application",
    description:
      "A full-stack e-commerce web application where users can browse products, view details, add items to cart, and place orders. The system includes authentication, product management, and REST API integration.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Flight Booking Request System (Mobile App)",
    description:
      "A mobile application that allows employees to submit flight booking requests to management for approval. The system includes request tracking, approval workflows, and status updates to help organizations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
