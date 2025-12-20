import React from "react";

function CocktailN2Key({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <div
      id="cocktailn2"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("Cocktail Nº2");
        showModal("cocktailn2");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>

        <div className="hover-text hover-play text">
          <p className="text-gray-800">{t("cocktail2_1")}</p>
          <br />
          <p>{t("cocktail2_2")}</p>
        </div>
      </div>
    </div>
  );
}

export default CocktailN2Key;
