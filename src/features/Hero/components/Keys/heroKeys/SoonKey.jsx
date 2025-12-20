import HeroKeyModal from "../HeroKeyModal";

function SoonKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <HeroKeyModal
      id="soon"
      className="hero-key key-natural key-black non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => showModal("soon")}
    >
      <div className="hover-text text-white">
        <p>{t("soon")}</p>
      </div>
    </HeroKeyModal>
  );
}

export default SoonKey;
