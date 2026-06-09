import React from "react";
import CtaBand from "../components/CtaBand";
import GrowthSquad from "../components/GrowthSquad";
import OurClients from "../components/OurClients";
import { img } from "../constants";

export default function About() {

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">About Us</p>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: "0.95", marginBottom: "24px", color: "#ffffff" }}>
            We shape brands with clarity and voltage.
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Admetta partners with ambitious businesses to build visual systems, interactive websites, and campaign engines that stand out in crowded markets.
          </p>
        </div>
      </section>

      <div className="orb-row-divider" aria-hidden="true">
        <div className="orb-circle purple" />
        <div className="orb-circle pink" />
        <div className="orb-circle purple" />
        <div className="orb-circle pink" />
        <div className="orb-circle purple" />
      </div>

      <section className="section light-section">
        <div className="container two-column">
          <div className="reveal">
            <p className="eyebrow">Who We Are</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "24px" }}>
              Creative operators with a strategist’s spine.
            </h2>
            <p style={{ marginBottom: "16px" }}>
              We believe bold work should still be disciplined. Every identity, visual system, and campaign starts with a deep understanding of what will make the audience care enough to act.
            </p>
            <p>
              Our process blends market insight, visual craft, content rhythm, and technology into one connected brand experience.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div className="diagonal-grid-overlay" style={{ borderRadius: "12px" }} />
            <img
              className="image-frame reveal"
              src={img("about-studio.svg")}
              alt="Admetta studio workspace"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <GrowthSquad />

      <OurClients />

      <CtaBand title="Let’s build the brand people remember." />
    </>
  );
}
