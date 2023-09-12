import { useTranslation } from 'react-i18next';
import { setLocale } from 'modules/_shared/app-store/reducer';

import localeRu from 'antd/locale/ru_RU';
import localeEn from 'antd/locale/en_US';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import { useAppDispatch } from 'modules/_shared/root-store/hooks';
import { LangEnum, LocalesEnum } from 'modules/_shared/i18n/i18n';

export const locales = [
  { label: 'English', value: LocalesEnum.EnUS },
  { label: 'Русский', value: LocalesEnum.RuRu },
];

export const useLocaleSwitcher = () => {
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  const changeLocale = async (localeValue: string) => {
    switch (localeValue) {
      case LocalesEnum.RuRu:
        dispatch(setLocale(localeRu));
        await changeLanguage(LangEnum.Ru);
        break;
      case LocalesEnum.EnUS:
        dispatch(setLocale(localeEn));
        await changeLanguage(LangEnum.En);
        break;
      default:
        dispatch(setLocale(localeRu));
        await changeLanguage(LangEnum.Ru);
    }
  };

  return {
    changeLocale,
  };
};
