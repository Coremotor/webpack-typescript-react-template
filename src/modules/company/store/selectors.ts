import { RootState } from 'modules/_shared/root-store/store';

export const getActiveTabKey = (state: RootState) => state.company.activeTabKey;
export const getCompany = (state: RootState) => state.company.company;
export const getEmployee = (state: RootState) => state.company.employee;
export const getActiveEmployee = (state: RootState) =>
  state.company.activeEmployee;
export const getEmployees = (state: RootState) => state.company.employees;
export const getManager = (state: RootState) => state.company.manager;
export const getActiveManager = (state: RootState) =>
  state.company.activeManager;
export const getManagers = (state: RootState) => state.company.managers;
export const getFounder = (state: RootState) => state.company.founder;
export const getActiveFounder = (state: RootState) =>
  state.company.activeFounder;
export const getFounders = (state: RootState) => state.company.founders;
