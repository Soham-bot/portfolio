"use client";
import { Github, ExternalLink } from "lucide-react";
import { PERSONAL } from "../../lib/data";

const PINNED_REPOS = [
  { name: "project-omnigrid",  desc: "Critical infrastructure coordination platform — K8s, Terraform, Jenkins, Vault, ELK", langs: ["Python", "HCL", "Dockerfile"] },
  { name: "VR_recommender",    desc: "AI-powered VR experience recommendation system with BST & Firebase", langs: ["JavaScript", "HTML", "CSS"], live: "https://vr-recommender-36a16.web.app" },
  { name: "YT-downloader",     desc: "Multi-resolution YouTube video/audio downloader with animated progress UI", langs: ["Python"] },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--accent)]/60">09</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">GitHub</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats panel */}
          <div className="border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <Github size={20} className="text-[var(--accent)]" />
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                className="font-mono text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors font-semibold">
                @Soham-bot ↗
              </a>
            </div>
            <div className="space-y-4">
              {[
                { label: "Public Repositories",     value: "39"              },
                { label: "Contributions (last year)", value: "64+"            },
                { label: "Primary Languages",        value: "Python · JS · HCL" },
                { label: "Joined",                   value: "2024"            },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center border-b border-[var(--border)] pb-2.5">
                  <span className="font-mono text-xs text-[var(--text-muted)]">{stat.label}</span>
                  <span className="font-mono text-xs text-[var(--text)] font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
              className="mt-6 w-full font-mono text-xs border border-[var(--accent)]/40 bg-[var(--surface)] text-[var(--accent)] px-4 py-2.5 hover:bg-[var(--accent-dim)] transition-all flex items-center justify-center gap-2 font-medium shadow-xs">
              <Github size={12} /> View Full Profile
            </a>
          </div>

          {/* Repos */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-[10px] text-[var(--text-muted)] mb-4 font-semibold uppercase tracking-wider">SELECTED REPOSITORIES</div>
            {PINNED_REPOS.map((repo) => (
              <div key={repo.name}
                className="border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 transition-all group shadow-xs hover:shadow-md">
                <div className="flex items-start justify-between mb-2">
                  <a href={`https://github.com/Soham-bot/${repo.name}`} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                    {repo.name}
                    <ExternalLink size={11} className="opacity-40 group-hover:opacity-100" />
                  </a>
                  {repo.live && (
                    <a href={repo.live} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-[var(--success)] hover:text-[var(--success)] border border-[var(--success)]/30 bg-emerald-500/10 px-2 py-0.5 font-medium rounded-xs">
                      LIVE ↗
                    </a>
                  )}
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-3 leading-relaxed">{repo.desc}</p>
                <div className="flex items-center gap-3">
                  {repo.langs.map((lang) => (
                    <div key={lang} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                      <span className="font-mono text-[10px] text-[var(--text-muted)] font-medium">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <a href={`${PERSONAL.github}?tab=repositories`} target="_blank" rel="noopener noreferrer"
              className="block border border-dashed border-[var(--border)] bg-[var(--surface)] p-4 text-center hover:border-[var(--accent)]/40 transition-all group shadow-xs">
              <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors font-medium">
                View all 39 repositories →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
