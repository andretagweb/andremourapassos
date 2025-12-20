import HeroKeyModal from "../HeroKeyModal";

function CocktailN2Key({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <HeroKeyModal
      id="cocktailn2"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("Cocktail Nº2");
        showModal("cocktailn2");
      }}
    >
      <div className="hover-text hover-play text">
        <p className="text-gray-800">{t("cocktail2_1")}</p>
        <br />
        <p>{t("cocktail2_2")}</p>
      </div>
    </HeroKeyModal>
  );
}

export default CocktailN2Key;
