"use client";

import { useEffect, useState, useRef } from "react";
import {
  Home,
  List,
  User,
  FileText,
  NotebookPen,
  Menu,
  X
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Dropdown sections
const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Service List", icon: List },
  { id: "about", label: "About Me", icon: User },
  { id: "insights", label: "Insights / Articles", icon: FileText }
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  //
  // 🔹 Smooth scroll + cross-page navigation logic
  //
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    setOpen(false); // close dropdown on click

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 90,
          behavior: "smooth"
        });
      }
    } else {
      router.push(`/?scroll=${targetId}`);
    }
  };

  //
  // 🔹 Scroll listener for:
  //   1) Shadow toggle
  //   2) Hide-on-scroll
  //   3) ScrollSpy active section
  //
  useEffect(() => {
    let lastY = window.scrollY;
    const ids = sections.map((s) => s.id);

    const onScroll = () => {
      const y = window.scrollY;

      // 1) GS shadow effect
      setScrolled(y > 10);

      // 2) Hide nav on scroll down
      if (y > lastY && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;

      if (pathname !== "/") return;

      // 3) ScrollSpy (homepage only)
      const pos = y + 160; // offset

      for (let id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  //
  // 🔹 Close menu on outside click
  //
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //
  // 🔹 Close dropdown on Escape
  //
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  //
  // 🔹 For dropdown keyboard navigation
  //
  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      const links = [...document.querySelectorAll(".menu-dropdown a")];
      links[0]?.focus();
    }
  };

  return (
    <div
      className={`nav-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""
        }`}
      onKeyDown={handleKeyDown}
    >
      <nav className="menu container">
        {/* === BRAND (optional area for logo later) === */}
        <div className="brand-text" style={{ paddingLeft: "4px" }}>
          <strong>K3 Capital Solutions</strong>
        </div>

        {/* === MENU BUTTON === */}
        <div
          className="menu-root"
          ref={menuRef}
        >
          <button
            className="menu-button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
            <span style={{ marginLeft: "6px" }}>Menu</span>
          </button>

          {open && (
            <ul className="menu-dropdown">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.id}>
                    <a
                      href={`/#${s.id}`}
                      onClick={(e) => handleNavClick(e, s.id)}
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
          )}
        </div>
      </nav>
    </div>
  );
}
