import React, { useState } from "react";
import './VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleThumbnailClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  // Função para rolar o carrossel
  const scrollCarousel = (offset) => {
    const carousel = document.querySelector('.video-carousel');
    carousel.scrollLeft += offset;
  };

  return (
    <div className="video-carousel-container relative w-full">
      {/* Botões de Navegação */}
      <div className="navigation-buttons flex justify-between absolute inset-0">
        <button
          onClick={() => scrollCarousel(-200)}
          className="prev-button bg-gray-800 text-white rounded-full p-2 m-2"
        >
          ◀
        </button>
        <button
          onClick={() => scrollCarousel(200)}
          className="next-button bg-gray-800 text-white rounded-full p-2 m-2"
        >
          ▶
        </button>
      </div>

      {/* Carrossel de Vídeos */}
      <div className="video-carousel flex overflow-x-auto scrollbar-hide space-x-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="thumbnail min-w-[200px] h-[120px] bg-gray-200 rounded-lg flex-shrink-0 cursor-pointer"
            onClick={() => handleThumbnailClick(video.url)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Popup de Vídeo */}
      {selectedVideo && (
        <div className="popup fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="video-container bg-white p-4 rounded-lg relative">
            <button
              className="close-popup absolute top-2 right-2 text-red-500 font-bold"
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
