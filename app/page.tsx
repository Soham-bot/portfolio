"use client";
import { useEffect, useState } from "react";
import Cursor from "../components/ui/Cursor";
import Nav from "../components/ui/Nav";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import Journey from "../components/sections/Journey";
import Projects from "../components/sections/Projects";
import Lab from "../components/sections/Lab";
import FieldRecord from "../components/sections/FieldRecord";
import Contact from "../components/sections/Contact";
import SohamTerminal from "../components/sections/Terminal";
import Footer from "../components/sections/Footer";
import GitHubSection from "../components/sections/GitHub";
import DevMode from "../components/ui/DevMode";

const BOOT_STEPS = [
  { at: 15,  text: "✓ Initializing high-performance telemetry engine" },
  { at: 35,  text: "✓ Mounting Kubernetes & Terraform IaC configurations" },
  { at: 55,  text: "✓ Connecting AWS multi-tier cloud architectures" },
  { at: 75,  text: "✓ Loading 39 public GitHub codebases" },
  { at: 90,  text: "✓ Telemetry diagnostics online" },
  { at: 100, text: "✓ ALL SYSTEMS NOMINAL // ZERO DOWNTIME" },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Boot sequence
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoaded(true), 250);
          return 100;
        }
        return Math.min(p + Math.random() * 20 + 8, 100);
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  // Ctrl+Shift+D → jump to terminal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        document.querySelector(".terminal-section")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!loaded) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center z-50 font-mono bg-[var(--bg)] text-[var(--text)]"
      >
        <div className="w-full max-w-md px-8">
          {/* Header */}
          <div className="mb-6">
            <div className="text-xs mb-1 font-black tracking-wider text-[var(--accent)] uppercase font-mono">
              ⚡ SOHAM AHIRRAO // SYSTEMS TELEMETRY
            </div>
            <div className="text-xs font-semibold text-[var(--text-muted)]">
              Calibrating cloud &amp; infrastructure telemetry...
            </div>
          </div>

          {/* Step log */}
          <div className="space-y-1.5 text-xs mb-8">
            {BOOT_STEPS.map((step) =>
              progress >= step.at ? (
                <div key={step.text} className="text-[var(--success)] font-medium">
                  {step.text}
                </div>
              ) : null
            )}
          </div>

          {/* Progress bar */}
          <div className="h-1.5 w-full relative overflow-hidden rounded-full bg-[var(--surface-alt)] border border-[var(--border)]">
            <div
              className="h-full transition-all duration-75 rounded-full bg-[var(--accent)]"
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            />
          </div>
          <div className="text-[11px] mt-2 text-right font-medium text-[var(--text-muted)]">
            {Math.min(Math.floor(progress), 100)}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <main style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Journey />
      <Lab />
      <FieldRecord />
      <div className="terminal-section">
        <SohamTerminal />
      </div>
      <GitHubSection />
      <Contact />
      <Footer />
      <DevMode />
    </main>
  );
}
