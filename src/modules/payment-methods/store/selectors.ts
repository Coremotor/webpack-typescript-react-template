import { RootState } from 'modules/_shared/store/store';

export const getPaymentMethods = (state: RootState) =>
  state.paymentMethods.paymentMethods;
