import i18n from "i18next"
import { initReactI18next } from "react-i18next"
// import Backend from "i18next-http-backend"
// import LanguageDetector from "i18next-browser-languagedetector"

i18n
  // .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pl",
    resources: {
      pl: {
        translation: require("./locales/pl/translation.json"),
      },
      en: {
        translation: require("./locales/en/translation.json"),
      },
      // vn: {
      //   translations: require("./locales/vn/translation.json"),
      // },
    },

    ns: ["translation"],
    defaultNS: "translation",

    returnObjects: true,

    // have a common namespace used around the full app

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  })

i18n.languages = ["pl", "en"]

export default i18n
