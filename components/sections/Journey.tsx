"use client";
import { JOURNEY } from "../../lib/data";

export default function Journey() {
  return (
    <section id="journey" className="py-32 relative overflow-hidden bg-[var(--bg)]">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">03</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">The Journey</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <p className="text-[var(--text-muted)] font-mono text-sm mb-16 max-w-xl">
          <span className="text-[var(--accent)]">//</span> Not a straight line. More like a directed graph.
        </p>

        <div className="relative">
          {JOURNEY.map((item, i) => (
            <div key={i} className={`flex gap-8 mb-12 group ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="flex-1 max-w-sm">
                <div className="border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/20 transition-all group-hover:bg-[var(--surface-alt)]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`font-mono text-[10px] px-2 py-0.5 border ${
                      item.year === "Now"
                        ? "border-[var(--success)]/40 text-[var(--success)] bg-[var(--success)]/5"
                        : "border-[var(--accent)]/20 text-[var(--accent)]/70"
                    }`}>
                      {item.year}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">{item.phase}</span>
                  </div>
                  <p className="text-[var(--text)] text-sm mb-4 font-medium">{item.event}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden lg:flex flex-col items-center pt-6 flex-shrink-0 w-8">
                <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                  item.year === "Now"
                    ? "bg-[var(--success)] border-[var(--success)] animate-pulse-slow"
                    : "bg-[var(--bg)] border-[var(--accent)]/40 group-hover:border-[var(--accent)]"
                }`} />
              </div>

              <div className="flex-1 max-w-sm hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
