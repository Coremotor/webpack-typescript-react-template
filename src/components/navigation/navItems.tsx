import type { MenuProps } from 'antd';
import React from 'react';
import { DesktopOutlined } from '@ant-design/icons';
import { routes } from 'router/routes';

export const navItems: MenuProps['items'] = [
  {
    label: 'Главный экран',
    key: routes.main,
    icon: <DesktopOutlined />,
  },
  {
    label: 'Платёжные операции',
    key: routes.paymentTransactions,
    icon: <DesktopOutlined />,
  },
  {
    label: 'Документооборот',
    key: routes.documentFlow,
    icon: <DesktopOutlined />,
  },
  {
    label: 'Счета и договоры',
    key: routes.accountsContracts,
    icon: <DesktopOutlined />,
  },
  {
    label: 'Объекты размещения',
    key: routes.accommodationFacilities,
    icon: <DesktopOutlined />,
  },
  {
    label: 'Методы оплаты',
    key: routes.paymentMethods,
    icon: <DesktopOutlined />,
  },
];
