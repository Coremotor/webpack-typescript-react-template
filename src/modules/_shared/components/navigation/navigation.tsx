import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'modules/_shared/ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavItems } from 'modules/_shared/components/navigation/use-nav-items';
import styles from './navigation.module.css';

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const navItems = useNavItems(currentRoute);

  const onNavItemClick: MenuProps['onClick'] = (e) => {
    setCurrentRoute(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      className={styles.menu}
      onClick={onNavItemClick}
      selectedKeys={[currentRoute]}
      items={navItems}
    />
  );
};
