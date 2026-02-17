import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useDarkMode } from "../../hooks/useDarkMode";
import { navLinks, siteConfig } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useDarkMode();
  const prefersReducedMotion = useReducedMotion();
  const activeSection = useActiveSection(sectionIds);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const updateIndicator = useCallback(() => {
    if (!activeSection || !navRef.current) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }

    const activeLink = navRef.current.querySelector(
      `a[href="#${activeSection}"]`
    ) as HTMLAnchorElement | null;

    if (!activeLink) return;

    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      visible: true,
    });
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-foreground bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-extrabold tracking-tight"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div ref={navRef} className="relative hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-fg hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Sliding indicator */}
          <span
            className="absolute -bottom-1 h-[3px] rounded-full bg-accent"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0,
              transition: "all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-surface shadow-pop transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-active"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              <Sun size={18} strokeWidth={2.5} className="text-tertiary" />
            ) : (
              <Moon size={18} strokeWidth={2.5} className="text-accent" />
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md border-2 border-foreground p-2 transition-all duration-200 hover:bg-tertiary md:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={20} strokeWidth={2.5} />
            ) : (
              <Menu size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="grid md:hidden"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: prefersReducedMotion
            ? "none"
            : "grid-template-rows 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div className="overflow-hidden">
          <div
            className="border-t-2 border-foreground bg-cream px-4 py-6"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition: prefersReducedMotion
                ? "none"
                : "opacity 250ms ease, transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-12px)",
                    transition: prefersReducedMotion
                      ? "none"
                      : `opacity 200ms ease ${80 + i * 50}ms, transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1) ${80 + i * 50}ms`,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-heading text-lg font-bold ${
                      activeSection === link.href.replace("#", "")
                        ? "text-accent"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
