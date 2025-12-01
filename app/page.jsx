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
        <Section id="home" className="hero">
          <div className="container hero-grid">

            {/* LEFT COLUMN — TEXT */}
            <Reveal className="hero-copy">
              <p className="eyebrow">{branding.tagline}</p>

              <h1 className="hero-title">
                Institutional-grade investment guidance<br />
                for sophisticated private capital.
              </h1>

              <p className="intro">
                K3 Capital Solutions provides independent, research-driven investment
                advisory built on global market experience, large-scale infrastructure,
                and multi-billion-euro portfolio management.
              </p>

              <div className="hero-actions">
                <a href="#services" className="btn btn-primary">
                  View Service List
                </a>
                <a href="#about" className="btn btn-ghost">
                  About the Founder
                </a>
              </div>

              <p className="hero-detail">
                Our work integrates engineering-level precision, global market
                expertise, and disciplined portfolio execution for clients who value
                independence, selectivity, and long-term capital stewardship.
              </p>
            </Reveal>

            {/* RIGHT COLUMN — CARD */}
            <Reveal delay={0.15} className="hero-card" viewport={{ once: true, amount: 0.1 }}>
              <div className="metric-card">
                <span className="metric-label">Portfolios Managed</span>
                <span className="metric-value">€145M → €3.2Bn</span>
                <span className="metric-foot">
                  Multi-asset mandates across EU & international markets
                </span>
              </div>

              <div className="stat-grid">
                <div className="stat-item">15+ yrs experience</div>
                <div className="stat-item">EU · US markets</div>
                <div className="stat-item">Bespoke mandates</div>
                <div className="stat-item">Research-driven</div>
              </div>

              <p className="hero-note">
                For illustrative purposes only. Figures reflect representative
                advisory exposure; this is not a performance guarantee.
              </p>
            </Reveal>

          </div>
        </Section>

        {/* SERVICES */}
        <Section id="services">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Service List</p>
              <h2>Advisory built around sophisticated capital.</h2>
              <p className="section-intro">
                K3 Capital Solutions works with a limited number of clients to
                provide deep, research-driven and execution-oriented support
                across the full lifecycle of capital deployment.
              </p>
            </Reveal>

            <div className="service-grid">
              {branding.services.map((s, i) => (
                <Reveal key={s.title} delay={0.05 * (i + 1)} className="service-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="disclaimer">{branding.disclaimer}</p>
            </Reveal>
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about">
          <div className="container about-grid">
            <Reveal className="about-main">
              <p className="eyebrow">About the Founder</p>
              <h2>Independent perspective. Institutional discipline.</h2>
              <p>{branding.bio.p1}</p>
              <p>{branding.bio.p2}</p>
              <p>{branding.bio.p3}</p>
              <p>{branding.bio.p4}</p>
              <p>{branding.bio.p5}</p>

              <div className="contact-block">
                <h3>Contact</h3>
                <p>
                  For confidential discussions regarding mandate availability,
                  please reach out:
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:krists.eiduks@k3capitalsolutions.com">
                    krists.eiduks@k3capitalsolutions.com
                  </a>
                  <br />
                  Location: Latvia · International clients by arrangement
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="profile-card">
              <div className="founder-header">
                <K3Logo size={48} />

                <div className="founder-text">
                  <div className="founder-k3">K3</div>
                  <h3 className="founder-name">Krists Eiduks</h3>
                  <p className="founder-title">Founder & Managing Partner</p>
                </div>
              </div>

              <p className="meta">
                Engineering discipline, global finance experience, and multi-asset
                portfolio management expertise dedicated to high-net-worth individuals
                and sophisticated investors.
              </p>

              <div className="badge-row">
                <span className="badge">Independent</span>
                <span className="badge">Research-driven</span>
                <span className="badge">Client-selective</span>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* INSIGHTS — INSTITUTIONAL */}
        <Section id="insights" className="section-alt">
          <div className="container insights-grid">

            {/* LEFT SIDE */}
            <Reveal className="insights-main">
              <p className="eyebrow">Insights & Research</p>
              <h2>Capital · Character · Conviction</h2>

              <p>
                K3 Capital Solutions publishes long-form research, regime analysis, and
                practitioner-level commentary at the intersection of markets, risk, and
                long-term portfolio construction.
              </p>

              <p>
                Similar to institutional research desks, our perspective emphasizes
                structural forces, macro regimes, market microstructure, and the behavioral
                dynamics that drive capital allocation—especially in environments of
                uncertainty, tightening liquidity, or shifting risk premia.
              </p>

              <p>
                These insights are written for sophisticated investors who value clarity,
                discipline, and frameworks grounded in real-world mandate experience. The
                goal is not prediction, but perspective: helping investors make better
                decisions by understanding how markets evolve and how capital behaves across
                cycles.
              </p>

              <SubscribeForm />

              <div className="hero-actions" style={{ marginTop: "20px" }}>
                <a href="/blog" className="btn btn-ghost">
                  Go to the Blog
                </a>
              </div>
            </Reveal>

            {/* RIGHT SIDE — FEATURED CARD */}
            <Reveal delay={0.15} className="insights-card">
              <h3>What You’ll Find Inside</h3>
              <ul>
                <li>Macro & regime analysis grounded in institutional frameworks</li>
                <li>Portfolio construction principles across market cycles</li>
                <li>Risk, liquidity, and behavioral insights for serious allocators</li>
                <li>Case-based commentary drawn from real investment mandates</li>
                <li>Perspectives on decision-making when uncertainty is highest</li>
              </ul>
            </Reveal>

          </div>
        </Section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-inner">
            <span>© 2025 K3 Capital Solutions.</span>
            <span>Independent investment advisory for sophisticated and high-net-worth clients.</span>
            <span>This website provides general information only and does not constitute regulated investment advice.</span>
          </div>
        </footer>

      </main>
    </>
  );
}
