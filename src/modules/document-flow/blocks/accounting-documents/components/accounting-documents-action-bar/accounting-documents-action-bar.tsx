import React, { useState } from 'react';
import { Card, Text, Button, Popover, Space } from 'modules/_shared/ui';
import { useAppSelector } from 'modules/_shared/root-store/hooks';
import { getSelectedAccountingDocuments } from 'modules/document-flow/store/selectors';
import ArrowIcon from 'assets/icons/arrow-up.svg';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AccountingDocumentsForm } from 'modules/document-flow/blocks/accounting-documents/components';
import styles from './accounting-documents-action-bar.module.css';

export const AccountingDocumentsActionBar = () => {
  const { t } = useTranslation();
  const selectedDocs = useAppSelector(getSelectedAccountingDocuments);

  const [formVisible, setFormVisible] = useState(false);
  const onFormOpenChange = (visible: boolean) => {
    setFormVisible(visible);
  };

  return (
    <Card className={styles.card} bordered={false}>
      <Space size='large'>
        <Text>
          {t('documentFlow.actionBarText')}: {selectedDocs.length}
        </Text>
        <Popover
          destroyTooltipOnHide
          placement='topLeft'
          content={<AccountingDocumentsForm />}
          trigger='click'
          arrow={false}
          onOpenChange={onFormOpenChange}
        >
          <Button className={styles.button}>
            <Text className={styles.buttonText}>
              {t('documentFlow.printButton')}
            </Text>
            <ArrowIcon
              className={classNames({ [styles.arrowDown]: formVisible })}
            />
          </Button>
        </Popover>
        <Button>{t('documentFlow.downloadButton')}</Button>
      </Space>
    </Card>
  );
};
