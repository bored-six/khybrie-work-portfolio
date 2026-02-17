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
    category: "Creative & Tools",
    items: ["Video Editing", "Git", "Figma", "VS Code", "SF CLI"],
    color: "tertiary",
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
    role: "Freelance Web & Salesforce Developer",
    company: "Self-Employed",
    period: "2025 — Present",
    description:
      "Building custom Salesforce solutions and modern web applications for clients. Working with Apex, LWC, Flows, React, and Tailwind CSS to deliver end-to-end solutions.",
  },
  {
    role: "Video Editor",
    company: "Freelance / Contract",
    period: "2023 — 2025",
    description:
      "Produced and edited video content for clients across various industries. Developed a sharp eye for detail, tight deadlines, and clear visual storytelling.",
  },
  {
    role: "Customer Service Representative",
    company: "Alorica",
    period: "2024 — 2025",
    description:
      "Handled customer inquiries and resolved issues efficiently. Built strong communication skills and learned how to understand user needs — skills that directly translate to building better software.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
