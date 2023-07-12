import React from 'react';
import { Button, Modal, Tabs } from 'modules/_shared/ui';
import EmailIcon from 'assets/icons/email.svg';
import { useShedulerSendModal } from 'modules/document-flow/components/transaction-register-scheduler-send/hooks/use-sheduler-send-modal';
import { useShedulerSendTabs } from 'modules/document-flow/components/transaction-register-scheduler-send/hooks/use-sheduler-send-tabs';
import { useTranslation } from 'react-i18next';
import styles from './transaction-register-scheduler-send.module.css';

export const TransactionRegisterSchedulerSend = () => {
  const { t } = useTranslation();
  const { showModal, handleOk, handleCancel, isModalOpen } =
    useShedulerSendModal();
  const { items } = useShedulerSendTabs();

  return (
    <>
      <Button
        onClick={showModal}
        className={styles.button}
        icon={<EmailIcon />}
      >
        {t('documentFlow.sendEmailButton')}
      </Button>

      <Modal
        destroyOnClose
        title={t('documentFlow.modalTitle')}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <Tabs
          defaultActiveKey={items[0].key}
          items={items}
          destroyInactiveTabPane
        />
      </Modal>
    </>
  );
};
