import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import styles from './accounting-documents.module.css';
import {
  AccountingDocumentsActionBar,
  AccountingDocumentsList,
} from 'modules/document-flow/tabs/accounting-documents/components';

export const AccountingDocuments = () => {
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
      <AccountingDocumentsActionBar />
    </>
  );
};
