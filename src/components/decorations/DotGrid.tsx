export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-dot-grid pointer-events-none absolute inset-0 opacity-40 ${className}`}
    />
  );
}
