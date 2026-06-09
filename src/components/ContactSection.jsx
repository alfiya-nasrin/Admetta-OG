import React, { useState } from "react";
import { email, whatsappUrl, services } from "../constants";

export default function ContactSection({ id }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await new Promise((r) => setTimeout(r, 500));
      setStatus("Message sent! (no backend)");
      form.reset();
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id={id}
      className="section light-section"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container contact-grid">
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor={`${id || "contact"}-name`}>Name</label>
            <input
              id={`${id || "contact"}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor={`${id || "contact"}-email`}>Email</label>
            <input
              id={`${id || "contact"}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor={`${id || "contact"}-phone`}>Phone</label>
            <input
              id={`${id || "contact"}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </div>
          <div className="field">
            <label htmlFor={`${id || "contact"}-service`}>Service Interested In</label>
            <select id={`${id || "contact"}-service`} name="service" required>
              <option value="">Select a service</option>
              {services.map(([title]) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="field field-full">
            <label htmlFor={`${id || "contact"}-message`}>Message</label>
            <textarea
              id={`${id || "contact"}-message`}
              name="message"
              rows="6"
              required
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={loading}
            style={{ border: "none" }}
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
          {status && (
            <p
              className="form-success show"
              role="status"
              style={{
                color: "var(--accent)",
                fontWeight: "600",
                marginTop: "12px",
              }}
            >
              {status}
            </p>
          )}
        </form>
        <aside className="contact-info reveal">
          <h2 id={id ? `${id}-heading` : undefined}>Let’s connect.</h2>
          <p style={{ marginBottom: "32px" }}>
            For project inquiries, collaborations, and brand growth conversations.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span style={{ color: "var(--accent)", fontSize: "18px" }}>✉</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="contact-detail-item">
              <span style={{ color: "var(--accent)", fontSize: "18px" }}>💬</span>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Click-to-Chat
              </a>
            </div>
          </div>

          <div className="map-placeholder">
            <iframe title="Google Maps placeholder for Admetta office location" src="about:blank" />
            <div
              style={{
                padding: "16px",
                fontSize: "14px",
                color: "var(--muted)",
                background: "rgba(0,0,0,0.2)",
                borderTop: "1px solid var(--primary)",
              }}
            >
              Office Location // Bangalore, India
            </div>
          </div>
          <div className="socials" style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              IG
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LN
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              FB
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
