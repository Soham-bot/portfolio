"use client";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import { PERSONAL } from "../../lib/data";

const ROTATING_STATUS = ["BUILDING", "SHIPPING", "LEARNING", "EXPERIMENTING", "DEBUGGING", "DEPLOYING"];

export default function Hero() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [uptime, setUptime] = useState("00:00:00");
  const startTime = useRef(Date.now());

  useEffect(() => {
    const word = ROTATING_STATUS[statusIndex];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else setCharIdx(charIdx + 1);
      } else {
        setDisplayed(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setStatusIndex((statusIndex + 1) % ROTATING_STATUS.length);
          setCharIdx(0);
        } else setCharIdx(charIdx - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, statusIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);
      const h = Math.floor(elapsed / 3600).toString().padStart(2, "0");
      const m = Math.floor((elapsed % 3600) / 60).toString().padStart(2, "0");
      const s = (elapsed % 60).toString().padStart(2, "0");
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--accent)]/[0.04] rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* System status bar */}
      <div className="absolute top-0 left-0 right-0 pt-20 px-6 flex justify-between items-center opacity-70 dark:opacity-30 pointer-events-none">
        <span className="font-mono text-xs text-[var(--success)] font-medium">● SYSTEM ONLINE</span>
        <span className="font-mono text-xs text-[var(--text-muted)]">UPTIME: {uptime}</span>
        <span className="font-mono text-xs text-[var(--text-muted)]">v2026.08.19</span>
      </div>

      {/* Corner decorators */}
      <div className="absolute top-24 left-6 w-8 h-8 border-t border-l border-[var(--accent)]/30 pointer-events-none" />
      <div className="absolute top-24 right-6 w-8 h-8 border-t border-r border-[var(--accent)]/30 pointer-events-none" />
      <div className="absolute bottom-12 left-6 w-8 h-8 border-b border-l border-[var(--accent)]/30 pointer-events-none" />
      <div className="absolute bottom-12 right-6 w-8 h-8 border-b border-r border-[var(--accent)]/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* System label */}
        <div className="font-mono text-xs text-[var(--text-muted)] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[var(--accent)]/60" />
          <span>SOHAM-BOT // PORTFOLIO_OS // BOOT_SEQUENCE_COMPLETE</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black leading-none mb-6">
          <span className="block text-[clamp(3rem,8vw,7rem)] text-[var(--text)] tracking-tight">
            SOHAM
          </span>
          <span className="block text-[clamp(3rem,8vw,7rem)] gradient-text tracking-tight">
            AHIRRAO
          </span>
        </h1>

        {/* Status line */}
        <div className="font-mono text-base text-[var(--text-dim)] mb-3 flex items-center gap-2">
          <span className="text-[var(--accent)] font-semibold">STATUS:</span>
          <span className="text-[var(--text)]">{displayed}</span>
          <span className="animate-blink text-[var(--accent)]">█</span>
        </div>

        {/* Tagline */}
        <p className="font-mono text-sm text-[var(--text-muted)] mb-10 max-w-2xl leading-relaxed">
          <span className="text-[var(--accent)]">//</span>{" "}
          {PERSONAL.tagline}
          <br />
          <span className="text-[var(--accent)]">//</span>{" "}
          B.Tech CSE · {PERSONAL.university} · {PERSONAL.location}
        </p>

        {/* Identity tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Software Developer", "Cloud", "DevOps", "Full Stack", "AI/ML"].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs border border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--surface)] px-3 py-1 hover:border-[var(--accent)]/60 hover:bg-[var(--accent-dim)] transition-all shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="group font-mono text-sm bg-[var(--accent)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore Systems
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/resume"
            className="font-mono text-sm border border-[var(--accent)]/40 bg-[var(--surface)] text-[var(--accent)] px-6 py-3 hover:bg-[var(--accent-dim)] transition-all flex items-center gap-2 shadow-xs"
          >
            Resume <ExternalLink size={14} />
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dim)] px-6 py-3 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all flex items-center gap-2 shadow-xs"
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
          {[
            { label: "REPOSITORIES", value: "39+" },
            { label: "TECH STACK",   value: "40+" },
            { label: "HACKATHONS",   value: "5+"  },
            { label: "YEARS CODING", value: "2+"  },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[var(--border)] p-3.5 hover:border-[var(--accent)]/30 transition-all bg-[var(--surface)] shadow-xs"
            >
              <div className="font-mono text-2xl font-bold text-[var(--text)] mb-1">{stat.value}</div>
              <div className="font-mono text-[10px] text-[var(--text-muted)] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 dark:opacity-30">
        <span className="font-mono text-[10px] text-[var(--text-muted)] font-medium">SCROLL TO EXPLORE</span>
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent animate-pulse-slow" />
      </div>

      {/* Side social links */}
      <div className="absolute right-6 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col gap-4">
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
          className="text-[var(--text-subtle)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-[var(--text-subtle)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <div className="w-px h-16 bg-[var(--border)] mx-auto" />
      </div>
    </section>
  );
}
