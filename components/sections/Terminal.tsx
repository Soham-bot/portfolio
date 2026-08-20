"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, Activity, Server } from "lucide-react";
import { PERSONAL } from "../../lib/data";

type OutputLine = { type: "input" | "output" | "error" | "success" | "system"; text: string };

const COMMANDS: Record<string, () => string | string[]> = {
  help: () => [
    "",
    "  💻 SOHAM SYSTEMS CLI // Available Diagnostics Commands:",
    "  ─────────────────────────────────────────────────────────────",
    "  about          → Who is Soham? (Engineering Specifications)",
    "  status         → Live cluster & cloud system health",
    "  projects       → Production systems & active codebases",
    "  omnigrid       → Deep dive: Project OmniGrid (Kubernetes & IaC)",
    "  stack          → Technical arsenal & mastered toolchain",
    "  github         → GitHub repository vault (39 public repos)",
    "  linkedin       → Professional LinkedIn network",
    "  email          → Direct engineering contact",
    "  resume         → View & download official resume PDF",
    "  sudo hire soham → Recruiter / Engineering Lead fast-track command",
    "  clear          → Clear console screen",
    "",
  ],
  status: () => [
    "",
    "  📊 REAL-TIME SYSTEMS STATUS:",
    "  ─────────────────────────────────────────────────────────────",
    "  ● Kubernetes Cluster : NOMINAL [3/3 Active Replicas]",
    "  ● Self-Healing Health: ACTIVE (Auto-restart on pod failure)",
    "  ● Terraform IaC      : 100% RECONSTRUCTABLE STATE",
    "  ● AWS Multi-Tier     : EC2 + RDS + S3 + CloudFront CDN CONNECTED",
    "  ● Vault Secrets      : ZERO LEAKAGE ENFORCED",
    "  ● Central Logging    : ELK Stack Aggregated & Indexed",
    "",
  ],
  specs: () => [
    "",
    "  🔧 TECHNICAL TOOLCHAIN:",
    "  DevOps   : Docker, Kubernetes, Terraform, Jenkins, Prometheus, Grafana, Vault, ELK",
    "  Cloud    : AWS (EC2, S3, RDS, CloudFront, IAM, VPC, CloudWatch)",
    "  Languages: Python, JavaScript, TypeScript, HTML/CSS, Dart, SQL",
    "  Backend  : Node.js, Express.js, Flask, REST APIs",
    "  Databases: MongoDB, MySQL, PostgreSQL, Firebase",
    "",
  ],
  about: () => [
    "",
    "  NAME        : Soham Ahirrao (20 y/o)",
    "  BASE        : Mumbai (022), Maharashtra",
    "  ROLE        : Cloud & DevOps Engineer · Systems Architect",
    "  COLLEGE     : B.Tech CSE @ ITM Skills University, Kharghar (2024–2028)",
    "  PHILOSOPHY  : Precision architecture, high availability, automated resilience.",
    "",
  ],
  projects: () => [
    "",
    "  ★ SYSTEM 01: Project OmniGrid (Flagship DevOps & K8s Infrastructure)",
    "       3x self-healing K8s replicas, Terraform IaC, Vault secrets, ELK observability.",
    "",
    "  ★ SYSTEM 02: MusicNation (AWS Multi-Tier Cloud Architecture)",
    "       EC2 + RDS MySQL + S3 Media Storage + CloudFront CDN + Flask backend.",
    "",
    "  ★ SYSTEM 03: HealthLab (MERN Pathology Manager)",
    "       Node.js, Express REST API, MongoDB NoSQL, React UI.",
    "",
    "  ★ SYSTEM 04: VR Recommender (BST Engine & Firebase)",
    "       Binary Search Tree O(log n) matching, live on Firebase.",
    "",
  ],
  stack: () => [
    "",
    "  🛠️ THE TECHNICAL ARSENAL:",
    "  DevOps & Infra : Docker, Kubernetes, Terraform, Jenkins, Vault, Prometheus, Grafana, ELK",
    "  Cloud Systems  : AWS (EC2, S3, RDS, CloudFront, IAM, VPC)",
    "  Languages      : Python, JavaScript, TypeScript, SQL, Dart",
    "  Backend Systems: Node.js, Express.js, Flask, RESTful APIs",
    "  Data Stores    : MongoDB, MySQL, PostgreSQL, Firebase",
    "",
  ],
  github: () => ["", "  → https://github.com/Soham-bot (39 public repositories)", ""],
  linkedin: () => ["", "  → https://www.linkedin.com/in/soham-ahirrao-9024a32b7", ""],
  email: () => ["", "  → sohamrao2006@gmail.com", ""],
  resume: () => ["", "  → View & download online: /resume", ""],
  hackathons: () => [
    "",
    "  ● Smart India Hackathon (SIH) → SELECTED (National Level)",
    "  ● Mumbai Tech Week @ IIT Bombay → 7 Days On-Site AI Operations with Babblebots",
    "  ● Google DevFest Mumbai → Volunteer",
    "  ● Cloud Community Days → Volunteer",
    "",
  ],
  omnigrid: () => [
    "",
    "  🔥 PROJECT OMNIGRID (FLAGSHIP INFRASTRUCTURE PLATFORM):",
    "  ─────────────────────────────────────────────────────────────",
    "  Stack     : Python, Docker, Kubernetes, Terraform, Jenkins, Prometheus, Grafana, ELK, Vault",
    "  Highlights: Zero-downtime rolling updates, self-healing pods, full IaC reconstructability.",
    "  Repo      : https://github.com/Soham-bot/project-omnigrid",
    "",
  ],
  "sudo hire soham": () => [
    "",
    "  [sudo] authenticating engineering evaluation... **************",
    "",
    "  ✓ Verified 39 public GitHub repositories",
    "  ✓ Verified Kubernetes & Terraform IaC competence",
    "  ✓ Verified AWS multi-tier cloud architectures",
    "  ✓ Cultural Fit: High Agency, Systems Thinker, Fast Learner",
    "",
    "  ✅ ACCESS GRANTED. Candidate verified.",
    "  Direct contact: sohamrao2006@gmail.com | 9137877036",
    "",
  ],
  ls: () => ["", "  about/   superpowers/   systems/   evolution/   track-record/   resume/", ""],
  pwd: () => ["  /systems/soham/console"],
  whoami: () => ["  soham-ahirrao — cloud, devops & systems engineer (20y/o)"],
  date: () => [`  ${new Date().toLocaleString()}`],
  clear: () => "__CLEAR__",
};

export default function SohamTerminal() {
  const [history, setHistory] = useState<OutputLine[]>([
    { type: "system", text: "💻 SOHAM SYSTEMS DIAGNOSTIC CONSOLE v2026" },
    { type: "system", text: 'Type "help", "status", or "projects" to inspect capabilities.' },
    { type: "system", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [minimized, setMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmdHistory((prev) => [cmd, ...prev]);
    setHistIdx(-1);
    const newLines: OutputLine[] = [{ type: "input", text: `$ ${cmd}` }];
    if (cmd === "clear") { setHistory([{ type: "system", text: "Console cleared." }]); return; }
    const handler = cmd.startsWith("sudo hire soham") ? COMMANDS["sudo hire soham"] : COMMANDS[cmd];
    if (handler) {
      const result = handler();
      if (Array.isArray(result)) {
        result.forEach((l) => newLines.push({ type: cmd.startsWith("sudo") ? "success" : "output", text: l }));
      } else {
        newLines.push({ type: "output", text: result });
      }
    } else {
      newLines.push({ type: "error", text: `  command not found: ${cmd}` });
      newLines.push({ type: "output", text: '  Try typing "help" or "status".' });
    }
    setHistory((prev) => [...prev, ...newLines]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { runCommand(input); setInput(""); }
    else if (e.key === "ArrowUp") { const idx = Math.min(histIdx + 1, cmdHistory.length - 1); setHistIdx(idx); setInput(cmdHistory[idx] || ""); }
    else if (e.key === "ArrowDown") { const idx = Math.max(histIdx - 1, -1); setHistIdx(idx); setInput(idx === -1 ? "" : cmdHistory[idx] || ""); }
  };

  return (
    <section id="terminal" className="py-28 bg-[var(--bg-alt)] relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-[var(--accent)] font-bold">06</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">Systems Console // Diagnostic CLI</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="border border-[var(--border)] hover:border-[var(--accent)] transition-all rounded-xs shadow-md overflow-hidden bg-[var(--surface)] sys-card" role="region" aria-label="Interactive systems console">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-alt)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex items-center gap-2">
              <TerminalIcon size={13} className="text-[var(--accent)]" />
              <span className="font-mono text-xs text-[var(--text)] font-bold">soham@systems-node:~ (Systems Console)</span>
            </div>
            <button onClick={() => setMinimized(!minimized)}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-1"
              aria-label={minimized ? "Expand" : "Minimize"}>
              {minimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
            </button>
          </div>

          {!minimized && (
            <div
              className="p-5 min-h-[300px] max-h-[420px] overflow-y-auto font-mono text-xs cursor-text bg-[var(--surface)]"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className={`leading-5 whitespace-pre-wrap ${
                  line.type === "input"   ? "text-[var(--accent)] font-bold"   :
                  line.type === "error"   ? "text-[var(--error)] font-semibold"    :
                  line.type === "success" ? "text-[var(--success)] font-bold"  :
                  line.type === "system"  ? "text-[var(--text-muted)] font-medium" :
                  "text-[var(--text-dim)]"
                }`}>{line.text}</div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[var(--accent)] flex-shrink-0 font-extrabold">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 bg-transparent text-[var(--text)] outline-none caret-[var(--accent)] font-mono text-xs placeholder:text-[var(--text-subtle)] font-medium"
                  placeholder="try: help, status, omnigrid, sudo hire soham..."
                  aria-label="Terminal input"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div ref={bottomRef} />
            </div>
          )}
        </div>
        <p className="font-mono text-[11px] text-[var(--text-muted)] mt-3 text-center font-medium">
          Available commands: <span className="text-[var(--accent)] font-bold">status</span> · <span className="text-[var(--accent)] font-bold">omnigrid</span> · <span className="text-[var(--accent)] font-bold">stack</span> · <span className="text-[var(--accent)] font-bold">sudo hire soham</span>
        </p>
      </div>
    </section>
  );
}
