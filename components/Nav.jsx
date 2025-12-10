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
      setScrolled(y > 20);

      // Blog page → force highlight on Blog
      if (pathname === "/blog") {
        setActiveSection("blog");
        return;
      }

      // Home page: highlight based on scroll position
      if (pathname === "/") {
        const pos = y + 140;
        sections.forEach((section) => {
          const el = document.getElementById(section.id);
          if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
            setActiveSection(section.id);
          }
        });
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

          <a href="/blog"
            className={activeSection === "blog" || pathname === "/blog" ? "active" : ""}
            onClick={() => {
              setActiveSection("blog");
            }}
          >
            Blog
          </a>

        </div>
      </nav>
    </header>
  );
}
