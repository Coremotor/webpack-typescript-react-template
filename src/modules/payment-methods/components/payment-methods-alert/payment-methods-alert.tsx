import React from 'react';
import { Alert } from 'modules/_shared/ui';
import InfoIcon from 'assets/icons/info.svg';
import styles from './payment-methods-alert.module.css';

const content =
  'Смена положения тумблера включает или отключает возможность выбрать способ оплаты в модуле бронирования. ' +
  'Доступность конкретного способа для объекта размещения необходимо настраивать в модуле бронирования';

export const PaymentMethodsAlert = () => {
  return (
    <Alert
      className={styles.alert}
      icon={<InfoIcon />}
      type='info'
      message={content}
      showIcon
    />
  );
};
