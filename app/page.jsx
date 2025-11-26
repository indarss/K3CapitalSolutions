import Nav from "../components/Nav";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import branding from "../lib/branding";
import "./globals.css";
import SubscribeForm from "../components/SubscribeForm";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <Section id="home" className="hero">
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow">{branding.tagline}</p>
              <h1 className="hero-title">
                Institutional-grade investment guidance for
                <span className="accent"> high–net–worth</span> capital.
              </h1>
              <p className="intro">
                K3 Capital Solutions provides independent, research-driven
                investment advisory built on global market experience, large-scale
                infrastructure, and multi-billion-euro portfolio management.
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
                expertise, and disciplined portfolio execution for clients who
                value independence, selectivity, and long-term capital
                stewardship.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="hero-card">
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
              <div className="profile-avatar">K3</div>
              <div>
                <h3>Krists Eiduks</h3>
                <p className="role">Founder & Managing Partner</p>
                <p className="meta">
                  Engineering discipline, global finance experience, and
                  multi-asset portfolio management expertise dedicated to
                  high-net-worth individuals and sophisticated investors.
                </p>
                <div className="badge-row">
                  <span className="badge">Independent</span>
                  <span className="badge">Research-driven</span>
                  <span className="badge">Client-selective</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* INSIGHTS / ARTICLES SECTION ON HOME */}
        <Section id="insights" className="section-alt">
          <div className="container insights-grid">
            <Reveal className="insights-main">
              <p className="eyebrow">Insights & Articles</p>
              <h2>Capital · Character · Conviction</h2>
              {branding.insightsIntro.map((para) => (
                <p key={para}>{para}</p>
              ))}

              <SubscribeForm />

              <div className="hero-actions" style={{ marginTop: "18px" }}>
                <a href="/blog" className="btn btn-ghost">
                  Go to the blog
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="insights-card">
              <h3>What you’ll find on the blog</h3>
              <ul>
                <li>Long-form reflections on markets and regimes</li>
                <li>Frameworks for decision-making under uncertainty</li>
                <li>Case-based insights grounded in real-world mandates</li>
                <li>Commentary at the intersection of capital and character</li>
              </ul>
            </Reveal>
          </div>
        </Section>

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
