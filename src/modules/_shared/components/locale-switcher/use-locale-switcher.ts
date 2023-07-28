import { useTranslation } from 'react-i18next';
import { setLocale } from 'modules/_shared/app-store/reducer';

import localeRu from 'antd/locale/ru_RU';
import localeEn from 'antd/locale/en_US';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import { useAppDispatch } from 'modules/_shared/root-store/hooks';
import { LangEnum, LocalesEnum } from 'modules/_shared/i18n/i18n';

export const locales = [
  { label: 'English', value: LocalesEnum.enUS },
  { label: 'Русский', value: LocalesEnum.ruRu },
];

export const useLocaleSwitcher = () => {
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  const changeLocale = async (localeValue: string) => {
    switch (localeValue) {
      case LocalesEnum.ruRu:
        dispatch(setLocale(localeRu));
        await changeLanguage(LangEnum.ru);
        break;
      case LocalesEnum.enUS:
        dispatch(setLocale(localeEn));
        await changeLanguage(LangEnum.en);
        break;
      default:
        dispatch(setLocale(localeRu));
        await changeLanguage(LangEnum.ru);
    }
  };

  return {
    changeLocale,
  };
};
