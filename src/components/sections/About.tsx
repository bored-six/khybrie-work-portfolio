import { User, Zap, Heart } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { DotGrid } from "../decorations/DotGrid";

const traits = [
  {
    icon: User,
    title: "Who I Am",
    text: "A developer who enjoys turning messy problems into clean, working solutions. I thrive at the intersection of logic and creativity.",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "How I Work",
    text: "I start with understanding the problem, then build iteratively. Clean code, clear communication, and shipping on time matter to me.",
    color: "bg-secondary",
  },
  {
    icon: Heart,
    title: "What I Value",
    text: "Craft, collaboration, and continuous learning. I believe good software is built by people who care about the details.",
    color: "bg-tertiary",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-12 md:py-24">
      <DotGrid className="opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading label="About" title="A Little About Me" />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {traits.map(({ icon: Icon, title, text, color }) => (
            <div
              key={title}
              className="rounded-lg border-2 border-foreground bg-white p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02]"
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
