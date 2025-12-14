import React from "react";
import { styles } from "../styles/layout";
import PlatformButtons from "./PlatformButtons";

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

      <PlatformButtons onSpotifyClick={onListen} />
    </div>
  );
}
