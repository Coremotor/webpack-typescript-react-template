import React, { FC } from 'react';
import { TPaymentTransaction } from 'modules/payment-transactions/types';
import { Text } from 'modules/_shared/ui';
import DoneIcon from 'assets/icons/done.svg';
import CancelIcon from 'assets/icons/cancel.svg';
import PendingIcon from 'assets/icons/clock.svg';
import ReserveIcon from 'assets/icons/reserve.svg';
import classNames from 'classnames';
import styles from './payment-transactions-type-status-tag.module.css';

type TPaymentTransactionsTypeStatusTagProps = {
  transaction: TPaymentTransaction;
};

export const PaymentTransactionsTypeStatusTag: FC<
  TPaymentTransactionsTypeStatusTagProps
> = ({ transaction }) => {
  return (
    <div
      className={classNames([styles.container], {
        [styles.done]: transaction.typeStatus.status === 'done',
        [styles.cancel]: transaction.typeStatus.status === 'cancel',
        [styles.pending]: transaction.typeStatus.status === 'pending',
        [styles.reserve]: transaction.typeStatus.status === 'reserve',
        [styles.other]: transaction.typeStatus.status === 'other',
      })}
    >
      <div className={styles.iconWrapper}>
        {transaction.typeStatus.status === 'done' && <DoneIcon />}
        {transaction.typeStatus.status === 'cancel' && <CancelIcon />}
        {transaction.typeStatus.status === 'pending' && <PendingIcon />}
        {transaction.typeStatus.status === 'reserve' && <ReserveIcon />}
        {transaction.typeStatus.status === 'other' && <DoneIcon />}
      </div>

      <Text className={styles.text} ellipsis>
        {transaction.typeStatus.text}
      </Text>
    </div>
  );
};
