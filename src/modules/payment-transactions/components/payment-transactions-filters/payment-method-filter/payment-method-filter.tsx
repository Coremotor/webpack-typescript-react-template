import React from 'react';
import styles from './payment-method-filter.module.css';
import { Select, Text } from 'modules/_shared/ui';
import ArrowIcon from 'assets/icons/arrow-down.svg';
import { useTranslation } from 'react-i18next';

const methodsOptions = [
  { value: 'Все', label: 'Все' },
  { value: 'Карта', label: 'Карта' },
  { value: 'Кешбэк', label: 'Кешбэк' },
  { value: 'Банковский платёж', label: 'Банковский платёж' },
  { value: 'SberPay', label: 'SberPay' },
  { value: 'Pay', label: 'Pay' },
  { value: 'СБП', label: 'СБП' },
];

export const PaymentMethodFilter = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Text type='secondary'>{t('Способ оплаты')}: </Text>
      <Select
        popupClassName={styles.select}
        suffixIcon={<ArrowIcon className={styles.icon} />}
        bordered={false}
        options={methodsOptions}
        defaultValue={methodsOptions[0]}
      />
    </div>
  );
};
