import React from "react";
import { styles } from "../styles/layout";
import PlatformButtons from "./PlatformButtons";

export default function TopHero({ t, onListen }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.hero}>
      <img
        src="/images/adslogo-min.png"
        alt="Same Bloods Cocktail"
        style={
          isMobile
            ? { ...styles.logo, width: 90, height: 90 }
            : styles.logo
        }
      />

      <h1
        style={
          isMobile
            ? { ...styles.title, fontSize: "2rem" } // metade
            : styles.title // 🔒 desktop intocado
        }
      >
        Same Bloods Cocktail
      </h1>

      <p
  style={
    isMobile
      ? {
          ...styles.description
        }
      : styles.description
  }
>
  {t("page_description")}
</p>

<p
  style={
    isMobile
      ? {
          ...styles.description
        }
      : styles.description
  }
>
  {t("page_description_2")}
</p>


      <PlatformButtons onSpotifyClick={onListen} />
    </div>
  );
}
