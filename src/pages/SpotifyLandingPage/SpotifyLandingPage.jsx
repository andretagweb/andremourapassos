import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "../../shared/locales/i18n";

import SEO from "../../shared/components/common/SEO";
import { FaHome } from "react-icons/fa";

import { styles } from "./styles/layout";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TopHero from "./components/TopHero";
import AlbumsSection from "./components/AlbumsSection";
import SinglesSection from "./components/SinglesSection";
import FooterSocials from "./components/FooterSocials";
import CocktailBackground from "./components/CocktailBackground";

export default function SpotifyLandingPage() {
  const { t, i18n } = useTranslation("spotify");
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

  const handleListen = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-993081860/jTnRCMm_mLsaEIT0xNkD",
        value: 1.0,
        currency: "BRL",
      });
    }
  };

  const changeLanguage = (lng) => {
    const parts = location.pathname.split("/");
    if (["pt", "en", "es"].includes(parts[1])) parts[1] = lng;
    else parts.splice(1, 0, lng);

    i18n.changeLanguage(lng);
    navigate(parts.join("/"));
  };

  const goToHome = () => {
    const lang = location.pathname.split("/")[1];
    navigate(["pt", "en", "es"].includes(lang) ? `/${lang}` : "/");
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
  {/* Background decorativo limitado */}
  <div style={styles.backgroundStage}>
    <CocktailBackground />
  </div>

  {/* Barra fixa */}
  <div style={styles.topBar}>
    <button
      onClick={goToHome}
      style={styles.homeButton}
      title="Home"
      aria-label="Home"
    >
      <FaHome />
    </button>

    <LanguageSwitcher onChange={changeLanguage} />
  </div>

  {/* HERO */}
  <TopHero t={t} onListen={handleListen} />

  <div style={styles.scrollSpacer} />

  <SinglesSection />
  <AlbumsSection />

  {/* Footer fora da área artística */}
  <FooterSocials />
</div>

    </>
  );
}
