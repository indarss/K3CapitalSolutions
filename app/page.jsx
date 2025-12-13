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
      <main>
        {/* HERO */}
        <section id="home" className="hero rockco-hero">
          <div className="container hero-grid">

            {/* LEFT SIDE — ROCKCO TEXT */}
            <div className="hero-left">
              <div className="highlight-bar"></div>
              <span className="hero-eyebrow">Private Wealth · Independent Advisory</span>


              <h1 className="hero-title rockco-hero-title">
                Clarity, Discipline & Institutional-Grade Insight for Private Capital
              </h1>

              <p className="hero-subtext">
                K3 Capital Solutions provides institutional-grade investment strategy,
                portfolio architecture, and research-driven insight for sophisticated
                private clients across global markets.
              </p>
            </div>

            {/* RIGHT SIDE — PHOTO (RockCo framing) */}
            <div className="hero-right">
              <div className="hero-image-card">
                <img
                  src="/img/K3_Image.avif"
                  alt="K3 Capital Solutions"
                  className="hero-image"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        {/* SERVICES */}
        <Section id="services" className="services-section">
          <div className="container">

            {/* RockCo-style header */}
            <div className="services-header">
               <div className="highlight-bar"></div>
               <p className="eyebrow">Service List</p>
              <h2 className="services-title">
                Advisory built around sophisticated capital.
              </h2>
              <p className="services-intro">
                K3 Capital Solutions works with a focused set of clients to design,
                refine, and oversee investment architecture across public and private
                markets — from strategy and structure to ongoing portfolio dialogue.
              </p>
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
        <Section id="about">
          <div className="container about-grid">
            <Reveal delay={0.15} className="profile-card">
              <div className="profile-grid">

                {/* LEFT — TEXT */}
                <div className="profile-text">
                  <div className="highlight-bar"></div>
                  <p className="eyebrow">About the Founder</p>
                  <h2 className="profile-title">Independent perspective. Institutional discipline.</h2>

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
      <p className="eyebrow">Insights & Research</p>


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

    {/* RIGHT SIDE — ROCKCO CARD */}
    <Reveal delay={0.15} className="insights-card card">
      <h3>What You'll Find Inside</h3>
      <ul>
        <li>Macro & regime analysis using institutional frameworks</li>
        <li>Portfolio construction principles across market cycles</li>
        <li>Risk, liquidity & behavioral insights for serious allocators</li>
        <li>Case-based commentary from real investment mandates</li>
        <li>Decision-making frameworks for uncertain environments</li>
      </ul>
    </Reveal>

  </div>
</Section>



        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-grid">

            <div className="footer-col">
              <h4>K3 Capital Solutions</h4>
              <p>
                Independent investment advisory for sophisticated and high-net-worth clients.
              </p>
              <p style={{ marginTop: "12px", fontSize: "0.9rem" }}>
                <strong>Location:</strong> Riga, Latvia
              </p>
              <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
                <strong>Global Reach:</strong> Serving international clients across Europe and beyond.
              </p>
              <ul style={{ marginTop: "12px", listStyle: "none", padding: 0 }}>
                <li>
                  <a href="https://www.linkedin.com/in/krists-eiduks-83331939/" target="_blank" rel="noopener noreferrer">
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
            © {new Date().getFullYear()} K3 Capital Solutions. All rights reserved.
          </div>
        </footer>


      </main>
    </>
  );
}
