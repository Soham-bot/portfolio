"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggle: () => {},
  isDark: true,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with dark — the inline script in layout handles the real init
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount, read what the inline script already applied
  useEffect(() => {
    const stored = localStorage.getItem("soham-theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved: Theme = stored ?? (systemDark ? "dark" : "light");
    setTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    // Smooth transition class
    document.documentElement.classList.add("theme-transitioning");
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("soham-theme", next);
    setTheme(next);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 350);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}
