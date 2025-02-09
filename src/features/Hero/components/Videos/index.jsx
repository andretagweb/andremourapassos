import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './index.css';

const VideoCarousel = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

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
    updateButtonStates();
  }, []);

  return (
    <div className="video-carousel-container relative w-full">
      {/* Botões de Navegação */}
      <div className="navigation-buttons flex justify-between absolute">
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
        ref={carouselRef}
        onScroll={updateButtonStates}
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
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* Popup de Vídeo */}
      {selectedVideo &&
        ReactDOM.createPortal(
          <div>
            {/* Overlay */}
            <div className="overlay" onClick={closePopup}></div>
            {/* Modal */}
            <div className="modal">
              <button className="close-button" onClick={closePopup}>
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
          </div>,
          document.body // Adiciona o modal diretamente ao body
        )}
    </div>
  );
};

export default VideoCarousel;
