import React from "react";
import { Helmet } from "react-helmet";

const HreflangTags = () => {
  const hreflangs = [
    { lang: "pt-BR", url: "https://andremourapassos.com/pt" },
    { lang: "en", url: "https://andremourapassos.com/en" },
    { lang: "es", url: "https://andremourapassos.com/es" }
  ];

  return (
    <Helmet>
      {hreflangs.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      {/* Tag padrão caso o navegador não identifique um idioma específico */}
      <link rel="alternate" hrefLang="x-default" href="https://andremourapassos.com" />
    </Helmet>
  );
};

export default HreflangTags;
