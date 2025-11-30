"use client";

import { useEffect, useState } from "react";
import {
  Home,
  List,
  User,
  FileText,
  NotebookPen
} from "lucide-react";

// Sections used in dropdown (your original structure)
const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Service List", icon: List },
  { id: "about", label: "About Me", icon: User },
  { id: "insights", label: "Insights / Articles", icon: FileText }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Shadow toggle + hide-on-scroll + active section highlighting
  useEffect(() => {
    let lastY = window.scrollY;

    const sectionIds = sections.map((s) => s.id);

    const onScroll = () => {
      const currentY = window.scrollY;

      //
      // 1. Shadow toggle (Goldman Sachs effect)
      //
      setScrolled(currentY > 10);

      //
      // 2. Hide nav on scroll down, show on scroll up
      //
      if (currentY > lastY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;

      //
      // 3. Active section highlighting (scroll spy)
      //
      const scrollPos = currentY + 150; // offset for nicer feel

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return (
    <div className={`nav-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <nav className="menu">

        <details className="menu-root">
          <summary>Menu</summary>

          <ul className="menu-dropdown">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={activeSection === s.id ? "active" : ""}
                  >
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
  );
}
