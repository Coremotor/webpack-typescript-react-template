import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onModalOkButton = () => {
    setIsModalOpen(false);
  };

  const onModalCancelButton = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    showModal,
    onModalOkButton,
    onModalCancelButton,
  };
};
