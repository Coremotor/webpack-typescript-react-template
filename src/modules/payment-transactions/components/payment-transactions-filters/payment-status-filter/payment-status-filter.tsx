import React from 'react';
import styles from './payment-status-filter.module.css';
import { Select, Text } from 'modules/_shared/ui';
import ArrowIcon from 'assets/icons/arrow-down.svg';
import { useTranslation } from 'react-i18next';

const statusOptions = [
  { value: 'Все', label: 'Все' },
  { value: 'Выполнено', label: 'Выполнено' },
  { value: 'Выполняется', label: 'Выполняется' },
  { value: 'Отмена', label: 'Отмена' },
  { value: 'Нет средств', label: 'Нет средств' },
];

export const PaymentStatusFilter = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Text type='secondary'>{t('Статус')}: </Text>
      <Select
        popupClassName={styles.select}
        suffixIcon={<ArrowIcon className={styles.icon} />}
        bordered={false}
        options={statusOptions}
        defaultValue={statusOptions[0]}
      />
    </div>
  );
};
