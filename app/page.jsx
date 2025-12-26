"use client";

import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import branding from "../lib/branding";
import "./globals.css";
import SubscribeForm from "../components/SubscribeForm";
import K3Logo from "../components/K3Logo";

export default function Page() {

  return (
    <>
      {/* LEFT SIDEBAR — GOLDEN LINE WITH K3 */}
      <div className="sidebar-k3">
        <div className="sidebar-line"></div>
        <div className="sidebar-text">K3</div>
      </div>
      
      <main>
        {/* HERO */}
        <section id="home" className="hero rockco-hero" style={{ marginTop: "-80px" }}>
          <div className="container hero-grid">

            {/* LEFT SIDE — ROCKCO TEXT */}
            <div className="hero-left">
              <div className="highlight-bar"></div>
           <h1 className="hero-title rockco-hero-title">
                Discipline Is the Edge
              </h1>

              <p className="hero-subtext">
                Transparent, research-driven portfolio architecture tailored to your objectives.
              </p>
            </div>

          </div>

          {/* IMAGE BELOW TEXT */}
          <div className="container" style={{ marginTop: "40px" }}>
            <div className="hero-image-card">
              <img
                src="/img/Skyscrapers.webp"
                alt="K3 Capital Solutions"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <Section id="services" className="services-section">
          <div className="container">

            {/* RockCo-style header with two-column layout */}
            <div className="services-header-wrapper">
              <div className="services-header-left">
                <div className="highlight-bar"></div>
                <span className="hero-eyebrow">Service List</span>
                <h2 className="services-title">
                  Advisory built around sophisticated capital.
                </h2>
              </div>
              <div className="services-header-right">
                <p className="services-intro">
                  K3 Capital Solutions works with a focused set of clients to design,
                  refine, and oversee investment architecture across public and private
                  markets — from strategy and structure to ongoing portfolio dialogue.
                </p>
              </div>
            </div>

            {/* RockCo-style services grid */}
            <div className="services-grid">
              {branding.services.map((s, i) => (
                <div
                  key={s.title}
                  className={`service-card service-card--color 
                  ${i === 0 ? "service-card--green" : ""}
                  ${i === 1 ? "service-card--rust" : ""}
                  ${i === 2 ? "service-card--blue" : ""}
                `}
                >
                  <h3>{s.title}</h3>

                  <div className="underline"></div>

                  <p>{s.desc}</p>

                  <ul className="service-card-list">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>


        {/* ABOUT */}
        <Section id="about" style={{ marginTop: "-40px", scrollMarginTop: "calc(var(--nav-height) + 56px)" }}>
          <div className="container about-grid">
            <Reveal delay={0.15} className="profile-card">
              <div className="profile-grid">

                {/* LEFT — TEXT */}
                <div className="profile-text">
                  <div className="highlight-bar"></div>
                  <span className="hero-eyebrow">About the Founder</span>
                  <h2 className="profile-title">Independent perspective.<br />Institutional discipline.</h2>

                  <p>{branding.bio.p1}</p>
                  <p>{branding.bio.p2}</p>
                  <p>{branding.bio.p3}</p>
                  <p>{branding.bio.p4}</p>
                  <p>{branding.bio.p5}</p>

                  <div className="profile-contact">
                    <h3>Contact</h3>
                    <p>For confidential discussions regarding mandate availability, please reach out:</p>
                    <p>
                      Email: <a href="mailto:krists.eiduks@k3capitalsolutions.com">
                        krists.eiduks@k3capitalsolutions.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* RIGHT — PHOTO */}
                <div className="profile-photo-wrapper">
                  <img src="/img/krists.webp" alt="Krists Eiduks" className="profile-photo" />
                  <div className="profile-photo-caption">
                    Krists Eiduks<br />
                    Founder & Managing Partner
                  </div>
                </div>

              </div>
            </Reveal>


          </div>
        </Section>

        {/* INSIGHTS — INSTITUTIONAL */}
        <Section id="insights" className="section-alt">
  <div className="container insights-grid">

    {/* LEFT SIDE — MAIN COPY + SUBSCRIBE */}
    <Reveal className="insights-main">
      <div className="highlight-bar"></div>
      <span className="hero-eyebrow">Insights</span>
      <h2>Capital · Character · Conviction</h2>
      <p>
        K3 Capital Solutions publishes long-form research, regime analysis, and
        practitioner-level commentary at the intersection of markets, risk,
        and long-term portfolio construction.
      </p>

      <p>
        Similar to institutional research desks, our perspective emphasizes
        structural forces, macro regimes, market microstructure, and behavioral
        dynamics that drive capital allocation—especially in environments of
        uncertainty, tightening liquidity, or shifting risk premia.
      </p>

      <p>
        These insights are written for sophisticated investors who value
        clarity, discipline, and frameworks grounded in real-world mandate
        experience. Our goal is not prediction, but perspective—helping
        investors make better decisions across cycles.
      </p>

      {/* SUBSCRIBE FORM — KEEP EXACTLY AS IS */}
      <SubscribeForm />

      <div className="hero-actions" style={{ marginTop: "20px" }}>
        <a href="/blog" className="btn btn-ghost">
          Visit the Blog
        </a>
      </div>
    </Reveal>

    {/* RIGHT SIDE — LOGO IMAGE */}
    <Reveal delay={0.15} className="insights-card card">
      <img src="/img/k3_logo.jpg" alt="K3 Capital Solutions Logo" style={{ width: "100%", height: "auto" }} />
    </Reveal>

  </div>
</Section>



        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-grid">

            <div className="footer-col">
              <h4>K3 Capital Solutions</h4>
              <p>
                Independent portfolio architecture and strategic management for private and institutional investors.
              </p>
              <p style={{ marginTop: "12px", fontSize: "0.9rem" }}>
                <strong>Global Reach:</strong><br /> 🇺🇸 USA, New York +1 775 2223 5553 <br /> 🇱🇻 Latvia, Riga +371 28448481
              </p>
              <ul style={{ marginTop: "12px", listStyle: "none", padding: 0 }}>
                <li>
                  <a href="https://www.linkedin.com/in/krists-eiduks-83331939/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.789 0-9.703h3.554v1.374c.43-.664 1.199-1.61 2.922-1.61 2.134 0 3.733 1.389 3.733 4.377v5.562zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.963.79-1.704 1.96-1.704 1.168 0 1.913.741 1.938 1.704 0 .946-.77 1.704-1.983 1.704zm1.581 11.597H3.635V9.549h3.283v10.903zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Compliance</h4>
              <p className="footer-disclaimer">
                This website provides general information only and does not constitute regulated
                investment advice. Engagements are subject to appropriate agreements and legal requirements.
              </p>
              <ul style={{ marginTop: "12px" }}>
                <li><a href="/terms">Terms and Conditions</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} K3 Capital Solutions. All rights reserved. Website created by <a href="mailto:sparnins@hotmail.com" style={{ color: "#1c4e80", textDecoration: "none" }}>isContent LLC</a>
            <br />
          </div>
        </footer>


      </main>
    </>
  );
}
