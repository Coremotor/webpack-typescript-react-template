import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TRegistrationState } from 'modules/registration/store/types';

const initialState: TRegistrationState = {
  emailForConfirm: '',
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setEmailForConfirm(
      state: TRegistrationState,
      action: PayloadAction<string>,
    ) {
      state.emailForConfirm = action.payload;
    },
  },
});

export const { setEmailForConfirm } = registrationSlice.actions;

export default registrationSlice.reducer;
