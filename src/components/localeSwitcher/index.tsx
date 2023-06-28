import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { setLocale } from 'store/modules/app/reduser';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import localeEn from 'antd/locale/en_US';
import localeRu from 'antd/locale/ru_RU';

export const locales = [
  { label: 'English', value: 'en_US' },
  { label: 'Русский', value: 'ru_RU' },
];

const LocaleSwitcher = () => {
  const dispatch = useDispatch();

  const changeLocale = (value: string) => {
    if (value === 'ru_RU') dispatch(setLocale(localeRu));
    if (value === 'en_US') dispatch(setLocale(localeEn));
  };
  return (
    <Select onChange={changeLocale} options={locales} defaultValue='ru_RU' />
  );
};

export default LocaleSwitcher;
