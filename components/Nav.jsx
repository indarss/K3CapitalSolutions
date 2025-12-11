"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import K3Logo from "./K3Logo";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Service List" },
  { id: "about", label: "About Me" },
  { id: "insights", label: "Insights" },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  // Track scroll shadow and which nav item is active
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(
    pathname === "/blog" ? "blog" : "home"
  );

  useEffect(() => {
    // When returning to home page, trigger scroll spy to update active section
    if (pathname === "/") {
      const pos = window.scrollY + 140;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (
          el &&
          el.offsetTop <= pos &&
          el.offsetTop + el.offsetHeight > pos
        ) {
          setActiveSection(section.id);
        }
      });
    } else if (pathname === "/blog") {
      setActiveSection("blog");
    } else if (pathname === "/terms") {
      setActiveSection(null);
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // ScrollSpy: highlight based on position only on home page
      if (pathname === "/") {
        const pos = y + 140;
        sections.forEach((section) => {
          const el = document.getElementById(section.id);
          if (
            el &&
            el.offsetTop <= pos &&
            el.offsetTop + el.offsetHeight > pos
          ) {
            setActiveSection(section.id);
          }
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Handle navigation clicks and smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // Set active section immediately so underline appears right away
    setActiveSection(id);
    
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight =
        document.querySelector(".nav-wrapper")?.offsetHeight || 78;
      const extraPadding = 5;
      window.scrollTo({
        top: el.offsetTop - navHeight - extraPadding,
        behavior: "smooth",
      });
    } else {
      // Coming from blog page - navigate and scroll
      router.push(`/?scroll=${id}`);
      
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight =
            document.querySelector(".nav-wrapper")?.offsetHeight || 78;
          const extraPadding = 5;
          window.scrollTo({
            top: el.offsetTop - navHeight - extraPadding,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="container nav-inner">
        {/* Logo + Brand */}
        <div className="brand brand-left">
          <K3Logo size={48} />
          <div className="brand-text">
            <div className="brand-name">K3 Capital Solutions</div>
            <div className="brand-tagline">
              Independent Wealth & Capital Advisory
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="nav-links nav-center">
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
          {/* Blog link */}
          <a
            href="/blog"
            className={activeSection === "blog" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              // Navigate to blog route and mark as active
              router.push("/blog");
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
