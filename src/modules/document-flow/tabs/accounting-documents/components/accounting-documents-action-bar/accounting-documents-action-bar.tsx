import React from 'react';
import { Card } from 'modules/_shared/ui';
import styles from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-action-bar/accounting-documents-action-bar.module.css';

export const AccountingDocumentsActionBar = () => {
  return (
    <div className={styles.container}>
      <Card bordered={false}>
        <div>AccountingDocumentsActionBar</div>
      </Card>
    </div>
  );
};
