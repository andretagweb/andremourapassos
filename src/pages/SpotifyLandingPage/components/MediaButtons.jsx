import React from "react";
import socialMedia from "../../../shared/components/common/Social";
import { styles } from "../styles/layout";

export default function MediaButtons() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.75rem",
        marginTop: "1.5rem",
      }}
    >
      {socialMedia.map((media) => (
        <a
          key={media.label}
          href={media.href}
          target="_blank"
          rel="noreferrer"
          aria-label={media.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.65rem 1rem",
            borderRadius: "999px",
            background: "#0f0f0f",
            color: "#fff",
            fontSize: "0.9rem",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = "#1DB954";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          {media.icon}
          <span>{media.label}</span>
        </a>
      ))}
    </div>
  );
}
