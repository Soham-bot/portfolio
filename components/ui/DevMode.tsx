"use client";
import { useState, useEffect } from "react";
import { Code2, X, Terminal, Cpu } from "lucide-react";

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
        className="fixed bottom-6 right-6 z-40 border border-[var(--border)] bg-[var(--surface)] p-2.5 text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-md rounded-xs"
        aria-label="Dev Mode" title="Systems Diagnostics (or try Konami code)">
        <Terminal size={16} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 border border-[var(--accent)] bg-[var(--surface)] font-mono text-xs w-72 shadow-xl rounded-xs overflow-hidden sys-card">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-alt)]">
        <span className="text-[var(--accent)] text-[10px] font-black uppercase tracking-wider">SYSTEMS SPECIFICATIONS</span>
        <button onClick={() => setActive(false)} className="text-[var(--text-muted)] hover:text-[var(--accent)] p-0.5">
          <X size={14} />
        </button>
      </div>
      <div className="p-4 space-y-2 text-[var(--text-muted)] text-[11px]">
        {[
          ["Framework",    "✓ Next.js 14 (App Router)"],
          ["Orchestration","✓ Kubernetes 3x Replicas" ],
          ["IaC Engine",   "✓ Terraform HCL Modules"  ],
          ["Cloud Systems","✓ AWS Multi-Tier (EC2/S3)"],
          ["Repositories", "✓ 39 Shipped Codebases"   ],
          ["Status",       "✓ 100% OPERATIONAL"       ],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between font-medium">
            <span>{k}</span>
            <span className="text-[var(--accent)] font-bold">{v}</span>
          </div>
        ))}
        <div className="pt-2 border-t border-[var(--border)] text-[10px] text-[var(--text-muted)] font-medium">
          <div>Konami Code → Diagnostics Mode</div>
          <div className="mt-1 font-bold text-[var(--text)]">&apos;$ status&apos; or &apos;$ sudo hire soham&apos; in CLI ↑</div>
        </div>
      </div>
    </div>
  );
}
