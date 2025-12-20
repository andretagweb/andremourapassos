import React from "react";

function VideosKey({
  showModal,
  setNoPlaylistStatus,
  YoutubeVideos,
  Carousel,
  VideoItem,
}) {
  return (
    <div
      id="videos"
      className="hero-key key-natural key-black non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => {
        showModal("videos");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-image"></div>

        <div className="key-videos hover-text text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <Carousel
            items={YoutubeVideos}
            renderItem={(video) => <VideoItem video={video} />}
          />
          <br />
        </div>
      </div>
    </div>
  );
}

export default VideosKey;
