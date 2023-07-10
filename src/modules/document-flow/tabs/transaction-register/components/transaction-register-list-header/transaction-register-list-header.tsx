import React from 'react';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useColumnsWidth } from 'modules/document-flow/tabs/transaction-register/hooks/use-columns-width';
import styles from './transaction-register-list-header.module.css';

export const TransactionRegisterListHeader = () => {
  const { t } = useTranslation();
  const { columnsWidth } = useColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox />
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
