import React from "react";
import socialMedia from "../../../shared/components/common/Social";
import { styles } from "../styles/layout";
import { FaHome } from "react-icons/fa";

export default function FooterSocials({ t }) {
  const items = socialMedia.filter((m) => m.type === "social");

  return (
    <footer className="footer" style={styles.footer}>
      {/* Social links */}
      <div style={styles.footerLinksRow}>
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

        <a
          href="https://andremourapassos.com"
          target="_blank"
          rel="noreferrer"
          style={styles.footerLink}
          aria-label={t("footer.songwriter_text")}
        >
          <FaHome /> {t("footer.songwriter_text")}
        </a>
      </div>

      {/* Copyright */}
      <p
        className="special-elite-regular"
        style={{
          marginTop: "1rem",
          fontSize: "0.75rem",
          color: "#777",
          textAlign: "right",
          letterSpacing: "0.3px",
        }}
      >
        {t("footer.rights", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
