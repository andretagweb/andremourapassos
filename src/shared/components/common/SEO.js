import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t, i18n } = useTranslation();

  const siteTitle = t("common:siteTitle", "André Moura Passos | Compositor & Desenvolvedor");
  const siteDescription = t("common:siteDescription", "Explore as músicas instrumentais e projetos de desenvolvimento de André Moura Passos.");
  const siteImage = "https://andremourapassos.com/logo192.png";
  const siteUrl = "https://andremourapassos.com";
  const currentLang = i18n.language;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "André Moura Passos",
    "url": siteUrl,
    "sameAs": [
      "https://twitter.com/andremourapassos",
      "https://www.linkedin.com/in/andremourapassos",
      "https://www.instagram.com/andremourapassos",
      "https://www.facebook.com/people/Andre-Moura-Passos/100090936608265/",
      "https://www.instagram.com/samebloodscocktail/"
    ],
    "jobTitle": t("common:jobTitle", "Compositor e Desenvolvedor"),
    "worksFor": {
      "@type": "Organization",
      "name": t("common:organizationName", "Projeto de Música Independente")
    }
  };

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="André Moura Passos, compositor, desenvolvedor, música instrumental, piano, criação musical, site pessoal" />
        <meta name="author" content="André Moura Passos" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={
          currentLang === 'pt' ? 'pt_BR' :
          currentLang === 'es' ? 'es_ES' :
          'en_US'
        } />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
};

export default SEO;
