import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// EN
import enCommon from "./en/common.json";
import enKeys from "./en/keys.json";
import enMenu from "./en/menu.json";
import enPlayer from "./en/player.json";
import enFooter from "./en/footer.json";
import enSeo from "./en/seo.json";

// PT
import ptCommon from "./pt/common.json";
import ptKeys from "./pt/keys.json";
import ptMenu from "./pt/menu.json";
import ptPlayer from "./pt/player.json";
import ptFooter from "./pt/footer.json";
import ptSeo from "./pt/seo.json";

// ES
import esCommon from "./es/common.json";
import esKeys from "./es/keys.json";
import esMenu from "./es/menu.json";
import esPlayer from "./es/player.json";
import esFooter from "./es/footer.json";
import esSeo from "./es/seo.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: enCommon,
        keys: enKeys,
        menu: enMenu,
        player: enPlayer,
        footer: enFooter,
        seo: enSeo
      },
      pt: {
        common: ptCommon,
        keys: ptKeys,
        menu: ptMenu,
        player: ptPlayer,
        footer: ptFooter,
        seo: ptSeo
      },
      es: {
        common: esCommon,
        keys: esKeys,
        menu: esMenu,
        player: esPlayer,
        footer: esFooter,
        seo: esSeo
      }
    },
    fallbackLng: "en",
    debug: false,
    defaultNS: "common",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18n;
