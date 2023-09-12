import { useState } from 'react';
import { setActiveTabKey } from 'modules/company/store/reducer';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useAppDispatch } from 'modules/_shared/root-store/hooks';
import { useNavigate } from 'react-router-dom';
import { ActiveNavTabKeyEnum } from 'modules/company/types';

const navItems = [
  { key: ActiveNavTabKeyEnum.CompanyInfo, label: 'company.info' },
  { key: ActiveNavTabKeyEnum.CompanyEmployees, label: 'company.employees' },
  { key: ActiveNavTabKeyEnum.CompanyManagement, label: 'company.management' },
  { key: ActiveNavTabKeyEnum.CompanyFounders, label: 'company.founders' },
];

export const useCompanyNavigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const hide = () => {
    setIsNavMenuOpen(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setIsNavMenuOpen(isOpen);
  };

  const onNavItemClick = (key: string) => {
    dispatch(setActiveTabKey(key));
    hide();
    navigate(RoutesEnum.Company);
  };

  return { isNavMenuOpen, handleOpenChange, onNavItemClick, navItems };
};
