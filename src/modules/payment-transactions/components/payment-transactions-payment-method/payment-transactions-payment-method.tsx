import React, { FC } from 'react';
import { TPaymentTransaction } from 'modules/payment-transactions/types';

type TPaymentTransactionsPaymentMethodProps = {
  transaction: TPaymentTransaction;
};

export const PaymentTransactionsPaymentMethod: FC<
  TPaymentTransactionsPaymentMethodProps
> = ({ transaction }) => {
  return (
    <div>
      <div>PaymentTransactionsPaymentMethod</div>
    </div>
  );
};
