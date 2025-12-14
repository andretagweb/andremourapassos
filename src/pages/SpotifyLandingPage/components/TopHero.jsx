import React from "react";
import { styles } from "../styles/layout";

export default function TopHero({ t, onListen }) {
  return (
    <div style={styles.hero}>
      <img
        src="/images/adslogo-min.png"
        alt="Same Bloods Cocktail"
        style={styles.logo}
      />

      <h1 style={styles.title}>Same Bloods Cocktail</h1>

      <p style={styles.description}>
        {t("page_description")}
      </p>

      <a
        href="https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y"
        target="_blank"
        rel="noreferrer"
        onClick={onListen}
        style={styles.cta}
      >
        🎧 {t("button")}
      </a>
    </div>
  );
}
