"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Service List" },
  { id: "about", label: "About Me" },
  { id: "insights", label: "Insights / Articles" }
];

export default function Nav() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("k3-theme");
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("k3-theme", next);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <img
            src="/logo.svg"
            alt="K3 Capital Solutions"
            className="brand-logo-img"
          />
          <div className="brand-text">
            <span className="brand-name">K3 Capital Solutions</span>
            <span className="brand-tagline">
              Independent Wealth & Capital Advisory
            </span>
          </div>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☾" : "☼"}
          </button>

          <nav className="menu">
            <details className="menu-root">
              <summary>Menu</summary>
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.label}</a>
                  </li>
                ))}
                <li>
                  <a href="/blog">Blog Index</a>
                </li>
                <li>
                  <a href="/admin">CMS Login</a>
                </li>
              </ul>
            </details>
          </nav>
        </div>
      </div>
    </header>
  );
}
