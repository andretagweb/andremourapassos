import React from "react";
import { singles } from "../data/singles";
import { styles } from "../styles/layout";

export default function SinglesSection({ t }) {
  return (
    <div style={{ ...styles.sectionWrap, marginTop: "2.5rem" }}>
      <h2 style={styles.sectionTitle}>{t("singlesSectionTitle")}</h2>

      <div style={styles.gridCompact}>
        {singles.map((single) => (
          <div key={single.id} style={styles.card}>
            <img
              src={single.cover}
              alt={single.title}
              style={styles.cardImage}
            />

            <h3
              className="special-elite-regular"
              style={{ marginTop: "0.8rem", marginBottom: "0.25rem" }}
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
