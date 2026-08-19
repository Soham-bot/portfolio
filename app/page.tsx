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

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Boot sequence
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoaded(true), 200);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut: Ctrl+Shift+D → scroll to terminal
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
      <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50 font-mono">
        {/* Boot sequence */}
        <div className="w-full max-w-md px-8">
          <div className="text-accent text-xs mb-2">SOHAM-OS v2026</div>
          <div className="text-[#555] text-xs mb-6">Initializing portfolio system...</div>

          <div className="space-y-1 text-xs text-[#444] mb-8">
            {progress > 10 && <div className="text-success">✓ Loading identity module</div>}
            {progress > 25 && <div className="text-success">✓ Mounting project registry</div>}
            {progress > 40 && <div className="text-success">✓ Initializing DevOps stack</div>}
            {progress > 55 && <div className="text-success">✓ Connecting to GitHub</div>}
            {progress > 70 && <div className="text-success">✓ Loading creative assets</div>}
            {progress > 85 && <div className="text-success">✓ Spinning up terminal</div>}
            {progress >= 100 && <div className="text-success">✓ SYSTEM ONLINE</div>}
          </div>

          <div className="h-px w-full bg-[#1a1a1a] relative overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-75"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-[#333] text-[10px] mt-2 text-right">{Math.min(Math.floor(progress), 100)}%</div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#0a0a0a] text-[#e8e8e8]">
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
