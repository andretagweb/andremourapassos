import HeroKeyModal from "../HeroKeyModal";

function BloodsCocktailKey({
  t,
  showModal,
  playPlaylist,
  setPlaylistStatus,
  setNoPlaylistStatus,
}) {
  return (
    <HeroKeyModal
      id="bloodscocktail"
      className="hero-key key-natural key-white"
      onMouseEnter={setPlaylistStatus}
      onMouseLeave={setNoPlaylistStatus}
      onClick={() => {
        playPlaylist("Cocktail Nº1");
        showModal("bloodscocktail");
      }}
    >
      <div className="hover-text hover-play text">
        <p className="text-gray-800">
          <a href="https://samebloodscocktail.com">{t("same_bloods_title")}</a> {t("same_bloods_1")}
          <br />
          {t("same_bloods_2")}
          <br />
          {t("same_bloods_3")}
          <br />
          {t("same_bloods_4")}
        </p>

        <br />

        <p className="font-semibold text-gray-800">
          {t("cocktail1_1")}
          <br />
          {t("cocktail1_2")}
          <br />
          {t("cocktail1_3")}
          <br />
          {t("cocktail1_4")}
        </p>
      </div>
    </HeroKeyModal>
  );
}

export default BloodsCocktailKey;
