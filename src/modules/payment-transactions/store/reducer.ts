import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  TPaymentTransactionsState,
  TPaymentTransaction,
} from 'modules/payment-transactions/types';

const initialState: TPaymentTransactionsState = {
  paymentTransactions: [],
};

const paymentTransactionsSlice = createSlice({
  name: 'paymentTransactions',
  initialState,
  reducers: {
    setPaymentTransactions(
      state: TPaymentTransactionsState,
      action: PayloadAction<TPaymentTransaction[]>,
    ) {
      state.paymentTransactions = action.payload;
    },
  },
});

export const { setPaymentTransactions } = paymentTransactionsSlice.actions;

export default paymentTransactionsSlice.reducer;
