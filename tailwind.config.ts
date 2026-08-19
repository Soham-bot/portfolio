import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // All mapped to CSS vars — auto-switch on theme change
        bg:              "var(--bg)",
        "bg-alt":        "var(--bg-alt)",
        surface:         "var(--surface)",
        "surface-alt":   "var(--surface-alt)",
        border:          "var(--border)",
        "border-hover":  "var(--border-hover)",
        accent:          "var(--accent)",
        "accent-dim":    "var(--accent-dim)",
        "text-base":     "var(--text)",
        "text-dim":      "var(--text-dim)",
        "text-muted":    "var(--text-muted)",
        "text-subtle":   "var(--text-subtle)",
        "text-ghost":    "var(--text-ghost)",
        success:         "var(--success)",
        warning:         "var(--warning)",
        error:           "var(--error)",
      },
      fontFamily: {
        mono:    ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
