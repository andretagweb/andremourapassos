import HeroKeyModal from "../HeroKeyModal";

function SinglesKey({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <HeroKeyModal
      id="singles"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("Singles");
        showModal("singles");
      }}
    >
      <div className="hover-text hover-play text">
        <p className="font-semibold text-gray-800">{t("singles_intro")}</p>
        <br />
        <p>{t("singles_list")}</p>
      </div>
    </HeroKeyModal>
  );
}

export default SinglesKey;
