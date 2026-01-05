import React, { useRef } from "react";
import socialMedia from "../../../shared/components/common/Social";
import { trackMusicConversion } from "../shared/utils/googleAdsConversion";

const PLATFORM_COLORS = {
  Spotify: "#1DB954",
  "Apple Music": "#FA243C",
  Deezer: "#EF5466",
  SoundCloud: "#FF5500",
  Bandcamp: "#1DA0C3",
  YouTube: "#FF0000",
  TikTok: "#69C9D0",
  Instagram: "#E4405F",
  Facebook: "#1877F2",
};

const CHAOS = [
  { x: -12, y: -6, r: -3.6 },
  { x: 6, y: -14, r: 2.4 },
  { x: 12, y: -4, r: -1.3 },
  { x: -8, y: 18, r: 5.5 },
  { x: 4, y: 14, r: -6.4 },
  { x: 8, y: 18, r: 2.3 },
  { x: 10, y: 6, r: -0.5 },
  { x: -10, y: 2, r: 0.4 },
  { x: 0, y: 22, r: 0.2 },
];

export default function PlatformButtons() {
  const isMobile = window.innerWidth <= 768;
  const socialMediaItems = socialMedia.filter((m) => m.type === "music");
  const hasOpenedRef = useRef(false);

  const openOnce = (url) => {
    if (hasOpenedRef.current) return;
    hasOpenedRef.current = true;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMusicClick = (platform, url) => {
    trackMusicConversion({ platform, url });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.6rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      {socialMediaItems.map((media, index) => {
        const color = PLATFORM_COLORS[media.label] || "#fff";
        const chaos = CHAOS[index % CHAOS.length];

        return (
          <button
            key={media.label}
            type="button"
            aria-label={media.label}
            onClick={() => handleMusicClick(media.label, media.href)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.45rem",
              padding: isMobile ? "0.55rem 1rem" : "0.7rem 1.2rem",
              minWidth: isMobile ? 120 : 130, 
              borderRadius: "999px",
              backgroundColor: "#000",
              border: `1.5px solid ${color}`,
              color: color,
              fontFamily: "Limelight, serif",
              fontSize: isMobile ? "0.75rem" : "0.85rem",
              letterSpacing: "0.04em",
              cursor: "pointer",
              transform: `
                translate(${chaos.x}px, ${chaos.y}px)
                rotate(${chaos.r}deg)
              `,
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.transform = `
                translate(${chaos.x}px, ${chaos.y - 6}px)
                rotate(${chaos.r * 0.4}deg)
                scale(1.04)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#000";
              e.currentTarget.style.color = color;
              e.currentTarget.style.transform = `
                translate(${chaos.x}px, ${chaos.y}px)
                rotate(${chaos.r}deg)
              `;
            }}
          >
            {media.icon}
            <span>{media.label}</span>
          </button>
        );
      })}
    </div>
  );
}
