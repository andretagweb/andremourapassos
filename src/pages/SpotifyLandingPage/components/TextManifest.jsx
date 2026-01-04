import React from "react";

export default function TextManifest({ t }) {
  return (
    <div>
      <img
        src="/images/adslogo-min.png"
        alt="Same Bloods Cocktail"
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: "2px solid #1DB954",
          marginBottom: "2rem",
          zIndex: 10
        }}
      />

      <h1
        style={{
          fontFamily: "Limelight, serif",
          fontSize: "2.8rem",
          marginBottom: "1rem",
        }}
      >
        Same Bloods Cocktail
      </h1>

      <p
        className="special-elite-regular"
        style={{
          maxWidth: 640,
          fontSize: "1.15rem",
          lineHeight: 1.2,
          color: "#cfcfcf",
          marginBottom: "1rem",
          fontWeight: "500",

          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {t("page_description")}
      </p>

      <p
        className="special-elite-regular"
        style={{
          maxWidth: 640,
          fontSize: "1.15rem",
          lineHeight: 1.2,
          color: "#cfcfcf",
          marginBottom: "1rem",
          fontWeight: "500",

          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {t("page_description_2")}
      </p>
    </div>
  );
}
