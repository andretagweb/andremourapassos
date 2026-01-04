import React from "react";

export default function TextManifest({ t }) {
  return (
    <div className="heroTextContent">
      <img
        src="/images/adslogo-min.png"
        alt="Same Bloods Cocktail"
        className="heroLogo"
      />

      <h1 className="heroTitle">
        Same Bloods Cocktail
      </h1>

      <p className="special-elite-regular heroParagraph">
        {t("page_description")}
      </p>

      <p className="special-elite-regular heroParagraph">
        {t("page_description_2")}
      </p>
    </div>
  );
}
