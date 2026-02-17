import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  shadowColor?: "soft" | "pink";
  className?: string;
};

export function Card({
  children,
  shadowColor = "soft",
  className = "",
}: CardProps) {
  const shadow = shadowColor === "pink" ? "shadow-pink" : "shadow-soft";

  return (
    <div
      className={`rounded-lg border-2 border-foreground bg-surface p-6 ${shadow} transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
}
