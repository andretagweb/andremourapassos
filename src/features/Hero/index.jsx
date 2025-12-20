import React, { useRef } from 'react';
import { useTranslation } from "react-i18next"; // 🔧

import Keys from './components/Keys';
import Contact from './components/Contact';

import Menu from '../../shared/components/common/Menu'
import Player from '../Player';

import useIsMobile from '../../shared/hooks/useIsMobile';

import './styles/index.css';

function Hero() {

  const playerRef = useRef(null);
  const isMobile = useIsMobile();
  const { t } = useTranslation("player"); // 🔧

  // Função para controlar o player via Keys.jsx
  const playPlaylist = (playlist) => {
    if (!playlist) {
      playlist = 'Bloods Cocktail';
    }

    if (playerRef.current) {
      if (isMobile) {
        playerRef.current.loadPlaylist(playlist, false);
      } else {
        playerRef.current.handlePlayPause(playlist);
      }
    }
  };

  // 🔧 CONTROLE DE STATUS (NOVO, UI ONLY)
  const setPlaylistStatus = () => {
    playerRef.current?.setStatusMessage(t("playlist"));
  };

  const setNoPlaylistStatus = () => {
    playerRef.current?.setStatusMessage(t("no_playlist"));
  };

  return (
    <section className="App-hero bg-white text-black flex bellota-text-regular">
      <div className="hero-piano flex w-full h-1/3 bg-dark relative align-left border-4">

        <div className="side-key hidden xl:block w-1/6 p-6 fixed left-0 top-0 h-full text-white special-elite-regular">
          <Menu />
        </div>

        <div className="keyboard flex w-full xl:w-5/6 xl:ml-[16.67%]">
          <div className="key-redline flex-[1] bg-red-500 shadow-md"></div>
          <div className="keys-group flex-[80]">

            <Keys
              playPlaylist={playPlaylist}
              setPlaylistStatus={setPlaylistStatus}       // 🔧
              setNoPlaylistStatus={setNoPlaylistStatus}   // 🔧
            />

            <Contact />
          </div>
        </div>
      </div>

      <Player ref={playerRef} />
    </section>
  );
}

export default Hero;
