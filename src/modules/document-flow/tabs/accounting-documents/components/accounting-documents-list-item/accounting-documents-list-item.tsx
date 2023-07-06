import React from 'react';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import { useColumnsWidth } from 'modules/document-flow/tabs/accounting-documents/hooks/use-columns-width';
import styles from './accounting-documents-list-item.module.css';
import PrintIcon from 'assets/icons/print.svg';
import CloudIcon from 'assets/icons/cloud.svg';

export const AccountingDocumentsListItem = () => {
  const { columnsWidth } = useColumnsWidth();
  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox />
      </Col>
      <Col className={styles.col} flex={columnsWidth.date}>
        <Text ellipsis>mouth 2023</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.acquirer}>
        <Text ellipsis>acquirer</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.acts}>
        <Text ellipsis>Акт КБ-12345</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.reports}>
        <Text ellipsis>Отчёт агента</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.invoices}>
        <Text ellipsis>Счёт фактура 123123-23409</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.print}>
        <PrintIcon />
      </Col>
      <Col className={styles.col} flex={columnsWidth.cloud}>
        <CloudIcon />
      </Col>
    </Row>
  );
};
