import { User, Zap, Heart } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { DotGrid } from "../decorations/DotGrid";

const traits = [
  {
    icon: User,
    title: "Who I Am",
    text: "A developer with a creative background. I went from editing videos and helping customers to building Salesforce platforms and web apps — and I bring that eye for detail to everything I code.",
    color: "bg-accent",
    tint: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    icon: Zap,
    title: "How I Work",
    text: "I learn fast, build iteratively, and care about shipping things that actually work. Whether it's a client project or personal work, I treat every line of code like it matters.",
    color: "bg-secondary",
    tint: "bg-pink-50 dark:bg-pink-950/30",
  },
  {
    icon: Heart,
    title: "What I Value",
    text: "Clean code, clear communication, and always getting better. My diverse background taught me that the best solutions come from understanding people, not just systems.",
    color: "bg-tertiary",
    tint: "bg-amber-50 dark:bg-amber-950/30",
  },
];

export function About() {
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="relative py-12 md:py-24">
      <DotGrid className="opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading label="About" title="A Little About Me" />
        </ScrollReveal>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3 md:gap-8">
          {traits.map(({ icon: Icon, title, text, color, tint }, i) => (
            <div
              key={title}
              className={`h-full rounded-lg border-2 border-foreground ${tint} p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02] ${
                cardsVisible ? "animate-pop-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div
                className={`${color} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground`}
              >
                <Icon size={20} strokeWidth={2.5} className="text-white" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-fg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
