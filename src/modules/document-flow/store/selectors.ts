import { TState } from 'modules/_shared/store/store';

export const getAccountingDocuments = (state: TState) =>
  state.documentFlow.accountingDocuments;
