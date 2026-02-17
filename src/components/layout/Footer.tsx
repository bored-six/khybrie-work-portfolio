import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../../data/portfolio";

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 md:flex-row md:justify-between">
        <p className="font-heading text-sm font-bold">
          {siteConfig.name}
          <span className="text-accent">.</span>{" "}
          <span className="font-body font-normal text-muted-fg">
            &copy; {new Date().getFullYear()}
          </span>
        </p>

        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:bg-tertiary hover:shadow-pop"
            >
              <Icon size={18} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
