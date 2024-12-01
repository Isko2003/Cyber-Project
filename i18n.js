import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en/translation.json";
import az from "./public/locales/az/translation.json";
import ru from "./public/locales/ru/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    az: { translation: az },
    ru: { translation: ru },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
