import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "../../data/portfolio";

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

export function Projects() {
  return (
    <section id="projects" className="relative py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          labelColor="bg-tertiary"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, color, link, github }) => (
            <div
              key={title}
              className={`${shadowMap[color]} group rounded-lg border-2 border-foreground bg-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02]`}
            >
              {/* Color bar header */}
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

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-fg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {github && (
                    <a
                      href={github}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-foreground transition-all duration-200 hover:bg-muted"
                      aria-label={`${title} source code`}
                    >
                      <Github size={16} strokeWidth={2.5} />
                    </a>
                  )}
                  {link && (
                    <a
                      href={link}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-foreground transition-all duration-200 hover:bg-muted"
                      aria-label={`${title} live demo`}
                    >
                      <ExternalLink size={16} strokeWidth={2.5} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
