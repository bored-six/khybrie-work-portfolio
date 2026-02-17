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
      {/* Wave decoration to visually close the page */}
      <div className="w-full overflow-hidden leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
          className="block h-12 w-[200%] sm:h-16 md:h-20 animate-[footer-wave-drift_25s_ease-in-out_infinite]"
        >
          <defs>
            <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.18" />
              <stop offset="25%" stopColor="#F472B6" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.16" />
              <stop offset="75%" stopColor="#34D399" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C180,20 360,80 540,40 C720,0 900,70 1080,30 C1260,0 1380,80 1440,60 L1440,100 L0,100 Z"
            fill="url(#footer-wave-grad)"
          />
          <path
            d="M0,60 C180,20 360,80 540,40 C720,0 900,70 1080,30 C1260,0 1380,80 1440,60 L1440,100 L0,100 Z"
            fill="url(#footer-wave-grad)"
            transform="translate(1440, 0)"
          />
        </svg>
      </div>

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
