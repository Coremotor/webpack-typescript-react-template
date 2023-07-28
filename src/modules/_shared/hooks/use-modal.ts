import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const onOkButton = () => {
    setIsOpen(false);
  };

  const onCancelButton = () => {
    setIsOpen(false);
  };

  return {
    isModalOpen: isOpen,
    handleOpenModal: open,
    handleModalConfirmClick: onOkButton,
    handleModalCancelClick: onCancelButton,
  };
};
