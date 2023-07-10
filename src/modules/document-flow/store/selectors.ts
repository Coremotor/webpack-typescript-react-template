import { RootState } from 'modules/_shared/store/store';

export const getAccountingDocuments = (state: RootState) =>
  state.documentFlow.accountingDocuments;
export const getSelectedAccountingDocuments = (state: RootState) =>
  state.documentFlow.selectedAccountingDocuments;
export const getTransactionRegisters = (state: RootState) =>
  state.documentFlow.transactionRegisters;
export const getSelectedTransactionRegisters = (state: RootState) =>
  state.documentFlow.selectedTransactionRegisters;
