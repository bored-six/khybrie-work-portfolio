export const siteConfig = {
  name: "Shiek N. Abdurahman",
  title: "Web & Salesforce Developer",
  email: "shiekabdurahman@gmail.com",
  github: "https://github.com/bored-six",
  linkedin: "https://www.linkedin.com/in/shiek-abdurahman-2a26a02b2",
  bio: "From editing timelines to building platforms — I bring a creative eye and a problem-solver's mindset to every project. I specialize in Salesforce development and modern web apps.",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  link?: string;
  github?: string;
};

export const projects: Project[] = [];

export type Skill = {
  category: string;
  items: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
};

export const skills: Skill[] = [
  {
    category: "Salesforce",
    items: ["Apex", "LWC", "Flows", "SOQL", "Triggers", "Admin"],
    color: "accent",
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    color: "secondary",
  },
  {
    category: "Video Editing",
    items: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    color: "tertiary",
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "VS Code", "SF CLI"],
    color: "quaternary",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Freelance Salesforce Developer",
    company: "Self-Employed",
    period: "2025 — Present",
    description:
      "Building custom Salesforce solutions for clients. Working with Apex, LWC, Flows, and integrations to deliver scalable CRM solutions.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2024 — 2025",
    description:
      "Designed and built modern web applications using React, TypeScript, and Tailwind CSS. Delivered responsive, pixel-perfect interfaces for clients.",
  },
  {
    role: "Customer Service Representative",
    company: "Alorica",
    period: "2024 — 2025",
    description:
      "Handled customer inquiries and resolved issues efficiently. Built strong communication skills and learned how to understand user needs — skills that directly translate to building better software.",
  },
  {
    role: "Video Editor",
    company: "Freelance / Contract",
    period: "2022 — 2024",
    description:
      "Produced and edited video content for clients across various industries. Developed a sharp eye for detail, tight deadlines, and clear visual storytelling.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
