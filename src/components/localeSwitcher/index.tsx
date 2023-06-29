import React from 'react';
import { Select } from 'antd';
import {
  locales,
  useLocaleSwitcher,
} from 'components/localeSwitcher/useLocaleSwitcher';

const LocaleSwitcher = () => {
  const { changeLocale } = useLocaleSwitcher();

  return (
    <Select onChange={changeLocale} options={locales} defaultValue='ru_RU' />
  );
};

export default LocaleSwitcher;
