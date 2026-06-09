import React from "react";
import { TEAM_MEMBERS } from "../constants/team";
import styles from "./GrowthSquad.module.css";

const PLACEMENT = {
  asif: styles.cardAsif,
  nashana: styles.cardNashana,
  salman: styles.cardSalman,
  shabana: styles.cardShabana,
  shamal: styles.cardShamal,
  sulfa: styles.cardSulfa,
};

function TeamCard({ member }) {
  return (
    <figure className={`${styles.card} ${PLACEMENT[member.id]}`}>
      <img
        src={member.image}
        alt={member.alt}
        className={styles.photo}
        width={member.width}
        height={member.height}
        decoding="async"
        loading="lazy"
      />
    </figure>
  );
}

export default function TeamPyramid({ compact = false, className = "" }) {
  return (
    <div
      className={`${styles.pyramid} ${compact ? styles.pyramidCompact : ""} ${className}`.trim()}
    >
      {TEAM_MEMBERS.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
