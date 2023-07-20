import React from 'react';
import { Drawer, Divider, Text, Space, Row, Col } from 'modules/_shared/ui';
import { useShowCompanyEmployeesDetails } from 'modules/company/blocks/company-employees/hooks/use-show-company-employees-details';
import { TextAvatar } from 'modules/_shared/components';
import { transformFullName } from 'modules/_shared/utils/text-transform';
import { CompanyEmployeesDelete } from 'modules/company/blocks/company-employees/components';
import { useModal } from 'modules/_shared/hooks/use-modal';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import CloseIcon from 'assets/icons/close.svg';
import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';
import classNames from 'classnames';
import styles from './company-employees-details.module.css';
import { availableObjectOptions } from 'modules/_shared/mock-data/company-data';

export const CompanyEmployeesDetails = () => {
  const navigate = useNavigate();
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

  return (
    <Drawer
      destroyOnClose
      placement='right'
      width={500}
      onClose={onEmployeeDetailsClose}
      open={isEmployeeDetailsOpen}
      closable={false}
    >
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.close} onClick={onEmployeeDetailsClose}>
            <CloseIcon />
          </div>

          <div className={styles.employeeWrapper}>
            <TextAvatar
              str={transformFullName(activeEmployee?.fullName)}
              width={64}
              height={64}
            />
            <div className={styles.employeeInfo}>
              <Text strong>{activeEmployee?.fullName}</Text>
              <Text type='secondary'>{activeEmployee?.description}</Text>
              <Text>{activeEmployee?.accessLevel}</Text>
            </div>
          </div>

          <div className={styles.buttons}>
            <div
              onClick={goToEditEmployee}
              className={classNames(styles.edit, styles.icon)}
            >
              <EditIcon />
            </div>
            <div
              onClick={showModal}
              className={classNames(styles.delete, styles.icon)}
            >
              <DeleteIcon />
            </div>
          </div>
        </header>

        <Divider />

        <Space direction='vertical'>
          <Row gutter={40}>
            <Col flex='30%'>
              <Text type='secondary'>Статус</Text>
            </Col>
            <Col flex='70%'>
              {activeEmployee?.status.title +
                ' ' +
                activeEmployee?.status.value}
            </Col>
          </Row>

          <Row gutter={40}>
            <Col flex='30%'>
              <Text type='secondary'>Email</Text>
            </Col>
            <Col flex='70%'>{activeEmployee?.email}</Col>
          </Row>

          <Row gutter={40}>
            <Col flex='30%'>
              <Text type='secondary'>Телефон</Text>
            </Col>
            <Col flex='70%'>{activeEmployee?.phone}</Col>
          </Row>

          <Row gutter={40}>
            <Col flex='30%'>
              <Text type='secondary'>Доступные объекты</Text>
            </Col>
            <Col flex='70%'>
              {availableObjectOptions.map((obj) => (
                <Text key={obj.value}>{obj.label}; </Text>
              ))}
            </Col>
          </Row>
        </Space>
      </div>

      <CompanyEmployeesDelete
        employee={activeEmployee}
        isModalOpen={isModalOpen}
        onModalOkButton={onDeleteEmployee}
        onModalCancelButton={onModalCancelButton}
      />
    </Drawer>
  );
};
