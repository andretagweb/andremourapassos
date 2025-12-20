import './index.css'

import { useTranslation } from "react-i18next";

import useModal from "../../../../shared/hooks/useModal";

import YoutubeVideos from '../Carousel/YoutubeVideos.json'
import Carousel from "../Carousel";
import VideoItem from "../Carousel/VideoItem";
import TextItem from "../Carousel/TextItem";
import allTexts from "../Carousel/Texts/allTexts";

function Keys({
  playPlaylist,
  setPlaylistStatus,     
  setNoPlaylistStatus    
}) {

  const { showModal, hideModal } = useModal();
  const { t } = useTranslation("keys");

  return (
    <div className="keys">
      {/* Perfil e introdução */}

      <div className='close-modal hidden'>
        <button
          onClick={() => hideModal()}
          className="button block sm:block md:hidden absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold cursor-pointer"
          aria-label="Fechar Modal"
        >
          ✕
        </button>
      </div>

      <div
        id="perfiliconograma"
        className="hero-key key-natural key-white flex items-center"
        onMouseEnter={setNoPlaylistStatus}
        onClick={() => {
          showModal('perfiliconograma')
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>
          <div className="hover-text text">
            <p>
              {t("intro_1")} <strong>{t("intro_2")}</strong> {t("intro_2_2")} <strong>{t("intro_3")}</strong>.
              <br /> {t("intro_4")}
            </p>
            <p>{t("lyrics_1")}<br />{t("lyrics_2")}</p>
            <br />
            <p className='text-xs'>{t("not_my_job_1")}<br />{t("not_my_job_2")}</p>
            <p className='text-sm'><br />{t("programmer_1")}<br />{t("programmer_2")}</p>
            <p className='text-base'><br />{t("web_dev_1")}<br />{t("web_dev_2")}</p>
            <br />
            <p className="text-md font-bold opacity-1 transition-opacity duration-[20000ms]">{t("welcome")}</p>
          </div>
        </div>
      </div>


      {/* Título principal */}
      <div className="hero-key key-accidental key-black">
        <div className="principal-title relative text-white w-full top-1/2 transform -translate-y-1/2 pl-4 lg:pl-0 lg:text-center">
          <h1 className="hero-title text-lg sm:text-3xl md:text-3xl lg:text-4xl drop-shadow-sm font-bold lg:mb-6 text-white limelight-regular">
            {t("main_title")}
          </h1>
          <h2 className="subtitle text-sm md:text-md lg:text-xl drop-shadow-sm font-bold lg:mb-6 text-white">
            {t("subtitle_1")}, <span className="text-gray-medium font-light">{t("subtitle_2")},</span> {t("subtitle_3")}
          </h2>
        </div>
      </div>


      {/* Sequência de teclas alternadas */}
      <div
        id="bloodscocktail"
        className="hero-key key-natural key-white"
        onMouseEnter={setPlaylistStatus}    
        onMouseLeave={setNoPlaylistStatus}  
        onClick={() => {
          playPlaylist('Cocktail Nº1');
          showModal('bloodscocktail');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>
          <div className="hover-text hover-play text">
            <p className="text-gray-800">
              <strong>{t("same_bloods_title")}</strong> {t("same_bloods_1")}<br />
              {t("same_bloods_2")}<br />
              {t("same_bloods_3")}<br />
              {t("same_bloods_4")}
            </p>
            <br />
            <p className="font-semibold text-gray-800">
              {t("cocktail1_1")}<br />
              {t("cocktail1_2")}<br />
              {t("cocktail1_3")}<br />
              {t("cocktail1_4")}
            </p>
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
          <h3>{t("cocktail1_title")}</h3>
        </div>
      </div>

      <div
        id="cocktailn2"
        className="hero-key key-natural key-white"
        onMouseEnter={setPlaylistStatus}    
        onMouseLeave={setNoPlaylistStatus}  
        onClick={() => {
          playPlaylist('Cocktail Nº2');
          showModal('cocktailn2');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>
          <div className="hover-text hover-play text">
            <p className="text-gray-800">{t("cocktail2_1")}</p><br /><p>{t("cocktail2_2")}</p>
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
          <h3>{t("cocktail2_title")}</h3>
        </div>
      </div>

      <div
        id="singles"
        className="hero-key key-natural key-white"
        onMouseEnter={setPlaylistStatus}    
        onMouseLeave={setNoPlaylistStatus}  
        onClick={() => {
          playPlaylist('Singles');
          showModal('singles');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>

          <div className="hover-text hover-play text">
            <p className="font-semibold text-gray-800">{t("singles_intro")}</p>
            <br />
            <p>{t("singles_list")}</p>
          </div>
        </div>
      </div>


      <div
        id="strange"
        className="hero-key key-natural key-white"
        onMouseEnter={setNoPlaylistStatus} non-playable
        onClick={() => {
          showModal('strange');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>

          <div className="hover-text text">
            <p>{t("strange_1")}, {t("strange_2")}</p>
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
          <h3>{t("singles_title")}</h3>
        </div>
      </div>

      <div
        id="ttmm"
        className="hero-key key-natural key-white"
        onMouseEnter={setPlaylistStatus}    
        onMouseLeave={setNoPlaylistStatus}  
        onClick={() => {
          playPlaylist('TTMM');
          showModal('ttmm');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>

          <div className="hover-text hover-play text">
            <p className="font-semibold text-gray-800">{t("ttmm_1")}</p>
            <br />
            <p>{t("ttmm_2")}</p>
          </div>
        </div>
      </div>


      <div className="hero-key key-accidental key-black">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
          <h3>Tasty Themes for Mono Myths</h3>
        </div>
      </div>

      <div
        id="suburban"
        className="hero-key key-natural key-white"
        onMouseEnter={setNoPlaylistStatus} non-playable
        onClick={() => {
          showModal('suburban');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>
          <div className="hover-text text">
            <p>{t("suburban_1")}</p>
            <br />
            <p>{t("suburban_2")}</p>
          </div>
        </div>
      </div>

      <div
        id="videos"
        className="hero-key key-natural key-black"
        onMouseEnter={setNoPlaylistStatus} non-playable
        onClick={() => {
          showModal('videos');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-image"></div>

          <div className="key-videos hover-text text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <Carousel
              items={YoutubeVideos}
              renderItem={(video) => <VideoItem video={video} />}
            />
            <br />
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-white">
        <div className="hover-text absolute bottom-2 right-2 text-black opacity-0 text-xl font-semibold italic">
          <h3>{t("videos_title")}</h3>
        </div>
      </div>

      <div
        id="poems"
        className="hero-key key-natural key-black"
        onMouseEnter={setNoPlaylistStatus} non-playable
        onClick={() => {
          showModal('poems');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-videos hover-text text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <Carousel
              items={allTexts}
              renderItem={(text) => <TextItem text={text} />}
            />
            <br />
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-white">
        <div className="hover-text absolute bottom-2 right-2 text-black opacity-0 text-xl font-semibold italic">
          <h3>{t("texts_title")}</h3>
        </div>
      </div>


      <div
        id="soon"
        className="hero-key key-natural key-black"
        onMouseEnter={setNoPlaylistStatus} non-playable
        onClick={() => {
          showModal('soon');
        }}
      >
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-videos hover-text text-white text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <p>{t("soon")}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Keys;
