import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

/* FIX: localeMap fora do componente para não gerar warning no useEffect */
const localeMap = { pt: "pt_BR", en: "en_US", es: "es_ES" };

/* Helpers imperativos */
function upsertMeta({ name, property, content }) {
  if (!content) return;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    if (name) tag.setAttribute("name", name);
    if (property) tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink({ rel, href, hreflang }) {
  let selector = `link[rel="${rel}"]`;
  if (hreflang) selector += `[hreflang="${hreflang}"]`;
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

const SEO = ({
  title: titleProp,
  description: descriptionProp,
  keywords: keywordsProp,
  canonical: canonicalProp,
  image: imageProp,

  // Open Graph
  ogTitle,
  ogDescription,
  ogType = "website",
  ogUrl,
  ogImage,

  // Twitter
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,

  // Robots
  robots = "index, follow",

  // Structured data
  schema,
  siteUrl: siteUrlProp,
}) => {
  const { t, i18n } = useTranslation("seo");
  const currentLang = (i18n.language || "pt").split("-")[0]; // pt, en, es

  const siteUrl = siteUrlProp || "https://www.andremourapassos.com";
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const search = typeof window !== "undefined" ? window.location.search : "";
  const canonical = canonicalProp || `${siteUrl}${pathname}${search}`;
  const defaultImage = `${siteUrl}/logo192.png`;

  const title = titleProp ?? t("title");
  const description = descriptionProp ?? t("description");
  const keywords = keywordsProp ?? t("keywords");
  const image = imageProp || ogImage || twitterImage || defaultImage;

  // hreflang
  const pathParts = pathname.split("/").filter(Boolean);
  const currentPrefix = ["pt", "en", "es"].includes(pathParts[0]) ? pathParts[0] : null;
  const buildLangPath = (lang) => {
    const parts = [...pathParts];
    if (currentPrefix) parts[0] = lang;
    else parts.unshift(lang);
    return `/${parts.join("/")}`;
  };
  const hrefLangs = {
    pt: `${siteUrl}${buildLangPath("pt")}`,
    en: `${siteUrl}${buildLangPath("en")}`,
    es: `${siteUrl}${buildLangPath("es")}`,
  };

  // OG/Twitter finais
  const finalOgTitle = ogTitle || title;
  const finalOgDesc = ogDescription || description;
  const finalOgUrl = ogUrl || canonical;
  const finalOgImage = image;

  const finalTwTitle = twitterTitle || title;
  const finalTwDesc = twitterDescription || description;
  const finalTwImage = image;

  const schemaPayload =
    schema ||
    {
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

  useEffect(() => {
    // Title
    if (typeof document !== "undefined") {
      document.title = title;
    }
    // Básicos
    upsertMeta({ name: "description", content: description });
    if (keywords) upsertMeta({ name: "keywords", content: keywords });
    upsertMeta({ name: "robots", content: robots });

    // Canonical
    upsertLink({ rel: "canonical", href: canonical });

    // hreflang
    upsertLink({ rel: "alternate", href: hrefLangs.pt, hreflang: "pt" });
    upsertLink({ rel: "alternate", href: hrefLangs.en, hreflang: "en" });
    upsertLink({ rel: "alternate", href: hrefLangs.es, hreflang: "es" });
    upsertLink({ rel: "alternate", href: siteUrl, hreflang: "x-default" });

    // OG
    upsertMeta({ property: "og:title", content: finalOgTitle });
    upsertMeta({ property: "og:description", content: finalOgDesc });
    upsertMeta({ property: "og:image", content: finalOgImage });
    upsertMeta({ property: "og:url", content: finalOgUrl });
    upsertMeta({ property: "og:type", content: ogType });
    upsertMeta({ property: "og:locale", content: localeMap[currentLang] || "pt_BR" });
    upsertMeta({ property: "og:site_name", content: "André Moura Passos" });

    // Twitter
    upsertMeta({ name: "twitter:card", content: twitterCard });
    upsertMeta({ name: "twitter:title", content: finalTwTitle });
    upsertMeta({ name: "twitter:description", content: finalTwDesc });
    upsertMeta({ name: "twitter:image", content: finalTwImage });
  }, [
    title,
    description,
    keywords,
    robots,
    canonical,
    hrefLangs.pt,
    hrefLangs.en,
    hrefLangs.es,
    siteUrl,
    finalOgTitle,
    finalOgDesc,
    finalOgImage,
    finalOgUrl,
    ogType,
    twitterCard,
    finalTwTitle,
    finalTwDesc,
    finalTwImage,
    currentLang,
  ]);

  return (
    <>
      <Helmet key={`${currentLang}-${pathname}`}>
        <html lang={currentLang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content="André Moura Passos" />
        <meta name="robots" content={robots} />

        <meta property="og:title" content={finalOgTitle} />
        <meta property="og:description" content={finalOgDesc} />
        <meta property="og:image" content={finalOgImage} />
        <meta property="og:url" content={finalOgUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:locale" content={localeMap[currentLang] || "pt_BR"} />
        <meta property="og:site_name" content="André Moura Passos" />

        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={finalTwTitle} />
        <meta name="twitter:description" content={finalTwDesc} />
        <meta name="twitter:image" content={finalTwImage} />

        <link rel="canonical" href={canonical} />
        <link rel="alternate" hreflang="pt" href={hrefLangs.pt} />
        <link rel="alternate" hreflang="en" href={hrefLangs.en} />
        <link rel="alternate" hreflang="es" href={hrefLangs.es} />
        <link rel="alternate" hreflang="x-default" href={siteUrl} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
      />
    </>
  );
};

export default SEO;
