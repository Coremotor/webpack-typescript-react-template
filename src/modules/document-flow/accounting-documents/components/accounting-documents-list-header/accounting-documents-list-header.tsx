import React from 'react';
import { Checkbox, Col, Row, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useColumnsWidth } from 'modules/document-flow/accounting-documents/hooks/use-columns-width';
import { useSetUnsetAllDocs } from 'modules/document-flow/accounting-documents/hooks/use-set-unset-all-docs';
import styles from './accounting-documents-list-header.module.css';

export const AccountingDocumentsListHeader = () => {
  const { t } = useTranslation();
  const { columnsWidth } = useColumnsWidth();
  const { setUnsetAllDocs, checked } = useSetUnsetAllDocs();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox onChange={setUnsetAllDocs} checked={checked} />
      </Col>
      <Col className={styles.col} flex={columnsWidth.date}>
        <Text ellipsis>{t('documentFlow.date')}</Text>
      </Col>

      <Col className={styles.col} flex={columnsWidth.main}>
        <Row className={styles.innerRow} wrap={false}>
          <Col className={styles.col} flex={columnsWidth.acquirer}>
            <Text ellipsis>{t('documentFlow.acquirer')}</Text>
          </Col>
          <Col className={styles.col} flex={columnsWidth.acts}>
            <Text ellipsis>{t('documentFlow.acts')}</Text>
          </Col>
          <Col className={styles.col} flex={columnsWidth.reports}>
            <Text ellipsis>{t('documentFlow.reports')}</Text>
          </Col>
          <Col className={styles.col} flex={columnsWidth.invoices}>
            <Text ellipsis>{t('documentFlow.invoices')}</Text>
          </Col>
        </Row>
      </Col>

      <Col className={styles.col} flex={columnsWidth.print} />
      <Col className={styles.col} flex={columnsWidth.cloud} />
    </Row>
  );
};
