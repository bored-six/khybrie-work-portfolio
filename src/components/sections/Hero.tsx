import { ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { FloatingShapes } from "../decorations/FloatingShapes";
import { siteConfig } from "../../data/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <FloatingShapes />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 py-1.5 shadow-pop">
            <span className="h-2.5 w-2.5 rounded-full bg-quaternary" />
            <span className="font-heading text-xs font-bold tracking-wide uppercase">
              Available for work
            </span>
          </span>

          {/* Headline */}
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{siteConfig.name.split(" ")[0]}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-tertiary/50 md:bottom-2 md:h-4"
              />
            </span>
            <span className="text-accent">.</span>
            <br />
            <span className="text-muted-fg">{siteConfig.title}</span>
          </h1>

          {/* Bio */}
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-fg">
            {siteConfig.bio}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Button icon>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="secondary">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-white shadow-pop">
          <ArrowDown size={16} strokeWidth={2.5} />
        </div>
      </a>
    </section>
  );
}
