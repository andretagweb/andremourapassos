import React from "react";
import { singles } from "../data/singles";
import { styles } from "../styles/layout";
import MediaIconLinks from "./MediaIconLinks";

export default function SinglesSection() {
  return (
    <div style={{ ...styles.sectionWrap, marginTop: "5rem" }}>
      <h2 style={styles.sectionTitle}>Singles</h2>

      <div style={styles.grid}>
        {singles.map((single) => (
          <div key={single.id} style={styles.card}>
            <img src={single.cover} alt={single.title} style={styles.cardImage} />
            <h3 style={{ marginTop: "0.8rem" }}>{single.title}</h3>

            <MediaIconLinks links={single.links} only={["spotify", "apple", "youtube"]} />
          </div>
        ))}
      </div>
    </div>
  );
}
