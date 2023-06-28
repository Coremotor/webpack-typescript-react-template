import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { routes } from 'router/routes';
import { useNavigate } from 'react-router-dom';
import styles from './navigation.module.css';
import { useNavItems } from 'components/navigation/useNavItems';

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState(routes.main);
  const navigate = useNavigate();
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

export default Navigation;
