import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import Hero from './features/Hero';

import SEO from "./shared/components/common/SEO";
import HreflangTags from "./shared/components/common/HreflangTags";

import SpotifyLandingPage from './pages/SpotifyLandingPage';

import './shared/styles/App.css';

/* ========= Hook: rastrear pageviews (GA4 + Google Ads) ========= */
function useTrackPageviews(enabled = true) {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;
    if (!window.gtag) return;

    const page_path = location.pathname + location.search + location.hash;
    const page_location = window.location.href;
    const page_title = document.title;

    // GA4
    window.gtag('config', 'G-PE0JQ12V5R', {
      page_path,
      page_title,
      page_location
    });

    // Google Ads (útil para remarketing por página)
    window.gtag('event', 'page_view', {
      send_to: 'AW-993081860',
      page_path,
      page_title,
      page_location
    });
  }, [location, enabled]);
}
/* =============================================================== */

function SiteContent() {
  return (
    <>
      <SEO />
      <HreflangTags />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lang && i18n.language.split('-')[0] !== lang) {
      i18n.changeLanguage(lang).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [lang, i18n]);

  if (loading) return null;
  return <SiteContent />;
}

function App() {
  const location = useLocation();

  // Redirecionamento inicial "/" -> idioma do navegador
  const [isDetecting, setIsDetecting] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      const userLang = (navigator.language || 'pt').split('-')[0];
      let path = "/pt";
      if (userLang === "en") path = "/en";
      else if (userLang === "es") path = "/es";
      setRedirectPath(path);
    }
    setIsDetecting(false);
  }, [location.pathname]);

  // Evita enviar pageview durante o redirecionamento inicial
  const analyticsReady = !isDetecting && !(redirectPath && location.pathname === "/");
  useTrackPageviews(analyticsReady);

  if (isDetecting) return null;

  if (redirectPath && location.pathname === "/") {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Routes>
      {/* Páginas com prefixo de idioma */}
      <Route path="/:lang/spotify" element={<SpotifyLandingPage />} />
      <Route path="/:lang/samebloodscocktail" element={<SpotifyLandingPage />} />

      {/* Compatibilidade sem prefixo */}
      <Route path="/samebloodscocktail" element={<SpotifyLandingPage />} />

      {/* Home por idioma */}
      <Route path="/:lang" element={<LanguageWrapper />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/pt" replace />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
