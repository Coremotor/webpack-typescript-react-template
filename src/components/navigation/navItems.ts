import { routes } from 'router/routes';
import main from 'assets/icons/main.svg';
import mainActive from 'assets/icons/mainActive.svg';
import paymentTransactions from 'assets/icons/paymentTransactions.svg';
import paymentTransactionsActive from 'assets/icons/paymentTransactionsActive.svg';
import documentFlow from 'assets/icons/documentFlow.svg';
import documentFlowActive from 'assets/icons/documentFlowActive.svg';
import accountsContracts from 'assets/icons/accountsContracts.svg';
import accountsContractsActive from 'assets/icons/accountsContractsActive.svg';
import accommodationFacilities from 'assets/icons/accommodationFacilities.svg';
import accommodationFacilitiesActive from 'assets/icons/accommodationFacilitiesActive.svg';
import paymentMethods from 'assets/icons/paymentMethods.svg';
import paymentMethodsActive from 'assets/icons/paymentMethodsActive.svg';

export const navItems = [
  {
    label: 'navigation.main',
    route: routes.main,
    icon: main,
    iconActive: mainActive,
  },
  {
    label: 'navigation.paymentTransactions',
    route: routes.paymentTransactions,
    icon: paymentTransactions,
    iconActive: paymentTransactionsActive,
  },
  {
    label: 'navigation.documentFlow',
    route: routes.documentFlow,
    icon: documentFlow,
    iconActive: documentFlowActive,
  },
  {
    label: 'navigation.accountsContracts',
    route: routes.accountsContracts,
    icon: accountsContracts,
    iconActive: accountsContractsActive,
  },
  {
    label: 'navigation.accommodationFacilities',
    route: routes.accommodationFacilities,
    icon: accommodationFacilities,
    iconActive: accommodationFacilitiesActive,
  },
  {
    label: 'navigation.paymentMethods',
    route: routes.paymentMethods,
    icon: paymentMethods,
    iconActive: paymentMethodsActive,
  },
];
