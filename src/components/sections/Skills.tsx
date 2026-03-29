import { useState, useRef, useEffect } from "react";
import {
  Cloud,
  Code2,
  Server,
  Sparkles,
  Shield,
  Map,
  Wrench,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { skills } from "../../data/portfolio";

const colorMap = {
  accent: { bg: "bg-accent", badge: "bg-accent/10 text-accent", border: "border-l-accent", tint: "bg-violet-50 dark:bg-violet-950/30" },
  secondary: { bg: "bg-secondary", badge: "bg-secondary/10 text-secondary", border: "border-l-secondary", tint: "bg-pink-50 dark:bg-pink-950/30" },
  tertiary: { bg: "bg-tertiary", badge: "bg-tertiary/10 text-foreground", border: "border-l-tertiary", tint: "bg-amber-50 dark:bg-amber-950/30" },
  quaternary: {
    bg: "bg-quaternary",
    badge: "bg-quaternary/10 text-foreground",
    border: "border-l-quaternary",
    tint: "bg-teal-50 dark:bg-teal-950/30",
  },
};

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  AI: Sparkles,
  "Auth & Security": Shield,
  "Maps & Data Viz": Map,
  Tools: Wrench,
  Salesforce: Cloud,
};

const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;
const GAP = 24; // gap-6 = 1.5rem = 24px

export function Skills() {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visible = isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
  const maxStart = Math.max(0, skills.length - visible);

  const canGoLeft = start > 0;
  const canGoRight = start < maxStart;

  const goLeft = () => setStart((s) => Math.max(0, s - 1));
  const goRight = () => setStart((s) => Math.min(maxStart, s + 1));

  // Calculate offset: each card is (100% - gaps) / visible wide, plus gap
  const cardPercent = 100 / visible;
  const gapOffset = (GAP * start * (visible - 1)) / visible;
  const translateX = -(start * cardPercent);

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
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-foreground bg-surface shadow-pop transition-all duration-200 hover:-translate-y-1/2 hover:scale-110 hover:shadow-pop-hover md:-left-14"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
          )}

          {/* Carousel track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(calc(${translateX}% - ${gapOffset}px))`,
              }}
            >
              {skills.map(({ category, items, color }) => {
                const colors = colorMap[color];
                const Icon = categoryIcons[category];
                return (
                  <div
                    key={category}
                    className="flex-shrink-0"
                    style={{ width: `calc(${cardPercent}% - ${(GAP * (visible - 1)) / visible}px)` }}
                  >
                    <div
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right arrow */}
          {canGoRight && (
            <button
              onClick={goRight}
              aria-label="Next skill"
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-foreground bg-surface shadow-pop transition-all duration-200 hover:-translate-y-1/2 hover:scale-110 hover:shadow-pop-hover md:-right-14"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxStart + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Go to skill ${i + 1}`}
              className={`h-2.5 rounded-full border-2 border-foreground transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                i === start
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-muted hover:bg-accent/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
