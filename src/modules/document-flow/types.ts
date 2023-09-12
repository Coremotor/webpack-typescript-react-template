export type TAcquirer = 'alfa' | 'moneta';

export type TDoc = {
  id: string;
  acquirer: TAcquirer;
  act: string;
  report: string;
  invoice: string;
};

export type TAccountingDocument = {
  id: string;
  date: string;
  docs: TDoc[];
};

export type TTransactionRegister = {
  id: string;
  date: string;
  dailyRegisters: string;
  consolidatedRegistries: string;
};

export type TDailyRegister = {
  id: string;
  date: string;
  name: string;
};

export type TDocumentFlowState = {
  accountingDocuments: TAccountingDocument[];
  selectedAccountingDocuments: TAccountingDocument[];
  transactionRegisters: TTransactionRegister[];
  selectedTransactionRegisters: TTransactionRegister[];
  activeTransactionRegister: TTransactionRegister | null;
  dailyRegisters: TDailyRegister[];
};

export type TAccountingDocumentsForm = {
  acts: boolean;
  reports: boolean;
  invoices: boolean;
  registries: boolean;
};
