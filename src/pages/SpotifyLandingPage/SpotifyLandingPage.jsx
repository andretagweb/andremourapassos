import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "../../shared/locales/i18n";
import "./styles/index.css";

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

  const [showTopButton, setShowTopButton] = useState(false);

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
  const ogImage = `${window.location.origin}/images/adslogo-min.webp`;

  // 👇 MOSTRAR APENAS O BOTÃO APÓS SCROLL
  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ FIX DEFINITIVO DO BUG DA BARRA DO NAVEGADOR (MOBILE)
  useEffect(() => {
    if (!window.visualViewport) return;

    const vv = window.visualViewport;

    const syncViewport = () => {
      document.documentElement.style.setProperty("--vvh", `${vv.height}px`);
      document.documentElement.style.setProperty("--vvt", `${vv.offsetTop}px`);
    };

    syncViewport();
    vv.addEventListener("resize", syncViewport);
    vv.addEventListener("scroll", syncViewport);

    return () => {
      vv.removeEventListener("resize", syncViewport);
      vv.removeEventListener("scroll", syncViewport);
    };
  }, []);

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

      <div style={styles.topBar}>
        <button
          onClick={goTop}
          aria-label="Home"
          style={{
            ...styles.homeButton,
            opacity: showTopButton ? 1 : 0,
            transform: showTopButton ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.70s ease, transform 0.80s ease",
            pointerEvents: showTopButton ? "auto" : "none",
          }}
        >
          <FaChevronUp />
        </button>

        <LanguageSwitcher onChange={changeLanguage} />
      </div>

      <div style={styles.page}>
        <div style={styles.heroWrapper}>
          <div style={styles.heroStage}>
            <div className="heroText" style={styles.heroText}>
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
