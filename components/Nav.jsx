"use client";

import { useEffect, useState } from "react";
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
import K3Logo from "./K3Logo";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------------------------------------------------------
     Scroll behavior: shadow, hide-on-scroll, scroll spy
     --------------------------------------------------------- */
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // Goldman Sachs shadow
      setScrolled(y > 10);

      // Hide nav on scroll down
      setHidden(y > lastY && y > 80);
      lastY = y;

      // ScrollSpy only on homepage
      if (pathname !== "/") return;

      const pos = y + 120; // matches scroll-margin-top

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  /* ---------------------------------------------------------
     Handle nav clicks (cross-page + smooth scroll)
     --------------------------------------------------------- */
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);

    // Already on homepage → smooth scroll
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({
        top: el.offsetTop - 70, // matches nav-height
        behavior: "smooth"
      });
      return;
    }

    // Coming from Blog → redirect with scroll param
    router.push(`/?scroll=${id}`);
  };

  /* ---------------------------------------------------------
     Render
     --------------------------------------------------------- */
  return (
    <header
      className={`nav-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
    >
      <nav className="container nav-inner">

        {/* BRAND / LOGO */}
        <a href="/" className="brand" onClick={() => setMobileOpen(false)}>
          <K3Logo size={38} />
          <div className="brand-text">
            <strong className="brand-name">K3 Capital Solutions</strong>
            <span className="brand-tagline">Independent Wealth Advisory</span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="nav-links desktop-only">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => handleNavClick(e, s.id)}
              className={activeSection === s.id ? "active" : ""}
            >
              {s.label}
            </a>
          ))}

          <a href="/blog">Blog</a>
          <a href="/admin">Login</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE NAV PANEL */}
      {mobileOpen && (
        <div className="mobile-nav">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`/#${s.id}`}
                onClick={(e) => handleNavClick(e, s.id)}
                className={activeSection === s.id ? "active" : ""}
              >
                <Icon size={16} /> {s.label}
              </a>
            );
          })}

          <a href="/blog" onClick={() => setMobileOpen(false)}>
            <NotebookPen size={16} /> Blog
          </a>
          <a href="/admin" onClick={() => setMobileOpen(false)}>
            <User size={16} /> Login
          </a>
        </div>
      )}
    </header>
  );
}
