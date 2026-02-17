import { ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { siteConfig } from "../../data/portfolio";
import profileImg from "../../assets/profile.png";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 md:grid-cols-2 md:py-24">
        {/* Text column */}
        <div>
          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 py-1.5 shadow-pop">
            <span className="h-2.5 w-2.5 rounded-full bg-quaternary" />
            <span className="font-heading text-xs font-bold tracking-wide uppercase">
              Available for work
            </span>
          </span>

          {/* Headline */}
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Khybrie</span>
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

        {/* Photo column */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decorative circle behind photo */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary/25 md:h-96 md:w-96"
          />

          {/* Dot pattern behind photo */}
          <div
            aria-hidden="true"
            className="bg-dot-grid absolute top-4 right-0 h-48 w-48 opacity-30 md:top-8 md:h-64 md:w-64"
          />

          {/* Profile image with blob shape */}
          <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div className="h-full w-full overflow-hidden rounded-tl-[4rem] rounded-tr-[4rem] rounded-br-[4rem] rounded-bl-sm border-2 border-foreground shadow-pop">
              <img
                src={profileImg}
                alt={siteConfig.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Floating accent dot */}
            <div
              aria-hidden="true"
              className="animate-float absolute -right-4 -bottom-4 h-8 w-8 rounded-full border-2 border-foreground bg-accent shadow-pop"
            />

            {/* Floating pink square */}
            <div
              aria-hidden="true"
              className="animate-float absolute -top-4 -left-4 h-6 w-6 rounded-sm border-2 border-foreground bg-secondary shadow-pop"
              style={{ animationDelay: "1.5s" }}
            />
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
