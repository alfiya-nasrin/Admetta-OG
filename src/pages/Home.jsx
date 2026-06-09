import React from "react";
import ContactSection from "../components/ContactSection";
import CtaBand from "../components/CtaBand";
import HomeTeamAbout from "../components/HomeTeamAbout";
import PosterMasonry from "../components/PosterMasonry";
import heroBg from "../assets/css/Hero.PNG";

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div
          className="home-hero__bg"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        <div className="container">
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

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading reveal" style={{ marginBottom: "56px" }}>
            <p className="eyebrow">Social Proof</p>
            <h2>Clients feel the shift.</h2>
          </div>
          <div className="testimonial-grid">
            {[
              "Admetta turned our scattered ideas into a premium identity with real commercial direction.",
              "The campaign language, visuals, and reporting all felt sharp.",
              "Their team brought confidence, taste, and momentum from strategy through launch."
            ].map((quote, i) => (
              <article className="testimonial-card reveal" key={quote}>
                <div className="stars">★★★★★</div>
                <p style={{ fontStyle: "italic", margin: "16px 0" }}>“{quote}”</p>
                <strong style={{ display: "block", color: "#ffffff" }}>{["Riya Menon", "Arjun Rao", "Sana Khan"][i]}</strong>
                <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                  {
                    [
                      "Founder, Studio Bloom",
                      "Marketing Lead, Nova Retail",
                      "Director, Elevate Co."
                    ][i]
                  }
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to elevate your brand?" />

      <ContactSection id="contact" />
    </>
  );
}
