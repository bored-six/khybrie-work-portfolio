import { useState, useEffect } from "react";
import { Rocket, Wrench, Sparkles, Code2, ExternalLink, Clock, Globe, Lock } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { projects, type Project } from "../../data/portfolio";
import { DotGrid } from "../decorations/DotGrid";

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
const dotColorMap = {
  accent: "bg-accent",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  quaternary: "bg-quaternary",
};
const tagColorMap = {
  accent: "bg-accent/10 text-accent",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-foreground",
  quaternary: "bg-quaternary/10 text-foreground",
};

function extractDomain(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

/* ── Browser Chrome Frame ── */
function BrowserFrame({
  images,
  title,
  color,
  link,
  className = "",
}: {
  images: string[];
  title: string;
  color: Project["color"];
  link?: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={`overflow-hidden rounded-lg border-2 border-foreground shadow-pop dark:border-slate-600 ${className}`}>
      {/* Browser toolbar */}
      <div className="flex items-center gap-2 border-b-2 border-foreground bg-surface px-3 py-2 dark:border-slate-600 dark:bg-slate-800">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        {/* URL bar */}
        <div className="flex flex-1 items-center gap-1.5 rounded-md bg-muted px-3 py-1 dark:bg-slate-700">
          {link ? (
            <Lock size={10} strokeWidth={2.5} className="shrink-0 text-quaternary" />
          ) : (
            <Globe size={10} strokeWidth={2.5} className="shrink-0 text-muted-fg" />
          )}
          <span className="truncate text-[11px] text-muted-fg">
            {link ? extractDomain(link) : "localhost:3000"}
          </span>
        </div>
      </div>
      {/* Screenshot area */}
      <div className="relative aspect-video bg-foreground/5">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dot nav */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-foreground/60 px-2.5 py-1.5 backdrop-blur-sm">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? `w-5 ${dotColorMap[color]}` : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Featured Spotlight (first project) ── */
function FeaturedProject({ title, description, tags, color, github, link, images }: Project) {
  return (
    <div className={`group rounded-xl border-2 border-foreground ${tintMap[color]} p-3 ${shadowMap[color]} transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-[12px_12px_0px_0px_#8B5CF6] md:p-4`}>
      <div className="grid items-center gap-6 md:grid-cols-5 md:gap-8">
        {/* Browser frame — takes 3/5 */}
        <div className="md:col-span-3">
          {images && images.length > 0 ? (
            <BrowserFrame images={images} title={title} color={color} link={link} />
          ) : (
            <div className={`${colorMap[color]} aspect-video rounded-lg`} />
          )}
        </div>

        {/* Content — takes 2/5 */}
        <div className="flex flex-col gap-4 md:col-span-2">
          {/* Featured badge */}
          <div className="flex items-center gap-2">
            <span className={`${colorMap[color]} inline-flex items-center gap-1 rounded-full border-2 border-foreground px-3 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-[2px_2px_0px_0px_#1E293B]`}>
              <Sparkles size={10} strokeWidth={3} />
              Featured
            </span>
          </div>

          <h3 className="font-heading text-2xl font-bold md:text-3xl">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-fg md:text-base">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${tagColorMap[color]} rounded-full px-3 py-1 text-xs font-medium`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colorMap[color]} inline-flex items-center gap-2 rounded-lg border-2 border-foreground px-5 py-2.5 text-sm font-bold text-white shadow-pop transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
              >
                <ExternalLink size={14} strokeWidth={2.5} />
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-surface px-5 py-2.5 text-sm font-bold shadow-pop transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <Code2 size={14} strokeWidth={2.5} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Grid Card (remaining projects) ── */
function ProjectCard({ title, description, tags, color, github, link, images, comingSoon }: Project) {
  return (
    <div
      className={`${shadowMap[color]} group h-full rounded-lg border-2 border-foreground ${tintMap[color]} transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#8B5CF6]`}
    >
      {/* Browser frame or colored bar */}
      {images && images.length > 0 ? (
        <div className="p-2 pb-0">
          <BrowserFrame images={images} title={title} color={color} link={link} />
        </div>
      ) : (
        <div className={`${colorMap[color]} flex h-3 rounded-t-[calc(0.5rem-2px)]`} />
      )}

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-lg font-bold">{title}</h3>
            {comingSoon && (
              <span className="inline-flex items-center gap-1 rounded-full border-2 border-foreground bg-tertiary px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase shadow-[2px_2px_0px_0px_#1E293B]">
                <Clock size={10} strokeWidth={3} />
                Soon
              </span>
            )}
          </div>
          <div className="flex shrink-0 gap-1.5">
            {github && !comingSoon && (
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
            {link && !comingSoon && (
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
        <p className="mb-3 text-sm leading-relaxed text-muted-fg">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${tagColorMap[color]} rounded-full px-2.5 py-0.5 text-[11px] font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export function Projects() {
  if (projects.length === 0) {
    return (
      <section id="projects" className="relative py-12 md:py-24">
        <DotGrid className="opacity-15" />
        <div className="relative mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <SectionHeading label="Projects" title="Things I've Built" labelColor="bg-tertiary" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mx-auto max-w-lg text-center">
              <div className="rounded-lg border-2 border-dashed border-foreground/30 bg-surface/60 p-10 backdrop-blur-sm">
                <div className="mb-6 flex justify-center gap-3">
                  <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-accent shadow-pop">
                    <Wrench size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-secondary shadow-pop" style={{ animationDelay: "1s" }}>
                    <Rocket size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-tertiary shadow-pop" style={{ animationDelay: "2s" }}>
                    <Sparkles size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  Building something cool<span className="text-accent">...</span>
                </h3>
                <p className="text-sm leading-relaxed text-muted-fg">
                  Projects are in the works. Check back soon — or hit me up if you want to build something together.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading label="Projects" title="Things I've Built" labelColor="bg-tertiary" />
        </ScrollReveal>

        {/* Featured spotlight */}
        <ScrollReveal delay={100}>
          <FeaturedProject {...featured} />
        </ScrollReveal>

        {/* Rest of projects in grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {rest.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i + 1) * 150}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
