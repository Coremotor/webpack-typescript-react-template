import React from 'react';
import { Button, List } from 'modules/_shared/ui';
import { AccountingDocumentsListItem } from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-list-item/accounting-documents-list-item';
import { AccountingDocumentsListHeader } from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-list-header/accounting-documents-list-header';
import styles from './accounting-documents-list.module.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export const AccountingDocumentsList = () => {
  return (
    <>
      <AccountingDocumentsListHeader />
      <List
        className={styles.list}
        dataSource={arr}
        renderItem={() => (
          <List.Item className={styles.item}>
            <AccountingDocumentsListItem />
          </List.Item>
        )}
        loadMore={<Button className={styles.button}>Load more</Button>}
      />
    </>
  );
};
