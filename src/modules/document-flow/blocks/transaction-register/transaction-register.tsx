import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import { useAppSelector } from 'modules/_shared/root-store/hooks';
import { getSelectedTransactionRegisters } from 'modules/document-flow/store/selectors';
import { TransactionRegisterSchedulerSend } from 'modules/document-flow/blocks/transaction-register-scheduler-send/transaction-register-scheduler-send';
import {
  TransactionRegisterDailyRegisters,
  TransactionRegisterActionBar,
  TransactionRegisterList,
} from 'modules/document-flow/blocks/transaction-register/components';
import styles from './transaction-register.module.css';

export const TransactionRegister = () => {
  const selectedRegisters = useAppSelector(getSelectedTransactionRegisters);

  return (
    <>
      <Space className={styles.container} direction='vertical'>
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
