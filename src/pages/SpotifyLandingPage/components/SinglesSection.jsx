import React from "react";
import { singles } from "../data/singles";
import { styles } from "../styles/layout";
import MediaIconLinks from "./MediaIconLinks";

export default function SinglesSection({ t }) {
  return (
    <div style={{ ...styles.sectionWrap, marginTop: "5rem" }}>
      <h2 style={styles.sectionTitle}>{t("singlesSectionTitle")}</h2>
      <div style={styles.grid}>
        {singles.map((single) => (
          <div key={single.id} style={styles.card}>
            <img src={single.cover} alt={single.title} style={styles.cardImage} />
            <h3 className="special-elite-regular"
              style={{ marginTop: "1rem", marginBottom: "0.3rem" }}>{single.title}</h3>
            <p className="special-elite-regular"
              style={styles.cardSubtitle}>
              {single.subtitle ? `${single.subtitle} • ` : ""} {single.month}{"/"}{single.year}
            </p>
            {/*<MediaIconLinks links={single.links} />*/}
          </div>
        ))}
      </div>
    </div>
  );
}
