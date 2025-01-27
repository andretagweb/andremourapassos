import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import './index.css';
import useIsWide from '../../hooks/useIsWide'; // Ajuste o caminho conforme necessário

const Player = forwardRef((props, ref) => {
  const wideLimit = 1440;
  const isWideScreen = useIsWide(wideLimit); // Usando o hook para verificar se a tela é wide
  const [playlist, setPlaylist] = useState(['Bloods Cocktail']);
  const [currentPlaylistName, setCurrentPlaylistName] = useState('');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Inicializar volume do player quando a playlist muda
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Define o volume inicial como 0.5
    }
  }, [playlist]);

  // Tornar a função disponível para o componente pai
  useImperativeHandle(ref, () => ({
    handlePlayPause,
  }));

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handlePlayPause = (playlistName) => {
    if (!playlistName) {
      console.error('Nenhum nome de playlist fornecido.');
      return;
    }

    // Se a playlist atual já está carregada, apenas alternar entre play e pause
    if (playlistName === currentPlaylistName && playlist.length > 0) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          if (err.name !== 'AbortError') {
            console.error('Erro ao reproduzir:', err);
          }
        });
      }
      setIsPlaying(!isPlaying);
      return;
    }

    // Caso contrário, carregar nova playlist
    console.log(`Carregando músicas da playlist: ${playlistName}`);


    const query = `
  query GetPlaylist($playlistName: String) {
    playlist(playlistName: $playlistName) {
      title
      artist
      url
    }
  }
`;

    fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { playlistName } }),
    })
      .then(response => response.json())
      .then(data => {
        const playlist = data.data.playlist;
        setPlaylist(playlist);
        setCurrentTrackIndex(0);

        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = playlist[0]?.url || '';
          audioRef.current.load();

          audioRef.current.addEventListener(
            'loadeddata',
            () => {
              audioRef.current.play().catch(err => {
                if (err.name !== 'AbortError') {
                  console.error('Erro ao reproduzir:', err);
                }
              });
              setIsPlaying(true);
            },
            { once: true }
          );
        }

        setCurrentPlaylistName(playlistName);
      })
      .catch(err => console.error('Erro ao carregar playlist:', err));

  };


  const handlePrevTrack = () => {
    if (playlist.length === 0) return;

    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);

    audioRef.current.pause();
    audioRef.current.src = playlist[prevIndex].url;
    audioRef.current.load();
    audioRef.current.addEventListener(
      'loadeddata',
      () => {
        audioRef.current.play().catch(err => console.error('Erro ao reproduzir:', err));
        setIsPlaying(true);
      },
      { once: true }
    );

    setProgress(0);
  };

  const handleNextTrack = () => {
    if (playlist.length === 0) return;

    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);

    audioRef.current.pause();
    audioRef.current.src = playlist[nextIndex].url;
    audioRef.current.load();
    audioRef.current.addEventListener(
      'loadeddata',
      () => {
        audioRef.current.play().catch(err => console.error('Erro ao reproduzir:', err));
        setIsPlaying(true);
      },
      { once: true }
    );

    setProgress(0);
  };

  const handleProgressBarClick = (event) => {
    if (audioRef.current && audioRef.current.duration) {
      const rect = event.target.getBoundingClientRect(); // Obtém o tamanho e posição da barra
      const clickX = event.clientX - rect.left; // Posição do clique em relação à barra
      const newTime = (clickX / rect.width) * audioRef.current.duration; // Calcula o novo tempo
      audioRef.current.currentTime = newTime; // Atualiza o tempo atual
      setProgress((newTime / audioRef.current.duration) * 100); // Atualiza a barra de progresso visualmente
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current) {
      const newVolume = Math.max(0, audioRef.current.volume - 0.1);
      audioRef.current.volume = newVolume;
      console.log(`Volume diminuído para: ${newVolume}`);
    }
  };

  const increaseVolume = () => {
    if (audioRef.current) {
      const newVolume = Math.min(1, audioRef.current.volume + 0.1);
      audioRef.current.volume = newVolume;
      console.log(`Volume aumentado para: ${newVolume}`);
    }
  };

  if (playlist.length === 0) return <p>Carregando playlist...</p>;

  return (
    <div className={`player-container lg:flex ${isWideScreen ? 'xl-player' : 'mobile-player'}`}>

      <div
        className={`details pb-2 lg:pb-0 flex xl:flex-col items-center xl:justify-center flex-row justify-start space-x-4`}
      >
        {playlist.length === 0 ? (
          // Aviso quando não há playlist ou música tocando
          <p className="text-gray-medium text-center text-sm">
            Clique em um dos slides acima para escolher uma playlist.
          </p>
        ) : (
          // Exibição normal da playlist e música atual
          <>
            {currentPlaylistName ? (
              <>
                <h3 className="text-gray-medium text-sm">{currentPlaylistName}</h3>
                <h2 className="text-lg font-bold">{playlist[currentTrackIndex]?.title}</h2>
              </>
            ) : (
              <span className="text-gray-medium text-xs">
                Clique em um dos slides para tocar uma playlist.
              </span>
            )}
          </>
        )}

      </div>

      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]?.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
      ></audio>
      <div className="controls flex md:w-1/2 xl:block xl:w-full">
        <div className="audio-controls">
          <div className="button" onClick={handlePrevTrack}>
            <span>&#x23EE;</span>
          </div>
          <div className="button" onClick={() => handlePlayPause(currentPlaylistName)}>
            <span>{isPlaying ? '||' : String.fromCharCode(9654)}</span>
          </div>
          <div className="button" onClick={handleNextTrack}>
            <span>&#x23ED;</span>
          </div>
        </div>

        <div className="progress-bar" onClick={handleProgressBarClick}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="knobs">
          <div className="button knob" onClick={decreaseVolume}>
            <span>&#x1F509;</span>
          </div>
          <div className="button knob" onClick={increaseVolume}>
            <span>&#x1F50A;</span>
          </div>
        </div>
      </div>

    </div>
  );
});

export default Player;
