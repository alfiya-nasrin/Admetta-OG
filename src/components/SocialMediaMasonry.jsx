import React, { useState, useEffect } from "react";
import { posters } from "../constants/posters";
import styles from "./SocialMediaMasonry.module.css";

// Stagger offsets per column index — creates the Pinterest "collage" look
// where each column starts at a different vertical position
const COL_OFFSETS = [0, 0, 0, 0, 0, 0];

// Different scroll speeds per column for organic asymmetric flow
const COL_DURATIONS = [38, 44, 36, 48, 40, 42];

export default function SocialMediaMasonry() {
  const [columnsCount, setColumnsCount] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1400) {
        setColumnsCount(6);
      } else if (width > 1024) {
        setColumnsCount(5);
      } else if (width > 768) {
        setColumnsCount(3);
      } else if (width > 480) {
        setColumnsCount(2);
      } else {
        setColumnsCount(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute posters round-robin into N columns
  const columns = Array.from({ length: columnsCount }, () => []);
  posters.forEach((poster, idx) => {
    columns[idx % columnsCount].push(poster);
  });

  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />
      <div className={styles.gridOverlay} />

      {/* Full-bleed masonry wall */}
      <div className={styles.wallWrapper}>


        <div
          className={styles.masonryGrid}
          style={{ "--cols": columnsCount }}
        >
          {columns.map((columnItems, colIdx) => {
            const isEven = colIdx % 2 === 0;
            // Triple items to ensure seamless infinite loop
            const trackItems = [
              ...columnItems,
              ...columnItems,
              ...columnItems,
            ];
            const offsetY = COL_OFFSETS[colIdx % COL_OFFSETS.length];
            const duration = COL_DURATIONS[colIdx % COL_DURATIONS.length];

            return (
              <div
                key={`col-${colIdx}`}
                className={styles.masonryColumn}
                style={{
                  // Stagger each column's starting position — THIS is the key to
                  // Pinterest/masonry look. Positive = column starts lower,
                  // Negative = column starts higher in the viewport.
                  marginTop: `${offsetY}px`,
                }}
              >
                <div
                  className={styles.columnTrack}
                >
                  {trackItems.map((poster, itemIdx) => (
                    <article
                      key={`col-${colIdx}-item-${itemIdx}`}
                      className={styles.card}
                    >
                      <div className={styles.cardImageWrapper}>
                        <img
                          src={poster.src}
                          alt={poster.title}
                          className={styles.cardImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.cardOverlay}>
                        <span className={styles.cardCategory}>
                          Social Creative
                        </span>
                        <h4 className={styles.cardTitle}>{poster.title}</h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
