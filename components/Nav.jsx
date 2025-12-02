"use client";

import { useEffect, useState } from "react";
import {
  Home,
  List,
  User,
  FileText,
  NotebookPen,
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

  /* ---------------------------------------------------------
     Scroll behavior: shadow, hide-on-scroll, scroll spy
     --------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Apply shadow effect
      setScrolled(y > 10);

      // Never hide the navbar
      setHidden(false);

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

    // Already on homepage
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (!el) return;

      const navHeight = document.querySelector(".nav-wrapper")?.offsetHeight || 70;
      // Custom extra offset for Insights section
      const extraOffset = 0;

      window.scrollTo({
        top: el.offsetTop - navHeight + extraOffset,
        behavior: "smooth",
      });

      return;
    }

    // Coming from blog or other page
    router.push(`/?scroll=${id}`);
  };

  /* ---------------------------------------------------------
     Render
     --------------------------------------------------------- */
  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="container nav-inner">

        {/* BRAND */}
        <div className="brand">
          <K3Logo size={38} />
          <div className="brand-text">
            <div className="brand-name">K3 Capital Solutions</div>
            <div className="brand-tagline">Independent Wealth Advisory</div>
          </div>
        </div>

        {/* ALWAYS-VISIBLE TOP NAV */}
        <div className="nav-links">
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
        </div>

      </nav>
    </header>
  );
}
