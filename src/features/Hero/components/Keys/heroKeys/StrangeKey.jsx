import React from "react";

function StrangeKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <div
      id="strange"
      className="hero-key key-natural key-white non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => {
        showModal("strange");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>

        <div className="hover-text text">
          <p>
            {t("strange_1")}, {t("strange_2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StrangeKey;
