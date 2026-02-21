import { useState } from "react";
import { Rocket, Wrench, Sparkles, Code2, ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { projects, type Project } from "../../data/portfolio";
import { DotGrid } from "../decorations/DotGrid";

function ProjectCard({ title, description, tags, color, github, link, images }: Project) {
  const [active, setActive] = useState(0);

  const colorMap = {
    accent: "bg-accent",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    quaternary: "bg-quaternary",
  };
  const shadowMap = {
    accent: "shadow-[8px_8px_0px_0px_#8B5CF6]",
    secondary: "shadow-pink",
    tertiary: "shadow-[8px_8px_0px_0px_#FBBF24]",
    quaternary: "shadow-[8px_8px_0px_0px_#34D399]",
  };
  const tintMap = {
    accent: "bg-violet-50 dark:bg-violet-950/30",
    secondary: "bg-pink-50 dark:bg-pink-950/30",
    tertiary: "bg-amber-50 dark:bg-amber-950/30",
    quaternary: "bg-teal-50 dark:bg-teal-950/30",
  };
  const dotActiveMap = {
    accent: "bg-accent",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    quaternary: "bg-quaternary",
  };

  return (
    <div
      className={`${shadowMap[color]} group h-full rounded-lg border-2 border-foreground ${tintMap[color]} transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02]`}
    >
      {/* Image carousel or colored bar */}
      {images && images.length > 0 ? (
        <div className="relative overflow-hidden rounded-t-[calc(0.5rem-2px)] border-b-2 border-foreground">
          <img
            src={images[active]}
            alt={`${title} screenshot ${active + 1}`}
            className="h-48 w-full object-cover transition-opacity duration-300"
          />
          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 w-2 rounded-full border border-foreground transition-all duration-200 ${
                    i === active ? `${dotActiveMap[color]} scale-125` : "bg-white/70"
                  }`}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={`${colorMap[color]} flex h-3 rounded-t-[calc(0.5rem-2px)]`} />
      )}

      <div className="p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-heading text-xl font-bold">{title}</h3>
          <div className="flex shrink-0 gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-foreground bg-surface p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]"
                aria-label="GitHub repo"
              >
                <Code2 size={14} strokeWidth={2.5} />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-foreground bg-surface p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]"
                aria-label="Live site"
              >
                <ExternalLink size={14} strokeWidth={2.5} />
              </a>
            )}
          </div>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-fg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-fg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  if (projects.length === 0) {
    return (
      <section id="projects" className="relative py-12 md:py-24">
        <DotGrid className="opacity-15" />

        <div className="relative mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <SectionHeading
              label="Projects"
              title="Things I've Built"
              labelColor="bg-tertiary"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mx-auto max-w-lg text-center">
              <div className="rounded-lg border-2 border-dashed border-foreground/30 bg-surface/60 p-10 backdrop-blur-sm">
                <div className="mb-6 flex justify-center gap-3">
                  <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-accent shadow-pop">
                    <Wrench size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div
                    className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-secondary shadow-pop"
                    style={{ animationDelay: "1s" }}
                  >
                    <Rocket size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div
                    className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-tertiary shadow-pop"
                    style={{ animationDelay: "2s" }}
                  >
                    <Sparkles size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  Building something cool<span className="text-accent">...</span>
                </h3>
                <p className="text-sm leading-relaxed text-muted-fg">
                  Projects are in the works. Check back soon — or hit me up if you want to
                  build something together.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Projects"
            title="Things I've Built"
            labelColor="bg-tertiary"
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 150}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
