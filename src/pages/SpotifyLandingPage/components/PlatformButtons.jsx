import React from "react";
import socialMedia from "../../../shared/components/common/Social";

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
  { x: -12, y: -6, r: -0.6 },
  { x: 6, y: -14, r: 0.4 },
  { x: 12, y: -4, r: -0.3 },
  { x: -8, y: 8, r: 0.5 },
  { x: 4, y: 14, r: -0.4 },
  { x: -4, y: 18, r: 0.3 },
  { x: 10, y: 6, r: -0.5 },
  { x: -10, y: 2, r: 0.4 },
  { x: 0, y: 22, r: 0.2 },
];

export default function PlatformButtons() {
  const isMobile = window.innerWidth <= 768;
  const socialMediaItems = socialMedia.filter((m) => m.type === "music");

  const handleMusicClick = (platform, url) => {
    if (!window.gtag) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    window.gtag("event", "conversion", {
      send_to: "AW-993081860/jTnRCMm_mLsaEIT0xNkD",
      event_category: "music_platform",
      event_label: platform,
      event_callback: () => {
        window.open(url, "_blank", "noopener,noreferrer");
      },
    });

    // fallback de segurança (caso o callback não dispare)
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 800);
  };

  return (
    <div
      style={{
        marginTop: isMobile ? "1rem" : "4rem",
        maxWidth: 535,
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
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
              margin: "0.45rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.55rem",
              padding: isMobile ? "0.6rem 1.2rem" : "0.85rem 1.6rem",
              minWidth: 150,
              borderRadius: "999px",
              backgroundColor: "#000",
              border: `1.5px solid ${color}`,
              color: color,
              fontFamily: "Limelight, serif",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
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
