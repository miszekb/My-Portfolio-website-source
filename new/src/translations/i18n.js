import { initReactI18next } from "react-i18next";
import en from './languages/en';
import pl from './languages/pl';
import i18next from "i18next";

const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
});

export default i18next;