"use client";
import { Trophy, Users, Building2, Sparkles, Award } from "lucide-react";
import { HACKATHONS, LEADERSHIP, VOLUNTEERING } from "../../lib/data";

const ROLE_BADGE: Record<string, string> = {
  "Selected":              "text-[var(--success)] bg-emerald-500/10 border-emerald-500/30",
  "Selected / Participant":"text-[var(--accent)] bg-[var(--accent-dim)] border-[var(--accent)]/30",
  "Volunteer @ IIT Bombay":"text-amber-400 bg-amber-500/10 border-amber-500/30",
  "Volunteer":            "text-[var(--accent-alt)] bg-[var(--accent-dim)] border-[var(--border)]",
  "Participant":          "text-[var(--text-muted)] bg-[var(--surface-alt)] border-[var(--border)]",
};

export default function FieldRecord() {
  return (
    <section id="field-record" className="py-24 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="font-mono text-xs text-[var(--accent)] font-semibold mb-1">
            // IRL &amp; ON-SITE EXPERIENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-2">
            Hackathons &amp; IRL operations.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl">
            Selected in national Smart India Hackathon, 7 days on-site at IIT Bombay during Mumbai Tech Week with Babblebots, and college media leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Hackathons Column */}
          <div className="workbench-card p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)] font-mono text-xs font-bold text-[var(--text)]">
              <Trophy size={16} className="text-[var(--accent)]" />
              <span>HACKATHONS &amp; CONTESTS</span>
            </div>
            <div className="space-y-2.5 flex-1">
              {HACKATHONS.map((h) => (
                <div key={h.name} className="p-3 rounded-md bg-[var(--surface-alt)] border border-[var(--border)]">
                  <div className="font-mono text-xs font-semibold text-[var(--text)] mb-1.5">{h.name}</div>
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm border ${ROLE_BADGE[h.role] || "text-[var(--text-muted)]"}`}>
                      {h.role}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      {h.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* On-Site Operations (IIT Bombay & Babblebots) */}
          <div className="workbench-card p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)] font-mono text-xs font-bold text-[var(--text)]">
              <Building2 size={16} className="text-amber-500" />
              <span>ON-SITE OPERATIONS &amp; GIGS</span>
            </div>
            <div className="space-y-3.5 flex-1">
              {VOLUNTEERING.map((v) => (
                <div key={v.event} className="p-3.5 rounded-md bg-[var(--surface-alt)] border border-[var(--border)]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-mono text-[10px] text-[var(--accent)] font-bold">{v.org}</span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">{v.year}</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[var(--text)] mb-2">{v.event}</div>
                  <div className="space-y-1">
                    {v.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                        <span className="text-[var(--accent)] font-bold">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Creative */}
          <div className="workbench-card p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)] font-mono text-xs font-bold text-[var(--text)]">
              <Users size={16} className="text-sky-500" />
              <span>LEADERSHIP &amp; ORGANIZING</span>
            </div>
            <div className="space-y-3.5 flex-1">
              {LEADERSHIP.map((role) => (
                <div key={role.title} className="p-3.5 rounded-md bg-[var(--surface-alt)] border border-[var(--border)]">
                  <span className="font-mono text-[10px] text-[var(--accent)] font-bold block mb-0.5">{role.period}</span>
                  <div className="font-display font-bold text-sm text-[var(--text)] mb-0.5">{role.title}</div>
                  <div className="font-mono text-xs text-[var(--text-muted)] mb-2.5">{role.org}</div>
                  <div className="space-y-1">
                    {role.responsibilities.slice(0, 4).map((r) => (
                      <div key={r} className="flex items-start gap-1.5 font-mono text-[11px] text-[var(--text-dim)]">
                        <span className="text-[var(--accent)] font-bold">→</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-md bg-[var(--surface-alt)] border border-[var(--border)]">
                <div className="font-mono text-[10px] text-[var(--text-muted)] font-bold uppercase mb-2">MANAGEMENT TOOLKIT</div>
                <div className="flex flex-wrap gap-1">
                  {["Team Ops","Event Logistics","PR & Media","Video Production","Candidate Pipelines"].map((s) => (
                    <span key={s} className="code-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
