import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Soham Ahirrao // System Online",
  description:
    "Software Developer · Cloud · DevOps · Full Stack. B.Tech CSE @ ITM Skills University. I build systems, break things, then make them better.",
  keywords: [
    "Soham Ahirrao", "Developer", "DevOps", "Cloud",
    "Kubernetes", "AWS", "Full Stack", "Mumbai",
  ],
  authors: [{ name: "Soham Ahirrao" }],
  openGraph: {
    title: "Soham Ahirrao // System Online",
    description: "Software Developer · Cloud · DevOps · Full Stack",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Anti-flash script — runs synchronously before paint.
// Reads localStorage, falls back to system preference, sets data-theme ASAP.
// This MUST be a plain string injected as dangerouslySetInnerHTML.
// ─────────────────────────────────────────────────────────────────────────────
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('soham-theme');
    var theme = stored || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Anti-flash: must be first script, before any CSS can paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
