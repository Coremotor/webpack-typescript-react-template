import React from 'react';
import { Input } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import SearchIcon from 'assets/icons/search.svg';
import styles from './payment-transactions-search.module.css';

export const PaymentTransactionsSearch = () => {
  const { t } = useTranslation();
  const handleSearch = (value: string) => console.log(value);
  return (
    <Input.Search
      className={styles.input}
      onSearch={handleSearch}
      enterButton={t('Найти')}
      size='large'
      prefix={<SearchIcon className={styles.icon} />}
      placeholder={t('Поиск по номеру заказа или названию объекта')}
    />
  );
};
