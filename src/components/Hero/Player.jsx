import React, { useEffect, useState } from 'react';
import './Player.css';

const Player = ({ isWideScreen: isWideScreenProp }) => {
  const innerWidth = 1440
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(
    isWideScreenProp !== undefined ? isWideScreenProp : window.innerWidth >= innerWidth
  );
  const audioRef = React.useRef(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/playlist')
      .then(response => response.json())
      .then(data => setPlaylist(data));

      if (isWideScreenProp === undefined) {
        const handleResize = () => {
          setIsWideScreen(window.innerWidth >= innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
  }, [isWideScreenProp]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Define o volume inicial como 0.5
    }
  }, [playlist]);
  

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
      audioRef.current.pause();
      const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
      setCurrentTrackIndex(prevIndex);
      audioRef.current.src = playlist[prevIndex].url;
      audioRef.current.load();
      audioRef.current.addEventListener(
        'loadeddata',
        () => {
          audioRef.current.play().catch(err => console.log('Erro ao reproduzir:', err));
          setIsPlaying(true);
        },
        { once: true }
      );
      setProgress(0);
    }
  };

  const handleNextTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      setCurrentTrackIndex(nextIndex);
      audioRef.current.src = playlist[nextIndex].url;
      audioRef.current.load();
      audioRef.current.addEventListener(
        'loadeddata',
        () => {
          audioRef.current.play().catch(err => console.log('Erro ao reproduzir:', err));
          setIsPlaying(true);
        },
        { once: true }
      );
      setProgress(0);
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
    <div className={`player-container ${isWideScreen ? 'xl-player' : 'mobile-player'}`}>
      <h2>{playlist[currentTrackIndex]?.title}</h2>
      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]?.url}
        onTimeUpdate={handleTimeUpdate}
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
  );
};

export default Player;
