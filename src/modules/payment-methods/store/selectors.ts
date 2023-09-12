import { RootState } from 'modules/_shared/root-store/store';

export const getPaymentMethods = (state: RootState) =>
  state.paymentMethods.paymentMethods;
