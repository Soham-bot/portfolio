"use client";
import { Github, ExternalLink, Code2, Sparkles, FolderGit2 } from "lucide-react";
import { PERSONAL } from "../../lib/data";

const PINNED_REPOS = [
  { name: "project-omnigrid",  desc: "Critical infrastructure coordination platform — K8s, Terraform, Jenkins, Vault, ELK", langs: ["Python", "HCL", "Dockerfile"], tag: "FLAGSHIP INFRA" },
  { name: "VR_recommender",    desc: "AI-powered VR experience recommendation system with BST & Firebase", langs: ["JavaScript", "HTML", "CSS"], live: "https://vr-recommender-36a16.web.app", tag: "LIVE WEB APP" },
  { name: "YT-downloader",     desc: "Multi-resolution YouTube video/audio downloader with animated progress UI", langs: ["Python"], tag: "CLI UTILITY" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-28 bg-[var(--bg)] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-[var(--accent)] font-bold">07</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">Codebase Vault // GitHub Activity</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Stats panel */}
          <div className="border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs rounded-xs carbon-card">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-xs bg-[var(--accent-dim)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Github size={20} />
              </div>
              <div>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                  className="font-display font-black text-lg text-[var(--text)] hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                  @{PERSONAL.handle} <ExternalLink size={13} />
                </a>
                <span className="font-mono text-[10px] text-[var(--text-muted)] font-medium">Verified GitHub Profile</span>
              </div>
            </div>
            <div className="space-y-3.5">
              {[
                { label: "Public Repositories",       value: "39 Codebases"       },
                { label: "Contributions (last year)",  value: "64+ Commits"        },
                { label: "Primary Languages",          value: "Python · JS · HCL"  },
                { label: "Active Since",               value: "2024 (Continuous)"  },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center border-b border-[var(--border)] pb-2.5">
                  <span className="font-mono text-xs text-[var(--text-muted)]">{stat.label}</span>
                  <span className="font-mono text-xs text-[var(--text)] font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
              className="mt-6 w-full font-mono text-xs border border-[var(--accent)] bg-[var(--accent)] text-white px-4 py-2.5 hover:opacity-90 transition-all flex items-center justify-center gap-2 font-bold shadow-xs rounded-xs">
              <Github size={14} /> Open Full GitHub Vault ↗
            </a>
          </div>

          {/* Repos */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="font-mono text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              PINNED OPEN-SOURCE CODEBASES
            </div>
            {PINNED_REPOS.map((repo) => (
              <div key={repo.name}
                className="border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)] transition-all group shadow-2xs hover:shadow-xs rounded-xs carbon-card">
                <div className="flex items-start justify-between mb-2">
                  <a href={`https://github.com/Soham-bot/${repo.name}`} target="_blank" rel="noopener noreferrer"
                    className="font-display text-base sm:text-lg font-black text-[var(--text)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                    {repo.name}
                    <ExternalLink size={13} className="opacity-40 group-hover:opacity-100" />
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-extrabold px-2 py-0.5 border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-dim)] rounded-2xs">
                      {repo.tag}
                    </span>
                    {repo.live && (
                      <a href={repo.live} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-[10px] text-white bg-[var(--accent)] px-2 py-0.5 font-bold rounded-2xs shadow-2xs">
                        LIVE ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[var(--text-dim)] font-mono text-xs mb-3.5 leading-relaxed">{repo.desc}</p>
                <div className="flex items-center gap-3">
                  {repo.langs.map((lang) => (
                    <div key={lang} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span className="font-mono text-[10px] text-[var(--text-muted)] font-bold">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <a href={`${PERSONAL.github}?tab=repositories`} target="_blank" rel="noopener noreferrer"
              className="block border border-dashed border-[var(--border)] bg-[var(--surface)] p-4 text-center hover:border-[var(--accent)] transition-all group shadow-2xs rounded-xs">
              <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors font-bold">
                View all 39 repositories &amp; open source code on GitHub →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
