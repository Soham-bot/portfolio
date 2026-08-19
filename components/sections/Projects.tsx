"use client";
import { useState } from "react";
import { Github, ExternalLink, ChevronRight, X, Layers } from "lucide-react";
import { PROJECTS } from "../../lib/data";

type ArchNode = { name: string; role: string; desc: string; color: string };

function ArchitectureModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  const [activeNode, setActiveNode] = useState<ArchNode | null>(null);
  const nodes: ArchNode[] = project.architecture || [];

  return (
    <div
      className="fixed inset-0 z-50 bg-[var(--bg)]/95 backdrop-blur-sm overflow-y-auto"
      role="dialog" aria-modal="true" aria-label={`${project.title} architecture`}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-10">
          <div>
            <div className="font-mono text-xs text-[var(--text-muted)] mb-2">ARCHITECTURE // {project.title.toUpperCase()}</div>
            <h2 className="font-display text-3xl font-bold text-[var(--text)]">{project.subtitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="border border-[var(--border)] p-2 text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {nodes.map((node) => (
            <button
              key={node.name}
              onClick={() => setActiveNode(activeNode?.name === node.name ? null : node)}
              className={`text-left border p-5 transition-all hover:bg-[var(--surface)] ${
                activeNode?.name === node.name
                  ? "border-[var(--accent)]/60 bg-[var(--surface)]"
                  : "border-[var(--border)] hover:border-[var(--accent)]/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color || "var(--accent)" }} />
                  <span className="font-mono text-sm font-semibold text-[var(--text)]">{node.name}</span>
                </div>
                <ChevronRight size={14} className={`text-[var(--text-muted)] transition-transform ${activeNode?.name === node.name ? "rotate-90 text-[var(--accent)]" : ""}`} />
              </div>
              <div className="font-mono text-[10px] text-[var(--accent)]/60 mb-1">{node.role}</div>
              {activeNode?.name === node.name && (
                <p className="text-sm text-[var(--text-dim)] mt-3 leading-relaxed">{node.desc}</p>
              )}
            </button>
          ))}
        </div>

        <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="font-mono text-xs text-[var(--text-muted)] mb-4">FULL TECH STACK</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-xs border border-[var(--accent)]/20 text-[var(--accent)]/70 px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [showArch, setShowArch] = useState(false);

  const tierStyles = {
    S: "text-amber-700 dark:text-yellow-400 border-amber-500/40 bg-amber-500/10 dark:bg-yellow-400/10 font-semibold",
    A: "text-[var(--accent)] border-[var(--accent)]/40 bg-[var(--accent-dim)] font-semibold",
    B: "text-[var(--text-muted)] border-[var(--border)] bg-[var(--surface-alt)] font-medium",
  };

  return (
    <>
      {showArch && project.architecture && (
        <ArchitectureModal project={project} onClose={() => setShowArch(false)} />
      )}
      <article className="project-card border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/40 relative group flex flex-col shadow-xs hover:shadow-md transition-all">
        {project.tier === "S" && (
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500/60" />
        )}

        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span className={`font-mono text-[10px] px-2 py-0.5 border ${tierStyles[project.tier as keyof typeof tierStyles] || tierStyles.B}`}>
              TIER {project.tier}
            </span>
            <span className="font-mono text-[10px] text-[var(--text-muted)] font-medium">{project.year}</span>
          </div>
          {project.verification === "verified" && (
            <span className="font-mono text-[10px] text-[var(--success)] font-medium">● verified</span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-[var(--accent)] mb-3 font-medium">{project.category}</p>
        <p className="text-[var(--text-dim)] text-sm mb-5 leading-relaxed flex-1">{project.description}</p>

        {project.highlights && (
          <ul className="space-y-1 mb-5">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2 font-mono text-xs text-[var(--text-muted)]">
                <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 font-bold">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1 mb-5">
          {project.tech.slice(0, 6).map((t) => (
            <span key={t} className="font-mono text-[10px] bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text-muted)] px-2 py-0.5 rounded-sm">{t}</span>
          ))}
          {project.tech.length > 6 && (
            <span className="font-mono text-[10px] text-[var(--text-subtle)] px-2 py-0.5">+{project.tech.length - 6} more</span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs flex items-center gap-1.5 text-[var(--text-dim)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all shadow-xs">
              <Github size={12} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs flex items-center gap-1.5 text-[var(--accent)] bg-[var(--surface)] border border-[var(--accent)]/40 px-3 py-1.5 hover:bg-[var(--accent-dim)] transition-all shadow-xs font-medium">
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.architecture && (
            <button onClick={() => setShowArch(true)}
              className="font-mono text-xs flex items-center gap-1.5 text-[var(--text-dim)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all shadow-xs">
              <Layers size={12} /> Architecture
            </button>
          )}
        </div>
      </article>
    </>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "S" | "A" | "B">("all");
  const tierS = PROJECTS.filter((p) => p.tier === "S");
  const tierA = PROJECTS.filter((p) => p.tier === "A");
  const tierB = PROJECTS.filter((p) => p.tier === "B");

  return (
    <section id="projects" className="py-32 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">04</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Featured Systems</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <p className="text-[var(--text-muted)] font-mono text-sm max-w-xl">
            <span className="text-[var(--accent)] font-bold">//</span> Ranked by engineering complexity and real implementation depth.
          </p>
          <div className="flex gap-2">
            {(["all", "S", "A", "B"] as const).map((t) => (
              <button key={t} onClick={() => setFilter(t)}
                className={`font-mono text-xs px-3 py-1.5 border transition-all shadow-xs ${
                  filter === t
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)] font-semibold"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-dim)]"
                }`}>
                {t === "all" ? "ALL" : `TIER ${t}`}
              </button>
            ))}
          </div>
        </div>

        {(filter === "all" || filter === "S") && (
          <div className="mb-12">
            <div className="font-mono text-[10px] text-amber-600/80 mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500/40" /> TIER S — HERO SYSTEMS
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {tierS.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        )}

        {(filter === "all" || filter === "A") && (
          <div className="mb-12">
            <div className="font-mono text-[10px] text-[var(--accent)]/60 mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[var(--accent)]/30" /> TIER A — STRONG PROJECTS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tierA.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        )}

        {(filter === "all" || filter === "B") && tierB.length > 0 && (
          <div className="mb-12">
            <div className="font-mono text-[10px] text-[var(--text-muted)] mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[var(--border)]" /> TIER B — SUPPORTING
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tierB.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        )}

        <div className="border border-[var(--border)] bg-[var(--surface)] p-6 flex items-center justify-between hover:border-[var(--accent)]/20 transition-all">
          <div>
            <div className="font-mono text-sm text-[var(--text)] mb-1">39 Public Repositories</div>
            <div className="font-mono text-xs text-[var(--text-muted)]">Experiments, coursework, lab sessions, and more</div>
          </div>
          <a href="https://github.com/Soham-bot" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/30 px-5 py-2.5 hover:bg-[var(--accent-dim)] transition-all flex-shrink-0">
            <Github size={14} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
