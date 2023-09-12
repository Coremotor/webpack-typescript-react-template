import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { useEffect, useState } from 'react';
import { getActiveEmployee } from 'modules/company/store/selectors';
import { setActiveEmployee } from 'modules/company/store/reducer';

export const useShowCompanyEmployeesDetails = () => {
  const dispatch = useAppDispatch();
  const activeEmployee = useAppSelector(getActiveEmployee);

  const [isEmployeeDetailsOpen, setIsEmployeeDetailsOpen] = useState(false);

  const onEmployeeDetailsClose = () => {
    setIsEmployeeDetailsOpen(false);
    dispatch(setActiveEmployee(null));
  };

  const showDrawer = () => {
    setIsEmployeeDetailsOpen(true);
  };

  useEffect(() => {
    if (activeEmployee) {
      showDrawer();
    }
  }, [activeEmployee]);

  return {
    isEmployeeDetailsOpen,
    onEmployeeDetailsClose,
    activeEmployee,
  };
};
