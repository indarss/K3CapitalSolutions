"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, NotebookPen } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import K3Logo from "./K3Logo";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Service List" },
  { id: "about", label: "About Me" },
  { id: "insights", label: "Insights / Articles" },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const panelRef = useRef(null);

  //
  // Smooth scrolling / redirect
  //
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 90,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/?scroll=${targetId}`);
    }
  };

  //
  // Scroll listeners (shadow + hide + scrollspy)
  //
  useEffect(() => {
    let lastY = window.scrollY;
    const ids = sections.map((s) => s.id);

    const onScroll = () => {
      const y = window.scrollY;

      // Shadow
      setScrolled(y > 10);

      // Hide on scroll down
      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);
      lastY = y;

      // Scrollspy on homepage only
      if (pathname !== "/") return;

      const pos = y + 160;
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
  // Close mobile panel on outside click
  //
  useEffect(() => {
    function handleOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  //
  // Close on Escape
  //
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      className={`nav-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""
        }`}
    >
      <nav className="container nav-inner">
        {/* BRAND WITH LOGO */}
        <div className="brand">
          <K3Logo size={40} />
          <div className="brand-text">
            <strong className="brand-name">K3 Capital Solutions</strong>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links desktop-only">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => handleNavClick(e, s.id)}
              className={`nav-link ${activeSection === s.id ? "active" : ""}`}
            >
              {s.label}
            </a>
          ))}

          <a href="/blog" className="nav-link">Blog</a>
          <a href="/admin" className="nav-link">Login</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button mobile-only"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* MOBILE PANEL */}
      {open && (
        <div className="mobile-nav-panel mobile-only" ref={panelRef}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => handleNavClick(e, s.id)}
              className={`mobile-nav-link ${activeSection === s.id ? "active" : ""
                }`}
            >
              {s.label}
            </a>
          ))}

          <a href="/blog" className="mobile-nav-link">
            <NotebookPen size={16} /> Blog
          </a>

          <a href="/admin" className="mobile-nav-link">
            Login
          </a>
        </div>
      )}
    </div>
  );
}
