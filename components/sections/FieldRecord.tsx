"use client";
import { Trophy, Users, Camera } from "lucide-react";
import { HACKATHONS, LEADERSHIP, CREATIVE_EVENTS } from "../../lib/data";

const ROLE_BADGE: Record<string, string> = {
  "Selected / Participant": "text-[var(--accent)] border-[var(--accent)]/30",
  "Selected":              "text-[var(--success)] border-[var(--success)]/30",
  "Attendee / Coverage":   "text-[var(--text-dim)] border-[var(--border)]",
  "Participant":           "text-[var(--accent)] border-[var(--accent)]/20",
  "Community":             "text-[var(--text-dim)] border-[var(--border)]",
  "Involved":              "text-[var(--text-dim)] border-[var(--border)]",
};

export default function FieldRecord() {
  return (
    <section id="field-record" className="py-32 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">06</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Field Record</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hackathons */}
          <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={16} className="text-[var(--accent)]" />
              <span className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-wider">Hackathons &amp; Events</span>
            </div>
            <div className="space-y-3">
              {HACKATHONS.map((h) => (
                <div key={h.name} className="border border-[var(--border)] p-3 hover:border-[var(--accent)]/10 transition-colors">
                  <div className="font-mono text-xs text-[var(--text)] mb-1">{h.name}</div>
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] border px-2 py-0.5 ${ROLE_BADGE[h.role] || "text-[var(--text-muted)] border-[var(--border)]"}`}>
                      {h.role}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-subtle)]">
                      {h.type === "hackathon" ? "🏆" : "📍"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users size={16} className="text-[var(--accent)]" />
              <span className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-wider">Leadership</span>
            </div>
            {LEADERSHIP.map((role) => (
              <div key={role.title} className="space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-[var(--text)] mb-1">{role.title}</h3>
                  <div className="font-mono text-xs text-[var(--accent)]/60 mb-1">{role.org}</div>
                  <div className="font-mono text-xs text-[var(--text-muted)]">{role.period}</div>
                </div>
                <div className="space-y-1">
                  {role.responsibilities.map((r) => (
                    <div key={r} className="flex items-start gap-2 font-mono text-xs text-[var(--text-muted)]">
                      <span className="text-[var(--accent)] mt-0.5">→</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Creative */}
          <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Camera size={16} className="text-[var(--accent)]" />
              <span className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-wider">Creative Work</span>
            </div>
            <div className="space-y-4">
              {CREATIVE_EVENTS.map((event) => (
                <div key={event.name} className="border border-[var(--border)] p-4 hover:border-[var(--accent)]/10 transition-colors">
                  <div className="font-mono text-[10px] text-[var(--accent)]/60 mb-1">{event.type}</div>
                  <div className="font-mono text-xs text-[var(--text)] mb-2">{event.name}</div>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">{event.desc}</p>
                </div>
              ))}
              <div className="border border-[var(--border)] p-4">
                <div className="font-mono text-[10px] text-[var(--accent)]/60 mb-2">CREATIVE SKILLS</div>
                <div className="flex flex-wrap gap-1">
                  {["Photography","Videography","Reels","Content Strategy","Event Ops","PR","Social Media","Content Calendar"].map((s) => (
                    <span key={s} className="font-mono text-[10px] bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] px-2 py-0.5">{s}</span>
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
