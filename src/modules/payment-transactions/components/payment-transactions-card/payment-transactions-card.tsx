import React, { FC } from 'react';
import classNames from 'classnames';
import WalletIcon from 'assets/icons/wallet.svg';
import { formatCurrency } from 'modules/_shared/helpers/format-currency';
import styles from './payment-transactions-card.module.css';

type TPaymentTransactionsCardType = {
  type: 'blue' | 'green' | 'orange';
  amount: number;
  title: string;
};

export const PaymentTransactionsCard: FC<TPaymentTransactionsCardType> = ({
  type,
  amount,
  title,
}) => {
  return (
    <div
      className={classNames([styles.container], {
        [styles.blue]: type === 'blue',
        [styles.green]: type === 'green',
        [styles.orange]: type === 'orange',
      })}
    >
      <div className={styles.title}>
        <WalletIcon
          className={classNames([styles.icon], {
            [styles.iconBlue]: type === 'blue',
            [styles.iconGreen]: type === 'green',
            [styles.iconOrange]: type === 'orange',
          })}
        />
        <span className={styles.text}>{title}</span>
      </div>
      <span className={styles.textCurrency}>{formatCurrency(amount)}</span>
    </div>
  );
};
