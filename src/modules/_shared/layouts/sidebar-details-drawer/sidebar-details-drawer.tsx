import React, { FC, ReactNode } from 'react';
import { Drawer } from 'modules/_shared/ui';

type TSidebarDetailsDrawerProps = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
};

export const SidebarDetailsDrawer: FC<TSidebarDetailsDrawerProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  return (
    <Drawer
      destroyOnClose
      placement='right'
      width={500}
      onClose={onClose}
      open={isOpen}
      closable={false}
    >
      {children}
    </Drawer>
  );
};
