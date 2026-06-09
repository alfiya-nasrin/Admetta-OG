import React from "react";
import styles from "./OurClients.module.css";

const imageModules = import.meta.glob(
  "../assets/css/clientlogos/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

const NAME_BY_FILE = {
  ballathe: "Ballathe",
  bluechip: "Bluechip",
  calyx: "Calyx",
  futurefair: "Future Fair",
  loot: "Loot",
  mobilegallery: "Mobile Gallery",
  mocca: "Mocca",
  oldrivive: "Revive",
  mishel: "Mishel",
  "phone cart": "Phone Cart",
  "lenrah primary logo": "Lenrah",
  "lekshmi time house logo-2": "Lekshmi Time House",
  "edway new logo": "Edway",
  "group 786": "Group 786",
  "cd507af1-6b6f-46f3-b23f-4ca805077e33": "Aurelia",
};

const COLS = 5;

function formatBrandName(filename) {
  const key = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .toLowerCase()
    .trim();

  if (NAME_BY_FILE[key]) return NAME_BY_FILE[key];

  return key
    .replace(/new|logo|design|copy|fa/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const allLogos = Object.entries(imageModules)
  .map(([path, mod]) => {
    const filename = path.split("/").pop();
    return {
      id: filename,
      src: mod.default || mod,
      name: formatBrandName(filename),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// 5 columns × 3 rows — each row has 5 unique logos, duplicated only for seamless loop
const row1 = allLogos.slice(0, COLS);
const row2 = allLogos.slice(COLS, COLS * 2);
const row3 = allLogos.slice(COLS * 2, COLS * 3);

const MARQUEE_ROWS = [
  { track: [...row1, ...row1], direction: "left" },
  { track: [...row2, ...row2], direction: "right" },
  { track: [...row3, ...row3], direction: "left" },
];

function LogoCell({ logo }) {
  return (
    <div className={styles.logoCell} title={logo.name} aria-label={logo.name}>
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        className={styles.logoImg}
        loading="lazy"
      />
    </div>
  );
}

export default function OurClients() {
  return (
    <section className={styles.section} aria-labelledby="our-clients-heading">
      <div className={styles.container}>
        <h2 id="our-clients-heading" className={styles.heading}>
          Our Clients
        </h2>
      </div>

      <div className={styles.marqueeContainer}>
        {MARQUEE_ROWS.map(({ track, direction }, rowIndex) => (
          <div key={`row-${rowIndex}`} className={styles.marqueeWrapper}>
            <div
              className={`${styles.marqueeTrack} ${
                direction === "left" ? styles.trackLeft : styles.trackRight
              }`}
            >
              {track.map((logo, idx) => (
                <LogoCell
                  key={`row${rowIndex}-${logo.id}-${idx}`}
                  logo={logo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
