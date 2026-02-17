import { Briefcase } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { experiences } from "../../data/portfolio";

export function Experience() {
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

        <div className="mx-auto max-w-2xl space-y-6">
          {experiences.map(({ role, company, period, description }, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="relative rounded-lg border-2 border-foreground bg-white p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1">
                {/* Floating icon */}
                <div className="absolute -top-5 -left-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-accent shadow-pop md:-left-5">
                  <Briefcase
                    size={18}
                    strokeWidth={2.5}
                    className="text-white"
                  />
                </div>

                <div className="ml-4 md:ml-6">
                  <span className="mb-1 inline-block rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-fg">
                    {period}
                  </span>
                  <h3 className="font-heading text-lg font-bold">{role}</h3>
                  <p className="mb-2 text-sm font-medium text-accent">
                    {company}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-fg">
                    {description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
