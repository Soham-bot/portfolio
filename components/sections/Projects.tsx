"use client";
import { useState } from "react";
import { Github, ExternalLink, ChevronRight, X, Layers, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../lib/data";

type ArchNode = { name: string; role: string; desc: string; color: string };

function ArchitectureModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  const [activeNode, setActiveNode] = useState<ArchNode | null>(null);
  const nodes: ArchNode[] = project.architecture || [];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-4"
      role="dialog" aria-modal="true" aria-label={`${project.title} architecture`}
    >
      <div className="max-w-3xl w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 sm:p-8 shadow-2xl my-8">
        
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-[var(--border)]">
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold mb-1">
              // ARCHITECTURE BREAKDOWN
            </div>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">
              {project.title}
            </h2>
            <p className="font-mono text-xs text-[var(--text-muted)] mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-[var(--text-muted)] mb-4 font-mono">
          Click any component to see how it connects into the overall system:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {nodes.map((node) => (
            <button
              key={node.name}
              onClick={() => setActiveNode(activeNode?.name === node.name ? null : node)}
              className={`text-left p-3.5 rounded-md border transition-all ${
                activeNode?.name === node.name
                  ? "border-[var(--accent)] bg-[var(--surface-alt)] shadow-xs"
                  : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-hover)]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold text-[var(--text)]">{node.name}</span>
                <span className="font-mono text-[10px] text-[var(--accent)]">{node.role}</span>
              </div>
              {activeNode?.name === node.name && (
                <p className="text-xs text-[var(--text-dim)] mt-2 pt-2 border-t border-[var(--border)] leading-relaxed">
                  {node.desc}
                </p>
              )}
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="code-pill">{t}</span>
          ))}
        </div>

      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [showArch, setShowArch] = useState(false);

  return (
    <>
      {showArch && project.architecture && (
        <ArchitectureModal project={project} onClose={() => setShowArch(false)} />
      )}
      <article className="workbench-card p-6 flex flex-col justify-between">
        <div>
          
          {/* Top meta */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.year}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text)] mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[var(--text-muted)] mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-[var(--text-dim)] mb-5 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Real Highlights */}
          {project.highlights && (
            <div className="space-y-1.5 mb-5 bg-[var(--surface-alt)] p-3.5 rounded-md border border-[var(--border)]">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 font-mono text-xs text-[var(--text-dim)]">
                  <span className="text-[var(--accent)] font-bold">→</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Bottom Tech & Links */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[var(--border)]/60">
            {project.tech.map((t) => (
              <span key={t} className="code-pill">{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-1.5 shadow-2xs"
              >
                <Github size={13} /> View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md bg-[var(--accent)] text-white hover:opacity-90 transition-all flex items-center gap-1.5 shadow-2xs"
              >
                Live demo <ArrowUpRight size={13} />
              </a>
            )}
            {project.architecture && (
              <button
                onClick={() => setShowArch(true)}
                className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md border border-[var(--accent)]/40 bg-[var(--accent-dim)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Layers size={13} /> View architecture
              </button>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "S" | "A" | "B">("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tier === filter);

  return (
    <section id="projects" className="py-24 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold mb-1">
              // REPOSITORIES &amp; SYSTEMS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-2">
              Stuff I&apos;ve built.
            </h2>
            <p className="text-[var(--text-muted)] text-base max-w-xl">
              A mix of cloud infrastructure platforms, container clusters, backend APIs, and web apps that actually run.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-1.5 self-start md:self-auto font-mono text-xs">
            {(["all", "S", "A", "B"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-md border transition-all ${
                  filter === t
                    ? "bg-[var(--text)] text-[var(--bg)] font-bold"
                    : "bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text)]"
                }`}
              >
                {t === "all" ? "All projects" : `Tier ${t}`}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 39 Repos Link Banner */}
        <div className="workbench-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-display font-bold text-lg text-[var(--text)] mb-0.5">
              39 public repositories on GitHub
            </div>
            <div className="font-mono text-xs text-[var(--text-muted)]">
              Including coursework builds, experimental scripts, and small tools.
            </div>
          </div>
          <a
            href="https://github.com/Soham-bot?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold px-4 py-2.5 rounded-md bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <Github size={14} /> Browse all repos on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}
