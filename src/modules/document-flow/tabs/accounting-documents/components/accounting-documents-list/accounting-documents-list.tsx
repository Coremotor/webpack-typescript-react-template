import React, { useEffect } from 'react';
import { Button, List } from 'modules/_shared/ui';
import { AccountingDocumentsListItem } from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-list-item/accounting-documents-list-item';
import { AccountingDocumentsListHeader } from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-list-header/accounting-documents-list-header';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingDocuments } from 'modules/document-flow/store/selectors';
import { setAccountingDocuments } from 'modules/document-flow/store/reduser';
import { accountingDocumentsData } from 'modules/_shared/mock-data/accounting-documents-data';
import styles from './accounting-documents-list.module.css';

export const AccountingDocumentsList = () => {
  const dispatch = useDispatch();
  const accountingDocuments = useSelector(getAccountingDocuments);

  useEffect(() => {
    dispatch(setAccountingDocuments(accountingDocumentsData));
  }, []);

  return (
    <>
      <AccountingDocumentsListHeader />
      <List
        className={styles.list}
        dataSource={accountingDocuments}
        renderItem={(item) => (
          <List.Item key={item.id} className={styles.item}>
            <AccountingDocumentsListItem item={item} />
          </List.Item>
        )}
        loadMore={<Button className={styles.button}>Load more</Button>}
      />
    </>
  );
};
