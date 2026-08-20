"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, ExternalLink, Activity, Server, Cloud, Cpu, ShieldCheck, Terminal, MapPin, Sparkles } from "lucide-react";
import { PERSONAL } from "../../lib/data";

const CURRENT_ACTIVITY = [
  "orchestrating multi-replica Kubernetes clusters with self-healing",
  "writing modular Terraform HCL configurations",
  "tuning AWS multi-tier architectures (EC2 + RDS + S3 + CloudFront)",
  "testing HashiCorp Vault secrets injection pipelines",
  "aggregating microservices logs with ELK Stack",
];

export default function Hero() {
  const [activityIdx, setActivityIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for current dev focus
  useEffect(() => {
    const text = CURRENT_ACTIVITY[activityIdx];
    const speed = isDeleting ? 20 : 45;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(text.slice(0, charIdx + 1));
        if (charIdx + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        } else setCharIdx(charIdx + 1);
      } else {
        setDisplayed(text.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setActivityIdx((activityIdx + 1) % CURRENT_ACTIVITY.length);
          setCharIdx(0);
        } else setCharIdx(charIdx - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, activityIdx]);

  return (
    <section id="hero" className="relative pt-36 pb-20 overflow-hidden bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
          
          {/* Left Column: Real Bio, Conviction & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Location & Status Pill */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] bg-[var(--surface-alt)] border border-[var(--border)] px-3 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              <span>Mumbai, India (022)</span>
              <span className="text-[var(--text-subtle)]">·</span>
              <span className="text-[var(--text-dim)]">3rd Year B.Tech CSE (2024–2028)</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[var(--text)] tracking-tight leading-tight mb-2">
                Hey, I&apos;m Soham.
              </h1>
              <p className="font-mono text-base sm:text-lg text-[var(--accent)] font-semibold">
                DevOps &amp; Cloud Systems Engineer · Full-Stack Builder
              </p>
            </div>

            {/* Authentic First-Person Bio */}
            <p className="text-[var(--text-dim)] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I&apos;m a 20-year-old developer from Mumbai who likes understanding how software runs under the hood. 
              I spend most of my time building resilient cloud architectures, orchestrating self-healing Kubernetes clusters, writing Terraform IaC, and shipping real full-stack web apps.
            </p>

            {/* Currently Doing Line */}
            <div className="font-mono text-xs sm:text-sm bg-[var(--surface)] border border-[var(--border)] p-3.5 rounded-md text-[var(--text-muted)] flex items-start gap-2.5">
              <span className="text-[var(--accent)] font-bold flex-shrink-0 mt-0.5">❯</span>
              <div>
                <span className="text-[var(--text-subtle)] font-medium">currently working on: </span>
                <span className="text-[var(--text)] font-semibold">{displayed}</span>
                <span className="animate-blink text-[var(--accent)] font-bold">|</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="font-mono text-xs sm:text-sm bg-[var(--text)] text-[var(--bg)] px-5 py-3 font-bold hover:opacity-90 transition-all flex items-center gap-2 rounded-md shadow-xs"
              >
                Stuff I&apos;ve built <ArrowDown size={14} />
              </a>
              <a
                href="/resume"
                className="font-mono text-xs sm:text-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] px-5 py-3 font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-2 rounded-md shadow-xs"
              >
                Resume (PDF) <ExternalLink size={13} />
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs sm:text-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] px-4 py-3 font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-2 rounded-md shadow-xs"
              >
                <Github size={15} /> GitHub (39 repos)
              </a>
            </div>
          </div>

          {/* Right Column: Real Dev Card & Proof Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Personal Photo / Dev Profile Card */}
            <div className="workbench-card p-6 relative">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[var(--border)]">
                {/* Photo frame: Soham can drop his real headshot image directly into /public/images/soham_photo.jpg */}
                <div className="w-16 h-16 rounded-full bg-[var(--surface-alt)] border-2 border-[var(--border)] flex items-center justify-center text-2xl font-display font-extrabold text-[var(--accent)] flex-shrink-0 shadow-inner">
                  SA
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-[var(--text)] leading-tight">
                    {PERSONAL.name}
                  </div>
                  <div className="font-mono text-xs text-[var(--text-muted)] mt-0.5">
                    @{PERSONAL.handle} · {PERSONAL.age} y/o
                  </div>
                  <div className="font-mono text-[11px] text-[var(--accent)] font-semibold mt-0.5">
                    ITM Skills University (B.Tech CSE &apos;28)
                  </div>
                </div>
              </div>

              {/* Dev Quick Proof Points */}
              <div className="space-y-2.5 font-mono text-xs text-[var(--text-dim)]">
                <div className="flex items-center justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">Public Repos</span>
                  <span className="font-bold text-[var(--text)]">39 Shipped</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">SIH Hackathon</span>
                  <span className="font-bold text-[var(--success)]">Selected (National)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-muted)]">On-Site Ops</span>
                  <span className="font-bold text-[var(--text)]">7 Days @ IIT Bombay</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[var(--text-muted)]">Primary Focus</span>
                  <span className="font-bold text-[var(--accent)]">K8s · AWS · Terraform</span>
                </div>
              </div>
            </div>

            {/* Quick Superpower Cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Server size={15} className="text-[var(--accent)]" />, title: "Kubernetes & DevOps", note: "3x pods, self-healing, Jenkins" },
                { icon: <Cloud size={15} className="text-sky-500" />, title: "AWS Multi-Tier", note: "EC2, S3, RDS, CloudFront" },
                { icon: <Cpu size={15} className="text-amber-500" />, title: "Terraform IaC", note: "100% reconstructable state" },
                { icon: <ShieldCheck size={15} className="text-emerald-500" />, title: "Full Stack (MERN)", note: "Node, Express, Mongo, React" },
              ].map((item) => (
                <div key={item.title} className="workbench-card p-3.5">
                  <div className="flex items-center gap-1.5 mb-1 text-[var(--text)] font-mono text-xs font-bold">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--text-muted)] leading-tight">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[var(--border)]">
          {[
            { value: "39+", label: "Public Repositories", desc: "Open-source builds on GitHub" },
            { value: "3x",  label: "K8s Active Replicas", desc: "Self-healing microservices" },
            { value: "SIH", label: "Smart India Hackathon", desc: "Selected in national competition" },
            { value: "7d",  label: "On-Site @ IIT Bombay", desc: "AI ops with Babblebots at MTW" },
          ].map((stat) => (
            <div key={stat.label} className="workbench-card p-4">
              <div className="font-display font-black text-2xl sm:text-3xl text-[var(--text)] mb-0.5">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold text-[var(--text)] mb-0.5">
                {stat.label}
              </div>
              <div className="font-mono text-[11px] text-[var(--text-muted)]">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
