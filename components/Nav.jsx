"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import K3Logo from "./K3Logo";

const sections = [
  { id: "home", label: "HOME" },
  { id: "services", label: "SERVICE LIST" },
  { id: "about", label: "ABOUT ME" },
  { id: "insights", label: "INSIGHTS" },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  // Track scroll shadow and which nav item is active
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      const extraPadding = id === "services" ? -10 : -50;
      window.scrollTo({
        top: el.offsetTop - navHeight - extraPadding,
        behavior: "smooth",
      });
    } else {
      // Coming from blog page - navigate and scroll
      router.push("/");
      
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight =
            document.querySelector(".nav-wrapper")?.offsetHeight || 78;
          const extraPadding = id === "services" ? -10 : -50;
          window.scrollTo({
            top: el.offsetTop - navHeight - extraPadding,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  // Close menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop open" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="container nav-inner">
          {/* Logo + Brand */}
          <div className="brand brand-left">
            <div className="brand-text">
              <div className="brand-name">K3 CAPITAL SOLUTIONS</div>
              <div className="brand-tagline">
                CAPITAL MANAGEMENT
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links nav-center nav-desktop">
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
            {/* Substack link */}
            <a
              href="https://substack.com/@capitalcharacterconviction"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUBSTACK
            </a>  
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`/#${s.id}`}
                className={`mobile-nav-link ${activeSection === s.id ? "active" : ""}`}
                onClick={(e) => {
                  handleNavClick(e, s.id);
                  setMobileMenuOpen(false);
                }}
              >
                {s.label}
              </a>
            ))}
            <a
              href="https://substack.com/@capitalcharacterconviction"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              SUBSTACK
            </a>  
          </div>
        )}
      </header>
    </>
  );
}
