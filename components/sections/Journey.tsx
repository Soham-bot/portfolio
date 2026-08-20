"use client";
import { useState, useEffect } from "react";
import { 
  JOURNEY, 
  JourneyItem 
} from "../../lib/data";
import { 
  GitCommit, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Cloud, 
  Server, 
  Zap,
  Play,
  Pause,
  Activity
} from "lucide-react";

const CATEGORY_FILTERS = [
  "All",
  "Foundation",
  "Full Stack",
  "Cloud",
  "AI/ML",
  "DevOps",
  "Current",
] as const;

export default function Journey() {
  const [activeIdx, setActiveIdx] = useState<number>(JOURNEY.length - 1);
  const [viewMode, setViewMode] = useState<"pipeline" | "grid">("pipeline");
  const [filter, setFilter] = useState<string>("All");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeItem: JourneyItem = JOURNEY[activeIdx] || JOURNEY[0];

  const filteredItems = filter === "All"
    ? JOURNEY
    : JOURNEY.filter((item) => item.category === filter);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % JOURNEY.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % JOURNEY.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + JOURNEY.length) % JOURNEY.length);
    setIsPlaying(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Foundation":
        return <Terminal size={14} className="text-amber-500" />;
      case "Full Stack":
        return <Layers size={14} className="text-indigo-500" />;
      case "Cloud":
        return <Cloud size={14} className="text-sky-500" />;
      case "AI/ML":
        return <Cpu size={14} className="text-emerald-500" />;
      case "DevOps":
        return <Server size={14} className="text-[var(--accent)]" />;
      case "Current":
        return <Zap size={14} className="text-rose-500" />;
      default:
        return <GitCommit size={14} className="text-[var(--accent)]" />;
    }
  };

  return (
    <section id="journey" className="py-28 relative bg-[var(--bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-[var(--accent)] font-bold">04</span>
          <div className="w-8 h-px bg-[var(--accent)]/40" />
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">System Evolution // Progression Roadmap</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Title & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--text)] mb-3">
              Engineering <span className="gradient-text">Trajectory</span>
            </h2>
            <p className="text-[var(--text-dim)] text-base sm:text-lg max-w-2xl leading-relaxed">
              <span className="text-[var(--accent)] font-bold">//</span> A methodical progression from core computer science to distributed systems, AWS cloud platforms, and Kubernetes orchestration.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1.5 p-1 border border-[var(--border)] bg-[var(--surface)] shadow-xs rounded-xs self-start lg:self-auto">
            <button
              onClick={() => setViewMode("pipeline")}
              className={`font-mono text-xs px-3.5 py-1.5 transition-all flex items-center gap-1.5 rounded-xs ${
                viewMode === "pipeline"
                  ? "bg-[var(--accent)] text-white font-bold shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] font-semibold"
              }`}
            >
              <Activity size={13} /> Interactive Timeline
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`font-mono text-xs px-3.5 py-1.5 transition-all flex items-center gap-1.5 rounded-xs ${
                viewMode === "grid"
                  ? "bg-[var(--accent)] text-white font-bold shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] font-semibold"
              }`}
            >
              <Layers size={13} /> All Milestones ({JOURNEY.length})
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            MODE 1: INTERACTIVE TIMELINE FLOW
        ═══════════════════════════════════════════════════════ */}
        {viewMode === "pipeline" && (
          <div className="space-y-8">
            {/* Pipeline Stage Bar */}
            <div className="border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6 shadow-xs overflow-x-auto rounded-xs sys-card">
              <div className="flex items-center justify-between min-w-[780px] relative px-2">
                {/* Connecting Line */}
                <div className="absolute left-6 right-6 top-[18px] h-0.5 bg-[var(--border)] -z-0" />
                <div 
                  className="absolute left-6 top-[18px] h-0.5 bg-[var(--accent)] transition-all duration-500 -z-0"
                  style={{
                    width: `${(activeIdx / (JOURNEY.length - 1)) * 100}%`,
                    maxWidth: "calc(100% - 48px)"
                  }}
                />

                {/* Nodes */}
                {JOURNEY.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  const isPast = idx < activeIdx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveIdx(idx);
                        setIsPlaying(false);
                      }}
                      className="group flex flex-col items-center relative z-10 focus:outline-hidden"
                      aria-label={`Jump to ${item.phase} (${item.year})`}
                    >
                      {/* Node circle */}
                      <div
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-md scale-110 ring-4 ring-[var(--accent-dim)]"
                            : isPast
                            ? "bg-[var(--surface)] border-[var(--accent)] text-[var(--accent)]"
                            : "bg-[var(--surface-alt)] border-[var(--border)] text-[var(--text-muted)] group-hover:border-[var(--border-hover)]"
                        }`}
                      >
                        {isActive ? (
                          <span className="font-mono text-xs font-black">{idx + 1}</span>
                        ) : isPast ? (
                          <CheckCircle2 size={15} />
                        ) : (
                          <span className="font-mono text-[11px] font-bold">{idx + 1}</span>
                        )}
                      </div>

                      {/* Node labels */}
                      <div className="mt-2.5 text-center">
                        <div
                          className={`font-mono text-[11px] font-bold transition-colors truncate max-w-[85px] ${
                            isActive
                              ? "text-[var(--accent)]"
                              : "text-[var(--text)] group-hover:text-[var(--accent)]"
                          }`}
                        >
                          {item.phase}
                        </div>
                        <div className="font-mono text-[10px] text-[var(--text-muted)]">
                          {item.year}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Controller Bar */}
              <div className="flex items-center justify-between border-t border-[var(--border)] mt-6 pt-4 min-w-[780px]">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`font-mono text-xs border px-3.5 py-1.5 flex items-center gap-1.5 transition-all rounded-xs shadow-2xs ${
                      isPlaying
                        ? "border-[var(--success)] text-[var(--success)] bg-emerald-500/10 font-bold"
                        : "border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text)] hover:border-[var(--accent)] font-semibold"
                    }`}
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    {isPlaying ? "Simulating..." : "▶ Auto-Simulate Trajectory"}
                  </button>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    Milestone <strong className="text-[var(--text)]">{activeIdx + 1}</strong> of {JOURNEY.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={activeIdx === 0}
                    className="font-mono text-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-dim)] px-3 py-1.5 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 shadow-2xs rounded-xs font-semibold"
                  >
                    <ArrowLeft size={12} /> Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={activeIdx === JOURNEY.length - 1}
                    className="font-mono text-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-dim)] px-3 py-1.5 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 shadow-2xs rounded-xs font-semibold"
                  >
                    Next <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Stage Inspector Feature Card */}
            <div className="border border-[var(--border)] bg-[var(--surface)] shadow-md overflow-hidden transition-all duration-300 rounded-xs sys-card">
              {/* Card Header Bar */}
              <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-[var(--border)] bg-[var(--surface-alt)]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    <span className="font-mono text-xs font-black text-[var(--text)]">
                      MILESTONE_0{activeIdx + 1} // {activeItem.phase.toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden sm:inline-block font-mono text-xs text-[var(--text-muted)]">|</span>
                  <span className="hidden sm:flex items-center gap-1 font-mono text-xs text-[var(--text-dim)] font-medium">
                    {getCategoryIcon(activeItem.category)}
                    {activeItem.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 border border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)] rounded-2xs">
                    {activeItem.year}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 border rounded-2xs font-extrabold ${
                      activeItem.status === "Active"
                        ? "border-[var(--success)] text-[var(--success)] bg-emerald-500/10"
                        : activeItem.status === "Deployed"
                        ? "border-sky-500/40 text-sky-600 dark:text-sky-400 bg-sky-500/10"
                        : "border-[var(--border)] text-[var(--text-muted)] bg-[var(--surface)]"
                    }`}
                  >
                    ● {activeItem.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Card Content Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Narrative & Breakthrough (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[var(--text)] mb-3 leading-snug">
                      {activeItem.title}
                    </h3>
                    <p className="text-[var(--text-dim)] text-base sm:text-lg leading-relaxed font-normal">
                      {activeItem.event}
                    </p>
                  </div>

                  <p className="text-[var(--text-muted)] text-sm leading-relaxed border-l-2 border-[var(--accent)] pl-4 bg-[var(--surface-alt)] py-2.5 rounded-r-xs">
                    {activeItem.details}
                  </p>

                  {/* Key Breakthrough Callout */}
                  <div className="border border-[var(--accent)]/40 bg-[var(--accent-dim)] p-4 rounded-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={14} className="text-[var(--accent)]" />
                      <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                        KEY BREAKTHROUGH &amp; MILESTONE
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[var(--text)]">
                      {activeItem.breakthrough}
                    </p>
                  </div>
                </div>

                {/* Right Column: Tech Stack & System Context (5 cols) */}
                <div className="lg:col-span-5 space-y-5 lg:border-l lg:border-[var(--border)] lg:pl-8">
                  {/* Tech Stack Unlocked */}
                  <div>
                    <div className="font-mono text-xs text-[var(--text-muted)] mb-3 font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Technologies &amp; Concepts Mastered</span>
                      <span className="text-[10px] text-[var(--accent)] font-bold">{activeItem.tech.length} Items</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-dim)] px-2.5 py-1 rounded-2xs flex items-center gap-1.5 font-semibold shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Associated System Link */}
                  {activeItem.projectId && (
                    <div className="border border-[var(--border)] bg-[var(--surface-alt)] p-4 rounded-xs shadow-2xs">
                      <div className="font-mono text-[10px] text-[var(--accent)] mb-1 font-bold">
                        VERIFIED PRODUCTION ARTIFACT
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[var(--text)]">
                          Blueprint Linked in Systems Section
                        </span>
                        <a
                          href="#projects"
                          className="font-mono text-xs text-[var(--accent)] hover:underline flex items-center gap-1 font-bold"
                        >
                          Inspect System <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Stage Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="border border-[var(--border)] bg-[var(--surface-alt)] p-3 rounded-xs">
                      <div className="font-mono text-[10px] text-[var(--text-muted)] mb-0.5 font-bold">PROGRESSION</div>
                      <div className="font-display text-base font-extrabold text-[var(--text)]">
                        {Math.round(((activeIdx + 1) / JOURNEY.length) * 100)}% Trajectory
                      </div>
                    </div>
                    <div className="border border-[var(--border)] bg-[var(--surface-alt)] p-3 rounded-xs">
                      <div className="font-mono text-[10px] text-[var(--text-muted)] mb-0.5 font-bold">DOMAIN</div>
                      <div className="font-display text-base font-extrabold text-[var(--text)]">
                        {activeItem.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            MODE 2: COMPREHENSIVE CHAPTERS GRID
        ═══════════════════════════════════════════════════════ */}
        {viewMode === "grid" && (
          <div className="space-y-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-mono text-xs px-3.5 py-1.5 border transition-all rounded-xs shadow-2xs ${
                    filter === cat
                      ? "border-[var(--accent)] text-white bg-[var(--accent)] font-bold shadow-xs"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text)] font-semibold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)] transition-all shadow-xs hover:shadow-md rounded-xs flex flex-col group sys-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[var(--text-muted)] font-extrabold uppercase tracking-wider">
                      MILESTONE 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs border border-[var(--accent)]/40 bg-[var(--accent-dim)] text-[var(--accent)] px-2 py-0.5 rounded-2xs font-bold">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-black text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text-dim)] text-xs mb-4 leading-relaxed flex-1">
                    {item.event}
                  </p>

                  <div className="border-l-2 border-[var(--accent)] pl-3 py-1 bg-[var(--surface-alt)] text-xs text-[var(--text-dim)] font-medium mb-4 rounded-r-xs">
                    <span className="text-[var(--accent)] font-bold">Breakthrough: </span>
                    {item.breakthrough}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-[var(--border)]">
                    {item.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text-muted)] px-2 py-0.5 rounded-2xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                    {item.tech.length > 4 && (
                      <span className="font-mono text-[10px] text-[var(--text-subtle)] px-1 py-0.5">
                        +{item.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
