import React, { useState, useEffect, useRef } from "react";
import './VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null); // Para acessar o carrossel diretamente

  const handleThumbnailClick = (videoId) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    setSelectedVideo(videoUrl);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  const scrollCarousel = (offset) => {
    const carousel = carouselRef.current;
    carousel.scrollLeft += offset;
    updateButtonStates();
  };

  const updateButtonStates = () => {
    const carousel = carouselRef.current;
    setIsAtStart(carousel.scrollLeft === 0);
    setIsAtEnd(carousel.scrollWidth - carousel.clientWidth === carousel.scrollLeft);
  };

  useEffect(() => {
    updateButtonStates(); // Atualiza os estados na inicialização
  }, []);

  return (
    <div className="video-carousel-container relative w-full">
      {/* Botões de Navegação */}
      <div className="navigation-buttons flex justify-between absolute inset-0">
        <button
          onClick={() => scrollCarousel(-200)}
          className={`prev-button ${isAtStart ? "disabled" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>
        <button
          onClick={() => scrollCarousel(200)}
          className={`next-button ${isAtEnd ? "disabled" : ""}`}
          disabled={isAtEnd}
        >
          ▶
        </button>
      </div>

      {/* Carrossel de Vídeos */}
      <div
        className="video-carousel flex overflow-x-auto scrollbar-hide space-x-4"
        ref={carouselRef} // Referência ao carrossel
        onScroll={updateButtonStates} // Atualiza estados ao rolar manualmente
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => handleThumbnailClick(video.id)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
              alt={`Thumbnail ${index}`}
              className="rounded-lg"
            />
            <p>{video.title}</p> {/* Exibe o título do vídeo */}
          </div>
        ))}
      </div>

      {/* Popup de Vídeo */}
      {selectedVideo && (
        <div>
          {/* Overlay */}
          <div className="overlay" onClick={closePopup}></div>
          {/* Modal */}
          <div className="modal">
            <button
              className="close-button"
              onClick={closePopup}
            >
              X
            </button>
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              title="YouTube Video"
              className="w-[600px] h-[340px]"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
