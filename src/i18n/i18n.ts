import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    debug: false,
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => console.log('init i18n successful'));

export default i18n;
