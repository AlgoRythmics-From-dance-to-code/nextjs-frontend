"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Fontos: várjuk meg, amíg a komponens ténylegesen a böngészőben van (hydration után)
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  if (!mounted) return null; // amíg a téma nem inicializálódott, ne rendereljünk

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <header
      className="site-header"
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ fontWeight: 700 }}>AlgoRythmics</div>
        <nav style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => router.push("/algorithms")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Algorithms
          </button>
          <button
            onClick={() => router.push("/profil")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Profil
          </button>
          <button
            onClick={() => router.push("/courses")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Courses
          </button>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <button
              type="button"
              className="theme-button"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? (
                /* moon */
                <svg
                  className="theme-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                /* sun */
                <svg
                  className="theme-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M6.76 4.84l-1.8-1.79L3.17 4.83l1.79 1.79 1.8-1.78zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 2.05l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM17.24 19.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM21 11v2h3v-2h-3zM12 6a6 6 0 100 12 6 6 0 000-12zm0 16h2v-3h-2v3zM4.24 19.16l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
