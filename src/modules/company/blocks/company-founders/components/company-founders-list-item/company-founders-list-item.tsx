import React, { FC } from 'react';
import { Col, Text } from 'modules/_shared/ui';
import { TFounder } from 'modules/company/types';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { setActiveFounder } from 'modules/company/store/reducer';
import { getActiveFounder } from 'modules/company/store/selectors';
import { usePopover } from 'modules/_shared/hooks/use-popover';
import { useModal } from 'modules/_shared/hooks/use-modal';
import {
  EditMenuPopover,
  DeleteModal,
  PersonInfoInListItem,
} from 'modules/company/components';
import { useTranslation } from 'react-i18next';
import { ListItemRow } from 'modules/company/layouts';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useCompanyFoundersColumnsWidth } from 'modules/company/blocks/company-founders/hooks/use-company-founders-columns-width';
import styles from './company-founders-list-item.module.css';

type TCompanyFoundersListItemProps = {
  founder: TFounder;
};

export const CompanyFoundersListItem: FC<TCompanyFoundersListItemProps> = ({
  founder,
}) => {
  const { t } = useTranslation();
  const { companyFoundersColumnsWidth } = useCompanyFoundersColumnsWidth();

  const dispatch = useAppDispatch();
  const activeFounder = useAppSelector(getActiveFounder);

  const isActive = activeFounder && activeFounder.id === founder.id;

  const { isMenuOpen, handleHideMenu, handleOpenMenuChange } = usePopover();
  const {
    isModalOpen,
    handleOpenModal,
    handleModalConfirmClick,
    handleModalCancelClick,
  } = useModal();

  const setFounderInActive = () => dispatch(setActiveFounder(founder));

  return (
    <>
      <ListItemRow isActive={isActive} onRowClick={setFounderInActive}>
        <>
          <Col
            className={styles.col}
            flex={companyFoundersColumnsWidth.fullName}
          >
            <PersonInfoInListItem
              fullName={founder.fullName}
              description={founder.position}
            />
          </Col>

          <Col
            className={styles.col}
            flex={companyFoundersColumnsWidth.resident}
          >
            <Text ellipsis>
              {founder.isRussiaResident ? t('shared.yes') : t('shared.no')}
            </Text>
          </Col>

          <Col
            className={styles.col}
            flex={companyFoundersColumnsWidth.citizenship}
          >
            <Text ellipsis>{founder.citizenship}</Text>
          </Col>

          <Col className={styles.col} flex={companyFoundersColumnsWidth.phone}>
            <Text ellipsis>{founder.phone}</Text>
          </Col>

          <Col className={styles.col} flex={companyFoundersColumnsWidth.edit}>
            <EditMenuPopover
              openMenu={isMenuOpen}
              hideMenu={handleHideMenu}
              openDeleteModal={handleOpenModal}
              onOpenMenuChange={handleOpenMenuChange}
              editPagePath={RoutesEnum.founder + '/' + founder.id}
            />
          </Col>
        </>
      </ListItemRow>

      <DeleteModal
        title={t('companyFounders.deleteFounder') + '?'}
        deletingObjPosition={t('companyFounders.founder')}
        deletingObjName={founder.fullName}
        isOpen={isModalOpen}
        onConfirm={handleModalConfirmClick}
        onCancel={handleModalCancelClick}
      />
    </>
  );
};
