import React from "react";
import { Link } from "react-router-dom";

export default function CtaBand({ title, label = "Get In Touch" }) {
  return (
    <section className="cta-band" style={{ padding: "clamp(20px, 5vw, 60px) 0" }}>
      <div className="container cta-inner reveal">
        <h2 style={{ fontWeight: 400 }}>{title}</h2>
        <Link className="btn btn-primary" to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          {label} <span style={{ fontSize: "1.2em", lineHeight: 1 }}>&#8594;</span>
        </Link>
      </div>
    </section>
  );
}
