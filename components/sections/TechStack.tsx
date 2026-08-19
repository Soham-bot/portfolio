"use client";
import { useState } from "react";
import { STACK } from "../../lib/data";

type Category = "languages" | "frontend" | "backend" | "databases" | "cloud" | "devops" | "aiml" | "other";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "devops",    label: "DevOps / Infra"  },
  { key: "cloud",     label: "Cloud / AWS"     },
  { key: "languages", label: "Languages"       },
  { key: "backend",   label: "Backend"         },
  { key: "frontend",  label: "Frontend"        },
  { key: "databases", label: "Databases"       },
  { key: "aiml",      label: "AI / ML"         },
  { key: "other",     label: "Other"           },
];

const LEVEL_CONFIG = {
  strong:       { label: "Strong",       pct: "85%", opacity: "opacity-100"  },
  familiar:     { label: "Familiar",     pct: "60%", opacity: "opacity-75"   },
  learning:     { label: "Learning",     pct: "35%", opacity: "opacity-45"   },
  experimented: { label: "Experimented", pct: "20%", opacity: "opacity-25"   },
};

export default function TechStack() {
  const [active, setActive] = useState<Category>("devops");
  const items = STACK[active] as { name: string; level: string; icon?: string }[];

  return (
    <section id="stack" className="py-32 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">02</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Tech Stack</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <p className="text-[var(--text-muted)] font-mono text-sm mb-10 max-w-xl">
          <span className="text-[var(--accent)]">//</span> Technologies I&apos;ve actually used in projects — not just listed on a resume.
          Skill levels based on project evidence, not self-rating.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`font-mono text-xs px-4 py-2 border transition-all ${
                active === cat.key
                  ? "border-[var(--accent)]/60 text-[var(--accent)] bg-[var(--accent-dim)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-dim)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
          {items.map((item) => {
            const level = LEVEL_CONFIG[item.level as keyof typeof LEVEL_CONFIG] || LEVEL_CONFIG.learning;
            return (
              <div
                key={item.name}
                className="border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/20 transition-all group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">{level.label}</span>
                </div>
                <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[var(--accent)] ${level.opacity} rounded-full transition-all duration-700`}
                    style={{ width: level.pct }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-10">
          {Object.entries(LEVEL_CONFIG).map(([, val]) => (
            <div key={val.label} className="flex items-center gap-2">
              <div className={`w-6 h-1 bg-[var(--accent)] ${val.opacity} rounded`} />
              <span className="font-mono text-[10px] text-[var(--text-muted)]">{val.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
