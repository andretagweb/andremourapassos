import React from "react";
import { albums } from "../data/albums";
import { styles } from "../styles/layout";
import MediaIconLinks from "./MediaIconLinks";

export default function AlbumsSection({ t }) {
  return (
    <div style={styles.sectionWrap}>
      <h2 style={styles.sectionTitle}>{t("albumsSectionTitle")}</h2>
      <div style={styles.grid}>
        {albums.map((album) => (
          <div key={album.id} style={styles.card}>
            <img src={album.cover} alt={album.title} style={styles.cardImage} />
            <h3 className="special-elite-regular"
              style={{ marginTop: "1rem", marginBottom: "0.3rem" }}>{album.title}</h3>
            <p style={styles.cardSubtitle} className="special-elite-regular">
              {album.subtitle ? `${album.subtitle} • ` : ""} {album.month}{"/"}{album.year}
            </p>
            {/*<MediaIconLinks links={album.links} />*/}
          </div>
        ))}
      </div>
    </div>
  );
}
