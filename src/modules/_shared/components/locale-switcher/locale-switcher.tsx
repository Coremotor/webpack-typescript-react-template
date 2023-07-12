import React from 'react';
import { Select } from 'modules/_shared/ui';
import {
  locales,
  useLocaleSwitcher,
} from 'modules/_shared/components/locale-switcher/use-locale-switcher';

export const LocaleSwitcher = () => {
  const { changeLocale } = useLocaleSwitcher();

  return (
    <Select onChange={changeLocale} options={locales} defaultValue='ru_RU' />
  );
};
