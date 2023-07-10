import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  TAccountingDocument,
  TDocumentFlowState,
  TTransactionRegister,
} from 'modules/document-flow/types';

const initialState: TDocumentFlowState = {
  accountingDocuments: [],
  selectedAccountingDocuments: [],
  transactionRegisters: [],
  selectedTransactionRegisters: [],
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
  },
});

export const {
  setAccountingDocuments,
  setSelectedAccountingDocuments,
  setTransactionRegisters,
  setSelectedTransactionRegisters,
} = documentFlowSlice.actions;

export default documentFlowSlice.reducer;
