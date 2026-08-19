"use client";
import { Github } from "lucide-react";
import { LAB_PROJECTS } from "../../lib/data";

export default function Lab() {
  return (
    <section id="lab" className="py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">05</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">The Lab</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-bold text-[var(--text)] mb-4">
              Experiments &amp;<br />
              <span className="gradient-text">Build Log</span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
              Not every repo is a portfolio piece. Some are experiments, coursework, language practice, and things I was figuring out.
            </p>
            <p className="text-[var(--text-subtle)] font-mono text-xs leading-relaxed">
              This is what active learning looks like in code form.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {LAB_PROJECTS.map((item) => (
              <div key={item.name}
                className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 flex items-center justify-between hover:border-[var(--accent)]/40 hover:bg-[var(--surface-alt)] transition-all group shadow-xs">
                <div className="flex-1 min-w-0 mr-3">
                  <div className="font-mono text-xs text-[var(--text)] group-hover:text-[var(--accent)] transition-colors font-medium truncate">{item.name}</div>
                  <div className="font-mono text-[10px] text-[var(--text-muted)] truncate mt-0.5">{item.desc}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-mono text-[10px] text-[var(--text-subtle)] font-medium">{item.lang}</span>
                  <a href={`https://github.com/Soham-bot/${item.name}`} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label={`View ${item.name} on GitHub`}>
                    <Github size={13} />
                  </a>
                </div>
              </div>
            ))}
            <div className="border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 flex items-center justify-between md:col-span-2 hover:border-[var(--accent)]/40 transition-all shadow-xs">
              <span className="font-mono text-xs text-[var(--text-muted)]">+ more experiments on GitHub</span>
              <a href="https://github.com/Soham-bot?tab=repositories" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--accent)] hover:underline transition-colors font-medium">
                browse all →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
