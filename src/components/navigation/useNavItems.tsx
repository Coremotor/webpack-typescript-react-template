import type { MenuProps } from 'antd';
import React from 'react';
import { navItems } from 'components/navigation/navItems';
import { useTranslation } from 'react-i18next';
import styles from './navigation.module.css';

export const useNavItems = (currentRoute: string) => {
  const { t } = useTranslation();

  const items: MenuProps['items'] = navItems.map((item) => ({
    label: t(item.label),
    key: item.route,
    icon:
      currentRoute === item.route ? (
        <img className={styles.img} src={item.iconActive} alt='icon' />
      ) : (
        <img className={styles.img} src={item.icon} alt='icon' />
      ),
    style: { display: 'flex', alignItems: 'center' },
  }));

  return items;
};
