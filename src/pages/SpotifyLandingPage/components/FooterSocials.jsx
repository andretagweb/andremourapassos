import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles/layout";

export default function FooterSocials() {
  const { t } = useTranslation("spotify");

  return (
    <footer style={styles.footer}>
      <p
        style={{
          fontSize: "0.8rem",
          color: "#777",
          textAlign: "center",
          maxWidth: 680,
          lineHeight: 1.6,
        }}
      >
        {t("footer.rights")}
      </p>
    </footer>
  );
}
