import React, { FC } from 'react';
import { Popover } from 'modules/_shared/ui';
import MoreIcon from 'assets/icons/more.svg';
import { EditMenu } from './edit-menu';

type TEditMenuPopoverProps = {
  openMenu: boolean;
  hideMenu: () => void;
  openDeleteModal: () => void;
  onOpenMenuChange: (newOpen: boolean) => void;
  editPagePath: string;
};

export const EditMenuPopover: FC<TEditMenuPopoverProps> = ({
  hideMenu,
  openDeleteModal,
  onOpenMenuChange,
  openMenu,
  editPagePath,
}) => {
  const stopPropagationFN = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  return (
    <Popover
      destroyTooltipOnHide
      overlayInnerStyle={{ padding: '5px 0' }}
      placement='bottomRight'
      content={
        <EditMenu
          hideMenu={hideMenu}
          openDeleteModal={openDeleteModal}
          editPagePath={editPagePath}
        />
      }
      trigger='click'
      arrow={false}
      open={openMenu}
      onOpenChange={onOpenMenuChange}
    >
      <div onClick={stopPropagationFN}>
        <MoreIcon />
      </div>
    </Popover>
  );
};
