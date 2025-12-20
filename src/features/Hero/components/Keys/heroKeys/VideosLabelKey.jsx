import React from "react";

function VideosLabelKey({ t }) {
  return (
    <div className="hero-key key-accidental key-white">
      <div className="hover-text absolute bottom-2 right-2 text-black opacity-0 text-xl font-semibold italic">
        <h3>{t("videos_title")}</h3>
      </div>
    </div>
  );
}

export default VideosLabelKey;
