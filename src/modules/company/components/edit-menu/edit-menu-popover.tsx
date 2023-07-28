import React, { FC } from 'react';
import { Popover } from 'modules/_shared/ui';
import ThreeDotsIcon from 'assets/icons/three-dots.svg';
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
  const handleIconClick = (e: React.MouseEvent<SVGAElement, MouseEvent>) =>
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
      <ThreeDotsIcon onClick={handleIconClick} />
    </Popover>
  );
};
