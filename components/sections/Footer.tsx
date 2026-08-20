"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 bg-[var(--bg)] font-mono text-xs text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>soham ahirrao · 2026 · built in mumbai</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors p-1"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="hover:text-[var(--accent)] transition-colors p-1"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
