export function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Yellow circle — top left quadrant */}
      <div className="animate-drift-1 absolute top-[10%] left-[5%] h-48 w-48 rounded-full bg-tertiary/20 md:h-72 md:w-72" />

      {/* Pink triangle — top right quadrant */}
      <svg
        className="animate-drift-2 absolute top-[15%] right-[10%] h-20 w-20 text-secondary/25 md:h-32 md:w-32"
        viewBox="0 0 100 100"
      >
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </svg>

      {/* Violet square — bottom right quadrant */}
      <div className="animate-drift-3 absolute right-[8%] bottom-[20%] h-24 w-24 rounded-lg bg-accent/15 md:h-40 md:w-40" />

      {/* Mint circle — bottom left quadrant */}
      <div className="animate-drift-4 absolute bottom-[15%] left-[20%] h-16 w-16 rounded-full bg-quaternary/20 md:h-28 md:w-28" />
    </div>
  );
}
