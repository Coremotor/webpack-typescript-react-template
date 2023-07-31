import React from 'react';
import { Space, Tabs } from 'modules/_shared/ui';
import { useModal } from 'modules/_shared/hooks/use-modal';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import { DeleteModal, DetailsHeader } from 'modules/company/components';
import { SidebarDetailsDrawer } from 'modules/_shared/layouts';
import { CompanyFoundersDetailsInfo } from 'modules/company/blocks/company-founders/components/company-founders-details/company-founders-details-info';
import {
  convertToBasicTab,
  convertToPassportTab,
} from 'modules/company/helpers/convertActiveFounderInTableView';
import { useShowCompanyFoundersDetails } from 'modules/company/blocks/company-founders/hooks/use-show-company-founders-details';
import styles from './company-founders-details.module.css';

export const CompanyFoundersDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isFounderDetailsOpen, onFounderDetailsClose, activeFounder } =
    useShowCompanyFoundersDetails();

  const {
    isModalOpen,
    handleOpenModal,
    handleModalConfirmClick,
    handleModalCancelClick,
  } = useModal();

  const onDeleteManager = () => {
    onFounderDetailsClose();
    handleModalConfirmClick();
  };

  if (!activeFounder) return;

  const goToManagerPage = () => {
    onFounderDetailsClose();
    navigate(RoutesEnum.founder + '/' + activeFounder.id);
  };

  return (
    <SidebarDetailsDrawer
      onClose={onFounderDetailsClose}
      isOpen={isFounderDetailsOpen}
    >
      <div className={styles.wrapper}>
        <DetailsHeader
          fullName={activeFounder.fullName}
          description={activeFounder.position}
          onClose={onFounderDetailsClose}
          onEdit={goToManagerPage}
          onDelete={handleOpenModal}
        />

        <Space direction='vertical'>
          <Tabs
            defaultActiveKey='1'
            items={[
              {
                key: '1',
                label: t('shared.basicInfoTab'),
                children: (
                  <CompanyFoundersDetailsInfo
                    data={convertToBasicTab(activeFounder)}
                  />
                ),
              },
              {
                key: '2',
                label: t('shared.passportInfoTab'),
                children: (
                  <CompanyFoundersDetailsInfo
                    data={convertToPassportTab(activeFounder)}
                  />
                ),
              },
            ]}
          />
        </Space>
      </div>

      <DeleteModal
        title={t('companyFounders.deleteFounder') + '?'}
        deletingObjPosition={t('companyFounders.founder')}
        deletingObjName={activeFounder.fullName}
        isOpen={isModalOpen}
        onConfirm={onDeleteManager}
        onCancel={handleModalCancelClick}
      />
    </SidebarDetailsDrawer>
  );
};
