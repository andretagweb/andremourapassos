import React, { useState } from "react";
import ReactDOM from "react-dom";

const VideoItem = ({ video }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleThumbnailClick = () => {
    setSelectedVideo(`https://www.youtube.com/embed/${video.id}`);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="thumbnail cursor-pointer" onClick={handleThumbnailClick}>
        <img
          src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
          alt={video.title}
          className="rounded-lg"
        />
        <p>{video.title}</p>
      </div>

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
    </>
  );
};

export default VideoItem;
