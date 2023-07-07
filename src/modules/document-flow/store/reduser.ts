import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  TAccountingDocument,
  TAccountingDocumentsState,
} from 'modules/document-flow/types';

const initialState: TAccountingDocumentsState = {
  accountingDocuments: [],
};

const documentFlowSlice = createSlice({
  name: 'documentFlow',
  initialState,
  reducers: {
    setAccountingDocuments(
      state: TAccountingDocumentsState,
      action: PayloadAction<TAccountingDocument[]>,
    ) {
      state.accountingDocuments = action.payload;
    },
  },
});

export const { setAccountingDocuments } = documentFlowSlice.actions;

export default documentFlowSlice.reducer;
