import React, { useEffect } from 'react';
import { Drawer, Button, Text } from 'modules/_shared/ui';
import { useShowDailyRegisters } from 'modules/document-flow/tabs/transaction-register/hooks/use-show-daily-registers';
import CloudIcon from 'assets/icons/cloud.svg';
import { Row, Col, Space } from 'antd';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { getDailyRegisters } from 'modules/document-flow/store/selectors';
import { setDailyRegisters } from 'modules/document-flow/store/reduser';
import { dailyRegistersData } from 'modules/_shared/mock-data/daily-registers-data';
import styles from './transaction-register-daily-registers.module.css';

export const TransactionRegisterDailyRegisters = () => {
  const { onClose, open, activeRegister } = useShowDailyRegisters();
  const dispatch = useAppDispatch();
  const dailyRegisters = useAppSelector(getDailyRegisters);

  useEffect(() => {
    dispatch(setDailyRegisters(dailyRegistersData(30, 'месяц')));
  }, []);

  return (
    <Drawer
      placement='right'
      width={500}
      onClose={onClose}
      open={open}
      title={activeRegister?.date || ''}
      extra={
        <Button className={styles.button} icon={<CloudIcon />}>
          Архив ежедневных реестров
        </Button>
      }
    >
      <Space className={styles.wrapper} direction='vertical'>
        {dailyRegisters.map((register) => (
          <Row key={register.id}>
            <Col flex='40%'>
              <Text>{register.date}</Text>
            </Col>
            <Col flex='60%'>
              <Text underline>{register.name}</Text>
            </Col>
          </Row>
        ))}
      </Space>
    </Drawer>
  );
};
