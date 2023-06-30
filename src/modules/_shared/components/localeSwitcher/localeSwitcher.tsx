import React from 'react';
import { Select } from 'antd';
import {
  locales,
  useLocaleSwitcher,
} from 'modules/_shared/components/localeSwitcher/useLocaleSwitcher';

export const LocaleSwitcher = () => {
  const { changeLocale } = useLocaleSwitcher();

  return (
    <Select onChange={changeLocale} options={locales} defaultValue='ru_RU' />
  );
};
