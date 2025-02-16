import React, { useRef } from 'react';

import Keys from './components/Keys';
import Contact from './components/Contact';

import Menu from '../../shared/components/common/Menu'
import Player from '../Player';

import useIsMobile from '../../shared/hooks/useIsMobile';

import './styles/index.css';

function Hero() {

  const playerRef = useRef(null); // Referência para o Player
  const isMobile = useIsMobile();

   // Função para controlar o player via Keys.jsx
   const playPlaylist = (playlist) => {
    if (!playlist) {
      playlist = 'Bloods Cocktail';
    }

    if (playerRef.current) {
      if (isMobile) {
        playerRef.current.loadPlaylist(playlist, false); // Se for mobile, apenas carrega a playlist
      } else {
        playerRef.current.handlePlayPause(playlist); // Se não for, toca ou pausa
      }
    }
  };

  return (
    <section className="App-hero bg-white text-black flex bellota-text-regular">
      <div className="hero-piano flex w-full h-1/3 relative align-left border-4">
        <div className="side-key hidden xl:block bg-dark w-1/6 p-6 sticky top-0 text-white special-elite-regular">
          <Menu />
        </div>
        <div className="keyboard flex w-full xl:w-5/6">
          <div className="key-redline flex-[1] bg-red-500 shadow-md">
          </div>
          <div className="keys-group flex-[80]">
            <Keys playPlaylist={playPlaylist} />
            <Contact />
          </div>
        </div>
      </div>
      <Player ref={playerRef} />
    </section>
  );
}

export default Hero;
