import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { setLocale } from 'store/modules/app/reduser';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import localeEn from 'antd/locale/en_US';
import localeRu from 'antd/locale/ru_RU';
import { useTranslation } from 'react-i18next';

export const locales = [
  { label: 'English', value: 'en_US' },
  { label: 'Русский', value: 'ru_RU' },
];

const LocaleSwitcher = () => {
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
  return (
    <Select onChange={changeLocale} options={locales} defaultValue='ru_RU' />
  );
};

export default LocaleSwitcher;
