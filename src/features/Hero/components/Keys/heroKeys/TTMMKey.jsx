import React from "react";

function TTMMKey({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <div
      id="ttmm"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("TTMM");
        showModal("ttmm");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>

        <div className="hover-text hover-play text">
          <p className="font-semibold text-gray-800">{t("ttmm_1")}</p>
          <br />
          <p>{t("ttmm_2")}</p>
        </div>
      </div>
    </div>
  );
}

export default TTMMKey;
