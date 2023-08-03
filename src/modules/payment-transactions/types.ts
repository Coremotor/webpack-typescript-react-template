export type TPaymentTransaction = {
  id: string;
  date: string;
  orderNumber: string;
  invoiceContract: string;
  paymentMethod: string;
  typeStatus: {
    text: string;
    status: 'done' | 'pending' | 'cancel' | 'reserve' | 'other';
  };
  amount: number;
};

export type TPaymentTransactionsState = {
  paymentTransactions: TPaymentTransaction[];
};
