import React, { FC, ReactNode } from 'react';
import { Drawer } from 'modules/_shared/ui';

type TSidebarDetailsDrawerProps = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  width?: number;
};

export const SidebarDetailsDrawer: FC<TSidebarDetailsDrawerProps> = ({
  onClose,
  isOpen,
  children,
  width = 600,
}) => {
  return (
    <Drawer
      destroyOnClose
      placement='right'
      width={width}
      onClose={onClose}
      open={isOpen}
      closable={false}
    >
      {children}
    </Drawer>
  );
};
