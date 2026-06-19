import React from "react";
import { email } from "../constants";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy | Admetta"
        description="Read the Admetta Privacy Policy to understand how we collect, use, and protect your data."
        path="/privacy-policy"
      />
      <section className="page-hero" style={{ minHeight: "auto", padding: "clamp(60px, 15vw, 120px) 0 clamp(20px, 5vw, 40px)" }}>
        <div className="container reveal">
          <p className="eyebrow" style={{ marginBottom: "clamp(8px, 2vw, 16px)", fontSize: "clamp(10px, 2vw, 14px)" }}>Legal</p>
          <h1 style={{ fontSize: "clamp(32px, 8.5vw, 80px)", lineHeight: "1.1", marginBottom: "clamp(12px, 3vw, 24px)", color: "#ffffff", letterSpacing: "-0.02em", fontWeight: "400" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "clamp(14px, 3.5vw, 18px)", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.5" }}>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
        <div className="container reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className="policy-content" style={{ color: "var(--muted)", lineHeight: "1.8", fontSize: "16px" }}>
            <p style={{ marginBottom: "24px" }}>
              At <strong>Admetta</strong>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>1. Data Collection</h3>
            <p style={{ marginBottom: "16px" }}>We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li style={{ marginBottom: "8px" }}><strong>Contact Data:</strong> includes email address and telephone numbers provided via our contact forms.</li>
              <li style={{ marginBottom: "8px" }}><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
              <li style={{ marginBottom: "8px" }}><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>2. Cookies & Tracking</h3>
            <p style={{ marginBottom: "24px" }}>
              Our website uses cookies and similar tracking technologies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>3. Third-Party Services</h3>
            <p style={{ marginBottom: "24px" }}>
              We may share your personal data with internal third parties and external third parties, such as service providers acting as processors who provide IT and system administration services (e.g., Web3Forms for processing contact inquiries securely). We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>4. Your Legal Rights (GDPR)</h3>
            <p style={{ marginBottom: "16px" }}>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Request access</strong> to your personal data.</li>
              <li style={{ marginBottom: "8px" }}><strong>Request correction</strong> of the personal data that we hold about you.</li>
              <li style={{ marginBottom: "8px" }}><strong>Request erasure</strong> of your personal data.</li>
              <li style={{ marginBottom: "8px" }}><strong>Object to processing</strong> of your personal data.</li>
              <li style={{ marginBottom: "8px" }}><strong>Request restriction of processing</strong> of your personal data.</li>
              <li style={{ marginBottom: "8px" }}><strong>Request the transfer</strong> of your personal data to you or to a third party.</li>
            </ul>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>5. Contact Information</h3>
            <p style={{ marginBottom: "24px" }}>
              If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: "var(--accent)", textDecoration: "none" }}>{email}</a></li>
              <li style={{ marginBottom: "8px" }}><strong>Entity Name:</strong> Admetta</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
