import "./index.css";

import { useTranslation } from "react-i18next";
import useModal from "../../../../shared/hooks/useModal";

import YoutubeVideos from "../Carousel/YoutubeVideos.json";
import Carousel from "../Carousel";
import VideoItem from "../Carousel/VideoItem";
import TextItem from "../Carousel/TextItem";
import allTexts from "../Carousel/Texts/allTexts";

// Hero Keys (cada uma em um arquivo)
import PerfilIconogramaKey from "./heroKeys/PerfilIconogramaKey";
import MainTitleKey from "./heroKeys/MainTitleKey";

import BloodsCocktailKey from "./heroKeys/BloodsCocktailKey";
import Cocktail1LabelKey from "./heroKeys/Cocktail1LabelKey";

import CocktailN2Key from "./heroKeys/CocktailN2Key";
import Cocktail2LabelKey from "./heroKeys/Cocktail2LabelKey";

import SinglesKey from "./heroKeys/SinglesKey";
import StrangeKey from "./heroKeys/StrangeKey";
import SinglesLabelKey from "./heroKeys/SinglesLabelKey";

import TTMMKey from "./heroKeys/TTMMKey";
import TTMMLabelKey from "./heroKeys/TTMMLabelKey";

import SuburbanKey from "./heroKeys/SuburbanKey";

import VideosKey from "./heroKeys/VideosKey";
import VideosLabelKey from "./heroKeys/VideosLabelKey";

import PoemsKey from "./heroKeys/PoemsKey";
import PoemsLabelKey from "./heroKeys/PoemsLabelKey";

import SoonKey from "./heroKeys/SoonKey";

function Keys({ playPlaylist, setPlaylistStatus, setNoPlaylistStatus }) {
  const { showModal, hideModal } = useModal();
  const { t } = useTranslation("keys");

  return (
    <div className="keys">
      {/* Close modal (mantido igual) */}
      <div className="close-modal hidden">
        <button
          onClick={() => hideModal()}
          className="button block sm:block md:hidden absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold cursor-pointer"
          aria-label="Fechar Modal"
        >
          ✕
        </button>
      </div>

      {/* Perfil e introdução */}
      <PerfilIconogramaKey
        t={t}
        showModal={showModal}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />

      {/* Título principal */}
      <MainTitleKey t={t} />

      {/* Sequência de teclas alternadas */}
      <BloodsCocktailKey
        t={t}
        showModal={showModal}
        playPlaylist={playPlaylist}
        setPlaylistStatus={setPlaylistStatus}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />
      <Cocktail1LabelKey t={t} />

      <CocktailN2Key
        t={t}
        showModal={showModal}
        playPlaylist={playPlaylist}
        setPlaylistStatus={setPlaylistStatus}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />
      <Cocktail2LabelKey t={t} />

      <SinglesKey
        t={t}
        showModal={showModal}
        playPlaylist={playPlaylist}
        setPlaylistStatus={setPlaylistStatus}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />

      <StrangeKey
        t={t}
        showModal={showModal}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />

      <SinglesLabelKey t={t} />

      <TTMMKey
        t={t}
        showModal={showModal}
        playPlaylist={playPlaylist}
        setPlaylistStatus={setPlaylistStatus}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />
      <TTMMLabelKey />

      <SuburbanKey
        t={t}
        showModal={showModal}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />

      <VideosKey
        showModal={showModal}
        setNoPlaylistStatus={setNoPlaylistStatus}
        YoutubeVideos={YoutubeVideos}
        Carousel={Carousel}
        VideoItem={VideoItem}
      />
      <VideosLabelKey t={t} />

      <PoemsKey
        showModal={showModal}
        setNoPlaylistStatus={setNoPlaylistStatus}
        allTexts={allTexts}
        Carousel={Carousel}
        TextItem={TextItem}
      />
      <PoemsLabelKey t={t} />

      <SoonKey
        t={t}
        showModal={showModal}
        setNoPlaylistStatus={setNoPlaylistStatus}
      />
    </div>
  );
}

export default Keys;
