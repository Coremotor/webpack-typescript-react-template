import { RootState } from 'modules/_shared/root-store/store';

export const getEmailForConfirm = (state: RootState) =>
  state.registration.emailForConfirm;
