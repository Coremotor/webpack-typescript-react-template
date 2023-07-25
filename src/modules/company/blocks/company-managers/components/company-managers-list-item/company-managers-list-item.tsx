import React, { FC } from 'react';
import { Col, Text } from 'modules/_shared/ui';
import { TManager } from 'modules/company/types';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setActiveManager } from 'modules/company/store/reduser';
import { getActiveManager } from 'modules/company/store/selectors';
import { usePopover } from 'modules/_shared/hooks/use-popover';
import { useModal } from 'modules/_shared/hooks/use-modal';
import {
  EditMenuPopover,
  DeleteModal,
  PersonInfoInListItem,
} from 'modules/company/components';
import { useTranslation } from 'react-i18next';
import { ListItemRow } from 'modules/company/layouts';
import { useCompanyManagersColumnsWidth } from 'modules/company/blocks/company-managers/hooks/use-company-managers-columns-width';
import styles from './company-managers-list-item.module.css';
import { RoutesEnum } from 'modules/_shared/router/routes';

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

  const { open, hide, handleOpenChange } = usePopover();
  const { isModalOpen, showModal, onModalOkButton, onModalCancelButton } =
    useModal();

  const setManagerInActive = () => dispatch(setActiveManager(manager));

  return (
    <>
      <ListItemRow isActive={isActive} onRowClick={setManagerInActive}>
        <>
          <Col className={styles.col} flex={managerListColumnsWidth.fullName}>
            <PersonInfoInListItem
              fullName={manager.fullName}
              description={manager.description}
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
              openMenu={open}
              hideMenu={hide}
              openDeleteModal={showModal}
              onOpenMenuChange={handleOpenChange}
              editPagePath={RoutesEnum.manager + '/' + manager.id}
            />
          </Col>
        </>
      </ListItemRow>

      <DeleteModal
        title={t('Удалить руководителя') + '?'}
        deletingObjPosition={t('руководитель')}
        deletingObjName={manager.fullName}
        isModalOpen={isModalOpen}
        onModalOkButton={onModalOkButton}
        onModalCancelButton={onModalCancelButton}
      />
    </>
  );
};
