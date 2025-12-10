"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import K3Logo from "./K3Logo";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Service List" },
  { id: "about", label: "About Me" },
  { id: "insights", label: "Insights" }
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ---------------------------------------------
     RockCo-style scroll tracking (no hide-on-scroll)
     --------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Add soft shadow after scrolling
      setScrolled(y > 20);

      // ScrollSpy only on homepage
      if (pathname !== "/") return;

      const pos = y + 140;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  /* ---------------------------------------------
     Smooth Nav Behavior
     --------------------------------------------- */
  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (!el) return;

      const offset = document.querySelector(".nav-wrapper")?.offsetHeight || 70;

      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });

      return;
    }

    router.push(`/?scroll=${id}`);
  };

  /* --------------------------------------------- */

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="container nav-inner">

        {/* LEFT SIDE — LOGO + TEXT */}
        <div className="brand">
          <K3Logo size={48} />
          <div className="brand-text">
            <div className="brand-name">K3 Capital Solutions</div>
            <div className="brand-tagline">
              Independent Wealth & Capital Advisory
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — LINKS */}
        <div className="nav-links">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className={activeSection === s.id ? "active" : ""}
              onClick={(e) => handleNavClick(e, s.id)}
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
