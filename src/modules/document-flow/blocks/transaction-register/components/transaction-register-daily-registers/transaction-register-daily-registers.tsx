import React, { useEffect } from 'react';
import { Drawer, Button, Text, Row, Col, Space } from 'modules/_shared/ui';
import CloudIcon from 'assets/icons/cloud.svg';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getDailyRegisters } from 'modules/document-flow/store/selectors';
import { setDailyRegisters } from 'modules/document-flow/store/reducer';
import { dailyRegistersData } from 'modules/_shared/mock-data/daily-registers-data';
import { useTranslation } from 'react-i18next';
import { useShowDailyRegisters } from 'modules/document-flow/blocks/transaction-register/hooks/use-show-daily-registers';
import styles from './transaction-register-daily-registers.module.css';

export const TransactionRegisterDailyRegisters = () => {
  const { t } = useTranslation();
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
          {t('documentFlow.archiveRegistersButton')}
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
