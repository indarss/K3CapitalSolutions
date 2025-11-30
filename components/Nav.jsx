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
  { id: "insights", label: "Insights / Articles", icon: FileText },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop/Mobile scroll spy + hide on scroll
  useEffect(() => {
    let lastY = window.scrollY;
    const ids = sections.map((s) => s.id);

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 10);

      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);

      lastY = y;

      if (pathname !== "/") return;
      const pos = y + 150;

      for (let id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (!el) return;

      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: "smooth",
      });
    } else {
      router.push(`/?scroll=${id}`);
    }
  };

  return (
    <header
      className={`nav-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""
        }`}
    >
      <nav className="container nav-inner">

        {/* LOGO + BRAND */}
        <div className="brand">
          <K3Logo size={38} />
          <div className="brand-text">
            <strong className="brand-name">K3 Capital Solutions</strong>
            <span className="brand-tagline">
              Independent Wealth Advisory
            </span>
          </div>
        </div>

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

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
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
                <Icon size={16} />
                {s.label}
              </a>
            );
          })}
          <a href="/blog"><NotebookPen size={16} /> Blog</a>
          <a href="/admin"><User size={16} /> Login</a>
        </div>
      )}
    </header>
  );
}
