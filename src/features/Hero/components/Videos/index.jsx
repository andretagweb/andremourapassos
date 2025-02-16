import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './index.css';

const Carousel = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  const handleThumbnailClick = (videoId) => {
    setSelectedVideo(`https://www.youtube.com/embed/${videoId}`);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  const scrollCarousel = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const updateButtonStates = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft <= 5);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    // Aguarda a renderização completa para evitar valores zerados
    const checkVisibility = () => {
      if (carouselRef.current && carouselRef.current.scrollWidth > 0) {
        updateButtonStates();
      } else {
        setTimeout(checkVisibility, 50); // Tenta novamente após 50ms se o elemento ainda não estiver renderizado corretamente
      }
    };

    checkVisibility();
    window.addEventListener("resize", updateButtonStates);
    return () => window.removeEventListener("resize", updateButtonStates);
  }, []);

  return (
    <div className="video-carousel-container relative w-full">
      {/* Botões de Navegação */}
      <div className="navigation-buttons flex justify-between absolute w-full top-1/2 transform -translate-y-1/2 px-2">
        <button
          onClick={() => scrollCarousel(-200)}
          className={`prev-button ${isAtStart ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>
        <button
          onClick={() => scrollCarousel(200)}
          className={`next-button ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""}`}
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
            className="thumbnail cursor-pointer"
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
            <div className="overlay" onClick={closePopup}></div>
            <div className="modal">
              <button className="close-button" onClick={closePopup}>X</button>
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
          document.body
        )}
    </div>
  );
};

export default Carousel;
