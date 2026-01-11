import React from "react";
import { albums } from "../data/albums";
import { styles } from "../styles/layout";

export default function AlbumsSection({ t }) {
  return (
    <div style={styles.sectionWrap}>
      <h2 style={styles.sectionTitle}>{t("albumsSectionTitle")}</h2>

      <div style={styles.verticalListRight}>
        {albums.map((album) => (
          <div
            key={album.id}
            style={styles.albumItem}
            className="album-card"
          >
            <img
              src={album.cover}
              alt={album.title}
              style={styles.cardImage}
              loading="lazy"
              decoding="async"
            />

            <h3
              className="special-elite-regular"
              style={{ marginBottom: "0.25rem", fontSize: "0.95rem" }}
            >
              {album.title}
            </h3>

            <p
              className="special-elite-regular"
              style={styles.cardSubtitle}
            >
              {album.subtitle ? `${album.subtitle} • ` : ""}
              {album.month}/{album.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
