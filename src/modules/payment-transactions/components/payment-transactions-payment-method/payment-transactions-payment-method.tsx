import React, { FC } from 'react';
import { TPaymentTransaction } from 'modules/payment-transactions/types';
import { Text } from 'modules/_shared/ui';
import CardIcon from 'assets/icons/card.svg';
import CashbackIcon from 'assets/icons/cashback.svg';
import ReceiptIcon from 'assets/icons/receipt.svg';
import SbpIcon from 'assets/icons/sbp.svg';
import SberIcon from 'assets/icons/sber-pay.svg';
import YandexIcon from 'assets/icons/yandex-pay.svg';
import styles from './payment-transactions-payment-method.module.css';

type TPaymentTransactionsPaymentMethodProps = {
  transaction: TPaymentTransaction;
};

export const PaymentTransactionsPaymentMethod: FC<
  TPaymentTransactionsPaymentMethodProps
> = ({ transaction }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        {transaction.paymentMethod.type === 'card' && <CardIcon />}
        {transaction.paymentMethod.type === 'cashback' && <CashbackIcon />}
        {transaction.paymentMethod.type === 'bank' && <ReceiptIcon />}
        {transaction.paymentMethod.type === 'sbp' && <SbpIcon />}
        {transaction.paymentMethod.type === 'sber' && <SberIcon />}
        {transaction.paymentMethod.type === 'yandex' && <YandexIcon />}
      </div>
      <Text ellipsis>{transaction.paymentMethod.text}</Text>
    </div>
  );
};
