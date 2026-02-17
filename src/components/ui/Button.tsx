import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  icon = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-heading font-bold text-sm tracking-wide transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "border-foreground bg-accent text-white shadow-pop hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-active",
    secondary:
      "border-foreground bg-transparent text-foreground hover:bg-tertiary",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      )}
    </button>
  );
}
