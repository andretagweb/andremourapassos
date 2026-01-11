import React from "react";
import { singles } from "../data/singles";
import { styles } from "../styles/layout";

export default function SinglesSection({ t }) {
  return (
    <div style={{ ...styles.sectionWrap, paddingTop: "1.5rem" }}>
      <h2 style={styles.sectionTitle}>{t("singlesSectionTitle")}</h2>

      <div style={styles.verticalListRight}>
        {singles.map((single) => (
          <div
            key={single.id}
            style={styles.singleItem}
            className="album-card"
          >
            <img
              src={single.cover}
              alt={single.title}
              style={styles.cardImage}
              loading="lazy"
              decoding="async"
            />

            <h3
              className="special-elite-regular"
              style={{ marginBottom: "0.25rem", fontSize: "0.95rem" }}
            >
              {single.title}
            </h3>

            <p
              className="special-elite-regular"
              style={styles.cardSubtitleCompact}
            >
              {single.subtitle ? `${single.subtitle} • ` : ""}
              {single.month}/{single.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
