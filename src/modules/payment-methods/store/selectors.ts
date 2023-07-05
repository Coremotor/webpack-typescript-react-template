import { TState } from 'modules/_shared/store/store';

export const getPaymentMethods = (state: TState) =>
  state.paymentMethods.paymentMethods;
