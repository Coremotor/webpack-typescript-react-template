import React from 'react';
import styles from './payment-type-filter.module.css';
import { Select, Text } from 'modules/_shared/ui';
import ArrowIcon from 'assets/icons/arrow-down.svg';
import { useTranslation } from 'react-i18next';

const typesOptions = [
  { value: 'Все', label: 'Все' },
  { value: 'Оплата', label: 'Оплата' },
  { value: 'Оплата с кешбэком', label: 'Оплата с кешбэком' },
  { value: 'Поступление', label: 'Поступление' },
  { value: 'Резерв средств', label: 'Резерв средств' },
  { value: 'Возврат', label: 'Возврат' },
  { value: 'Перечисление', label: 'Перечисление' },
];

export const PaymentTypeFilter = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Text type='secondary'>{t('Тип')}: </Text>
      <Select
        popupClassName={styles.select}
        suffixIcon={<ArrowIcon className={styles.icon} />}
        bordered={false}
        options={typesOptions}
        defaultValue={typesOptions[0]}
      />
    </div>
  );
};
