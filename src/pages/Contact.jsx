import React from "react";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">Contact</p>
          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 100px)",
              lineHeight: "0.95",
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Let's build a brand with voltage.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              maxWidth: "720px",
              lineHeight: "1.75",
            }}
          >
            Tell us about your project, target launch, or branding strategy. We’ll bring the
            spark and structure.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
