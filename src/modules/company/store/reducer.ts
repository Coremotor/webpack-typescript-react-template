import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  TCompany,
  TCompanyState,
  TEmployee,
  TManager,
} from 'modules/company/types';
import { ActiveNavTabKeyEnum } from 'modules/company/types';

const initialState: TCompanyState = {
  activeTabKey: ActiveNavTabKeyEnum.three,
  company: null,
  employee: null,
  employees: [],
  activeEmployee: null,
  manager: null,
  managers: [],
  activeManager: null,
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
    setActiveEmployee(
      state: TCompanyState,
      action: PayloadAction<TEmployee | null>,
    ) {
      state.activeEmployee = action.payload;
    },
    setManager(state: TCompanyState, action: PayloadAction<TManager | null>) {
      state.manager = action.payload;
    },
    setManagers(state: TCompanyState, action: PayloadAction<TManager[]>) {
      state.managers = action.payload;
    },
    setActiveManager(
      state: TCompanyState,
      action: PayloadAction<TManager | null>,
    ) {
      state.activeManager = action.payload;
    },
  },
});

export const {
  setActiveTabKey,
  setCompany,
  setEmployee,
  setEmployees,
  setActiveEmployee,
  setManager,
  setManagers,
  setActiveManager,
} = companySlice.actions;

export default companySlice.reducer;
