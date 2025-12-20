import React from "react";

function PerfilIconogramaKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <div
      id="perfiliconograma"
      className="hero-key key-natural key-white flex items-center"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => {
        showModal("perfiliconograma");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>
        <div className="hover-text text">
          <p>
            {t("intro_1")} <strong>{t("intro_2")}</strong> {t("intro_2_2")}{" "}
            <strong>{t("intro_3")}</strong>.
            <br /> {t("intro_4")}
          </p>

          <p>
            {t("lyrics_1")}
            <br />
            {t("lyrics_2")}
          </p>

          <br />

          <p className="text-xs">
            {t("not_my_job_1")}
            <br />
            {t("not_my_job_2")}
          </p>

          <p className="text-sm">
            <br />
            {t("programmer_1")}
            <br />
            {t("programmer_2")}
          </p>

          <p className="text-base">
            <br />
            {t("web_dev_1")}
            <br />
            {t("web_dev_2")}
          </p>

          <br />

          <p className="text-md font-bold opacity-1 transition-opacity duration-[20000ms]">
            {t("welcome")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerfilIconogramaKey;
