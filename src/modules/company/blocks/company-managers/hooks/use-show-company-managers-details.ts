import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { useEffect, useState } from 'react';
import { getActiveManager } from 'modules/company/store/selectors';
import { setActiveManager } from 'modules/company/store/reducer';

export const useShowCompanyManagersDetails = () => {
  const dispatch = useAppDispatch();
  const activeManager = useAppSelector(getActiveManager);

  const [isManagerDetailsOpen, setIsManagerDetailsOpen] = useState(false);

  const onManagerDetailsClose = () => {
    setIsManagerDetailsOpen(false);
    dispatch(setActiveManager(null));
  };

  const showDrawer = () => {
    setIsManagerDetailsOpen(true);
  };

  useEffect(() => {
    if (activeManager) {
      showDrawer();
    }
  }, [activeManager]);

  return {
    isManagerDetailsOpen,
    onManagerDetailsClose,
    activeManager,
  };
};
