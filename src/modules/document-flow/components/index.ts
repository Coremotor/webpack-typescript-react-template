import { lazy } from 'react';

export { TransactionRegisterSchedulerSend } from 'modules/document-flow/components/transaction-register-scheduler-send/transaction-register-scheduler-send';
export const AccountingDocuments = lazy(
  () =>
    import(
      'modules/document-flow/components/accounting-documents/accounting-documents'
    ),
);
export const TransactionRegister = lazy(
  () =>
    import(
      'modules/document-flow/components/transaction-register/transaction-register'
    ),
);
