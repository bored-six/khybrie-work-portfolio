import { User, Zap, Flame } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { DotGrid } from "../decorations/DotGrid";

const traits = [
  {
    icon: User,
    title: "Who I Am",
    text: "A developer who builds across the full stack — from Salesforce CRM solutions to real-time web apps with AI integrations. Not a specialist in one corner, a builder across the board.",
    tags: ["Salesforce", "React", "Next.js", "AI"],
    color: "bg-accent",
    tagColor: "bg-accent/10 text-accent",
    tint: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-t-accent",
  },
  {
    icon: Zap,
    title: "How I Work",
    text: "Ship fast, ship clean. Every project in my portfolio was built solo from scratch — designed, developed, and deployed independently.",
    tags: ["TypeScript", "Tailwind", "Prisma", "Socket.IO"],
    color: "bg-secondary",
    tagColor: "bg-secondary/10 text-secondary",
    tint: "bg-pink-50 dark:bg-pink-950/30",
    border: "border-t-secondary",
  },
  {
    icon: Flame,
    title: "What Drives Me",
    text: "I don't build demos — I build tools people use. Chat apps, authenticators, mapping platforms. If it solves a real problem, I want to build it.",
    tags: ["Heiyo Apps", "Auth Tools", "Mood Map"],
    color: "bg-tertiary",
    tagColor: "bg-tertiary/10 text-foreground",
    tint: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-t-tertiary",
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
          {traits.map(({ icon: Icon, title, text, tags, color, tagColor, tint, border }, i) => (
            <div
              key={title}
              className={`group relative h-full overflow-hidden rounded-lg border-2 border-foreground ${border} border-t-4 ${tint} p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-pop ${
                cardsVisible ? "animate-pop-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Decorative corner shape */}
              <div
                className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${color} opacity-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-150`}
              />

              <div className="relative">
                {/* Icon + Title row */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`${color} flex h-11 w-11 items-center justify-center rounded-lg border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-6`}
                  >
                    <Icon size={20} strokeWidth={2.5} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{title}</h3>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-muted-fg">
                  {text}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${tagColor} rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
