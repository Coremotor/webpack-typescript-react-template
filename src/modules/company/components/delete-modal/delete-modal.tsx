import React, { FC } from 'react';
import { Modal, Button, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';

type TDeleteModalProps = {
  title: string;
  deletingObjPosition: string;
  deletingObjName: string;
  isModalOpen: boolean;
  onModalOkButton: () => void;
  onModalCancelButton: () => void;
};

export const DeleteModal: FC<TDeleteModalProps> = ({
  title,
  deletingObjPosition,
  deletingObjName,
  isModalOpen,
  onModalOkButton,
  onModalCancelButton,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={onModalOkButton}
      onCancel={onModalCancelButton}
      footer={[
        <Button key='back' onClick={onModalCancelButton}>
          {t('shared.cancel')}
        </Button>,
        <Button key='submit' type='primary' danger onClick={onModalOkButton}>
          {t('shared.delete')}
        </Button>,
      ]}
    >
      <Text>
        {deletingObjPosition} <Text strong>{deletingObjName}</Text>{' '}
        {t('shared.willRemoved') + '!'}
      </Text>
    </Modal>
  );
};
