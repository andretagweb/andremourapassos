import React from "react";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaDeezer,
  FaBandcamp,
  FaSoundcloud,
  FaTiktok,
} from "react-icons/fa";
import { styles } from "../styles/layout";

const ICONS = {
  spotify: FaSpotify,
  apple: FaApple,
  youtube: FaYoutube,
  deezer: FaDeezer,
  bandcamp: FaBandcamp,
  soundcloud: FaSoundcloud,
  tiktok: FaTiktok,
};

export default function MediaIconLinks({ links, only = null }) {
  // links: { spotify: url, apple: url ... }
  // only: array de chaves permitidas (opcional)
  const entries = Object.entries(links || {})
    .filter(([k, v]) => Boolean(v))
    .filter(([k]) => (only ? only.includes(k) : true));

  return (
    <div style={styles.iconRow}>
      {entries.map(([key, href]) => {
        const Icon = ICONS[key];
        if (!Icon) return null;

        return (
          <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={key}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
