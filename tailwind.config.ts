import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // No darkMode config needed — we use data-theme attribute + CSS vars
  theme: {
    extend: {
      colors: {
        bg:             "var(--bg)",
        "bg-alt":       "var(--bg-alt)",
        surface:        "var(--surface)",
        "surface-alt":  "var(--surface-alt)",
        border:         "var(--border)",
        "border-hover": "var(--border-hover)",
        accent:         "var(--accent)",
        "accent-dim":   "var(--accent-dim)",
        text:           "var(--text)",
        "text-dim":     "var(--text-dim)",
        muted:          "var(--text-muted)",
        subtle:         "var(--text-subtle)",
        ghost:          "var(--text-ghost)",
        success:        "var(--success)",
        warning:        "var(--warning)",
        error:          "var(--error)",
      },
      fontFamily: {
        mono:    ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
    },
  },
  plugins: [],
};

export default config;
