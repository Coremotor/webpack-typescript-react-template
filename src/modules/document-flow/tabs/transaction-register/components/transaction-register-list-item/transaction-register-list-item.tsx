import React, { FC } from 'react';
import { TTransactionRegister } from 'modules/document-flow/types';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import CloudIcon from 'assets/icons/cloud.svg';
import { useColumnsWidth } from 'modules/document-flow/tabs/transaction-register/hooks/use-columns-width';
import styles from './transaction-register-list-item.module.css';

type TTransactionRegisterListItemProps = {
  register: TTransactionRegister;
};

export const TransactionRegisterListItem: FC<
  TTransactionRegisterListItemProps
> = ({ register }) => {
  const { columnsWidth } = useColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox />
      </Col>
      <Col className={styles.col} flex={columnsWidth.date}>
        <Text ellipsis>{register.date}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.dailyRegisters}>
        <Text ellipsis>{register.dailyRegisters}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.consolidatedRegistries}>
        <Text ellipsis>{register.consolidatedRegistries}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.cloud}>
        <CloudIcon />
      </Col>
    </Row>
  );
};