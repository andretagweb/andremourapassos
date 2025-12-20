import React from "react";

function SoonKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <div
      id="soon"
      className="hero-key key-natural key-black non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => {
        showModal("soon");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-videos hover-text text-white text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>{t("soon")}</p>
        </div>
      </div>
    </div>
  );
}

export default SoonKey;
