import React from "react";
import { Link } from "react-router-dom";
import { email, whatsappUrl, img } from "../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <img className="brand-logo" src={img("admetta-logo.svg")} alt="Admetta Logo" style={{ height: "28px", width: "auto" }} />
          </Link>
          <p style={{ marginTop: "16px", marginBottom: "24px", color: "var(--muted)" }}>Bold strategy. Vibrant creativity.</p>
          <div className="socials" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href="https://www.instagram.com/admetta.com_?igsh=NjlrdXB0YnEwYjY4" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12.031 0C5.385 0 .015 5.37.015 12.016c0 2.126.554 4.195 1.603 6.012L.014 24l6.115-1.603a11.967 11.967 0 0 0 5.902 1.559h.005c6.645 0 12.016-5.37 12.016-12.016C24.053 5.385 18.676 0 12.031 0zm0 21.968h-.003a9.92 9.92 0 0 1-5.064-1.378l-.363-.215-3.766.987.997-3.67-.236-.375a9.94 9.94 0 0 1-1.522-5.301c0-5.5 4.475-9.975 9.978-9.975 5.502 0 9.975 4.475 9.975 9.975 0 5.501-4.473 9.974-9.975 9.974h-.021zm5.474-7.48c-.3-.15-1.776-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.952 1.176-.176.201-.352.226-.652.076-.3-.15-1.268-.468-2.417-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.02-.463.13-.613.136-.136.3-.35.45-.526.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.626-.926-2.226-.244-.585-.492-.505-.676-.514-.176-.01-.376-.01-.576-.01-.2 0-.526.075-.801.375-.276.3-1.052 1.026-1.052 2.502 0 1.476 1.077 2.902 1.227 3.102.15.2 2.115 3.228 5.12 4.528.715.31 1.272.495 1.706.634.717.228 1.368.196 1.884.119.578-.087 1.776-.726 2.026-1.426.25-.7.25-1.301.176-1.426-.075-.126-.276-.201-.576-.351z"/></svg>
            </a>

          </div>
        </div>
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-column-links">
            <Link to="/about" className="footer-link-item">
              <span>About</span> 
              <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
            </Link>
            <Link to="/contact" className="footer-link-item">
              <span>Contact</span> 
              <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
            </Link>
            <Link to="/privacy-policy" className="footer-link-item">
              <span>Privacy Policy</span> 
              <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
            </Link>
            <Link to="/terms" className="footer-link-item">
              <span>Terms & Conditions</span> 
              <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Let's Connect</h3>
          <div className="footer-column-contact">
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <span>© 2025 Admetta. All rights reserved.</span>
          <button type="button" className="footer-scroll-top" onClick={scrollToTop} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: "inherit" }}>
            Back to Top <span style={{ marginLeft: "4px" }} aria-hidden="true">&#8593;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
