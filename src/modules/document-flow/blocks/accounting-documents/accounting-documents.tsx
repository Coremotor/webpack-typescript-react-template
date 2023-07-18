import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import { useAppSelector } from 'modules/_shared/store/hooks';
import { getSelectedAccountingDocuments } from 'modules/document-flow/store/selectors';
import { AccountingDocumentsList } from 'modules/document-flow/blocks/accounting-documents/components/accounting-documents-list/accounting-documents-list';
import { AccountingDocumentsActionBar } from 'modules/document-flow/blocks/accounting-documents/components/accounting-documents-action-bar/accounting-documents-action-bar';
import styles from './accounting-documents.module.css';

export const AccountingDocuments = () => {
  const selectedDocs = useAppSelector(getSelectedAccountingDocuments);
  return (
    <>
      <Space className={styles.container} direction='vertical'>
        <RangePicker
          className={styles.datePicker}
          picker='month'
          format='MMMM YYYY'
        />

        <AccountingDocumentsList />
      </Space>
      {selectedDocs.length > 0 && <AccountingDocumentsActionBar />}
    </>
  );
};
