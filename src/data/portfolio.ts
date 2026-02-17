export const siteConfig = {
  name: "Shiek Abdurahman",
  title: "Developer & Problem Solver",
  email: "hello@example.com",
  github: "https://github.com/bored-six",
  linkedin: "#",
  bio: "I build things that work — from Salesforce platforms to full-stack web apps. I care about clean code, thoughtful design, and making complex systems feel simple.",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and the problem it solves.",
    tags: ["Salesforce", "Apex", "LWC"],
    color: "accent",
  },
  {
    title: "Project Two",
    description:
      "A brief description of what this project does and the problem it solves.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "secondary",
  },
  {
    title: "Project Three",
    description:
      "A brief description of what this project does and the problem it solves.",
    tags: ["Node.js", "REST API", "PostgreSQL"],
    color: "tertiary",
  },
];

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
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    color: "secondary",
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "REST APIs", "Git", "SQL", "CI/CD"],
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
    role: "Your Role",
    company: "Company Name",
    period: "2024 — Present",
    description:
      "What you did, what impact you made, and what technologies you used.",
  },
  {
    role: "Previous Role",
    company: "Previous Company",
    period: "2022 — 2024",
    description:
      "What you did, what impact you made, and what technologies you used.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
