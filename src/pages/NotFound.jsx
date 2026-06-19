import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found | Admetta"
        description="The page you are looking for does not exist on Admetta."
        path="*"
      />
      <section className={styles.notFoundSection}>
      <div className={styles.container}>
        <div className={styles.glowOverlay}></div>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Lost in space.</h2>
          <p className={styles.description}>
            We can't seem to find the page you're looking for. It might have been moved or deleted.
          </p>
          <Link to="/" className={styles.backButton}>
            <span>Back to Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
