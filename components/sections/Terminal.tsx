"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2 } from "lucide-react";

type OutputLine = { type: "input" | "output" | "error" | "success" | "system"; text: string };

const COMMANDS: Record<string, () => string | string[]> = {
  help: () => ["","  SOHAM-OS v2026 — Available Commands:","  ─────────────────────────────────────","  about          → Who is Soham?","  projects       → List major projects","  stack          → Tech stack overview","  github         → GitHub profile","  linkedin       → LinkedIn profile","  email          → Contact email","  resume         → Resume info","  hackathons     → Event history","  status         → System status","  omnigrid       → OmniGrid project","  sudo hire soham → Try it.","  clear          → Clear terminal",""],
  about: () => ["","  NAME    : Soham Ahirrao","  AGE     : 20","  ROLE    : Software Developer · Cloud · DevOps · Full Stack","  DEGREE  : B.Tech CSE — ITM Skills University, Kharghar","  YEAR    : 3rd Year (Expected grad: 2028)","  LOCATION: Mumbai, Maharashtra, India","","  \"I like taking systems apart, figuring out why they break,","   and building them back better.\"",""],
  projects: () => ["","  TIER S ─────────────────────────────────────","  [01] Project OmniGrid     → DevOps / Infra","       Docker + K8s + Terraform + Jenkins + Vault + ELK","","  [02] MusicNation          → Cloud / AWS","       Flask + EC2 + RDS + S3 + CloudFront","","  TIER A ─────────────────────────────────────","  [03] Distributed File System → Systems Engineering","  [04] Metrics Collection System → Observability","  [05] VR Experience Recommender → Live: https://vr-recommender-36a16.web.app",""],
  stack: () => ["","  DevOps    : Docker, Kubernetes, Terraform, Jenkins","              Prometheus, Grafana, ELK Stack, Vault","  Cloud     : AWS (EC2, S3, RDS, CloudFront, IAM, VPC)","  Languages : Python, JavaScript, HTML/CSS, Dart","  Backend   : Node.js, Express.js, Flask","  Databases : MongoDB, MySQL, PostgreSQL, Firebase","  AI/ML     : KMeans, Linear Regression, Gemini","","  Skill levels based on project evidence.",""],
  github: () => ["","  → https://github.com/Soham-bot","  Repositories: 39 public",""],
  linkedin: () => ["","  → https://www.linkedin.com/in/soham-ahirrao-9024a32b7",""],
  email: () => ["","  sohmaro2006@gmail.com",""],
  resume: () => ["","  → /resume.pdf (Download from Contact section)",""],
  hackathons: () => ["","  ● Mumbai Hacks 2024      → Selected","  ● Smart India Hackathon  → Selected","  ● Avalanche Hackathon    → Participant","  ● Build & Grow AI 2.0   → Participant","  ● DevFest 2025           → Community",""],
  status: () => ["","  [✓] Frontend    RUNNING","  [✓] DevOps Stack DEPLOYED","  [✓] Learning    ALWAYS ON","  [✓] Coffee      ADEQUATE","",`  Build: ${new Date().toISOString()}`,`  Theme: ${typeof window !== "undefined" ? document.documentElement.getAttribute("data-theme") || "dark" : "dark"}`, ""],
  omnigrid: () => ["","  PROJECT OMNIGRID ───────────────────────────","  Python · Docker · Kubernetes · Minikube","  Terraform · Jenkins · Prometheus · Grafana","  ELK Stack · HashiCorp Vault","","  Jenkins → Docker → K8s (3x replicas, self-heal)","  Vault for secrets · Terraform for IaC","  Full environment reconstructable from scratch","","  → https://github.com/Soham-bot/project-omnigrid",""],
  "sudo hire soham": () => ["","  [sudo] password for recruiter: **************","","  Verifying credentials...","  Checking GitHub activity... ✓","  Checking OmniGrid deployment... ✓","  Checking Kubernetes knowledge... ✓","  Checking coffee tolerance... ✓","","  ✅ PERMISSION GRANTED.","  Good decision. Soham is now hired.","  Send offer letter to: sohmaro2006@gmail.com",""],
  ls: () => ["","  ./about  ./projects  ./stack  ./journey  ./contact","  ./github  ./resume  ./field-record  ./lab",""],
  pwd: () => ["  /home/soham/portfolio"],
  whoami: () => ["  soham-ahirrao — software developer, systems builder, 20y/o"],
  date: () => [`  ${new Date().toLocaleString()}`],
  clear: () => "__CLEAR__",
};

export default function SohamTerminal() {
  const [history, setHistory] = useState<OutputLine[]>([
    { type: "system", text: "SOHAM-OS v2026 — Interactive Terminal" },
    { type: "system", text: 'Type "help" for available commands.' },
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
    if (cmd === "clear") { setHistory([{ type: "system", text: "Terminal cleared." }]); return; }
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
      newLines.push({ type: "output", text: '  Try "help".' });
    }
    setHistory((prev) => [...prev, ...newLines]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { runCommand(input); setInput(""); }
    else if (e.key === "ArrowUp") { const idx = Math.min(histIdx + 1, cmdHistory.length - 1); setHistIdx(idx); setInput(cmdHistory[idx] || ""); }
    else if (e.key === "ArrowDown") { const idx = Math.max(histIdx - 1, -1); setHistIdx(idx); setInput(idx === -1 ? "" : cmdHistory[idx] || ""); }
  };

  return (
    <section className="py-32 bg-[var(--bg-alt)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-[var(--accent)]/60">08</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">Soham OS Terminal</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="border border-[var(--border)] hover:border-[var(--accent)]/20 transition-colors" role="region" aria-label="Interactive terminal">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2">
              <TerminalIcon size={12} className="text-[var(--text-muted)]" />
              <span className="font-mono text-[10px] text-[var(--text-muted)]">soham@portfolio:~</span>
            </div>
            <button onClick={() => setMinimized(!minimized)}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label={minimized ? "Expand" : "Minimize"}>
              {minimized ? <Maximize2 size={12} /> : <Minimize2 size={12} />}
            </button>
          </div>

          {!minimized && (
            <div
              className="p-4 min-h-[280px] max-h-[400px] overflow-y-auto font-mono text-xs cursor-text bg-[var(--bg)]"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className={`leading-5 whitespace-pre-wrap ${
                  line.type === "input"   ? "text-[var(--accent)]"   :
                  line.type === "error"   ? "text-[var(--error)]"    :
                  line.type === "success" ? "text-[var(--success)]"  :
                  line.type === "system"  ? "text-[var(--text-muted)]" :
                  "text-[var(--text-dim)]"
                }`}>{line.text}</div>
              ))}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[var(--accent)] flex-shrink-0">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 bg-transparent text-[var(--accent)] outline-none caret-[var(--accent)] font-mono text-xs"
                  placeholder="type a command..."
                  aria-label="Terminal input"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div ref={bottomRef} />
            </div>
          )}
        </div>
        <p className="font-mono text-[10px] text-[var(--text-ghost)] mt-3 text-center">
          Try: help · about · projects · omnigrid · sudo hire soham
        </p>
      </div>
    </section>
  );
}
