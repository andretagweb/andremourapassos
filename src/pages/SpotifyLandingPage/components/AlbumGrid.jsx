import { albums } from "../data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumGrid() {
  return (
    <section className="albums-section">
      <h2>Discography</h2>

      <div className="albums-grid">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}
