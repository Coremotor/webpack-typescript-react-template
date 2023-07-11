import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import { Button } from 'antd';
import EmailIcon from 'assets/icons/email.svg';
import styles from './transaction-register.module.css';
import {
  TransactionRegisterActionBar,
  TransactionRegisterDailyRegisters,
  TransactionRegisterList,
} from 'modules/document-flow/tabs/transaction-register/components';
import { useAppSelector } from 'modules/_shared/store/hooks';
import { getSelectedTransactionRegisters } from 'modules/document-flow/store/selectors';

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
          <Button className={styles.button} icon={<EmailIcon />}>
            Запланировать отправку
          </Button>
        </Space>
        <TransactionRegisterList />
      </Space>
      {selectedRegisters.length > 0 && <TransactionRegisterActionBar />}
      <TransactionRegisterDailyRegisters />
    </>
  );
};

export default TransactionRegister;
