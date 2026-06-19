import React from "react";
import styles from "./OurClients.module.css";

const standardImages = import.meta.glob(
  "../assets/css/clientlogos/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const webpImages = import.meta.glob(
  "../assets/css/clientlogos/*.webp",
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

const allLogos = Object.entries(standardImages)
  .map(([path, mod]) => {
    const filename = path.split("/").pop();
    const basename = filename.replace(/\.[^/.]+$/, "");
    
    // Find matching webp
    const webpPath = Object.keys(webpImages).find(p => p.includes(`${basename}.webp`));
    const webpSrc = webpPath ? (webpImages[webpPath].default || webpImages[webpPath]) : null;

    return {
      id: filename,
      src: mod.default || mod,
      srcWebp: webpSrc,
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
  const basename = logo.id.replace(/\.[^/.]+$/, "").toLowerCase();
  
  let imgStyle = {};
  if (basename === "group 786") {
    // Ladies Planet
    imgStyle = { backgroundColor: "#080510", borderRadius: "12px", padding: "16px 28px" };
  } else if (basename === "edway new logo") {
    // Edway
    imgStyle = { backgroundColor: "#2d0c57", borderRadius: "99px", padding: "12px 32px" };
  } else if (basename === "phone cart") {
    // Phone Cart
    imgStyle = { backgroundColor: "#1c1c1c", borderRadius: "6px", padding: "14px 28px" };
  }

  return (
    <div className={styles.logoCell} title={logo.name} aria-label={logo.name}>
      <picture>
        {logo.srcWebp && <source srcSet={logo.srcWebp} type="image/webp" />}
        <img
          src={logo.src}
          alt={`${logo.name} logo`}
          className={styles.logoImg}
          loading="lazy"
          decoding="async"
          width="200"
          height="100"
          style={imgStyle}
        />
      </picture>
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
