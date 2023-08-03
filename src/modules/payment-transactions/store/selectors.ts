import { RootState } from 'modules/_shared/root-store/store';

export const getPaymentTransactions = (state: RootState) =>
  state.paymentTransactions.paymentTransactions;
