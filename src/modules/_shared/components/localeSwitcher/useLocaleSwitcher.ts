import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLocale } from 'modules/_shared/store/global/reduser';

import localeRu from 'antd/locale/ru_RU';
import localeEn from 'antd/locale/en_US';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';

export const locales = [
  { label: 'English', value: 'en_US' },
  { label: 'Русский', value: 'ru_RU' },
];

export const useLocaleSwitcher = () => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  const changeLocale = async (value: string) => {
    if (value === 'ru_RU') {
      dispatch(setLocale(localeRu));
      await changeLanguage('ru');
    }
    if (value === 'en_US') {
      dispatch(setLocale(localeEn));
      await changeLanguage('en');
    }
  };

  return {
    changeLocale,
  };
};
