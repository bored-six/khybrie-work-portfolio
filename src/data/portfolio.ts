import heiyo1 from "../assets/projects/heiyo1.png";
import heiyo2 from "../assets/projects/heiyo2.png";
import heiyo3 from "../assets/projects/heiyo3.png";

export const siteConfig = {
  name: "Shiek N. Abdurahman",
  title: "Web & Salesforce Developer",
  email: "shiekabdurahman@gmail.com",
  github: "https://github.com/bored-six",
  linkedin: "https://www.linkedin.com/in/shiek-abdurahman-2a26a02b2",
  bio: "I bring a creative eye and a problem-solver's mindset to every project. I specialize in Salesforce development and modern web apps.",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
  link?: string;
  github?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "Heiyo Connect",
    description:
      "An AI-powered multi-tenant SaaS support dashboard. Teams receive, triage, and resolve tickets with automatic AI priority classification using switchable models (Gemini, Groq, Mistral) and real-time notifications.",
    tags: ["Next.js", "React", "PostgreSQL", "Prisma", "Clerk", "Socket.IO", "Pusher"],
    color: "accent",
    github: "https://github.com/bored-six/Heiyo-Connect",
    link: "https://heiyo-connect.vercel.app",
    images: [],
  },
  {
    title: "Heiyo News PH",
    description:
      "A Philippines-focused news aggregation platform with AI-powered fact-checking and credibility scoring. Bilingual headlines, election trackers, disaster alerts, and regional filtering — read it before they spin it.",
    tags: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Gemini", "Leaflet"],
    color: "tertiary",
    github: "https://github.com/bored-six/Heiyo-News-Outlet",
    images: [],
  },
  {
    title: "Heiyo Authenticator",
    description:
      "A privacy-first 2FA code manager that runs entirely in your browser. Encrypted vault with AES-GCM, QR code scanning, live countdown timers, and zero server involvement — your secrets never leave your device.",
    tags: ["React", "TypeScript", "Vite", "Web Crypto API", "otplib", "Framer Motion"],
    color: "quaternary",
    github: "https://github.com/bored-six/Heiyo-Authenticator",
    images: [],
  },
  {
    title: "Heiyo — Chat App",
    description:
      "A full-stack real-time chat app with a one-of-a-kind spatial orbit UI — users and rooms float as animated bubbles in three concentric rings instead of a boring sidebar.",
    tags: ["React", "TypeScript", "Socket.IO", "Node.js", "Tailwind CSS", "SQLite"],
    color: "secondary",
    github: "https://github.com/bored-six/heiyo-chat-app",
    images: [heiyo1, heiyo2, heiyo3],
  },
  {
    title: "Heiyo Mood Map",
    description:
      "A sentiment mapping platform that visualizes emotional patterns across Philippine regions. Real-time mood submissions with geographic tagging, incident mapping, and typhoon alert integration.",
    tags: ["Next.js", "Supabase", "Zustand", "Leaflet", "React Query", "D3-geo"],
    color: "secondary",
    github: "https://github.com/bored-six/Heiyo-Mood-map",
    images: [],
  },
];

export type Skill = {
  category: string;
  items: string[];
  color: "accent" | "secondary" | "tertiary" | "quaternary";
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS", "JavaScript"],
    color: "secondary",
  },
  {
    category: "Backend",
    items: ["Node.js", "Prisma", "PostgreSQL", "Supabase", "Socket.IO", "SQLite"],
    color: "quaternary",
  },
  {
    category: "AI",
    items: ["Google Generative AI", "Groq", "Mistral AI"],
    color: "tertiary",
  },
  {
    category: "Auth & Security",
    items: ["Clerk", "NextAuth", "OTP / 2FA", "bcrypt"],
    color: "accent",
  },
  {
    category: "Maps & Data Viz",
    items: ["Leaflet", "D3-geo", "React Simple Maps"],
    color: "secondary",
  },
  {
    category: "Tools",
    items: ["Git", "Vite", "Figma", "VS Code", "pnpm"],
    color: "tertiary",
  },
  {
    category: "Salesforce",
    items: ["Apex", "LWC", "Flows", "SOQL", "Triggers", "Admin"],
    color: "accent",
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
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
