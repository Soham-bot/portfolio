"use client";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { PERSONAL } from "../../lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[var(--bg)]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">10</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Contact</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-black text-[var(--text)] mb-4 leading-tight">
              Let&apos;s build<br />
              <span className="gradient-text">something serious.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 max-w-sm">
              Whether it&apos;s a project, collaboration, hackathon, or you just want to talk DevOps —
              I&apos;m reachable. Response time: not as fast as a Kubernetes rolling update, but close.
            </p>

            <div className="space-y-3">
              {[
                { icon: <Mail size={16} />, label: "EMAIL", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { icon: <Linkedin size={16} />, label: "LINKEDIN", value: "soham-ahirrao-9024a32b7", href: PERSONAL.linkedin },
                { icon: <Github size={16} />, label: "GITHUB", value: `Soham-bot (${PERSONAL.repoCount} repos)`, href: PERSONAL.github },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.label !== "EMAIL" ? "_blank" : undefined}
                  rel={item.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/30 hover:bg-[var(--surface-alt)] transition-all group">
                  <span className="text-[var(--accent)]">{item.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-[var(--text-muted)] mb-0.5">{item.label}</div>
                    <div className="font-mono text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{item.value}</div>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-[var(--text-subtle)] group-hover:text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <a href="/resume"
              className="flex items-center justify-between border border-[var(--accent)]/30 bg-[var(--surface)] p-6 hover:bg-[var(--accent-dim)] transition-all group w-full">
              <div>
                <div className="font-mono text-xs text-[var(--accent)]/60 mb-1">RESUME</div>
                <div className="font-display text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">View &amp; Download Resume</div>
                <div className="font-mono text-xs text-[var(--text-muted)] mt-1">View online · Print as PDF · Updated 2026</div>
              </div>
              <Download size={24} className="text-[var(--accent)]/40 group-hover:text-[var(--accent)] transition-colors" />
            </a>

            <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse-slow" />
                <span className="font-mono text-xs text-[var(--success)]">SYSTEM ONLINE</span>
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)] space-y-2">
                {[
                  ["Status",   "Open to opportunities"     ],
                  ["Location", "Mumbai, Maharashtra"        ],
                  ["Focus",    "DevOps · Cloud · Full Stack"],
                  ["Year",     "3rd Year B.Tech CSE"        ],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span>{k}</span>
                    <span className="text-[var(--text-dim)]">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-dashed border-[var(--border)] p-4 text-center">
              <span className="font-mono text-[10px] text-[var(--text-ghost)]">
                Try typing <span className="text-[var(--text-subtle)]">$ help</span> in the terminal above ↑
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
