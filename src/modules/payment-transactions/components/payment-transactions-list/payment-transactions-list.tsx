import React, { useEffect } from 'react';
import {
  PaymentTransactionsListHeader,
  PaymentTransactionsListItem,
} from 'modules/payment-transactions/components';
import { List } from 'modules/_shared/ui';
import { ListItem } from 'modules/_shared/layouts/list';
import styles from './payment-transactions-list.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getPaymentTransactions } from 'modules/payment-transactions/store/selectors';
import { setPaymentTransactions } from 'modules/payment-transactions/store/reducer';
import { paymentTransactionsData } from 'modules/_shared/mock-data/payment-transactions-data';

export const PaymentTransactionsList = () => {
  const dispatch = useAppDispatch();
  const paymentTransactions = useAppSelector(getPaymentTransactions);

  useEffect(() => {
    dispatch(setPaymentTransactions(paymentTransactionsData));
  }, []);

  return (
    <>
      <PaymentTransactionsListHeader />

      <List
        className={styles.list}
        dataSource={paymentTransactions}
        renderItem={(transaction) => (
          <ListItem>
            <PaymentTransactionsListItem transaction={transaction} />
          </ListItem>
        )}
      />
    </>
  );
};
