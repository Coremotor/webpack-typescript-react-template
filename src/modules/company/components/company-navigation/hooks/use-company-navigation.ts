import { useState } from 'react';
import { setActiveTabKey } from 'modules/company/store/reduser';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useAppDispatch } from 'modules/_shared/store/hooks';
import { useNavigate } from 'react-router-dom';
import { ActiveNavTabKeyEnum } from 'modules/company/types';

const navItems = [
  { key: ActiveNavTabKeyEnum.one, label: 'company.info' },
  { key: ActiveNavTabKeyEnum.two, label: 'company.employees' },
  { key: ActiveNavTabKeyEnum.three, label: 'company.management' },
  { key: ActiveNavTabKeyEnum.four, label: 'company.founders' },
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
    navigate(RoutesEnum.company);
  };

  return { isNavMenuOpen, handleOpenChange, onNavItemClick, navItems };
};
