"use client";
import { useState } from "react";
import { STACK } from "../../lib/data";
import { Server, Cloud, Cpu, Code2, CheckCircle2 } from "lucide-react";

type Category = "devops" | "cloud" | "languages" | "backend" | "frontend" | "databases" | "aiml" | "other";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "devops",    label: "DevOps & Containers" },
  { key: "cloud",     label: "AWS Cloud" },
  { key: "languages", label: "Languages" },
  { key: "backend",   label: "Backend & APIs" },
  { key: "frontend",  label: "Frontend" },
  { key: "databases", label: "Databases" },
  { key: "aiml",      label: "AI / ML" },
  { key: "other",     label: "Tools & OS" },
];

const LEVEL_LABEL: Record<string, string> = {
  strong:       "Primary / Production",
  familiar:     "Comfortable / Built with it",
  learning:     "Currently learning",
  experimented: "Experimented with",
};

export default function TechStack() {
  const [active, setActive] = useState<Category>("devops");
  const items = STACK[active] as { name: string; level: string; icon?: string }[];

  return (
    <section id="stack" className="py-24 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="font-mono text-xs text-[var(--accent)] font-semibold mb-1">
            // ARSENAL &amp; TOOLS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-2">
            Tech I actually use.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl">
            Technologies, frameworks, and cloud services I&apos;ve written real code for and deployed — not just watched tutorials on.
          </p>
        </div>

        {/* 3 Core Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          
          <div className="workbench-card p-5">
            <div className="flex items-center gap-2.5 mb-3 text-[var(--accent)] font-mono text-xs font-bold">
              <Server size={17} />
              <span>KUBERNETES &amp; DEVOPS</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[var(--text)] mb-1">
              Container Orchestration
            </h3>
            <p className="text-[var(--text-muted)] text-xs mb-3 leading-relaxed">
              Multi-replica Kubernetes deployments, self-healing pods, Jenkins automated CI/CD pipelines, and Docker container builds.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {["Docker", "Kubernetes", "Jenkins", "Minikube"].map((t) => (
                <span key={t} className="code-pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="workbench-card p-5">
            <div className="flex items-center gap-2.5 mb-3 text-amber-500 font-mono text-xs font-bold">
              <Cpu size={17} />
              <span>TERRAFORM &amp; SECURITY</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[var(--text)] mb-1">
              Infrastructure as Code
            </h3>
            <p className="text-[var(--text-muted)] text-xs mb-3 leading-relaxed">
              Declarative HCL configurations for 100% reconstructable environments, HashiCorp Vault secrets, and ELK logging.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {["Terraform", "Vault", "Prometheus", "ELK"].map((t) => (
                <span key={t} className="code-pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="workbench-card p-5">
            <div className="flex items-center gap-2.5 mb-3 text-sky-500 font-mono text-xs font-bold">
              <Cloud size={17} />
              <span>AWS &amp; FULL STACK</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[var(--text)] mb-1">
              Cloud &amp; Distributed Backend
            </h3>
            <p className="text-[var(--text-muted)] text-xs mb-3 leading-relaxed">
              Multi-tier AWS architectures (EC2, S3, RDS, CloudFront CDN) combined with Node.js, Express, MongoDB, and Python.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {["AWS EC2", "S3", "RDS MySQL", "Node.js"].map((t) => (
                <span key={t} className="code-pill">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-md transition-all ${
                active === cat.key
                  ? "bg-[var(--accent)] text-white font-bold shadow-xs"
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)] font-medium"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Selected Category Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div key={item.name} className="workbench-card p-3.5 flex flex-col justify-between">
              <div className="font-mono text-xs font-bold text-[var(--text)] mb-1 flex items-center gap-1.5">
                {item.icon && <span>{item.icon}</span>}
                <span>{item.name}</span>
              </div>
              <div className="font-mono text-[10px] text-[var(--text-muted)]">
                {LEVEL_LABEL[item.level] || item.level}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
