import React, { useEffect } from 'react';
import { TransactionRegisterListHeader } from 'modules/document-flow/tabs/transaction-register/components/transaction-register-list-header/transaction-register-list-header';
import { Button, List } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { TransactionRegisterListItem } from 'modules/document-flow/tabs/transaction-register/components/transaction-register-list-item/transaction-register-list-item';
import { getTransactionRegisters } from 'modules/document-flow/store/selectors';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setTransactionRegisters } from 'modules/document-flow/store/reduser';
import { transactionRegisterData } from 'modules/_shared/mock-data/transaction-register-data';
import styles from './transaction-register-list.module.css';

export const TransactionRegisterList = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const transactionRegisters = useAppSelector(getTransactionRegisters);

  useEffect(() => {
    dispatch(setTransactionRegisters(transactionRegisterData));
  }, []);

  return (
    <>
      <TransactionRegisterListHeader />
      <List
        className={styles.list}
        dataSource={transactionRegisters}
        renderItem={(register) => (
          <List.Item key={register.id} className={styles.item}>
            <TransactionRegisterListItem register={register} />
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
