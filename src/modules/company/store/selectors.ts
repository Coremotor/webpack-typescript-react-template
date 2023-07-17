import { RootState } from 'modules/_shared/store/store';

export const getActiveTabKey = (state: RootState) => state.company.activeTabKey;
export const getCompany = (state: RootState) => state.company.company;
export const getEmployee = (state: RootState) => state.company.employee;
export const getEmployees = (state: RootState) => state.company.employees;
