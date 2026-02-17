export function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Yellow circle — top left */}
      <div className="animate-float absolute -top-16 -left-16 h-48 w-48 rounded-full bg-tertiary/20 md:h-72 md:w-72" />

      {/* Pink triangle — top right */}
      <svg
        className="animate-float absolute -top-8 right-8 h-20 w-20 text-secondary/25 md:right-24 md:h-32 md:w-32"
        style={{ animationDelay: "2s" }}
        viewBox="0 0 100 100"
      >
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </svg>

      {/* Violet square — bottom right */}
      <div
        className="animate-float absolute -right-8 -bottom-12 h-24 w-24 rounded-lg bg-accent/15 md:h-40 md:w-40"
        style={{ animationDelay: "4s", rotate: "12deg" }}
      />

      {/* Mint circle — bottom left */}
      <div
        className="animate-float absolute -bottom-8 left-1/4 h-16 w-16 rounded-full bg-quaternary/20 md:h-28 md:w-28"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}
