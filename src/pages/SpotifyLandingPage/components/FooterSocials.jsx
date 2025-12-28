import React from "react";
import socialMedia from "../../../shared/components/common/Social";
import { styles } from "../styles/layout";

export default function FooterSocials({ t }) {
  const items = socialMedia.filter((m) => m.type === "social");

  return (
    <footer style={styles.footer}>
      {/* Social links */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((m) => (
          <a
            key={m.label}
            href={m.href}
            target="_blank"
            rel="noreferrer"
            style={styles.footerLink}
            aria-label={m.label}
          >
            {m.icon} {m.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p
        style={{
          marginTop: "1.2rem",
          fontSize: "0.75rem",
          color: "#777",
          textAlign: "center",
          letterSpacing: "0.3px",
        }}
      >
        {t("footer.rights", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
