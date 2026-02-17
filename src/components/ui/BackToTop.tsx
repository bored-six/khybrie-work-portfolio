import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-accent text-white shadow-pop transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        visible
          ? "animate-pop-in scale-100 opacity-100"
          : "pointer-events-none scale-0 opacity-0"
      }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </a>
  );
}
