import { lazy } from 'react';

export const AccountingDocuments = lazy(
  () =>
    import(
      'modules/document-flow/tabs/accounting-documents/accounting-documents'
    ),
);

export const TransactionRegister = lazy(
  () =>
    import(
      'modules/document-flow/tabs/transaction-register/transaction-register'
    ),
);
