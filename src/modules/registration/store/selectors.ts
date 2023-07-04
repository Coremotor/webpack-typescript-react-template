import { TState } from 'modules/_shared/store/store';

export const getEmailForConfirm = (state: TState) =>
  state.registration.emailForConfirm;
