import React from "react";
import { Link } from "react-router-dom";
import TeamPyramid from "./TeamPyramid";
import styles from "./HomeTeamAbout.module.css";

export default function HomeTeamAbout() {
  return (
    <section className={styles.section} aria-labelledby="home-about-heading">
      <div className={styles.inner}>
        <div className={styles.teamCol}>
          <div className={styles.sideTextWrap}>
            <span className={styles.sideText}>
              <span>TEAM</span>
              <span>ADMETTA</span>
            </span>
            <div className={styles.sideLine} />
          </div>
          <div className={styles.pyramidWrap}>
            <TeamPyramid compact />
          </div>
        </div>

        <div className={styles.aboutCol}>
          <h2 id="home-about-heading" className={styles.aboutTitle}>
            About Admetta
          </h2>
          <p className={styles.aboutText}>
            Admetta empowers businesses to grow through strategic branding,
            innovative web experiences, and performance-focused digital marketing.
            By combining creativity, technology, and data-driven strategies, we
            create impactful brand experiences that attract the right audience,
            build trust, and drive sustainable growth.
          </p>
          <Link to="/about" className={`btn btn-ghost ${styles.learnMore}`}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
