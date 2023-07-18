import React, { FC } from 'react';
import { TTransactionRegister } from 'modules/document-flow/types';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import CloudIcon from 'assets/icons/cloud.svg';
import classNames from 'classnames';
import { stopPropagationFn } from 'modules/_shared/helpers/stopPropagation';
import { useColumnsWidth } from 'modules/document-flow/blocks/transaction-register/hooks/use-columns-width';
import { useSetUnsetRegisters } from 'modules/document-flow/blocks/transaction-register/hooks/use-set-unset-registres';
import styles from './transaction-register-list-item.module.css';

type TTransactionRegisterListItemProps = {
  register: TTransactionRegister;
};

export const TransactionRegisterListItem: FC<
  TTransactionRegisterListItemProps
> = ({ register }) => {
  const { columnsWidth } = useColumnsWidth();
  const { setUnsetRegisters, checked, setActiveRegister, isActive } =
    useSetUnsetRegisters(register);

  return (
    <Row
      onClick={setActiveRegister}
      className={classNames(styles.row, {
        [styles.selected]: checked,
        [styles.active]: isActive,
      })}
      wrap={false}
    >
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox
          onClick={stopPropagationFn}
          onChange={setUnsetRegisters}
          checked={checked}
        />
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
