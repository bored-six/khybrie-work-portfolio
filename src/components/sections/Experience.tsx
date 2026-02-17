import { Briefcase } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { experiences } from "../../data/portfolio";

const dotColors = [
  "bg-accent",
  "bg-secondary",
  "bg-tertiary",
  "bg-quaternary",
];

const cardTints = [
  "bg-violet-50",
  "bg-pink-50",
  "bg-amber-50",
  "bg-teal-50",
];

export function Experience() {
  const { ref: timelineRef, visible: timelineVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading
            label="Experience"
            title="Where I've Worked"
            labelColor="bg-quaternary"
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline vertical line */}
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-border md:left-6" />

          <div ref={timelineRef} className="space-y-10">
            {experiences.map(
              ({ role, company, period, description }, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 md:gap-8 ${
                    timelineVisible ? "animate-pop-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground ${dotColors[i % dotColors.length]} shadow-pop md:h-12 md:w-12`}
                    >
                      <Briefcase
                        size={18}
                        strokeWidth={2.5}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-lg border-2 border-foreground ${cardTints[i % cardTints.length]} p-5 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 md:p-6`}>
                    <span className="mb-1 inline-block rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-fg">
                      {period}
                    </span>
                    <h3 className="font-heading text-lg font-bold">
                      {role}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-accent">
                      {company}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-fg">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
