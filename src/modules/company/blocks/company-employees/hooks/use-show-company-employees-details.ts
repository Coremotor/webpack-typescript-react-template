import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { useEffect, useState } from 'react';
import { getActiveEmployee } from 'modules/company/store/selectors';
import { setActiveEmployee } from 'modules/company/store/reduser';

export const useShowCompanyEmployeesDetails = () => {
  const dispatch = useAppDispatch();
  const activeEmployee = useAppSelector(getActiveEmployee);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    dispatch(setActiveEmployee(null));
  };

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (activeEmployee) {
      showDrawer();
    }
  }, [activeEmployee]);

  return {
    open,
    onClose,
    activeEmployee,
  };
};
