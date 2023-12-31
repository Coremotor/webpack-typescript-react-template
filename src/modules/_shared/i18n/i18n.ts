import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from 'modules/_shared/i18n/locales/ru.json';
import en from 'modules/_shared/i18n/locales/en.json';

export enum LangEnum {
  Ru = 'ru',
  En = 'en',
}

export enum LocalesEnum {
  RuRu = 'ru-RU',
  EnUS = 'en-US',
}

const resources = {
  ru,
  en,
} as const;

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    lng: LangEnum.Ru,
    interpolation: {
      escapeValue: false,
    },
  })

  .then(() => console.log('init i18n successful'));

export default i18n;
