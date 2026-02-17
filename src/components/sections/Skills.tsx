import { useState } from "react";
import {
  Cloud,
  Code2,
  Film,
  Wrench,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { skills } from "../../data/portfolio";

const colorMap = {
  accent: { bg: "bg-accent", badge: "bg-accent/10 text-accent", border: "border-l-accent", tint: "bg-violet-50" },
  secondary: { bg: "bg-secondary", badge: "bg-secondary/10 text-secondary", border: "border-l-secondary", tint: "bg-pink-50" },
  tertiary: { bg: "bg-tertiary", badge: "bg-tertiary/10 text-foreground", border: "border-l-tertiary", tint: "bg-amber-50" },
  quaternary: {
    bg: "bg-quaternary",
    badge: "bg-quaternary/10 text-foreground",
    border: "border-l-quaternary",
    tint: "bg-teal-50",
  },
};

const categoryIcons: Record<string, LucideIcon> = {
  Salesforce: Cloud,
  Frontend: Code2,
  "Video Editing": Film,
  Tools: Wrench,
};

const VISIBLE = 3;

export function Skills() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const maxStart = Math.max(0, skills.length - VISIBLE);
  const visible = skills.slice(start, start + VISIBLE);

  const canGoLeft = start > 0;
  const canGoRight = start < maxStart;

  const goLeft = () => {
    setDirection("left");
    setStart((s) => Math.max(0, s - 1));
  };
  const goRight = () => {
    setDirection("right");
    setStart((s) => Math.min(maxStart, s + 1));
  };

  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Skills"
            title="What I Work With"
            labelColor="bg-secondary"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Left arrow */}
          {canGoLeft && (
            <button
              onClick={goLeft}
              aria-label="Previous skill"
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-foreground bg-white shadow-pop transition-all duration-200 hover:-translate-y-1/2 hover:scale-110 hover:shadow-pop-hover md:-left-14"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
          )}

          {/* Cards */}
          <div
            key={start}
            className={`grid gap-6 md:grid-cols-3 md:gap-8 ${direction === "right" ? "animate-slide-right" : "animate-slide-left"}`}
          >
            {visible.map(({ category, items, color }) => {
              const colors = colorMap[color];
              const Icon = categoryIcons[category];
              return (
                <div
                  key={category}
                  className={`h-full rounded-lg border-2 border-foreground ${colors.border} border-l-4 ${colors.tint} p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    {Icon && (
                      <div className={`${colors.bg} flex items-center justify-center rounded-lg border-2 border-foreground p-2`}>
                        <Icon size={18} strokeWidth={2.5} className="text-white" />
                      </div>
                    )}
                    <div className={`${colors.bg} inline-block rounded-full border-2 border-foreground px-4 py-1`}>
                      <span className="font-heading text-xs font-bold tracking-wide text-white uppercase">
                        {category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className={`${colors.badge} rounded-full border border-current/10 px-3 py-1 text-xs font-medium`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          {canGoRight && (
            <button
              onClick={goRight}
              aria-label="Next skill"
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-foreground bg-white shadow-pop transition-all duration-200 hover:-translate-y-1/2 hover:scale-110 hover:shadow-pop-hover md:-right-14"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
