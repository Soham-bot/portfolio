"use client";
import { Github, FlaskConical, ExternalLink, Code2 } from "lucide-react";
import { LAB_PROJECTS } from "../../lib/data";

export default function Lab() {
  return (
    <section id="lab" className="py-28 bg-[var(--bg-alt)] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-[var(--accent)] font-bold">05</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">R&amp;D Lab // Systems Experiments &amp; Prototypes</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-4">
            <div className="telemetry-badge text-xs mb-2">PROTOTYPING &amp; R&amp;D</div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--text)] leading-tight">
              Experimental<br />
              <span className="gradient-text">Build Log &amp; Scripts</span>
            </h2>
            <p className="text-[var(--text-dim)] font-mono text-xs sm:text-sm leading-relaxed">
              In addition to major production systems, these represent active experimentation: language research (Dart, NoSQL schemas, Linux bash automation), algorithm benchmarking, and coursework builds.
            </p>
            <p className="text-[var(--text-muted)] font-mono text-xs leading-relaxed border-l-2 border-[var(--accent)]/40 pl-3">
              Evidence of continuous engineering curiosity and codebase exploration.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            {LAB_PROJECTS.map((item) => (
              <div key={item.name}
                className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 flex items-center justify-between hover:border-[var(--accent)] transition-all group shadow-2xs rounded-xs carbon-card">
                <div className="flex-1 min-w-0 mr-3">
                  <div className="font-mono text-xs text-[var(--text)] group-hover:text-[var(--accent)] transition-colors font-bold truncate">{item.name}</div>
                  <div className="font-mono text-[10px] text-[var(--text-muted)] truncate mt-0.5">{item.desc}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-dim)] rounded-2xs">{item.lang}</span>
                  <a href={`https://github.com/Soham-bot/${item.name}`} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-1" aria-label={`View ${item.name} on GitHub`}>
                    <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
            <div className="border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 flex items-center justify-between md:col-span-2 hover:border-[var(--accent)] transition-all shadow-2xs rounded-xs">
              <span className="font-mono text-xs text-[var(--text-muted)] font-bold">+ 30 more unreleased experiments on GitHub</span>
              <a href="https://github.com/Soham-bot?tab=repositories" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--accent)] hover:underline transition-colors font-extrabold flex items-center gap-1">
                Browse Repository Vault →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
