import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { useEffect, useState } from 'react';
import { getActiveFounder } from 'modules/company/store/selectors';
import { setActiveFounder } from 'modules/company/store/reducer';

export const useShowCompanyFoundersDetails = () => {
  const dispatch = useAppDispatch();
  const activeFounder = useAppSelector(getActiveFounder);

  const [isFounderDetailsOpen, setIsFounderDetailsOpen] = useState(false);

  const onFounderDetailsClose = () => {
    setIsFounderDetailsOpen(false);
    dispatch(setActiveFounder(null));
  };

  const showDrawer = () => {
    setIsFounderDetailsOpen(true);
  };

  useEffect(() => {
    if (activeFounder) {
      showDrawer();
    }
  }, [activeFounder]);

  return {
    isFounderDetailsOpen,
    onFounderDetailsClose,
    activeFounder,
  };
};
