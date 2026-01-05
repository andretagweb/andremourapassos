import React from "react";
import socialMedia from "../../../shared/components/common/Social";
import { styles } from "../styles/layout";
import { FaHome } from "react-icons/fa";
import { trackMusicConversion } from "../shared/utils/googleAdsConversion";

export default function FooterSocials({ t }) {
  const socialItems = socialMedia.filter((m) => m.type === "social");
  const musicItems = socialMedia.filter((m) => m.type === "music");

  return (
    <footer className="hotsiteFooter" style={styles.footer}>
      {/* Music platforms */}
      <div style={{ ...styles.footerLinksRow, marginBottom: "0.75rem" }}>
        {musicItems.map((m) => (
          <button
            key={m.label}
            type="button"
            aria-label={m.label}
            onClick={() =>
              trackMusicConversion({
                platform: m.label,
                url: m.href,
              })
            }
            style={{
              ...styles.footerMusicLink,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {m.icon} {m.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div style={styles.footerDivider} />

      {/* Social links */}
      <div style={styles.footerLinksRow}>
        {socialItems.map((m) => (
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
        className="copyrightText special-elite-regular"
        style={styles.copyrightText}
      >
        {t("footer.rights", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
