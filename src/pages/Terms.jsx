import React from "react";
import SEO from "../components/SEO";
import { email } from "../constants";

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms & Conditions | Admetta"
        description="Read the Admetta Terms & Conditions to understand your rights and responsibilities."
        path="/terms"
      />
      <section className="page-hero" style={{ minHeight: "auto", padding: "clamp(60px, 15vw, 120px) 0 clamp(20px, 5vw, 40px)" }}>
        <div className="container reveal">
          <p className="eyebrow" style={{ marginBottom: "clamp(8px, 2vw, 16px)", fontSize: "clamp(10px, 2vw, 14px)" }}>Legal</p>
          <h1 style={{ fontSize: "clamp(32px, 8.5vw, 80px)", lineHeight: "1.1", marginBottom: "clamp(12px, 3vw, 24px)", color: "#ffffff", letterSpacing: "-0.02em", fontWeight: "400" }}>
            Terms & Conditions
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
              Welcome to <strong>Admetta</strong>. These terms and conditions outline the rules and regulations for the use of Admetta's Website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Admetta if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>1. Intellectual Property Rights</h3>
            <p style={{ marginBottom: "24px" }}>
              Other than the content you own, under these Terms, Admetta and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website. You must not republish, sell, rent, sub-license, reproduce, duplicate or copy material from Admetta without explicit written consent.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>2. Restrictions and User Responsibilities</h3>
            <p style={{ marginBottom: "16px" }}>You are specifically restricted from all of the following:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "8px" }}>Publishing any Website material in any other media without credit or authorization.</li>
              <li style={{ marginBottom: "8px" }}>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li style={{ marginBottom: "8px" }}>Publicly performing and/or showing any Website material.</li>
              <li style={{ marginBottom: "8px" }}>Using this Website in any way that is or may be damaging to this Website.</li>
              <li style={{ marginBottom: "8px" }}>Using this Website in any way that impacts user access to this Website.</li>
              <li style={{ marginBottom: "8px" }}>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
              <li style={{ marginBottom: "8px" }}>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website.</li>
            </ul>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>3. No Warranties</h3>
            <p style={{ marginBottom: "24px" }}>
              This Website is provided "as is," with all faults, and Admetta expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>4. Limitation of Liability</h3>
            <p style={{ marginBottom: "24px" }}>
              In no event shall Admetta, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Admetta, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>5. Indemnification</h3>
            <p style={{ marginBottom: "24px" }}>
              You hereby indemnify to the fullest extent Admetta from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>6. Severability</h3>
            <p style={{ marginBottom: "24px" }}>
              If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>7. Variation of Terms</h3>
            <p style={{ marginBottom: "24px" }}>
              Admetta is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>

            <h3 style={{ color: "#ffffff", marginTop: "40px", marginBottom: "16px", fontSize: "24px" }}>8. Contact Information</h3>
            <p style={{ marginBottom: "24px" }}>
              If you have any inquiries regarding these Terms and Conditions, please contact us at:
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
