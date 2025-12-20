import HeroKeyModal from "../HeroKeyModal";

function StrangeKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <HeroKeyModal
      id="strange"
      className="hero-key key-natural key-white non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => showModal("strange")}
    >
      <div className="hover-text text">
        <p>
          {t("strange_1")}, {t("strange_2")}
        </p>
      </div>
    </HeroKeyModal>
  );
}

export default StrangeKey;
