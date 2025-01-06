import React, { useState } from "react";
import './VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleThumbnailClick = (videoId) => {
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        console.log('video clicado')
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
