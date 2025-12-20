import HeroKeyModal from "../HeroKeyModal";
import Carousel from "../../Carousel";
import VideoItem from "../../Carousel/VideoItem";
import YoutubeVideos from "../../Carousel/YoutubeVideos.json";

function VideosKey({ showModal, setNoPlaylistStatus }) {
  return (
    <HeroKeyModal
      id="videos"
      className="hero-key key-natural key-black non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => showModal("videos")}
    >
      <div className="key-videos hover-text text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
        <Carousel
          items={YoutubeVideos}
          renderItem={(video) => <VideoItem video={video} />}
        />
      </div>
    </HeroKeyModal>
  );
}

export default VideosKey;
