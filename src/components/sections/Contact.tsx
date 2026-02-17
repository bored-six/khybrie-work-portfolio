import { Send } from "lucide-react";
import { Button } from "../ui/Button";
import { FloatingShapes } from "../decorations/FloatingShapes";
import { siteConfig } from "../../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-24">
      <FloatingShapes />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-xl text-center">
          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-secondary px-4 py-1.5 font-heading text-xs font-bold tracking-wide text-white uppercase shadow-pop">
            <Send size={14} strokeWidth={2.5} />
            Let's Talk
          </span>

          <h2 className="mb-4 font-heading text-3xl font-extrabold md:text-5xl">
            Got a project in mind
            <span className="text-accent">?</span>
          </h2>

          <p className="mb-8 text-lg text-muted-fg">
            I'm always open to interesting conversations and new opportunities.
            Drop me a line and let's see what we can build together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${siteConfig.email}`}>
              <Button icon>Say Hello</Button>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Button variant="secondary">View GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
