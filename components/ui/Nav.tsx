"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Stack",       href: "#stack" },
  { label: "Projects",    href: "#projects" },
  { label: "Journey",     href: "#journey" },
  { label: "Field Record",href: "#field-record" },
  { label: "Contact",     href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm text-[var(--accent)] tracking-wider hover:opacity-80 transition-opacity font-semibold"
        >
          <span className="text-[var(--text-muted)] font-normal">// </span>SOHAM
          <span className="animate-blink text-[var(--accent)]">_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors animated-underline"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <ThemeToggle />

          <a
            href="#contact"
            className="font-mono text-xs border border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--surface)] px-4 py-2 hover:bg-[var(--accent-dim)] transition-all shadow-xs"
          >
            Hire Me ↗
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-[var(--text-muted)] hover:text-[var(--accent)]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--border)] px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume"
            className="font-mono text-sm text-[var(--accent)] border border-[var(--accent)]/40 px-4 py-2 text-center hover:bg-[var(--accent-dim)] transition-all mt-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
