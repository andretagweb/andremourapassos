import React, { useEffect, useState } from 'react';
import './Player.css';

const Player = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Progresso da barra
  const audioRef = React.useRef(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/playlist')
      .then(response => response.json())
      .then(data => setPlaylist(data));
  }, []);

  // Atualiza o progresso da barra
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log('Erro ao reproduzir:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pausa a música atual
      const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length; // Garantir índice válido
      setCurrentTrackIndex(prevIndex);
      audioRef.current.src = playlist[prevIndex].url; // Atualiza a URL do áudio
      audioRef.current.load(); // Carrega a nova música

      // Adiciona um listener para reproduzir a música somente após o carregamento
      audioRef.current.addEventListener('loadeddata', () => {
        audioRef.current.play().catch(err => console.log('Erro ao reproduzir:', err));
        setIsPlaying(true);
      }, { once: true }); // `once: true` para remover o listener após a execução
      setProgress(0); // Reinicia a barra de progresso
    }
  };

  const handleNextTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pausa a música atual
      const nextIndex = (currentTrackIndex + 1) % playlist.length; // Garantir índice válido
      setCurrentTrackIndex(nextIndex);
      audioRef.current.src = playlist[nextIndex].url; // Atualiza a URL do áudio
      audioRef.current.load(); // Carrega a nova música

      // Adiciona um listener para reproduzir a música somente após o carregamento
      audioRef.current.addEventListener('loadeddata', () => {
        audioRef.current.play().catch(err => console.log('Erro ao reproduzir:', err));
        setIsPlaying(true);
      }, { once: true }); // `once: true` para remover o listener após a execução
      setProgress(0); // Reinicia a barra de progresso
    }
  };


  const decreaseVolume = () => {
    if (audioRef.current) {
      // Garante que o volume não fique abaixo de 0
      const newVolume = Math.max(0, audioRef.current.volume - 0.1);
      audioRef.current.volume = newVolume;
      console.log(`Volume diminuído para: ${newVolume}`);
    }
  };

  const increaseVolume = () => {
    if (audioRef.current) {
      // Garante que o volume não ultrapasse 1
      const newVolume = Math.min(1, audioRef.current.volume + 0.1);
      audioRef.current.volume = newVolume;
      console.log(`Volume aumentado para: ${newVolume}`);
    }
  };
  if (playlist.length === 0) return <p>Carregando playlist...</p>;

  return (
    <div className="player-container">
      <h2>{playlist[currentTrackIndex]?.title}</h2>
      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]?.url}
        onTimeUpdate={handleTimeUpdate} // Evento para atualizar a barra
      ></audio>
      <div className="audio-controls">
        <div className="button" onClick={handlePrevTrack}>
          <span>&#x23EE;</span>
        </div>
        <div className="button" onClick={handlePlayPause}>
          <span>{isPlaying ? '||' : String.fromCharCode(9654)}</span>
        </div>
        <div className="button" onClick={handleNextTrack}>
          <span>&#x23ED;</span>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="knobs">
        <div className="button knob" onClick={decreaseVolume}>
          <span>&#x1F509;</span> {/* Diminuição de volume */}
        </div>
        <div className="button knob" onClick={increaseVolume}>
          <span>&#x1F50A;</span> {/* Aumento de volume */}
        </div>
      </div>
    </div>
  );
};

export default Player;
