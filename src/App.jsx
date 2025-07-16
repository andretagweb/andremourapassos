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
      i18n.changeLanguage(lang).then(() => {
        setLoading(false); // Só libera quando a troca de idioma terminar
      });
    } else {
      setLoading(false); // Já está no idioma certo
    }
  }, [lang, i18n]);

  if (loading) {
    return null; // Enquanto não terminar a troca de idioma, não renderiza
  }

  return <SiteContent />;
}


function App() {
  const location = useLocation();
  const [isDetecting, setIsDetecting] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      const userLang = navigator.language.split('-')[0];
      let path = "/pt"; // padrão

      if (userLang === "en") {
        path = "/en";
      } else if (userLang === "es") {
        path = "/es";
      }

      setRedirectPath(path);
    }
    setIsDetecting(false); // acabou a detecção
  }, [location.pathname]);

  // Se ainda está detectando, não renderiza nada
  if (isDetecting) {
    return null; // (só pra não quebrar o app)
  }

  if (redirectPath && location.pathname === "/") {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Routes>
      <Route path="/:lang/spotify" element={<SpotifyLandingPage />} />
      <Route path="/spotify" element={<SpotifyLandingPage />} />
      <Route path="/:lang" element={<LanguageWrapper />} />
      <Route path="*" element={<Navigate to="/pt" />} />
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
