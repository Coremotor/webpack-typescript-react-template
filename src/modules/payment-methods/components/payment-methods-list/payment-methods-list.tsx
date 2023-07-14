import React, { useEffect } from 'react';
import { List } from 'modules/_shared/ui';
import { getPaymentMethods } from 'modules/payment-methods/store/selectors';
import { setPaymentMethods } from 'modules/payment-methods/store/reduser';
import { paymentMethodsData } from 'modules/_shared/mock-data/paymet-methods-data';
import { PaymentMethodsListItem } from 'modules/payment-methods/components/payment-methods-list-item/payment-methods-list-item';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import styles from './payment-methods-list.module.css';

export const PaymentMethodsList = () => {
  const dispatch = useAppDispatch();
  const paymentMethods = useAppSelector(getPaymentMethods);

  useEffect(() => {
    dispatch(setPaymentMethods(paymentMethodsData));
  }, []);

  return (
    <List
      className={styles.list}
      bordered
      dataSource={paymentMethods}
      renderItem={(item) => (
        <List.Item className={styles.listItem}>
          <PaymentMethodsListItem item={item} />
        </List.Item>
      )}
    />
  );
};
