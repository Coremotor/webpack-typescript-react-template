import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  TPaymentMethod,
  TPaymentMethodsState,
} from 'modules/payment-methods/types';

const initialState: TPaymentMethodsState = {
  paymentMethods: [],
};

const appSlice = createSlice({
  name: 'paymentMethods',
  initialState,
  reducers: {
    setPaymentMethods(
      state: TPaymentMethodsState,
      action: PayloadAction<TPaymentMethod[]>,
    ) {
      state.paymentMethods = action.payload;
    },
  },
});

export const { setPaymentMethods } = appSlice.actions;

export default appSlice.reducer;
