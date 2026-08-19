"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft, Download, Github, Linkedin,
  Mail, Phone, MapPin, ExternalLink,
} from "lucide-react";
import {
  PERSONAL, EDUCATION, PROJECTS, HACKATHONS,
  VOLUNTEERING, LEADERSHIP, STACK,
} from "../../lib/data";

/* ─── helpers ─────────────────────────────────────────── */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-7 print:mb-5">
    <div className="flex items-center gap-3 mb-3">
      <h2 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[var(--accent)]/30" />
    </div>
    {children}
  </section>
);

const Tag = ({ label }: { label: string }) => (
  <span className="inline-block font-mono text-[9px] border border-[var(--border)] text-[var(--text-muted)] px-1.5 py-0.5 mr-1 mb-1">
    {label}
  </span>
);

/* ─── resume component ────────────────────────────────── */
export default function ResumeClient() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  // Only show the meatiest projects on resume
  const resumeProjects = PROJECTS.filter((p) =>
    ["omnigrid","musicnation","health-lab","vr-recommender","sneaker-resale"].includes(p.id)
  );

  const hackathonParticipation = HACKATHONS.filter(
    (h) => h.type === "hackathon"
  );
  const volunteeringList = HACKATHONS.filter(
    (h) => h.type === "volunteer"
  );

  return (
    <>
      {/* ── Print styles injected inline so no extra CSS file needed ── */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; cursor: auto !important; }
          body::before { display: none !important; }
          .no-print { display: none !important; }
          .print-page {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0.5in 0.6in !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
          }
          :root, html[data-theme="dark"], html[data-theme="light"] {
            --bg: white !important;
            --surface: white !important;
            --border: #cccccc !important;
            --accent: #0077aa !important;
            --text: #111111 !important;
            --text-dim: #333333 !important;
            --text-muted: #555555 !important;
            --text-subtle: #888888 !important;
            --success: #007733 !important;
          }
          a { color: inherit !important; text-decoration: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      {/* ── Screen: nav bar ── */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] px-6 py-3 flex items-center justify-between">
        <Link href="/"
          className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[var(--text-subtle)]">
            SOHAM AHIRRAO — RESUME
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 font-mono text-xs bg-[var(--accent)] text-[var(--bg)] px-4 py-2 hover:opacity-90 transition-opacity"
          >
            <Download size={12} /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Page wrapper ── */}
      <div className="min-h-screen bg-[var(--bg-alt)] pt-16 pb-16 no-print-padding print:pt-0 print:pb-0 print:bg-white">
        <div
          ref={printRef}
          className="print-page max-w-[820px] mx-auto bg-[var(--surface)] border border-[var(--border)] p-10 print:p-0 print:border-0 print:shadow-none shadow-2xl"
        >

          {/* ═══════════════════════════════════════
              HEADER
          ═══════════════════════════════════════ */}
          <header className="mb-7 print:mb-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl font-black tracking-tight text-[var(--text)] mb-1 print:text-3xl">
                  SOHAM AHIRRAO
                </h1>
                <p className="font-mono text-sm text-[var(--accent)] font-medium">
                  Software Developer · Cloud · DevOps · Full Stack
                </p>
                <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                  B.Tech CSE · ITM Skills University · Mumbai
                </p>
              </div>

              {/* Contact block */}
              <div className="flex flex-col gap-1.5 sm:items-end text-left sm:text-right">
                <a href={`mailto:${PERSONAL.email}`}
                  className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors sm:flex-row-reverse">
                  <Mail size={11} /> {PERSONAL.email}
                </a>
                <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-dim)] sm:flex-row-reverse">
                  <Phone size={11} /> {PERSONAL.phone}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-dim)] sm:flex-row-reverse">
                  <MapPin size={11} /> {PERSONAL.location}
                </span>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors sm:flex-row-reverse">
                  <Github size={11} /> github.com/Soham-bot
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors sm:flex-row-reverse">
                  <Linkedin size={11} /> linkedin.com/in/soham-ahirrao
                </a>
              </div>
            </div>

            <div className="mt-4 border-t border-[var(--border)]" />
          </header>

          {/* ═══════════════════════════════════════
              SUMMARY
          ═══════════════════════════════════════ */}
          <Section title="Summary">
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              B.Tech Computer Science &amp; Engineering student with hands-on experience in full-stack
              web development (MERN stack), cloud infrastructure (AWS), and DevOps engineering
              (Docker, Kubernetes, Terraform, Jenkins). Built production-oriented systems including
              a multi-service Kubernetes platform with CI/CD, observability, and secrets management.
              Active hackathon participant, tech event volunteer, and Social Media Club Co-Lead.
            </p>
          </Section>

          {/* ═══════════════════════════════════════
              TECHNICAL SKILLS
          ═══════════════════════════════════════ */}
          <Section title="Technical Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                {
                  label: "Languages",
                  items: STACK.languages.map((s) => s.name).join(", "),
                },
                {
                  label: "Frontend",
                  items: "React.js, HTML5, CSS3, JavaScript, Tailwind CSS",
                },
                {
                  label: "Backend",
                  items: "Node.js, Express.js, Flask, REST APIs, MVC Architecture",
                },
                {
                  label: "Databases",
                  items: "MongoDB, MySQL, PostgreSQL, Firebase / Firestore",
                },
                {
                  label: "Cloud (AWS)",
                  items: "EC2, S3, RDS, CloudFront, IAM, VPC, CloudWatch",
                },
                {
                  label: "DevOps / Infra",
                  items: "Docker, Kubernetes, Terraform, Jenkins, Prometheus, Grafana, ELK Stack, HashiCorp Vault",
                },
                {
                  label: "AI / Productivity",
                  items: "Prompt Engineering, Gemini, ChatGPT, KMeans, Linear Regression",
                },
                {
                  label: "Tools",
                  items: "Git, GitHub, Postman, MongoDB Compass, VS Code",
                },
              ].map((row) => (
                <div key={row.label} className="flex gap-2 text-xs leading-relaxed">
                  <span className="font-mono font-semibold text-[var(--text)] flex-shrink-0 w-28">
                    {row.label}
                  </span>
                  <span className="text-[var(--text-dim)]">{row.items}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ═══════════════════════════════════════
              PROJECTS
          ═══════════════════════════════════════ */}
          <Section title="Projects">
            <div className="space-y-5">
              {resumeProjects.map((p) => (
                <div key={p.id}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-mono font-bold text-sm text-[var(--text)]">{p.title}</h3>
                      <span className="font-mono text-[10px] text-[var(--accent)]/70">
                        — {p.subtitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">{p.year}</span>
                      {p.github && p.github !== "https://github.com/Soham-bot" && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          className="font-mono text-[10px] text-[var(--accent)]/60 hover:text-[var(--accent)] flex items-center gap-0.5">
                          <Github size={10} /> GitHub
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer"
                          className="font-mono text-[10px] text-[var(--success)]/70 hover:text-[var(--success)] flex items-center gap-0.5">
                          <ExternalLink size={10} /> Live
                        </a>
                      )}
                    </div>
                  </div>

                  {p.highlights && (
                    <ul className="space-y-0.5 mb-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-dim)]">
                          <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1">
                    {p.tech.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ═══════════════════════════════════════
              EDUCATION
          ═══════════════════════════════════════ */}
          <Section title="Education">
            <div className="space-y-3">
              {EDUCATION.map((e) => (
                <div key={e.institution} className="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-[var(--text)]">{e.institution}</span>
                      {e.current && (
                        <span className="font-mono text-[9px] border border-[var(--success)]/40 text-[var(--success)] px-1.5 py-0.5">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs text-[var(--text-dim)]">{e.degree}</div>
                    {e.branch !== "General" && e.branch !== "Science" && (
                      <div className="font-mono text-[10px] text-[var(--text-muted)]">{e.branch}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs text-[var(--text-muted)]">{e.period}</div>
                    <div className="font-mono text-[10px] text-[var(--text-subtle)]">{e.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ═══════════════════════════════════════
              HACKATHONS & ACHIEVEMENTS
          ═══════════════════════════════════════ */}
          <Section title="Hackathons &amp; Achievements">
            <div className="space-y-2">
              {hackathonParticipation.map((h) => (
                <div key={h.name + h.year} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2 flex-1">
                    <span className="text-[var(--accent)] text-xs flex-shrink-0 mt-0.5">·</span>
                    <div>
                      <span className="font-mono font-semibold text-xs text-[var(--text)]">
                        {h.name} ({h.year})
                      </span>
                      <span className="font-mono text-xs text-[var(--text-dim)]"> — {h.note}</span>
                    </div>
                  </div>
                  <span className={`font-mono text-[9px] border px-1.5 py-0.5 flex-shrink-0 ${
                    h.role === "Selected"
                      ? "border-[var(--success)]/40 text-[var(--success)]"
                      : "border-[var(--border)] text-[var(--text-muted)]"
                  }`}>
                    {h.role}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* ═══════════════════════════════════════
              VOLUNTEERING
          ═══════════════════════════════════════ */}
          <Section title="Volunteering &amp; Community">
            <div className="space-y-2">
              {volunteeringList.map((h) => (
                <div key={h.name + h.year} className="flex items-start gap-2">
                  <span className="text-[var(--accent)] text-xs flex-shrink-0 mt-0.5">·</span>
                  <div>
                    <span className="font-mono font-semibold text-xs text-[var(--text)]">
                      {h.name} ({h.year})
                    </span>
                    <span className="font-mono text-xs text-[var(--text-dim)]"> — {h.note}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* MTW highlight — important enough for its own callout */}
            <div className="mt-3 border-l-2 border-[var(--accent)]/40 pl-3">
              <div className="font-mono text-[10px] text-[var(--accent)]/70 mb-0.5">NOTABLE</div>
              <div className="font-mono text-xs text-[var(--text)]">
                Mumbai Tech Week 2026 — Volunteer with{" "}
                <span className="text-[var(--accent)]">Babblebots</span>{" "}
                (Official AI Recruitment Partner)
              </div>
              <div className="text-xs text-[var(--text-dim)] mt-0.5">
                7 days on-site at IIT Bombay: managed candidate data, recruitment pipelines,
                applicant records, and AI-powered hiring workflows.
              </div>
            </div>
          </Section>

          {/* ═══════════════════════════════════════
              LEADERSHIP
          ═══════════════════════════════════════ */}
          <Section title="Leadership">
            {LEADERSHIP.map((role) => (
              <div key={role.title}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-mono font-bold text-sm text-[var(--text)]">{role.title}</div>
                    <div className="font-mono text-xs text-[var(--text-dim)]">{role.org}</div>
                  </div>
                  <div className="font-mono text-xs text-[var(--text-muted)]">{role.period}</div>
                </div>
                <ul className="space-y-0.5">
                  {role.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs text-[var(--text-dim)]">
                      <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">·</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* ═══════════════════════════════════════
              ADDITIONAL
          ═══════════════════════════════════════ */}
          <Section title="Additional Information">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-xs">
              <div className="flex gap-2">
                <span className="font-mono font-semibold text-[var(--text)] w-24 flex-shrink-0">Languages</span>
                <span className="text-[var(--text-dim)]">{PERSONAL.languages.join(", ")}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono font-semibold text-[var(--text)] w-24 flex-shrink-0">Interests</span>
                <span className="text-[var(--text-dim)]">DevOps, Cloud Architecture, Open Source, Gaming</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono font-semibold text-[var(--text)] w-24 flex-shrink-0">Portfolio</span>
                <span className="text-[var(--accent)] text-xs">soham-portfolio.vercel.app</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono font-semibold text-[var(--text)] w-24 flex-shrink-0">GitHub</span>
                <span className="text-[var(--text-dim)]">github.com/Soham-bot · 39 public repos</span>
              </div>
            </div>
          </Section>

          {/* ── Footer line ── */}
          <div className="border-t border-[var(--border)] pt-3 mt-6">
            <p className="font-mono text-[9px] text-[var(--text-subtle)] text-center">
              SOHAM AHIRRAO · sohamrao2006@gmail.com · 9137877036 · Mumbai, Maharashtra · github.com/Soham-bot
            </p>
          </div>

        </div>

        {/* ── Screen-only: bottom CTA ── */}
        <div className="no-print max-w-[820px] mx-auto mt-6 flex flex-wrap gap-3 justify-center">
          <button onClick={handlePrint}
            className="flex items-center gap-2 font-mono text-xs bg-[var(--accent)] text-[var(--bg)] px-6 py-3 hover:opacity-90 transition-opacity">
            <Download size={14} /> Save as PDF
          </button>
          <Link href="/"
            className="flex items-center gap-2 font-mono text-xs border border-[var(--border)] text-[var(--text-muted)] px-6 py-3 hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
