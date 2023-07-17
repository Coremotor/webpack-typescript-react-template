import { lazy } from 'react';
export const NoFound = lazy(() => import('modules/no-found/no-found'));

export const Registration = lazy(
  () => import('modules/registration/registration'),
);
export const EmailConfirmation = lazy(
  () => import('modules/email-confirmation/email-confirmation'),
);
export const Authorization = lazy(
  () => import('modules/authorization/authorization'),
);
export const MainScreen = lazy(() => import('modules/main-screen/main-screen'));
export const AccountsContracts = lazy(
  () => import('modules/accounts-contracts/accounts-contracts'),
);
export const DocumentFlow = lazy(
  () => import('modules/document-flow/document-flow'),
);
export const PaymentMethods = lazy(
  () => import('modules/payment-methods/payment-methods'),
);
export const PaymentTransactions = lazy(
  () => import('modules/payment-transactions/payment-transactions'),
);
export const AccommodationFacilities = lazy(
  () => import('modules/accommodation-facilities/accommodation-facilities'),
);
export const Company = lazy(() => import('modules/company/company'));
