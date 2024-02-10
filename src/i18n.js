import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Calculator: "Calculator",
        },
      },
      hi: {
        translation: {
          Calculator: "कैलकुलेटर",
        },
      },
      fr: {
        translation: {
          Calculator: "calculatrice",
        },
      },
      id: {
        translation: {
          Calculator: "Kalkulator",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18next;
