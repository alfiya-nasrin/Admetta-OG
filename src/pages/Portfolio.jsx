import React from "react";
import SEO from "../components/SEO";
import PosterMasonry from "../components/PosterMasonry";

export default function Portfolio() {
  return (
    <>
      <SEO 
        title="Our Work | Admetta"
        description="View our portfolio of bold digital branding, high-performing websites, and advertising campaigns."
        path="/portfolio"
      />

      <PosterMasonry />

    </>
  );
}
