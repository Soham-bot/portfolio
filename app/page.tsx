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
  { at: 10,  text: "✓ Loading identity module"     },
  { at: 25,  text: "✓ Mounting project registry"   },
  { at: 40,  text: "✓ Initializing DevOps stack"   },
  { at: 55,  text: "✓ Connecting to GitHub"         },
  { at: 70,  text: "✓ Loading creative assets"      },
  { at: 85,  text: "✓ Spinning up terminal"         },
  { at: 100, text: "✓ SYSTEM ONLINE"                },
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
          setTimeout(() => setLoaded(true), 300);
          return 100;
        }
        return Math.min(p + Math.random() * 15 + 5, 100);
      });
    }, 80);
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
        className="fixed inset-0 flex flex-col items-center justify-center z-50 font-mono"
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        <div className="w-full max-w-md px-8">
          {/* Header */}
          <div className="mb-6">
            <div style={{ color: "var(--accent)" }} className="text-xs mb-1">
              SOHAM-OS v2026
            </div>
            <div style={{ color: "var(--text-muted)" }} className="text-xs">
              Initializing portfolio system...
            </div>
          </div>

          {/* Step log */}
          <div className="space-y-1.5 text-xs mb-8">
            {BOOT_STEPS.map((step) =>
              progress >= step.at ? (
                <div key={step.text} style={{ color: "var(--success)" }}>
                  {step.text}
                </div>
              ) : null
            )}
          </div>

          {/* Progress bar */}
          <div
            className="h-px w-full relative overflow-hidden"
            style={{ backgroundColor: "var(--border)" }}
          >
            <div
              className="h-full transition-all duration-75"
              style={{
                width: `${Math.min(progress, 100)}%`,
                backgroundColor: "var(--accent)",
              }}
            />
          </div>
          <div
            className="text-[10px] mt-2 text-right"
            style={{ color: "var(--text-subtle)" }}
          >
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
