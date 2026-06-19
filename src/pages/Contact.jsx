import React from "react";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | Admetta"
        description="Get in touch with Admetta to elevate your brand."
        path="/contact"
      />
      <section className="page-hero" style={{ minHeight: "auto", padding: "clamp(60px, 15vw, 160px) 0 clamp(20px, 5vw, 40px)" }}>
        <div className="container reveal">
          <p className="eyebrow" style={{ marginBottom: "clamp(8px, 2vw, 16px)", fontSize: "clamp(10px, 2vw, 14px)" }}>Contact</p>
          <h1
            style={{
              fontSize: "clamp(32px, 8.5vw, 100px)",
              lineHeight: "1.05",
              marginBottom: "clamp(12px, 3vw, 24px)",
              color: "#ffffff",
              fontWeight: "400",
            }}
          >
            Let's build a brand with voltage.
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 18px)",
              color: "var(--muted)",
              maxWidth: "720px",
              lineHeight: "1.5",
              margin: 0,
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
