import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaBandcamp,
  FaDeezer,
} from "react-icons/fa";

export default function AlbumCard({ album }) {
  return (
    <div className="album-card">
      <img
        src={album.cover}
        alt={album.title}
        loading="lazy"
        decoding="async"
      />

      <h3>{album.title}</h3>
      <p>
        {album.subtitle ? album.subtitle + " • " : ""}
        {album.year}
      </p>

      <div className="album-links">
        {album.links.spotify && (
          <a href={album.links.spotify} target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
        )}
        {album.links.apple && (
          <a href={album.links.apple} target="_blank" rel="noreferrer">
            <FaApple />
          </a>
        )}
        {album.links.youtube && (
          <a href={album.links.youtube} target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        )}
        {album.links.bandcamp && (
          <a href={album.links.bandcamp} target="_blank" rel="noreferrer">
            <FaBandcamp />
          </a>
        )}
        {album.links.deezer && (
          <a href={album.links.deezer} target="_blank" rel="noreferrer">
            <FaDeezer />
          </a>
        )}
      </div>
    </div>
  );
}
