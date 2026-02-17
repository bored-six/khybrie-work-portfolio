import { useEffect, useState } from "react";

export function LoadingSkeleton() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(() => setVisible(false), 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-cream transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Bouncing geometric shapes */}
        <div className="flex items-end gap-3">
          <div
            className="h-5 w-5 rounded-sm bg-accent animate-[loader-bounce_0.6s_ease-in-out_infinite]"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="h-6 w-6 rounded-full bg-secondary animate-[loader-bounce_0.6s_ease-in-out_infinite]"
            style={{ animationDelay: "100ms" }}
          />
          <div
            className="h-5 w-5 bg-tertiary animate-[loader-bounce_0.6s_ease-in-out_infinite]"
            style={{
              animationDelay: "200ms",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
          <div
            className="h-5 w-5 rounded-full bg-quaternary animate-[loader-bounce_0.6s_ease-in-out_infinite]"
            style={{ animationDelay: "300ms" }}
          />
        </div>

        {/* Name with pop-in */}
        <p
          className="font-heading text-lg font-semibold text-foreground animate-[loader-fade_0.5s_ease_both]"
          style={{ animationDelay: "400ms" }}
        >
          Khybrie
        </p>
      </div>
    </div>
  );
}
