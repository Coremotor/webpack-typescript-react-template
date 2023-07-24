import React, { FC } from 'react';
import { Popover } from 'modules/_shared/ui';
import { stopPropagationFn } from 'modules/_shared/helpers/stopPropagation';
import ThreeDotsIcon from 'assets/icons/three-dots.svg';
import { EditMenu } from './edit-menu';

type TEditMenuPopoverProps = {
  openMenu: boolean;
  hideMenu: () => void;
  openDeleteModal: () => void;
  onOpenMenuChange: (newOpen: boolean) => void;
  editableObjId: string;
};

export const EditMenuPopover: FC<TEditMenuPopoverProps> = ({
  hideMenu,
  openDeleteModal,
  onOpenMenuChange,
  openMenu,
  editableObjId,
}) => {
  return (
    <Popover
      destroyTooltipOnHide
      overlayInnerStyle={{ padding: '5px 0' }}
      placement='bottomRight'
      content={
        <EditMenu
          hideMenu={hideMenu}
          openDeleteModal={openDeleteModal}
          editableObjId={editableObjId}
        />
      }
      trigger='click'
      arrow={false}
      open={openMenu}
      onOpenChange={onOpenMenuChange}
    >
      <ThreeDotsIcon onClick={stopPropagationFn} />
    </Popover>
  );
};
