import { lazy } from 'react';

// export { AccountingDocuments } from 'modules/document-flow/tabs/accounting-documents/accounting-documents';
// export { TransactionRegister } from 'modules/document-flow/tabs/transaction-register/transaction-register';

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
