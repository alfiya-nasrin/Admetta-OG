import React, { useState, useEffect, useMemo } from "react";
import { posters } from "../constants/posters";
import styles from "./PosterMasonry.module.css";

const COLUMN_OFFSETS_5 = [100, 0, 72, 0, 100];
const COLUMN_OFFSETS_4 = [95, 0, 95, 0];
const COLUMN_OFFSETS_3 = [80, 0, 80];
const COLUMN_OFFSETS_2 = [70, 0];

// 3 posters per column × 5 cols = 15
const LAYOUT_BY_COLUMN_COUNT = {
  5: [
    ["happiness-box", "vivo-v70", "ramadan-ballathe"],
    ["lenrah-easter", "lenrah-labour", "ramadan-mobile"],
    ["mobile-eid", "samsung-mobile", "mocca-labour"],
    ["dripz-summer", "koottandain-best", "vivo-v70-accent"],
    ["addis-eid", "vishu-lenrah", "koottanad-happyaan"],
  ],
  4: [
    ["happiness-box", "vivo-v70", "ramadan-ballathe", "ramadan-mobile"],
    ["lenrah-easter", "lenrah-labour", "koottandain-best", "vivo-v70-accent"],
    ["mobile-eid", "samsung-mobile", "mocca-labour", "dripz-summer"],
    ["addis-eid", "vishu-lenrah", "koottanad-happyaan"],
  ],
  3: [
    ["happiness-box", "vivo-v70", "lenrah-easter", "ramadan-ballathe", "lenrah-labour"],
    ["mobile-eid", "samsung-mobile", "mocca-labour", "dripz-summer", "koottandain-best"],
    ["addis-eid", "vishu-lenrah", "koottanad-happyaan", "ramadan-mobile", "vivo-v70-accent"],
  ],
  2: [
    ["happiness-box", "vivo-v70", "lenrah-easter", "mobile-eid", "mocca-labour", "samsung-mobile", "ramadan-ballathe", "vivo-v70-accent"],
    ["dripz-summer", "koottanad-happyaan", "koottandain-best", "lenrah-labour", "addis-eid", "vishu-lenrah", "ramadan-mobile"],
  ],
};

const CROP_POSITIONS = [
  "center 20%",
  "center top",
  "center 18%",
  "center center",
  "center 15%",
  "center 25%",
];

function getOffsets(columnCount) {
  switch (columnCount) {
    case 5:
      return COLUMN_OFFSETS_5;
    case 4:
      return COLUMN_OFFSETS_4;
    case 3:
      return COLUMN_OFFSETS_3;
    default:
      return COLUMN_OFFSETS_2;
  }
}

function buildColumns(columnCount) {
  const layout = LAYOUT_BY_COLUMN_COUNT[columnCount];
  if (!layout) {
    const columns = Array.from({ length: columnCount }, () => []);
    posters.forEach((poster, idx) => columns[idx % columnCount].push(poster));
    return columns;
  }

  const byId = Object.fromEntries(posters.map((p) => [p.id, p]));
  return layout.map((ids) => ids.map((id) => byId[id]).filter(Boolean));
}

function getColumnCount(width) {
  if (width < 480) return 2;
  if (width < 768) return 3;
  if (width < 1200) return 4;
  return 5;
}

function getCrop(poster, colIndex, cardIdx) {
  if (poster.crop) return poster.crop;
  return CROP_POSITIONS[(colIndex + cardIdx) % CROP_POSITIONS.length];
}

export default function PosterMasonry() {
  const [columnCount, setColumnCount] = useState(5);

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = useMemo(() => buildColumns(columnCount), [columnCount]);
  const offsets = getOffsets(columnCount);

  return (
    <section
      className={styles.section}
      aria-label="Social media poster portfolio"
      data-cols={columnCount}
    >
      <div className={styles.grid}>
        {columns.map((columnItems, colIndex) => {
          const offset = offsets[colIndex] ?? 0;

          return (
            <div
              key={`col-${colIndex}`}
              className={styles.column}
              style={{ marginTop: `${offset}px` }}
            >
              {columnItems.map((poster, cardIdx) => (
                <article key={poster.id} className={styles.card}>
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className={styles.cardImage}
                    loading="lazy"
                    style={{ objectPosition: getCrop(poster, colIndex, cardIdx) }}
                  />
                </article>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
