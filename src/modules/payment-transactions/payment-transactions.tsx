import React from 'react';
import { Title, Button } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import CloudIcon from 'assets/icons/cloud.svg';
import styles from './payment-transactions.module.css';
import {
  PaymentTransactionsCards,
  PaymentTransactionsFilters,
  PaymentTransactionsSearch,
} from 'modules/payment-transactions/components';

export const PaymentTransactions = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3}>{t('paymentTransactions.title')}</Title>
        <Button className={styles.button} icon={<CloudIcon />}>
          {t('Выгрузить')}
        </Button>
      </header>
      <PaymentTransactionsCards />
      <PaymentTransactionsSearch />
      <PaymentTransactionsFilters />
    </div>
  );
};

export default PaymentTransactions;
