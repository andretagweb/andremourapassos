import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./en/common.json";
import enkeys from "./en/keys.json";
import enMenu from "./en/menu.json";
import enPlayer from "./en/player.json";
import enFooter from "./en/footer.json";

import ptCommon from "./pt/common.json";
import ptkeys from "./pt/keys.json";
import ptMenu from "./pt/menu.json";
import ptPlayer from "./pt/player.json";
import ptFooter from "./pt/footer.json";

import esCommon from "./es/common.json";
import eskeys from "./es/keys.json";
import esMenu from "./es/menu.json";
import esPlayer from "./es/player.json";
import esFooter from "./es/footer.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { common: enCommon, keys: enkeys, menu: enMenu, player: enPlayer, footer: enFooter },
      pt: { common: ptCommon, keys: ptkeys, menu: ptMenu, player: ptPlayer, footer: ptFooter },
      es: { common: esCommon, keys: eskeys, menu: esMenu, player: esPlayer, footer: esFooter }
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
