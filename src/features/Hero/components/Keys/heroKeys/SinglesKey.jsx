import React from "react";

function SinglesKey({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <div
      id="singles"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("Singles");
        showModal("singles");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>

        <div className="hover-text hover-play text">
          <p className="font-semibold text-gray-800">{t("singles_intro")}</p>
          <br />
          <p>{t("singles_list")}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglesKey;
