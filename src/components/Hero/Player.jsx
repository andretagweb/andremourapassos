import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import './Player.css';

const Player = forwardRef((props, ref) => {
  const innerWidth = 1440;
  const [playlist, setPlaylist] = useState(['Bloods Cocktail']);
  const [currentPlaylistName, setCurrentPlaylistName] = useState('escolha uma playlist');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= innerWidth);
  const audioRef = useRef(null);

  // Gerenciar largura da tela
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    fetch(`http://localhost:3001/api/playlist/${playlistName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Playlist não encontrada no servidor.');
        }
        return response.json();
      })
      .then(data => {
        setPlaylist(data);
        setCurrentTrackIndex(0);

        if (audioRef.current) {
          audioRef.current.pause(); // Pausa qualquer reprodução anterior
          audioRef.current.src = data[0]?.url || '';
          audioRef.current.load(); // Garante que o áudio esteja carregado antes de tentar reproduzir

          // Apenas reproduzir após o evento "loadeddata"
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

        setCurrentPlaylistName(playlistName); // Atualiza o nome da playlist atual
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
    <div className={`player-container ${isWideScreen ? 'xl-player' : 'mobile-player'}`}>

      <div
        className={`flex ${isWideScreen ? 'flex-col items-center justify-center' : 'flex-row items-center justify-start space-x-4'}`}
      >
        {console.log(playlist.length)}
        {playlist.length === 0 ? (
          // Aviso quando não há playlist ou música tocando
          <p className="text-gray-medium text-center text-sm">
            Clique em um dos slides acima para escolher uma playlist.
          </p>
        ) : (
          // Exibição normal da playlist e música atual
          <>
            <h3 className="text-gray-medium text-sm">{currentPlaylistName}</h3>
            <h2 className="text-lg font-bold">{playlist[currentTrackIndex]?.title}</h2>
          </>
        )}
      </div>

      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]?.url}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <div className="controls xl:block xl:w-full  md:flex md:w-1/2">
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
      
        <div className="progress-bar">
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
