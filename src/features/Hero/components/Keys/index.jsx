import './index.css'

import { useTranslation } from "react-i18next";

import YoutubeVideos from '../Videos/YoutubeVideos.json'
import Carousel from "../Videos";
import useModal from "../../../../shared/hooks/useModal";

function Keys({ playPlaylist }) {

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
      <div id="perfiliconograma" className="hero-key key-natural key-white flex items-center"
        onClick={() => {
          showModal('perfiliconograma')
        }}>
        <div className="key-image flex-grow"></div>
        <div className="key-modal">
          <div className="hover-text text">
            <p>
              {t("intro_1")} <strong>{t("intro_2")}</strong> e <strong>{t("intro_3")}</strong>.
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
          <h2 className="text-md md:text-md lg:text-xl drop-shadow-sm font-bold lg:mb-6 text-white">
            {t("subtitle_1")}, <span className="text-gray-medium font-light">{t("subtitle_2")},</span> {t("subtitle_3")}
          </h2>
        </div>
      </div>


      {/* Sequência de teclas alternadas */}
      <div id="bloodscocktail" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Cocktail Nº1');
        showModal('bloodscocktail');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p className="text-md text-gray-800">
              <strong>{t("same_bloods_title")}</strong> {t("same_bloods_1")}<br />
              {t("same_bloods_2")}<br />
              {t("same_bloods_3")}<br />
              {t("same_bloods_4")}
            </p>
            <br />
            <p className="text-md font-semibold text-gray-800">
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
          {t("cocktail1_title")}
        </div>
      </div>

      <div id="cocktailn2" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Cocktail Nº2');
        showModal('cocktailn2');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p className="text-md text-gray-800">{t("cocktail2_1")}<br />{t("cocktail2_2")}</p>
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
          {t("cocktail2_title")}
        </div>
      </div>

      <div id="singles" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Singles');
        showModal('singles');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p className="text-md font-semibold text-gray-800">{t("singles_intro")}</p>
            <br />
            <p>{t("singles_list")}</p>
          </div>
        </div>
      </div>


      <div id="strange" className="hero-key key-natural key-white" onClick={() => {
        showModal('strange');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p>{t("strange_1")}, {t("strange_2")}</p>
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">
          {t("singles_title")}
        </div>
      </div>

      <div id="ttmm" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('TTMM');
        showModal('ttmm');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text absolute top-1/2 transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <p className="text-md font-semibold text-gray-800">{t("ttmm_1")}</p>
            <br />
            <p>{t("ttmm_2")}</p>
          </div>
        </div>
      </div>


      <div className="hero-key key-accidental key-black">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Tasty Themes for Mono Myths</div>
      </div>

      <div id="suburban" className="hero-key key-natural key-white" onClick={() => {
        showModal('suburban');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <p>{t("suburban_1")}</p>
            <br />
            <p>{t("suburban_2")}</p>
          </div>
        </div>
      </div>

      <div id="videos" className="hero-key key-natural key-black" onClick={() => {
        showModal('videos');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-videos hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <Carousel videos={YoutubeVideos} />
            <br />
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-white">
        <div className="hover-text absolute bottom-2 right-2 text-black opacity-0 text-xl font-semibold italic">
          {t("videos_title")}
        </div>
      </div>

      <div id="textos" className="hero-key key-natural key-black" onClick={() => {
        showModal('textos');
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text text absolute transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <p>{t("texts_title")}</p>
            <br />
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-white"></div>

      <div className="hero-key key-natural key-black">
        <div className="key-image"></div>
        <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>{t("poetry_title")}</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Keys;
