"use client";
import { Github, Linkedin, Mail, Download, ExternalLink, ArrowUpRight } from "lucide-react";
import { PERSONAL } from "../../lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="font-mono text-xs text-[var(--accent)] font-semibold mb-1">
            // GET IN TOUCH
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-2">
            Hit me up.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl">
            Always open to discussing software engineering roles, DevOps / Cloud infrastructure positions, or hackathon collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {[
              {
                icon: <Mail size={16} />,
                label: "Email",
                value: PERSONAL.email,
                href: `mailto:${PERSONAL.email}`,
                sub: "Drop me an email anytime",
              },
              {
                icon: <Linkedin size={16} />,
                label: "LinkedIn",
                value: "soham-ahirrao-9024a32b7",
                href: PERSONAL.linkedin,
                sub: "Connect on LinkedIn",
              },
              {
                icon: <Github size={16} />,
                label: "GitHub",
                value: `Soham-bot (${PERSONAL.repoCount} repos)`,
                href: PERSONAL.github,
                sub: "Check out my repositories",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                className="workbench-card p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[var(--surface-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-[var(--text-muted)]">{item.label}</div>
                    <div className="font-mono text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
              </a>
            ))}
          </div>

          {/* Right Column: Resume & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href="/resume"
              className="workbench-card p-6 flex items-center justify-between group border-[var(--accent)]/40 hover:border-[var(--accent)] bg-[var(--surface)] block"
            >
              <div>
                <div className="font-mono text-[11px] text-[var(--accent)] font-bold mb-1">
                  OFFICIAL RESUME
                </div>
                <div className="font-display text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  View &amp; Print Resume (PDF)
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)] mt-1">
                  Updated 2026 · Print-ready layout
                </div>
              </div>
              <Download size={22} className="text-[var(--accent)] group-hover:translate-y-0.5 transition-transform" />
            </a>

            <div className="workbench-card p-5">
              <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold text-[var(--success)]">
                <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                <span>OPEN TO SOFTWARE &amp; CLOUD ROLES</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-[var(--text-dim)]">
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Location</span>
                  <span className="text-[var(--text)] font-semibold">Mumbai, India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Education</span>
                  <span className="text-[var(--text)] font-semibold">3rd Year B.Tech CSE</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[var(--text-muted)]">Target Roles</span>
                  <span className="text-[var(--accent)] font-semibold">DevOps · Cloud · Backend</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
