export type TPaymentTransaction = {
  id: string;
  date: string;
  orderNumber: string;
  invoiceContract: string;
  paymentMethod: {
    text: string;
    type: 'card' | 'yandex' | 'sbp' | 'sber' | 'bank' | 'cashback';
  };
  typeStatus: {
    text: string;
    status: 'done' | 'pending' | 'cancel' | 'reserve' | 'other';
  };
  amount: number;
};

export type TPaymentTransactionsState = {
  paymentTransactions: TPaymentTransaction[];
};
