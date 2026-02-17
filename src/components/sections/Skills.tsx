import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { skills } from "../../data/portfolio";

const colorMap = {
  accent: { bg: "bg-accent", badge: "bg-accent/10 text-accent" },
  secondary: { bg: "bg-secondary", badge: "bg-secondary/10 text-secondary" },
  tertiary: { bg: "bg-tertiary", badge: "bg-tertiary/10 text-foreground" },
  quaternary: {
    bg: "bg-quaternary",
    badge: "bg-quaternary/10 text-foreground",
  },
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
            return (
              <ScrollReveal key={category} delay={i * 150}>
                <div className="h-full rounded-lg border-2 border-foreground bg-white p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1">
                  <div
                    className={`${colors.bg} mb-4 inline-block rounded-full border-2 border-foreground px-4 py-1`}
                  >
                    <span className="font-heading text-xs font-bold tracking-wide text-white uppercase">
                      {category}
                    </span>
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
