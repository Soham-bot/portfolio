"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[var(--text-muted)]">
          <span className="text-[var(--accent)] font-semibold">// </span>
          SOHAM AHIRRAO © 2026 · Next.js · Tailwind · Built from scratch
        </div>
        <div className="flex items-center gap-6">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${PERSONAL.email}`}
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="Email">
            <Mail size={15} />
          </a>
        </div>
        <div className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse-slow" />
          SYSTEM ONLINE
        </div>
      </div>
    </footer>
  );
}
