import type { MenuProps } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RoutesEnum } from 'modules/_shared/router/routes';
import IconHome from 'assets/icons/home.svg';
import IconOperation from 'assets/icons/operation.svg';
import IconContract from 'assets/icons/contract.svg';
import IconBill from 'assets/icons/bill.svg';
import IconApartment from 'assets/icons/apartment.svg';
import IconPayment from 'assets/icons/payment.svg';
import { Text } from 'modules/_shared/ui';
import classNames from 'classnames';
import styles from './navigation.module.css';

const navItems = [
  {
    label: 'navigation.mainScreen',
    route: RoutesEnum.MainScreen,
    icon: IconHome,
  },
  {
    label: 'navigation.paymentTransactions',
    route: RoutesEnum.PaymentTransactions,
    icon: IconOperation,
  },
  {
    label: 'navigation.documentFlow',
    route: RoutesEnum.DocumentFlow,
    icon: IconContract,
  },
  {
    label: 'navigation.accountsContracts',
    route: RoutesEnum.AccountsContracts,
    icon: IconBill,
  },
  {
    label: 'navigation.accommodationFacilities',
    route: RoutesEnum.AccommodationFacilities,
    icon: IconApartment,
  },
  {
    label: 'navigation.paymentMethods',
    route: RoutesEnum.PaymentMethods,
    icon: IconPayment,
  },
];

export const useNavItems = (currentRoute: string) => {
  const { t } = useTranslation();

  const isActive = (route: string) => currentRoute === route;

  const items: MenuProps['items'] = navItems.map((item) => ({
    label: (
      <Text
        type='secondary'
        className={classNames({ [styles.active]: isActive(item.route) })}
      >
        {t(item.label)}
      </Text>
    ),
    key: item.route,
    icon: <item.icon />,
    className: classNames([styles.item], {
      [styles.active]: isActive(item.route),
    }),
  }));

  return items;
};
