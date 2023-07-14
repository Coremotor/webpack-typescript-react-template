import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TCompany, TCompanyState } from 'modules/company/types';
import { ActiveNavTabKeyEnum } from 'modules/company/types';

const initialState: TCompanyState = {
  activeTabKey: ActiveNavTabKeyEnum.one,
  company: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setActiveTabKey(state: TCompanyState, action: PayloadAction<string>) {
      state.activeTabKey = action.payload;
    },
    setCompany(state: TCompanyState, action: PayloadAction<TCompany | null>) {
      state.company = action.payload;
    },
  },
});

export const { setActiveTabKey, setCompany } = companySlice.actions;

export default companySlice.reducer;
