import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const HreflangTags = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\/(pt|en|es)/, "");

  const hreflangs = [
    { lang: "pt-BR", base: "https://andremourapassos.com/pt" },
    { lang: "en", base: "https://andremourapassos.com/en" },
    { lang: "es", base: "https://andremourapassos.com/es" }
  ];

  return (
    <Helmet>
      {hreflangs.map(({ lang, base }) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${base}${currentPath}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://andremourapassos.com${currentPath}`}
      />
    </Helmet>
  );
};

export default HreflangTags;
