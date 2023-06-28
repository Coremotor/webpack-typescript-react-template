import type { MenuProps } from 'antd';
import React from 'react';
import { navItems } from 'components/navigation/navItems';

export const useNavItems = (currentRoute: string) => {
  const items: MenuProps['items'] = navItems.map((item) => ({
    label: item.label,
    key: item.route,
    icon:
      currentRoute === item.route ? (
        <img src={item.iconActive} alt='icon' />
      ) : (
        <img src={item.icon} alt='icon' />
      ),
    style: { display: 'flex', alignItems: 'center' },
  }));

  return items;
};
