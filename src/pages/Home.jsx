import React from "react";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";
import CtaBand from "../components/CtaBand";
import HomeTeamAbout from "../components/HomeTeamAbout";
import PosterMasonry from "../components/PosterMasonry";
import heroBg from "../assets/css/Hero.PNG";
import heroBgWebp from "../assets/css/Hero.webp";
import mashalImg from "../assets/css/personalities/Mashal Ahammad Pk (2).png";
import mashalImgWebp from "../assets/css/personalities/Mashal Ahammad Pk (2).webp";
import hiyasImg from "../assets/css/personalities/Muhammed hiyas k (2).png";
import hiyasImgWebp from "../assets/css/personalities/Muhammed hiyas k (2).webp";

export default function Home() {
  return (
    <>
      <SEO 
        title="Admetta | Bold Strategy. Vibrant Creativity."
        description="We design and build brand identities, high-performing websites, and advertising campaigns that demand attention."
        path="/"
      />
      <section className="hero home-hero" style={{ position: "relative" }}>
        <picture className="home-hero__bg-picture" aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <source srcSet={heroBgWebp} type="image/webp" />
          <img src={heroBg} alt="Admetta bold strategy and vibrant creativity abstract background" style={{ width: "100%", height: "100%", objectFit: "cover" }} fetchPriority="high" loading="eager" decoding="async" />
        </picture>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-copy">
            <p className="hero-eyebrow">Bold strategy. Vibrant creativity.</p>
            <h1 className="hero-stack">
              <span className="stack-word">Strategy</span>
              <span className="stack-word stack-word--accent">Design</span>
              <span className="stack-word">Impact</span>
            </h1>
            <p className="hero-text">
              We design and build brand identities, high-performing websites, and advertising
              campaigns that demand attention.
            </p>
          </div>
        </div>
      </section>

      <HomeTeamAbout />

      <section className="statement-band">
        <div className="diagonal-grid-overlay" />
        <div className="orb-glow-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h2>
            <span>We Build Brands</span>
            <span style={{ color: "var(--accent)" }}>And With Brands</span>
            <span>We Build Legacies</span>
          </h2>
        </div>
      </section>

      <div id="works">
        <PosterMasonry />
      </div>

      <section className="section section-dark personalities-section">
        <div className="container">
          <div className="section-heading-wrapper reveal" style={{ marginBottom: "clamp(24px, 5vw, 56px)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "clamp(20px, 4vw, 40px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "nowrap", gap: "clamp(12px, 3vw, 24px)" }}>
            <div style={{ flex: "1 1 auto", minWidth: 0 }}>
              <p className="eyebrow" style={{ color: "var(--accent)", fontSize: "clamp(10px, 2vw, 14px)", marginBottom: "8px" }}>PERSONALITIES WE BRANDED</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 4.5vw, 4rem)", lineHeight: "1.1", margin: 0, fontWeight: 400 }}>
                The minds.<br/>
                The vision.<br/>
                <span style={{ color: "var(--accent)", fontStyle: "italic" }}>The impact.</span>
              </h2>
            </div>
            <p className="section-heading-desc" style={{ flex: "0 1 clamp(140px, 35vw, 300px)", color: "var(--muted)", borderLeft: "1px solid var(--accent)", paddingLeft: "clamp(10px, 2vw, 24px)", margin: 0, fontSize: "clamp(10px, 1.8vw, 14px)", lineHeight: "1.5" }}>
              We partner with visionary individuals and help them become brands that inspire and lead.
            </p>
          </div>

          <div className="personalities-list" style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 8vw, 120px)", marginTop: "clamp(24px, 6vw, 60px)" }}>
            <article className="personality-card reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(8px, 3vw, 40px)", alignItems: "center" }}>
              <div className="p-content" style={{ paddingRight: "clamp(0px, 1.5vw, 40px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 2vw, 16px)", marginBottom: "clamp(8px, 2vw, 24px)" }}>
                  <span className="p-number" style={{ color: "var(--accent)", fontSize: "clamp(0.9rem, 2.5vw, 1.5rem)" }}>01</span>
                  <div style={{ height: "1px", width: "clamp(16px, 4vw, 32px)", background: "var(--accent)" }}></div>
                </div>
                <h3 style={{ fontSize: "clamp(1rem, 3.5vw, 2.5rem)", lineHeight: "1.2", marginBottom: "clamp(4px, 1vw, 8px)", fontWeight: 400 }}>Mashal<br/>Ahammad PK</h3>
                <p className="p-role" style={{ color: "var(--muted)", fontSize: "clamp(0.5rem, 1.2vw, 0.8rem)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "clamp(8px, 3vw, 32px)" }}>FOUNDER, EDWAY EDUCATION</p>
                <div style={{ display: "flex", gap: "clamp(6px, 1.5vw, 12px)" }}>
                  <span style={{ color: "var(--accent)", fontSize: "clamp(1rem, 2.5vw, 2rem)", lineHeight: 1 }}>“</span>
                  <blockquote className="p-quote" style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: "clamp(0.6rem, 1.4vw, 0.95rem)", lineHeight: "1.5" }}>
                    "A visionary leader transforming education through innovation, empowering learners to grow, succeed, and make a lasting impact on the world."
                  </blockquote>
                </div>
              </div>
              <div className="p-image">
                <picture>
                  <source srcSet={mashalImgWebp} type="image/webp" />
                  <img src={mashalImg} alt="Mashal Ahammad PK" style={{ width: "100%", height: "clamp(120px, 35vw, 400px)", objectFit: "cover", borderRadius: "8px" }} loading="lazy" decoding="async" />
                </picture>
              </div>
            </article>

            <article className="personality-card reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(8px, 3vw, 40px)", alignItems: "center" }}>
              <div className="p-image">
                <picture>
                  <source srcSet={hiyasImgWebp} type="image/webp" />
                  <img src={hiyasImg} alt="Muhammed Hiyas K" style={{ width: "100%", height: "clamp(120px, 35vw, 400px)", objectFit: "cover", borderRadius: "8px" }} loading="lazy" decoding="async" />
                </picture>
              </div>
              <div className="p-content" style={{ paddingLeft: "clamp(0px, 1.5vw, 40px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 2vw, 16px)", marginBottom: "clamp(8px, 2vw, 24px)" }}>
                  <span className="p-number" style={{ color: "var(--accent)", fontSize: "clamp(0.9rem, 2.5vw, 1.5rem)" }}>02</span>
                  <div style={{ height: "1px", width: "clamp(16px, 4vw, 32px)", background: "var(--accent)" }}></div>
                </div>
                <h3 style={{ fontSize: "clamp(1rem, 3.5vw, 2.5rem)", lineHeight: "1.2", marginBottom: "clamp(4px, 1vw, 8px)", fontWeight: 400 }}>Muhammed<br/>Hiyas K</h3>
                <p className="p-role" style={{ color: "var(--muted)", fontSize: "clamp(0.5rem, 1.2vw, 0.8rem)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "clamp(8px, 3vw, 32px)" }}>FOUNDER, LENRAH</p>
                <div style={{ display: "flex", gap: "clamp(6px, 1.5vw, 12px)" }}>
                  <span style={{ color: "var(--accent)", fontSize: "clamp(1rem, 2.5vw, 2rem)", lineHeight: 1 }}>“</span>
                  <blockquote className="p-quote" style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: "clamp(0.6rem, 1.4vw, 0.95rem)", lineHeight: "1.5" }}>
                    "A dynamic founder and forward-thinking leader, committed to transforming innovative ideas into impactful ventures that foster growth, create opportunities, and leave a lasting legacy."
                  </blockquote>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to elevate your brand?" />

      <ContactSection id="contact" />
    </>
  );
}
