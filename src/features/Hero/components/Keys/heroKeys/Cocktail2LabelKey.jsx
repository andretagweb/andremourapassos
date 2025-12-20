import React from "react";

function Cocktail2LabelKey({ t }) {
  return (
    <div className="hero-key key-accidental key-black relative">
      <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
        <h3>{t("cocktail2_title")}</h3>
      </div>
    </div>
  );
}

export default Cocktail2LabelKey;
