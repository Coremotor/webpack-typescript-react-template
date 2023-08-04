import React from 'react';
import { Title, Button } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import CloudIcon from 'assets/icons/cloud.svg';
import {
  PaymentTransactionsCards,
  PaymentTransactionsFilters,
  PaymentTransactionsSearch,
  PaymentTransactionsList,
} from 'modules/payment-transactions/components';
import styles from './payment-transactions.module.css';

export const PaymentTransactions = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3}>{t('paymentTransactions.title')}</Title>
        <Button className={styles.button} icon={<CloudIcon />}>
          {t('shared.unload')}
        </Button>
      </header>
      <PaymentTransactionsCards />
      <PaymentTransactionsSearch />
      <PaymentTransactionsFilters />
      <PaymentTransactionsList />
    </div>
  );
};

export default PaymentTransactions;
