import React, { FC } from 'react';
import { Modal, Button, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';

type TDeleteModalProps = {
  title: string;
  deletingObjPosition: string;
  deletingObjName: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export const DeleteModal: FC<TDeleteModalProps> = ({
  title,
  deletingObjPosition,
  deletingObjName,
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={onConfirm}
      onCancel={onCancel}
      footer={[
        <Button key='back' onClick={onCancel}>
          {t('shared.cancel')}
        </Button>,
        <Button key='submit' type='primary' danger onClick={onConfirm}>
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
