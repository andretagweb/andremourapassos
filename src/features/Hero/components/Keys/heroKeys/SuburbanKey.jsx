import React from "react";

function SuburbanKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <div
      id="suburban"
      className="hero-key key-natural key-white non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => {
        showModal("suburban");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>

        <div className="hover-text text">
          <p>{t("suburban_1")}</p>
          <br />
          <p>{t("suburban_2")}</p>
        </div>
      </div>
    </div>
  );
}

export default SuburbanKey;
