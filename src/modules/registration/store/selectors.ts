import { RootState } from 'modules/_shared/store/store';

export const getEmailForConfirm = (state: RootState) =>
  state.registration.emailForConfirm;
