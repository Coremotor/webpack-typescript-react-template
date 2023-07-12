import React, { useEffect } from 'react';
import { Button, List } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { getTransactionRegisters } from 'modules/document-flow/store/selectors';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setTransactionRegisters } from 'modules/document-flow/store/reduser';
import { transactionRegisterData } from 'modules/_shared/mock-data/transaction-register-data';
import styles from './transaction-register-list.module.css';
import {
  TransactionRegisterListItem,
  TransactionRegisterListHeader,
} from 'modules/document-flow/components/transaction-register/components';

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
