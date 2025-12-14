import React from "react";
import { styles } from "../styles/layout";

export default function LanguageSwitcher({ onChange }) {
  return (
    <div style={styles.flags}>
      <button onClick={() => onChange("pt")} style={styles.flagBtn} aria-label="Português">
        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="Português" width="32" height="21" loading="lazy" />
      </button>
      <button onClick={() => onChange("en")} style={styles.flagBtn} aria-label="English">
        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="English" width="32" height="21" loading="lazy" />
      </button>
      <button onClick={() => onChange("es")} style={styles.flagBtn} aria-label="Español">
        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt="Español" width="32" height="21" loading="lazy" />
      </button>
    </div>
  );
}
