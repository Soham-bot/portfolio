"use client";
import { useState, useEffect } from "react";
import { PERSONAL } from "../../lib/data";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight, Menu, X, Terminal, Code2 } from "lucide-react";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Stack",       href: "#stack" },
  { label: "Projects",    href: "#projects" },
  { label: "Timeline",    href: "#journey" },
  { label: "IRL & Gigs",  href: "#field-record" },
  { label: "Terminal",    href: "#terminal" },
  { label: "Contact",     href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Dev Status Bar */}
      <div className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-1.5 px-6 font-mono text-[11px] text-[var(--text-muted)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="text-[var(--text)] font-semibold">3rd year @ ITM Skills Univ</span>
          <span className="hidden sm:inline text-[var(--text-subtle)]">— building cloud infra &amp; backend apps</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold">
          <span className="hidden md:inline text-[var(--text-muted)]">39 public repos</span>
          <span className="text-[var(--accent)] font-bold">Mumbai (022)</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`border-b transition-all duration-200 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md shadow-xs"
          : "border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xs"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo / Moniker */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-mono text-sm font-bold text-[var(--accent)] group-hover:text-[var(--text)] transition-colors">
              ~/soham
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono hidden sm:inline">
              (soham-bot)
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors py-1 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume"
              className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-1 shadow-xs"
            >
              Resume <ArrowUpRight size={13} />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] rounded-md"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 space-y-2.5 font-mono text-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[var(--text)] hover:text-[var(--accent)] py-1 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border)]">
              <a
                href="/resume"
                className="block text-[var(--accent)] font-bold py-1 flex items-center justify-between"
              >
                <span>View resume (PDF)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
