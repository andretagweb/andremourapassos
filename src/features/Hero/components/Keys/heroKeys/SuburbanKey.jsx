import HeroKeyModal from "../HeroKeyModal";

function SuburbanKey({ t, showModal, setNoPlaylistStatus }) {
  return (
    <HeroKeyModal
      id="suburban"
      className="hero-key key-natural key-white non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => showModal("suburban")}
    >
      <div className="hover-text text">
        <p>{t("suburban_1")}</p>
        <br />
        <p>{t("suburban_2")}</p>
      </div>
    </HeroKeyModal>
  );
}

export default SuburbanKey;
