import { DEFAULT_LANGUAGE } from "constants/language";
import browserStorage from "services/storage/browserStorage";

export const useLanguage = () => {
  const lang: string | undefined = !!browserStorage.get("i18nextLng")
    ? browserStorage.get("i18nextLng")
    : "en";

  const t = (value: any) => {
    try {
      if (!!lang && !!value[lang]) {
        return value[lang];
      } else {
        if (!!value[DEFAULT_LANGUAGE]) return value[DEFAULT_LANGUAGE];
        else return "";
      }
    } catch (err) {
      return "";
    }
  };
  return [t];
};
