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

  const [mobileOpen, setMobileOpen] = useState(false);

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
    <header className="site-header border-b border-[color:var(--border)] py-4 px-4 sm:px-6">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="font-bold text-lg transform-gpu transition-transform duration-150 hover:scale-105 focus:outline-none cursor-pointer"
            aria-label="Go to homepage"
          >
            AlgoRythmics
          </button>
        </div>

        {/* desktop nav centered */}
        <nav className="hidden md:flex items-center gap-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        </nav>

        <div className="flex items-center gap-3">
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

          {/* mobile menu button */}
          <button
            className="md:hidden ml-2 p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile nav panel */}
      {mobileOpen && (
        <div
          className="md:hidden bg-[color:var(--background)] border-t"
          style={{ borderTopColor: "var(--border)" }}
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            {[
              { label: "Algorithms", href: "/algorithms" },
              { label: "Profil", href: "/profil" },
              { label: "Courses", href: "/courses" },
            ].map((item, idx) => (
              <button
                key={item.href}
                onClick={() => {
                  setMobileOpen(false);
                  router.push(item.href);
                }}
                className="text-left px-2 py-2 transform-gpu opacity-0 translate-y-1 animate-mobile-item"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
