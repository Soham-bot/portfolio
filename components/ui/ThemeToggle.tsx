"use client";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`
        relative w-[52px] h-[28px] rounded-full border border-[var(--border)]
        bg-[var(--surface)] hover:border-[var(--accent)]
        transition-all duration-300 flex items-center
        focus-visible:outline-2 focus-visible:outline-[var(--accent)]
        group ${className}
      `}
    >
      {/* Track fill */}
      <span
        className={`
          absolute inset-0.5 rounded-full transition-all duration-300
          ${theme === "light" ? "bg-[var(--accent-dim)]" : "bg-transparent"}
        `}
      />

      {/* Sliding knob */}
      <span
        className={`
          absolute w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center
          bg-[var(--accent)] shadow-sm
          ${theme === "dark" ? "left-1" : "left-[26px]"}
        `}
      >
        {theme === "dark" ? (
          <Moon size={10} className="text-[var(--bg)] stroke-[2.5]" />
        ) : (
          <Sun size={10} className="text-[var(--bg)] stroke-[2.5]" />
        )}
      </span>

      {/* Screen-reader label */}
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
}
