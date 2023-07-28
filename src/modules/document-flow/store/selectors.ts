import { RootState } from 'modules/_shared/root-store/store';

export const getAccountingDocuments = (state: RootState) =>
  state.documentFlow.accountingDocuments;
export const getSelectedAccountingDocuments = (state: RootState) =>
  state.documentFlow.selectedAccountingDocuments;
export const getTransactionRegisters = (state: RootState) =>
  state.documentFlow.transactionRegisters;
export const getSelectedTransactionRegisters = (state: RootState) =>
  state.documentFlow.selectedTransactionRegisters;
export const getActiveTransactionRegister = (state: RootState) =>
  state.documentFlow.activeTransactionRegister;
export const getDailyRegisters = (state: RootState) =>
  state.documentFlow.dailyRegisters;
