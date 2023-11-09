import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang_EN from "../assets/locales/lang_EN.json";
import lang_VN from "../assets/locales/lang_VN.json";

const resources = {
  ...lang_EN,
  ...lang_VN,
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.language ?? "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
