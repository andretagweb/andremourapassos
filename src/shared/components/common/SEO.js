import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t, i18n } = useTranslation("seo");

  const currentLang = i18n.language.split("-")[0]; // pt, en, es
  const siteUrl = "https://www.andremourapassos.com";
  const siteImage = `${siteUrl}/logo192.png`;

  const localizedUrls = {
    pt: `${siteUrl}/pt`,
    en: `${siteUrl}/en`,
    es: `${siteUrl}/es`
  };

  const canonicalPath = window.location.pathname.replace(/\/$/, "") || "/";
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const localeMap = {
    pt: "pt_BR",
    en: "en_US",
    es: "es_ES"
  };

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
    "jobTitle": t("job_title", "Compositor e Desenvolvedor"),
    "worksFor": {
      "@type": "Organization",
      "name": t("organization_name", "Projeto de Música Independente")
    }
  };

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="keywords" content={t("keywords")} />
        <meta name="author" content="André Moura Passos" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={t("og_title")} />
        <meta property="og:description" content={t("og_description")} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={localeMap[currentLang] || "pt_BR"} />
        <meta property="og:site_name" content="André Moura Passos" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("twitter_title")} />
        <meta name="twitter:description" content={t("twitter_description")} />
        <meta name="twitter:image" content={siteImage} />

        {/* Canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="pt" href={localizedUrls.pt} />
        <link rel="alternate" hreflang="en" href={localizedUrls.en} />
        <link rel="alternate" hreflang="es" href={localizedUrls.es} />
        <link rel="alternate" hreflang="x-default" href={siteUrl} />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
};

export default SEO;
