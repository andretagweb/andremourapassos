import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "../../shared/locales/i18n";

import SEO from "../../shared/components/common/SEO";
import { FaChevronUp } from "react-icons/fa";

import { styles } from "./styles/layout";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextManifest from "./components/TextManifest";
import PlatformButtons from "./components/PlatformButtons";
import AlbumsSection from "./components/AlbumsSection";
import SinglesSection from "./components/SinglesSection";
import FooterSocials from "./components/FooterSocials";
import CocktailBackground from "./components/CocktailBackground";

export default function SpotifyLandingPage() {
  const { t, i18n } = useTranslation("hotsite");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const langFromPath = location.pathname.split("/")[1];
    if (["pt", "en", "es"].includes(langFromPath) && i18n.language !== langFromPath) {
      i18n.changeLanguage(langFromPath);
    }
  }, [location.pathname, i18n]);

  const changeLanguage = (lng) => {
    const parts = location.pathname.split("/");
    if (["pt", "en", "es"].includes(parts[1])) parts[1] = lng;
    else parts.splice(1, 0, lng);

    i18n.changeLanguage(lng);
    navigate(parts.join("/"));
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const canonical = `${window.location.origin}${location.pathname}${location.search}`;
  const ogImage = `${window.location.origin}/images/adslogo-min.png`;

  return (
    <>
      <SEO
        title={t("title")}
        description={t("description")}
        keywords={t("keywords")}
        canonical={canonical}
        ogTitle={t("title")}
        ogDescription={t("description")}
        ogType="website"
        ogUrl={canonical}
        ogImage={ogImage}
        twitterCard="summary_large_image"
        twitterTitle={t("title")}
        twitterDescription={t("description")}
        twitterImage={ogImage}
      />

      <div style={styles.page}>
        <div style={styles.topBar}>
          <button
            onClick={goTop}
            style={styles.homeButton}
            title="Home"
            aria-label="Home"
          >
            <FaChevronUp />
          </button>

          <LanguageSwitcher onChange={changeLanguage} />
        </div>

        {/* 🔥 HERO COM VIEWPORT REAL */}
        <div style={styles.heroWrapper}>
          <div style={styles.heroStage}>
            <div style={styles.heroText}>
              <TextManifest t={t} />
            </div>

            <CocktailBackground>
              <PlatformButtons />
            </CocktailBackground>
          </div>
        </div>

        <div style={styles.scrollSpacer} />

        <AlbumsSection t={t} />
        <SinglesSection t={t} />

        <FooterSocials t={t} />
      </div>
    </>
  );
}
