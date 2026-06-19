import React from "react";
import SEO from "../components/SEO";
import CtaBand from "../components/CtaBand";
import GrowthSquad from "../components/GrowthSquad";
import OurClients from "../components/OurClients";
import { img } from "../constants";
import asifImg from "../assets/css/asif admetta.PNG";
import asifImgWebp from "../assets/css/asif admetta.webp";

export default function About() {

  return (
    <>
      <SEO 
        title="About Us | Admetta"
        description="Learn about Admetta, our visionary team, and how we shape brands with clarity and voltage."
        path="/about"
      />
      <section className="page-hero" style={{ minHeight: "auto", padding: "clamp(40px, 10vw, 80px) 0 20px" }}>
        <div className="container reveal">
          <p className="eyebrow" style={{ marginBottom: "clamp(8px, 2vw, 16px)", fontSize: "clamp(10px, 2vw, 14px)" }}>About Us</p>
          <h1 style={{ fontSize: "clamp(32px, 8.5vw, 100px)", lineHeight: "1.1", marginBottom: "clamp(12px, 3vw, 24px)", color: "#ffffff", letterSpacing: "-0.02em", fontWeight: "400" }}>
            We shape brands with clarity and voltage.
          </h1>
          <p style={{ fontSize: "clamp(14px, 3.5vw, 18px)", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.5" }}>
            Admetta partners with ambitious businesses to build visual systems, interactive websites, and campaign engines that stand out in crowded markets.
          </p>
        </div>
      </section>

      <style>{`
        #founder-section {
          background: #000000 !important;
          position: relative;
          overflow: hidden;
        }
        #founder-section .img-wrapper {
          position: relative;
        }
        
        #founder-section .quote-block {
          border-left: 2px solid var(--accent);
          padding-left: 20px;
          margin-bottom: 24px;
        }

        #founder-section .stats-box {
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 16px;
        }

        @media (max-width: 900px) {
          #founder-section {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          #founder-section .container.two-column {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0 !important;
          }
          #founder-section .content-wrapper {
            display: contents !important;
          }
          #founder-section .top-text {
            order: 1;
            margin-bottom: 16px !important;
            z-index: 2;
            position: relative;
          }
          #founder-section .img-wrapper {
            order: 2;
            width: 100%;
            margin-right: 0;
            margin-bottom: 0 !important;
            display: flex;
            justify-content: center;
            z-index: 1;
            position: relative;
          }
          #founder-section .img-wrapper img {
            width: 65% !important;
            max-width: 250px !important;
            height: 240px !important;
            object-fit: cover !important;
            object-position: top center !important;
            margin: 0 auto;
            -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          }
          #founder-section .quote-block {
            order: 3;
            margin-bottom: 16px !important;
          }
          #founder-section .link-block {
            order: 4;
            margin-bottom: 24px !important;
          }
          #founder-section .stats-box {
            order: 5;
            padding: 16px !important;
            margin-top: 0 !important;
            width: 100%;
          }
        }
      `}</style>
      <section id="founder-section" className="section section-dark" style={{ paddingTop: "0px", paddingBottom: "20px" }}>
        <div className="container two-column" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", alignItems: "center", gap: "clamp(32px, 5vw, 60px)" }}>
          <div className="reveal content-wrapper" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            <div className="top-text" style={{ marginBottom: "24px" }}>
              <div style={{ marginBottom: "24px" }}>
                <p style={{ color: "var(--muted)", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "600" }}>FOUNDER & CEO</p>
                <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }}></div>
              </div>
              
              <h2 style={{ fontSize: "clamp(48px, 8vw, 80px)", lineHeight: "1", marginBottom: "16px", fontWeight: "300", color: "#ffffff", letterSpacing: "-0.03em" }}>
                Asif
              </h2>
              
              <p style={{ fontSize: "clamp(16px, 3vw, 24px)", color: "rgba(255,255,255,0.85)", lineHeight: "1.4", margin: "0", fontWeight: "300" }}>
                Designing iconic brands.<br />Building lasting impact.
              </p>
            </div>

            <div className="quote-block">
              <p style={{ fontSize: "clamp(14px, 3vw, 18px)", color: "var(--muted)", fontStyle: "italic", lineHeight: "1.6", margin: "0", maxWidth: "480px" }}>
                Great brands aren't built to be noticed.<br />They're built to be remembered.
              </p>
            </div>



            <div className="stats-box">
              <div style={{ flex: "1 1 0", textAlign: "center" }}>
                <h3 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: "500", color: "#ffffff", margin: "0 0 4px 0", lineHeight: 1 }}>10+</h3>
                <p style={{ fontSize: "clamp(10px, 2.5vw, 12px)", color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Years Experience</p>
              </div>
              <div className="stats-divider" style={{ width: "1px", height: "32px", backgroundColor: "rgba(255,255,255,0.15)" }}></div>
              <div style={{ flex: "1 1 0", textAlign: "center" }}>
                <h3 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: "500", color: "#ffffff", margin: "0 0 4px 0", lineHeight: 1 }}>250+</h3>
                <p style={{ fontSize: "clamp(10px, 2.5vw, 12px)", color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Projects Delivered</p>
              </div>
              <div className="stats-divider" style={{ width: "1px", height: "32px", backgroundColor: "rgba(255,255,255,0.15)" }}></div>
              <div style={{ flex: "1 1 0", textAlign: "center" }}>
                <h3 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: "500", color: "#ffffff", margin: "0 0 4px 0", lineHeight: 1 }}>50+</h3>
                <p style={{ fontSize: "clamp(10px, 2.5vw, 12px)", color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>Global Clients</p>
              </div>
            </div>
          </div>
          
          <div className="reveal img-wrapper" style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
              <picture style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <source srcSet={asifImgWebp} type="image/webp" />
                <img
                  src={asifImg}
                  alt="Asif, Founder & CEO"
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    display: "block", 
                    width: "100%", 
                    aspectRatio: "1/1", 
                    objectFit: "cover", 
                    objectPosition: "top center", 
                    borderRadius: "16px" 
                  }}
                />
              </picture>
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60%",
                background: "linear-gradient(to top, var(--bg, #080510) 0%, rgba(8,5,16,0) 100%)",
                borderRadius: "0 0 16px 16px",
                pointerEvents: "none"
              }} />
            </div>
          </div>
        </div>
      </section>

      <GrowthSquad />

      <OurClients />

      <CtaBand title="Let’s build the brand people remember." />
    </>
  );
}
