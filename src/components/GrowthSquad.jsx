import React from "react";
import TeamPyramid from "./TeamPyramid";
import styles from "./GrowthSquad.module.css";

export default function GrowthSquad() {
  return (
    <section className={styles.section} aria-labelledby="growth-squad-heading">
      <div className={styles.inner}>
        <aside className={styles.headingCol}>
          <h2 id="growth-squad-heading" className={styles.heading}>
            <span>ADMETTA</span>
            <span>Growth</span>
            <span>Squad</span>
          </h2>
          <div className={styles.headingLine} aria-hidden="true" />
        </aside>

        <div className={styles.compositionCol}>
          <TeamPyramid />
        </div>
      </div>
    </section>
  );
}
