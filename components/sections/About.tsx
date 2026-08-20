"use client";
import { MapPin, GraduationCap, Terminal, Network, ShieldCheck, Award } from "lucide-react";
import { PERSONAL } from "../../lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="font-mono text-xs text-[var(--accent)] font-semibold mb-1">
            // BACKGROUND &amp; STORY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-2">
            The story so far.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl">
            Who I am, what I care about, and how I ended up orchestrating Kubernetes clusters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic & Identity Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="workbench-card p-6">
              <div className="font-mono text-xs font-bold text-[var(--accent)] mb-4 pb-2 border-b border-[var(--border)]">
                ~/identity.json
              </div>

              <div className="space-y-3 font-mono text-xs text-[var(--text-dim)]">
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">College</span>
                  <span className="font-semibold text-[var(--text)]">ITM Skills University</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Degree</span>
                  <span className="font-semibold text-[var(--text)]">B.Tech CSE (2024–2028)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Location</span>
                  <span className="font-semibold text-[var(--text)]">Mumbai, Maharashtra</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Specialization</span>
                  <span className="font-semibold text-[var(--accent)]">DevOps &amp; Cloud</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Repositories</span>
                  <span className="font-semibold text-[var(--text)]">39 Shipped Projects</span>
                </div>
                <div className="pt-2">
                  <span className="text-[var(--text-muted)] block mb-1">Philosophy</span>
                  <span className="text-[var(--text)] font-medium block bg-[var(--surface-alt)] p-2.5 rounded-md border border-[var(--border)]">
                    &ldquo;Building resilient, distributed cloud architectures engineered with first-principles discipline.&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Proof Chips */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: <MapPin size={14} className="text-[var(--accent)]" />, title: "Mumbai Base", sub: "Nahur / Navi Mumbai" },
                { icon: <GraduationCap size={14} className="text-sky-500" />, title: "B.Tech CSE", sub: "3rd Year Undergrad" },
                { icon: <Terminal size={14} className="text-amber-500" />, title: "Hardcore Linux", sub: "Shell & Containers" },
                { icon: <Network size={14} className="text-emerald-500" />, title: "Distributed Systems", sub: "Microservices & IaC" },
              ].map((item) => (
                <div key={item.title} className="workbench-card p-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--text)] mb-0.5">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--text-muted)] truncate">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Authentic Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-[var(--text-dim)] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I&apos;m a 20-year-old computer science undergrad from Mumbai who approaches software and cloud systems with a builder&apos;s mindset. 
                I started by dissecting web architectures in 2021, fell in love with distributed systems, and ended up orchestrating Kubernetes clusters and writing modular Terraform infrastructure.
              </p>
              <p>
                <strong className="text-[var(--text)] font-semibold">Engineering discipline over hype:</strong> When I build a system like <span className="text-[var(--accent)] font-semibold">Project OmniGrid</span>, it is engineered as a production-grade infrastructure platform with real IaC, self-healing multi-pod replicas, HashiCorp Vault secrets injection, and centralized ELK observability.
              </p>
              <p>
                The non-technical side reinforces this discipline. Working 7 days on-site at <strong className="text-[var(--text)] font-semibold">IIT Bombay</strong> managing AI recruitment candidate pipelines during Mumbai Tech Week with Babblebots, or running college festival operations as Social Media Club Co-Lead — that is on-the-ground operational leadership.
              </p>
            </div>

            {/* Verified Career Proof Highlights */}
            <div className="workbench-card p-5">
              <div className="font-mono text-xs font-bold text-[var(--text)] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
                VERIFIED CREDENTIALS &amp; TRACK RECORD
              </div>
              <div className="space-y-2.5 font-mono text-xs sm:text-sm text-[var(--text-dim)]">
                {[
                  "Smart India Hackathon (SIH) — Selected in national-level technical competition",
                  "Mumbai Tech Week 2026 @ IIT Bombay — 7 days on-site operations with Babblebots",
                  "39 public GitHub codebases spanning Kubernetes, AWS Cloud, and MERN applications",
                  "Social Media Club Co-Lead — Directed event logistics, production, and digital PR",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] font-bold">⚡</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
