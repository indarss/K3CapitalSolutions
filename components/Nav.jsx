"use client";

import { useEffect, useState } from "react";
import {
  Home,
  List,
  User,
  FileText,
  NotebookPen
} from "lucide-react";


const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Service List", icon: List },
  { id: "about", label: "About Me", icon: User },
  { id: "insights", label: "Insights / Articles", icon: FileText }
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
              <ul className="menu-dropdown">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>
                        <Icon size={16} />
                        {s.label}
                      </a>
                    </li>
                  );
                })}

                <li>
                  <a href="/blog">
                    <NotebookPen size={16} />
                    Blog Index
                  </a>
                </li>

                <li>
                  <a href="/admin">
                    <User size={16} />
                    CMS Login
                  </a>
                </li>
              </ul>


            </details>
          </nav>
        </div>
      </div>
    </header>
  );
}
