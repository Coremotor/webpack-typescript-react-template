import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import {
  AccountingDocumentsActionBar,
  AccountingDocumentsList,
} from 'modules/document-flow/tabs/accounting-documents/components';
import { useAppSelector } from 'modules/_shared/store/hooks';
import { getSelectedAccountingDocuments } from 'modules/document-flow/store/selectors';
import styles from './accounting-documents.module.css';

const AccountingDocuments = () => {
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

export default AccountingDocuments;
