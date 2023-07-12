import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import {
  TransactionRegisterActionBar,
  TransactionRegisterDailyRegisters,
  TransactionRegisterList,
} from 'modules/document-flow/tabs/transaction-register/components';
import { useAppSelector } from 'modules/_shared/store/hooks';
import { getSelectedTransactionRegisters } from 'modules/document-flow/store/selectors';
import { TransactionRegisterSchedulerSend } from 'modules/document-flow/components';
import styles from './transaction-register.module.css';

const TransactionRegister = () => {
  const selectedRegisters = useAppSelector(getSelectedTransactionRegisters);

  return (
    <>
      <Space className={styles.container} direction='vertical' size='large'>
        <Space className={styles.wrapper}>
          <RangePicker
            className={styles.datePicker}
            picker='month'
            format='MMMM YYYY'
          />
          <TransactionRegisterSchedulerSend />
        </Space>
        <TransactionRegisterList />
      </Space>
      {selectedRegisters.length > 0 && <TransactionRegisterActionBar />}
      <TransactionRegisterDailyRegisters />
    </>
  );
};

export default TransactionRegister;
