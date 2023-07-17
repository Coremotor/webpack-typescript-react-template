import React, { FC } from 'react';
import { Checkbox, Col, Row, Text, Popover } from 'modules/_shared/ui';
import PrintIcon from 'assets/icons/print.svg';
import CloudIcon from 'assets/icons/cloud.svg';
import { TAccountingDocument } from 'modules/document-flow/types';
import { useColumnsWidth } from 'modules/document-flow/accounting-documents/hooks/use-columns-width';
import { useSetUnsetDocs } from 'modules/document-flow/accounting-documents/hooks/use-set-unset-docs';
import { AccountingDocumentsIcon } from 'modules/document-flow/accounting-documents/components/accounting-documents-icon/accounting-documents-icon';
import { AccountingDocumentsForm } from 'modules/document-flow/accounting-documents/components/accounting-documents-form/accounting-documents-form';
import classNames from 'classnames';
import styles from './accounting-documents-list-item.module.css';

type TAccountingDocumentsListItemProps = {
  doc: TAccountingDocument;
};

export const AccountingDocumentsListItem: FC<
  TAccountingDocumentsListItemProps
> = ({ doc }) => {
  const { columnsWidth } = useColumnsWidth();
  const { setUnsetDoc, checked } = useSetUnsetDocs(doc);

  return (
    <Row
      className={classNames(styles.row, { [styles.active]: checked })}
      wrap={false}
    >
      <Col className={styles.col} flex={columnsWidth.checkbox}>
        <Checkbox onChange={setUnsetDoc} checked={checked} />
      </Col>
      <Col className={styles.col} flex={columnsWidth.date}>
        <Text ellipsis>{doc.date}</Text>
      </Col>

      <Col flex={columnsWidth.main}>
        {doc.docs.map((doc) => (
          <Row className={styles.innerRow} key={doc.id} wrap={false}>
            <Col className={styles.col} flex={columnsWidth.acquirer}>
              <AccountingDocumentsIcon acquirer={doc.acquirer} />
            </Col>
            <Col className={styles.col} flex={columnsWidth.acts}>
              <Text className={styles.text} ellipsis>
                {doc.act}
              </Text>
            </Col>
            <Col className={styles.col} flex={columnsWidth.reports}>
              <Text className={styles.text} ellipsis>
                {doc.report}
              </Text>
            </Col>
            <Col className={styles.col} flex={columnsWidth.invoices}>
              <Text className={styles.text} ellipsis>
                {doc.invoice}
              </Text>
            </Col>
          </Row>
        ))}
      </Col>

      <Col className={styles.col} flex={columnsWidth.print}>
        <Popover
          destroyTooltipOnHide
          placement='bottomRight'
          content={<AccountingDocumentsForm />}
          trigger='click'
          arrow={false}
        >
          <PrintIcon className={styles.icon} />
        </Popover>
      </Col>
      <Col className={styles.col} flex={columnsWidth.cloud}>
        <CloudIcon className={styles.icon} />
      </Col>
    </Row>
  );
};
