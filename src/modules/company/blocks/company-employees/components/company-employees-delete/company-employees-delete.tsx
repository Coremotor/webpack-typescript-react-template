import React, { FC } from 'react';
import { TEmployee } from 'modules/company/types';
import { Modal, Button, Text } from 'modules/_shared/ui';

type TCompanyEmployeesDeleteProps = {
  employee: TEmployee | null;
  isModalOpen: boolean;
  onModalOkButton: () => void;
  onModalCancelButton: () => void;
};

export const CompanyEmployeesDelete: FC<TCompanyEmployeesDeleteProps> = ({
  employee,
  isModalOpen,
  onModalOkButton,
  onModalCancelButton,
}) => {
  if (!employee) return;

  return (
    <Modal
      title='Удалить сотрудника?'
      open={isModalOpen}
      onOk={onModalOkButton}
      onCancel={onModalCancelButton}
      footer={[
        <Button key='back' onClick={onModalCancelButton}>
          Отменить
        </Button>,
        <Button key='submit' type='primary' danger onClick={onModalOkButton}>
          Удалить
        </Button>,
      ]}
    >
      <Text>
        Сотрудник <Text strong>{employee.fullName}</Text> будет удален!
      </Text>
    </Modal>
  );
};
