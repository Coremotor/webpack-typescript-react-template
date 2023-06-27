import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { navItems } from 'components/navigation/navItems';
import { routes } from 'router/routes';
import { useNavigate } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  const [current, setCurrent] = useState(routes.main);
  const navigate = useNavigate();

  const onNavItemClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      className={styles.menu}
      onClick={onNavItemClick}
      selectedKeys={[current]}
      items={navItems}
    />
  );
};

export default Navigation;
