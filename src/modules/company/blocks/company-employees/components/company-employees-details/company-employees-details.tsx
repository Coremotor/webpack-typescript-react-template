import React from 'react';
import { Divider, Text, Space, Row, Col } from 'modules/_shared/ui';
import { useShowCompanyEmployeesDetails } from 'modules/company/blocks/company-employees/hooks/use-show-company-employees-details';
import { useModal } from 'modules/_shared/hooks/use-modal';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import { DeleteModal, DetailsHeader } from 'modules/company/components';
import { SidebarDetailsDrawer } from 'modules/_shared/layouts';
import { convertActiveEmployeeInTableView } from 'modules/company/helpers/convertActiveEmployeeInTableView';
import styles from './company-employees-details.module.css';

export const CompanyEmployeesDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToEditEmployee = () => {
    onEmployeeDetailsClose();
    navigate(RoutesEnum.employee + '/' + activeEmployee?.id);
  };

  const { isEmployeeDetailsOpen, onEmployeeDetailsClose, activeEmployee } =
    useShowCompanyEmployeesDetails();

  const { isModalOpen, showModal, onModalOkButton, onModalCancelButton } =
    useModal();

  const onDeleteEmployee = () => {
    onEmployeeDetailsClose();
    onModalOkButton();
  };

  if (!activeEmployee) return;

  const activeEmployeeInfo = convertActiveEmployeeInTableView(activeEmployee);

  return (
    <SidebarDetailsDrawer
      onClose={onEmployeeDetailsClose}
      isOpen={isEmployeeDetailsOpen}
    >
      <div className={styles.wrapper}>
        <DetailsHeader
          fullName={activeEmployee?.fullName || ''}
          description={activeEmployee?.description || ''}
          onClose={onEmployeeDetailsClose}
          onEdit={goToEditEmployee}
          onDelete={showModal}
        />

        <Divider />

        <Space direction='vertical'>
          {activeEmployeeInfo.map((activeEmployee) => (
            <Row key={activeEmployee.label} gutter={40}>
              <Col flex='30%'>
                <Text type='secondary'>{t(`${activeEmployee.label}`)}</Text>
              </Col>
              <Col flex='70%'>{activeEmployee.value}</Col>
            </Row>
          ))}
        </Space>
      </div>

      <DeleteModal
        title={t('companyEmployees.deleteEmployee') + '?'}
        deletingObjPosition={t('companyEmployees.employee')}
        deletingObjName={activeEmployee.fullName}
        isModalOpen={isModalOpen}
        onModalOkButton={onDeleteEmployee}
        onModalCancelButton={onModalCancelButton}
      />
    </SidebarDetailsDrawer>
  );
};
