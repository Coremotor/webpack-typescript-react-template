import React from 'react';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import { useColumnsWidth } from 'modules/document-flow/tabs/accounting-documents/hooks/use-columns-width';
import styles from './accounting-documents-list-header.module.css';

export const AccountingDocumentsListHeader = () => {
  const { columnsWidth } = useColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox />
      </Col>
      <Col className={styles.col} flex={columnsWidth.date}>
        <Text ellipsis>Дата</Text>
      </Col>

      <Col className={styles.col} flex={columnsWidth.main}>
        <Row className={styles.innerRow} wrap={false}>
          <Col className={styles.col} flex={columnsWidth.acquirer}>
            <Text ellipsis>Эквайер</Text>
          </Col>
          <Col className={styles.col} flex={columnsWidth.acts}>
            <Text ellipsis>Акты</Text>
          </Col>
          <Col className={styles.col} flex={columnsWidth.reports}>
            <Text ellipsis>Отчёты</Text>
          </Col>
          <Col className={styles.col} flex={columnsWidth.invoices}>
            <Text ellipsis>Счета фактуры</Text>
          </Col>
        </Row>
      </Col>

      <Col className={styles.col} flex={columnsWidth.print} />
      <Col className={styles.col} flex={columnsWidth.cloud} />
    </Row>
  );
};
