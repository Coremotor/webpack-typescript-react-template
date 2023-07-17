import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TCompany, TCompanyState, TEmployee } from 'modules/company/types';
import { ActiveNavTabKeyEnum } from 'modules/company/types';

const initialState: TCompanyState = {
  activeTabKey: ActiveNavTabKeyEnum.two,
  company: null,
  employee: null,
  employees: [],
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
    setEmployee(state: TCompanyState, action: PayloadAction<TEmployee | null>) {
      state.employee = action.payload;
    },
    setEmployees(state: TCompanyState, action: PayloadAction<TEmployee[]>) {
      state.employees = action.payload;
    },
  },
});

export const { setActiveTabKey, setCompany, setEmployee, setEmployees } =
  companySlice.actions;

export default companySlice.reducer;
