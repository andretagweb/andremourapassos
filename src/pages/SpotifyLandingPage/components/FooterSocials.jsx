import React from "react";
import { socialMedia } from "../data/socialMedia";
import { styles } from "../styles/layout";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaDeezer,
  FaBandcamp,
  FaSoundcloud,
  FaTiktok,
} from "react-icons/fa";

const ICONS = {
  spotify: FaSpotify,
  apple: FaApple,
  youtube: FaYoutube,
  deezer: FaDeezer,
  bandcamp: FaBandcamp,
  soundcloud: FaSoundcloud,
  tiktok: FaTiktok,
};

export default function FooterSocials() {
  const items = socialMedia.filter((m) => m.label !== "Spotify");

  return (
    <div style={styles.footer}>
      {items.map((m) => {
        const Icon = ICONS[m.icon];
        return (
          <a
            key={m.label}
            href={m.href}
            target="_blank"
            rel="noreferrer"
            style={styles.footerLink}
            aria-label={m.label}
          >
            {Icon ? <Icon /> : null} {m.label}
          </a>
        );
      })}
    </div>
  );
}
