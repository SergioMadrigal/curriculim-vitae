import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../assets/locales/en/translation.json";
import es from "../assets/locales/es/translation.json";

const resources = {
  en,
  es,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    defaultNS: "common",
    fallbackLng: "en",
  });
  export const i18new = i18n;
