import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  fallbackLng: "pl",
  resources: {
    pl: {
      translation: require("./locales/pl/translation.json"),
    },
    en: {
      translation: require("./locales/en/translation.json"),
    },
    vn: {
      translation: require("./locales/vn/translation.json"),
    },
  },

  ns: ["translation"],
  defaultNS: "translation",

  returnObjects: true,

  // have a common namespace used around the full app

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    wait: true,
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
})

i18n.languages = ["pl", "en", "vn"]

export default i18n
