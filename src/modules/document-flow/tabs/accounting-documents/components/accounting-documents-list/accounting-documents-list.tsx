import React, { useEffect } from 'react';
import { Button, List } from 'modules/_shared/ui';
import { AccountingDocumentsListItem } from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-list-item/accounting-documents-list-item';
import { AccountingDocumentsListHeader } from 'modules/document-flow/tabs/accounting-documents/components/accounting-documents-list-header/accounting-documents-list-header';
import { getAccountingDocuments } from 'modules/document-flow/store/selectors';
import { setAccountingDocuments } from 'modules/document-flow/store/reduser';
import { accountingDocumentsData } from 'modules/_shared/mock-data/accounting-documents-data';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { useTranslation } from 'react-i18next';
import styles from './accounting-documents-list.module.css';

export const AccountingDocumentsList = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const accountingDocuments = useAppSelector(getAccountingDocuments);

  useEffect(() => {
    dispatch(setAccountingDocuments(accountingDocumentsData));
  }, []);

  return (
    <>
      <AccountingDocumentsListHeader />
      <List
        className={styles.list}
        dataSource={accountingDocuments}
        renderItem={(doc) => (
          <List.Item key={doc.id} className={styles.item}>
            <AccountingDocumentsListItem doc={doc} />
          </List.Item>
        )}
        loadMore={
          <Button className={styles.button}>
            {t('documentFlow.loadMoreButton')}
          </Button>
        }
      />
    </>
  );
};
