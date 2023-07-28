import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  TAccountingDocument,
  TDailyRegister,
  TDocumentFlowState,
  TTransactionRegister,
} from 'modules/document-flow/types';

const initialState: TDocumentFlowState = {
  accountingDocuments: [],
  selectedAccountingDocuments: [],
  transactionRegisters: [],
  selectedTransactionRegisters: [],
  activeTransactionRegister: null,
  dailyRegisters: [],
};

const documentFlowSlice = createSlice({
  name: 'documentFlow',
  initialState,
  reducers: {
    setAccountingDocuments(
      state: TDocumentFlowState,
      action: PayloadAction<TAccountingDocument[]>,
    ) {
      state.accountingDocuments = action.payload;
    },
    setSelectedAccountingDocuments(
      state: TDocumentFlowState,
      action: PayloadAction<TAccountingDocument[]>,
    ) {
      state.selectedAccountingDocuments = action.payload;
    },
    setTransactionRegisters(
      state: TDocumentFlowState,
      action: PayloadAction<TTransactionRegister[]>,
    ) {
      state.transactionRegisters = action.payload;
    },
    setSelectedTransactionRegisters(
      state: TDocumentFlowState,
      action: PayloadAction<TTransactionRegister[]>,
    ) {
      state.selectedTransactionRegisters = action.payload;
    },
    setActiveTransactionRegister(
      state: TDocumentFlowState,
      action: PayloadAction<TTransactionRegister | null>,
    ) {
      state.activeTransactionRegister = action.payload;
    },
    setDailyRegisters(
      state: TDocumentFlowState,
      action: PayloadAction<TDailyRegister[]>,
    ) {
      state.dailyRegisters = action.payload;
    },
  },
});

export const {
  setAccountingDocuments,
  setSelectedAccountingDocuments,
  setTransactionRegisters,
  setSelectedTransactionRegisters,
  setActiveTransactionRegister,
  setDailyRegisters,
} = documentFlowSlice.actions;

export default documentFlowSlice.reducer;
