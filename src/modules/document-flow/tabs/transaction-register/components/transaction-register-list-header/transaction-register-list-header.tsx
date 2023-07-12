import React from 'react';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useColumnsWidth } from 'modules/document-flow/tabs/transaction-register/hooks/use-columns-width';
import styles from './transaction-register-list-header.module.css';
import { useSetUnsetAllRegisters } from 'modules/document-flow/tabs/transaction-register/hooks/use-set-unset-all-registers';

export const TransactionRegisterListHeader = () => {
  const { t } = useTranslation();
  const { columnsWidth } = useColumnsWidth();
  const { setUnsetAllRegisters, checked } = useSetUnsetAllRegisters();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox onChange={setUnsetAllRegisters} checked={checked} />
      </Col>
      <Col className={styles.col} flex={columnsWidth.date}>
        <Text ellipsis>{t('documentFlow.date')}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.dailyRegisters}>
        <Text ellipsis>{t('documentFlow.dailyRegisters')}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.consolidatedRegistries}>
        <Text ellipsis>{t('documentFlow.consolidatedRegistries')}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.cloud} />
    </Row>
  );
};
