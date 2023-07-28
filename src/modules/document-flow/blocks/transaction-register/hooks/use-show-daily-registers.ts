import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getActiveTransactionRegister } from 'modules/document-flow/store/selectors';
import { useEffect, useState } from 'react';
import { setActiveTransactionRegister } from 'modules/document-flow/store/reducer';

export const useShowDailyRegisters = () => {
  const dispatch = useAppDispatch();
  const activeRegister = useAppSelector(getActiveTransactionRegister);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    dispatch(setActiveTransactionRegister(null));
  };

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (activeRegister) {
      showDrawer();
    }
  }, [activeRegister]);

  return {
    open,
    onClose,
    activeRegister,
  };
};
