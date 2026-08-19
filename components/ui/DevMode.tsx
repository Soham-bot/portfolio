"use client";
import { useState, useEffect } from "react";
import { Code2, X } from "lucide-react";

export default function DevMode() {
  const [active, setActive] = useState(false);

  // Konami code easter egg
  useEffect(() => {
    const seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === seq[idx]) { idx++; if (idx === seq.length) { setActive(true); idx = 0; } }
      else idx = 0;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!active) {
    return (
      <button onClick={() => setActive(true)}
        className="fixed bottom-6 right-6 z-40 border border-[var(--border)] bg-[var(--surface)] p-2.5 text-[var(--text-subtle)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
        aria-label="Dev Mode" title="Dev Mode (or try Konami code)">
        <Code2 size={14} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 border border-[var(--accent)]/30 bg-[var(--surface)] font-mono text-xs w-64 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
        <span className="text-[var(--accent)] text-[10px]">SOHAM PORTFOLIO // DEV MODE</span>
        <button onClick={() => setActive(false)} className="text-[var(--text-muted)] hover:text-[var(--accent)]">
          <X size={12} />
        </button>
      </div>
      <div className="p-4 space-y-1.5 text-[var(--text-muted)]">
        {[
          ["Frontend",     "✓ Next.js 14"  ],
          ["Styling",      "✓ Tailwind CSS" ],
          ["Theme",        "✓ Light + Dark" ],
          ["Routing",      "✓ App Router"   ],
          ["Responsive",   "✓ All viewports"],
          ["Accessibility","✓ ARIA + kbd"   ],
          ["Build Status", "✓ SUCCESS"      ],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <span>{k}</span>
            <span className="text-[var(--success)]">{v}</span>
          </div>
        ))}
        <div className="pt-2 border-t border-[var(--border)] text-[10px] text-[var(--text-ghost)]">
          <div>Konami code → unlocked this</div>
          <div className="mt-1">&apos;$ sudo hire soham&apos; in terminal</div>
        </div>
      </div>
    </div>
  );
}
