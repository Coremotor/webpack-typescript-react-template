import React from 'react';
import styles from './payment-transactions-filters.module.css';
import { DateRangeFilter } from './date-range-filter/date-range-filter';
import { AccountsContractsFilter } from './accounts-contracts-filter/accounts-contracts-filter';
import { PaymentMethodFilter } from './payment-method-filter/payment-method-filter';
import { PaymentTypeFilter } from './payment-type-filter/payment-type-filter';
import { PaymentStatusFilter } from './payment-status-filter/payment-status-filter';

export const PaymentTransactionsFilters = () => {
  return (
    <div className={styles.container}>
      <DateRangeFilter />
      <AccountsContractsFilter />
      <PaymentMethodFilter />
      <PaymentTypeFilter />
      <PaymentStatusFilter />
    </div>
  );
};
