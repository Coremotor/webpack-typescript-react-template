import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from 'modules/_shared/components/navigation/navigation.module.css';
import { useNavItems } from 'modules/_shared/components/navigation/useNavItems';

const Navigation = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const navigate = useNavigate();
  const navItems = useNavItems();

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

export default Navigation;
