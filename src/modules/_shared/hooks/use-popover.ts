import { useState } from 'react';

export const usePopover = () => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return {
    isMenuOpen: open,
    handleHideMenu: hide,
    handleOpenMenuChange: handleOpenChange,
  };
};
