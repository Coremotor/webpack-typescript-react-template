import React from 'react';
import { Space, Tabs } from 'modules/_shared/ui';
import { useModal } from 'modules/_shared/hooks/use-modal';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import { DeleteModal, DetailsHeader } from 'modules/company/components';
import { SidebarDetailsDrawer } from 'modules/_shared/layouts';
import { useShowCompanyManagersDetails } from 'modules/company/blocks/company-managers/hooks/use-show-company-managers-details';
import { CompanyManagersDetailsInfo } from './company-managers-details-info';
import styles from './company-managers-details.module.css';
import {
  convertToBasicTab,
  convertToPassportTab,
} from 'modules/company/helpers/convertActiveMenegerInTableView';

export const CompanyManagersDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isManagerDetailsOpen, onManagerDetailsClose, activeManager } =
    useShowCompanyManagersDetails();

  const {
    isModalOpen,
    handleOpenModal,
    handleModalConfirmClick,
    handleModalCancelClick,
  } = useModal();

  const onDeleteManager = () => {
    onManagerDetailsClose();
    handleModalConfirmClick();
  };

  if (!activeManager) return;

  const goToManagerPage = () => {
    onManagerDetailsClose();
    navigate(RoutesEnum.Manager + '/' + activeManager.id);
  };

  return (
    <SidebarDetailsDrawer
      onClose={onManagerDetailsClose}
      isOpen={isManagerDetailsOpen}
    >
      <div className={styles.wrapper}>
        <DetailsHeader
          fullName={activeManager.fullName}
          description={activeManager.position}
          onClose={onManagerDetailsClose}
          onEdit={goToManagerPage}
          onDelete={handleOpenModal}
        />

        <Space direction='vertical'>
          <Tabs
            defaultActiveKey='basicInfo'
            items={[
              {
                key: 'basicInfo',
                label: t('shared.basicInfo'),
                children: (
                  <CompanyManagersDetailsInfo
                    data={convertToBasicTab(activeManager)}
                  />
                ),
              },
              {
                key: 'passportInfo',
                label: t('shared.passportInfo'),
                children: (
                  <CompanyManagersDetailsInfo
                    data={convertToPassportTab(activeManager)}
                  />
                ),
              },
            ]}
          />
        </Space>
      </div>

      <DeleteModal
        title={t('companyManagers.deleteManager') + '?'}
        deletingObjPosition={t('companyManagers.manager')}
        deletingObjName={activeManager.fullName}
        isOpen={isModalOpen}
        onConfirm={onDeleteManager}
        onCancel={handleModalCancelClick}
      />
    </SidebarDetailsDrawer>
  );
};
