import React from 'react';
import { RangePicker, Space } from 'modules/_shared/ui';
import { Button } from 'antd';
import EmailIcon from 'assets/icons/email.svg';
import styles from './transaction-register.module.css';
import {
  TransactionRegisterActionBar,
  TransactionRegisterList,
} from 'modules/document-flow/tabs/transaction-register/components';

export const TransactionRegister = () => {
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
      <TransactionRegisterActionBar />
    </>
  );
};
