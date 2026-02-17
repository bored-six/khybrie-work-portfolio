import { Cloud, Code2, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { skills } from "../../data/portfolio";

const colorMap = {
  accent: { bg: "bg-accent", badge: "bg-accent/10 text-accent", border: "border-l-accent" },
  secondary: { bg: "bg-secondary", badge: "bg-secondary/10 text-secondary", border: "border-l-secondary" },
  tertiary: { bg: "bg-tertiary", badge: "bg-tertiary/10 text-foreground", border: "border-l-tertiary" },
  quaternary: {
    bg: "bg-quaternary",
    badge: "bg-quaternary/10 text-foreground",
    border: "border-l-quaternary",
  },
};

const categoryIcons: Record<string, LucideIcon> = {
  Salesforce: Cloud,
  Frontend: Code2,
  "Creative & Tools": Wrench,
};

export function Skills() {
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

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {skills.map(({ category, items, color }, i) => {
            const colors = colorMap[color];
            const Icon = categoryIcons[category];
            return (
              <ScrollReveal key={category} delay={i * 150}>
                <div className={`h-full rounded-lg border-2 border-foreground ${colors.border} border-l-4 bg-white p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1`}>
                  <div className="mb-4 flex items-center gap-3">
                    {Icon && (
                      <div className={`${colors.bg} flex items-center justify-center rounded-lg border-2 border-foreground p-2`}>
                        <Icon size={18} strokeWidth={2.5} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`${colors.bg} inline-block rounded-full border-2 border-foreground px-4 py-1`}
                    >
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
