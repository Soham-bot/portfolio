"use client";
import { MapPin, GraduationCap, Code2, Zap } from "lucide-react";
import { PERSONAL, SKILLS_NARRATIVE } from "../../lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">01</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Who TF Is Soham?</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Identity JSON card */}
          <div className="space-y-8">
            <div className="border border-[var(--border)] p-8 relative hover:border-[var(--accent)]/20 transition-colors bg-[var(--surface)]">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)]/60" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)]/20" />
              <div className="font-mono text-xs text-[var(--text-muted)] mb-6">IDENTITY.JSON</div>
              <div className="space-y-3 font-mono text-sm">
                <div><span className="text-[var(--accent)]/70">&quot;name&quot;:</span> <span className="text-[var(--text)]">&quot;{PERSONAL.name}&quot;</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;age&quot;:</span> <span className="text-[var(--success)]">{PERSONAL.age}</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;location&quot;:</span> <span className="text-[var(--text)]">&quot;{PERSONAL.location}&quot;</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;university&quot;:</span> <span className="text-[var(--text)]">&quot;{PERSONAL.university}&quot;</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;degree&quot;:</span> <span className="text-[var(--text)]">&quot;{PERSONAL.degree}, {PERSONAL.year}&quot;</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;graduation&quot;:</span> <span className="text-[var(--text)]">&quot;{PERSONAL.graduation}&quot;</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;focus&quot;:</span> <span className="text-[var(--text)]">[&quot;Cloud&quot;, &quot;DevOps&quot;, &quot;Full Stack&quot;, &quot;AI/ML&quot;]</span><span className="text-[var(--text-subtle)]">,</span></div>
                <div><span className="text-[var(--accent)]/70">&quot;fun_fact&quot;:</span> <span className="text-[var(--text-dim)]">&quot;{PERSONAL.funFact}&quot;</span></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <MapPin size={14} />,        label: "Mumbai, India"     },
                { icon: <GraduationCap size={14} />, label: "B.Tech CSE 2028"   },
                { icon: <Code2 size={14} />,         label: "39 Public Repos"   },
                { icon: <Zap size={14} />,           label: "Systems Builder"   },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)]/20 transition-all"
                >
                  <span className="text-[var(--accent)]">{item.icon}</span>
                  <span className="font-mono text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-[var(--text)] leading-tight">
              I like taking systems apart,<br />
              <span className="gradient-text">figuring out why they break,</span><br />
              and building them back better.
            </h2>

            <div className="space-y-4 text-[var(--text-dim)] leading-relaxed">
              <p>{SKILLS_NARRATIVE.identity}</p>
              <p>{SKILLS_NARRATIVE.devops}</p>
              <p>{SKILLS_NARRATIVE.cloud}</p>
              <p>The non-technical side isn&apos;t decoration. Running events, creating content, coordinating teams — that&apos;s still system design, just for humans.</p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] p-4 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse-slow" />
                <span className="font-mono text-xs text-[var(--success)]">CURRENTLY ACTIVE</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-[var(--text-muted)]">
                {[
                  "Building production-grade DevOps infrastructure",
                  "Exploring distributed systems concepts",
                  "Deepening Kubernetes + Terraform expertise",
                  "3rd Year B.Tech CSE @ ITM Skills University",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">→</span>
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
