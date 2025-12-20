import HeroKeyModal from "../HeroKeyModal";

function TTMMKey({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <HeroKeyModal
      id="ttmm"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("TTMM");
        showModal("ttmm");
      }}
    >
      <div className="hover-text hover-play text">
        <p className="font-semibold text-gray-800">{t("ttmm_1")}</p>
        <br />
        <p>{t("ttmm_2")}</p>
      </div>
    </HeroKeyModal>
  );
}

export default TTMMKey;
