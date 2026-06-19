import React, { useState } from "react";
import { email, whatsappUrl, services } from "../constants";

export default function ContactSection({ id }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!selectedService) {
      setStatus("Please select a service.");
      return;
    }

    const submitter = event.nativeEvent.submitter;
    const method = submitter ? submitter.value : "email";

    const formData = new FormData(form);
    const name = formData.get("name");
    const emailStr = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    
    if (formData.get("botcheck")) {
      setStatus("Bot detected. Submission blocked.");
      return;
    }

    if (method === "whatsapp") {
      const text = `Hello Admetta, I have an inquiry!\n\n*Name:* ${name}\n*Email:* ${emailStr}\n*Phone:* ${phone}\n*Service:* ${selectedService}\n\n*Message:*\n${message}`;
      const targetUrl = `${whatsappUrl}?text=${encodeURIComponent(text)}`;
      window.open(targetUrl, "_blank");
      setStatus("Opening WhatsApp to send your message!");
      form.reset();
      setSelectedService("");
    } else {
      setLoading(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
            subject: `New Admetta Inquiry from ${name}`,
            name,
            email: emailStr,
            phone,
            service: selectedService,
            message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setStatus("Message sent successfully via email!");
          form.reset();
          setSelectedService("");
        } else {
          setStatus("Failed to send message via email. Please try WhatsApp.");
        }
      } catch (error) {
        setStatus("An error occurred. Please try WhatsApp instead.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section
      id={id}
      className="section light-section"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container contact-grid">
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
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
            <select id={`${id || "contact"}-service`} name="service" required onChange={(e) => setSelectedService(e.target.value)}>
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
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px" }}>
              <button
                className="btn btn-primary"
                type="submit"
                name="submit_method"
                value="email"
                disabled={loading}
                style={{ border: "none", flex: "1 1 auto" }}
              >
                {loading ? "Sending..." : "Send via Email"}
              </button>
              <button
                className="btn"
                type="submit"
                name="submit_method"
                value="whatsapp"
                disabled={loading}
                style={{ 
                  flex: "1 1 auto",
                  background: "transparent",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)"
                }}
              >
                Send via WhatsApp
              </button>
            </div>
            {status && (
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "14px",
                  color: status.includes("error") || status.includes("Failed") || status.includes("Please select") ? "#ff4d4d" : "#4caf50",
                  fontWeight: "500"
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


          <a href="https://maps.app.goo.gl/pUraSXDgpHudvi2L8" target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
            <div className="map-placeholder" style={{ transition: "transform 0.2s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
              <iframe title="Admetta Office Location" src="https://maps.google.com/maps?q=Edappal,+Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ pointerEvents: "none", width: "100%", height: "200px", border: "none" }} />
              <div
                style={{
                  padding: "16px",
                  fontSize: "14px",
                  color: "var(--text)",
                  background: "rgba(0,0,0,0.2)",
                  borderTop: "1px solid var(--primary)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span>Office Location // Kerala, India</span>
                <span style={{ color: "var(--accent)", fontSize: "12px", fontWeight: "bold" }}>GET DIRECTIONS ↗</span>
              </div>
            </div>
          </a>
        </aside>
      </div>
    </section>
  );
}
