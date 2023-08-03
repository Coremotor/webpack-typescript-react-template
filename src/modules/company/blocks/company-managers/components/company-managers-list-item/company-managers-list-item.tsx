import React, { FC } from 'react';
import { Col, Text } from 'modules/_shared/ui';
import { TManager } from 'modules/company/types';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { setActiveManager } from 'modules/company/store/reducer';
import { getActiveManager } from 'modules/company/store/selectors';
import { usePopover } from 'modules/_shared/hooks/use-popover';
import { useModal } from 'modules/_shared/hooks/use-modal';
import {
  EditMenuPopover,
  DeleteModal,
  PersonInfoInListItem,
} from 'modules/company/components';
import { useTranslation } from 'react-i18next';
import { useCompanyManagersColumnsWidth } from 'modules/company/blocks/company-managers/hooks/use-company-managers-columns-width';
import styles from './company-managers-list-item.module.css';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { ListItemRow } from 'modules/_shared/layouts/list';

type TCompanyManagersListItemProps = {
  manager: TManager;
};

export const CompanyManagersListItem: FC<TCompanyManagersListItemProps> = ({
  manager,
}) => {
  const { t } = useTranslation();
  const { managerListColumnsWidth } = useCompanyManagersColumnsWidth();

  const dispatch = useAppDispatch();
  const activeManager = useAppSelector(getActiveManager);

  const isActive = activeManager && activeManager.id === manager.id;

  const { isMenuOpen, handleHideMenu, handleOpenMenuChange } = usePopover();
  const {
    isModalOpen,
    handleOpenModal,
    handleModalConfirmClick,
    handleModalCancelClick,
  } = useModal();

  const setManagerInActive = () => dispatch(setActiveManager(manager));

  return (
    <>
      <ListItemRow isActive={isActive} onRowClick={setManagerInActive}>
        <>
          <Col className={styles.col} flex={managerListColumnsWidth.fullName}>
            <PersonInfoInListItem
              fullName={manager.fullName}
              description={manager.position}
            />
          </Col>

          <Col className={styles.col} flex={managerListColumnsWidth.resident}>
            <Text ellipsis>
              {manager.isRussiaResident ? t('shared.yes') : t('shared.no')}
            </Text>
          </Col>

          <Col
            className={styles.col}
            flex={managerListColumnsWidth.citizenship}
          >
            <Text ellipsis>{manager.citizenship}</Text>
          </Col>

          <Col className={styles.col} flex={managerListColumnsWidth.phone}>
            <Text ellipsis>{manager.phone}</Text>
          </Col>

          <Col className={styles.col} flex={managerListColumnsWidth.edit}>
            <EditMenuPopover
              openMenu={isMenuOpen}
              hideMenu={handleHideMenu}
              openDeleteModal={handleOpenModal}
              onOpenMenuChange={handleOpenMenuChange}
              editPagePath={RoutesEnum.manager + '/' + manager.id}
            />
          </Col>
        </>
      </ListItemRow>

      <DeleteModal
        title={t('companyManagers.deleteManager') + '?'}
        deletingObjPosition={t('companyManagers.manager')}
        deletingObjName={manager.fullName}
        isOpen={isModalOpen}
        onConfirm={handleModalConfirmClick}
        onCancel={handleModalCancelClick}
      />
    </>
  );
};
