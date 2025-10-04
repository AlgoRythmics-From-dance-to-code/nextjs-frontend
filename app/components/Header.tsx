"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  function toggleTheme() {
    try {
      const computed =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--background"
        ) || getComputedStyle(document.body).backgroundColor;
      document.documentElement.style.setProperty(
        "--theme-overlay-color",
        computed.trim() || "#fff"
      );
      document.documentElement.classList.add("theme-fade");
    } catch {}

    const finish = () => {
      setTheme(isDark ? "light" : "dark");
      try {
        setTimeout(
          () => document.documentElement.classList.remove("theme-fade"),
          420
        );
      } catch {}
    };

    finish();
  }

  return (
    <header className="site-header border-b border-[color:var(--border)] py-4 px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <button
          onClick={() => router.push("/")}
          className="font-bold text-lg transform-gpu transition-transform duration-150 hover:scale-105 focus:outline-none cursor-pointer"
          aria-label="Go to homepage"
        >
          AlgoRythmics
        </button>
        <nav className="flex items-center gap-4">
          <button
            onClick={() => router.push("/algorithms")}
            className="group relative overflow-hidden px-1 py-1 text-sm text-[color:var(--foreground)] focus:outline-none cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-150 group-hover:-translate-y-0.5">
              Algorithms
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] bg-[color:var(--foreground)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left w-full" />
          </button>
          <button
            onClick={() => router.push("/profil")}
            className="group relative overflow-hidden px-1 py-1 text-sm text-[color:var(--foreground)] focus:outline-none cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-150 group-hover:-translate-y-0.5">
              Profil
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] bg-[color:var(--foreground)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left w-full" />
          </button>
          <button
            onClick={() => router.push("/courses")}
            className="group relative overflow-hidden px-1 py-1 text-sm text-[color:var(--foreground)] focus:outline-none cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-150 group-hover:-translate-y-0.5">
              Courses
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] bg-[color:var(--foreground)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left w-full" />
          </button>

          <div className="inline-flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={isDark ? "Light mode" : "Dark mode"}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[color:var(--border)] hover:bg-[color:rgba(0,0,0,0.04)] focus:outline-none cursor-pointer"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5 text-[color:var(--foreground)]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-[color:var(--foreground)]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M6.76 4.84l-1.8-1.79L3.17 4.83l1.79 1.79 1.8-1.78zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 2.05l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM17.24 19.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM21 11v2h3v-2h-3zM12 6a6 6 0 100 12 6 6 0 000-12zm0 16h2v-3h-2v3zM4.24 19.16l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
