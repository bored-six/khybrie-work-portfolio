import { Rocket, Wrench, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { projects } from "../../data/portfolio";
import { DotGrid } from "../decorations/DotGrid";

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
              <div className="rounded-lg border-2 border-dashed border-foreground/30 bg-white/60 p-10 backdrop-blur-sm">
                <div className="mb-6 flex justify-center gap-3">
                  <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-accent shadow-pop">
                    <Wrench
                      size={20}
                      strokeWidth={2.5}
                      className="text-white"
                    />
                  </div>
                  <div
                    className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-secondary shadow-pop"
                    style={{ animationDelay: "1s" }}
                  >
                    <Rocket
                      size={20}
                      strokeWidth={2.5}
                      className="text-white"
                    />
                  </div>
                  <div
                    className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-tertiary shadow-pop"
                    style={{ animationDelay: "2s" }}
                  >
                    <Sparkles
                      size={20}
                      strokeWidth={2.5}
                      className="text-white"
                    />
                  </div>
                </div>

                <h3 className="mb-2 font-heading text-2xl font-bold">
                  Building something cool
                  <span className="text-accent">...</span>
                </h3>
                <p className="text-sm leading-relaxed text-muted-fg">
                  Projects are in the works. Check back soon — or hit me up if
                  you want to build something together.
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
          {projects.map(({ title, description, tags, color }, i) => {
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
              accent: "bg-violet-50",
              secondary: "bg-pink-50",
              tertiary: "bg-amber-50",
              quaternary: "bg-teal-50",
            };

            return (
              <ScrollReveal key={title} delay={i * 150}>
                <div
                  className={`${shadowMap[color]} group h-full rounded-lg border-2 border-foreground ${tintMap[color]} transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02]`}
                >
                  <div
                    className={`${colorMap[color]} flex h-3 rounded-t-[calc(0.5rem-2px)]`}
                  />
                  <div className="p-6">
                    <h3 className="mb-2 font-heading text-xl font-bold">
                      {title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-fg">
                      {description}
                    </p>
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
