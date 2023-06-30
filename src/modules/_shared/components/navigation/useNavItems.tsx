import type { MenuProps } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RoutesEnum } from 'modules/_shared/router/routes';
import IconHome from 'assets/icons/home.svg';
import IconOperation from 'assets/icons/operation.svg';
import IconContract from 'assets/icons/contract.svg';
import IconBill from 'assets/icons/bill.svg';
import IconApartment from 'assets/icons/apartment.svg';
import IconWallet from 'assets/icons/wallet.svg';

const navItems = [
  {
    label: 'navigation.mainScreen',
    route: RoutesEnum.mainScreen,
    icon: IconHome,
  },
  {
    label: 'navigation.paymentTransactions',
    route: RoutesEnum.paymentTransactions,
    icon: IconOperation,
  },
  {
    label: 'navigation.documentFlow',
    route: RoutesEnum.documentFlow,
    icon: IconContract,
  },
  {
    label: 'navigation.accountsContracts',
    route: RoutesEnum.accountsContracts,
    icon: IconBill,
  },
  {
    label: 'navigation.accommodationFacilities',
    route: RoutesEnum.accommodationFacilities,
    icon: IconApartment,
  },
  {
    label: 'navigation.paymentMethods',
    route: RoutesEnum.paymentMethods,
    icon: IconWallet,
  },
];

export const useNavItems = () => {
  const { t } = useTranslation();

  const items: MenuProps['items'] = navItems.map((item) => ({
    label: t(item.label),
    key: item.route,
    icon: <item.icon />,
    style: { display: 'flex', alignItems: 'center' },
  }));

  return items;
};
