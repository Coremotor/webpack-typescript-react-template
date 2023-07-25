import React from 'react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import Protected from 'modules/_shared/router/protected';
import { AppLayout } from 'modules/_shared/layouts';
import {
  AccommodationFacilities,
  AccountsContracts,
  Authorization,
  Company,
  DocumentFlow,
  EmailConfirmation,
  MainScreen,
  NoFound,
  PaymentMethods,
  PaymentTransactions,
  Registration,
} from 'modules';
import {
  CompanyEmployee,
  CompanyEdit,
  CompanyFounder,
  CompanyManager,
} from 'modules/company/blocks';

const protectedRoutes = [
  { path: RoutesEnum.company, element: <Company /> },
  { path: RoutesEnum.editCompany, element: <CompanyEdit /> },
  { path: RoutesEnum.employee + '/:employeeId?', element: <CompanyEmployee /> },
  { path: RoutesEnum.founder + '/:founderId?', element: <CompanyFounder /> },
  { path: RoutesEnum.manager + '/:managerId?', element: <CompanyManager /> },
  {
    path: RoutesEnum.accommodationFacilities,
    element: <AccommodationFacilities />,
  },
  { path: RoutesEnum.accountsContracts, element: <AccountsContracts /> },
  { path: RoutesEnum.documentFlow, element: <DocumentFlow /> },
  { path: RoutesEnum.paymentMethods, element: <PaymentMethods /> },
  { path: RoutesEnum.paymentTransactions, element: <PaymentTransactions /> },
];

const RootRoute: FC = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.authorization} element={<Authorization />} />
      <Route path={RoutesEnum.registration} element={<Registration />} />
      <Route
        path={RoutesEnum.emailConfirmation}
        element={<EmailConfirmation />}
      />
      <Route path={RoutesEnum.noMatch} element={<NoFound />} />
      <Route path={RoutesEnum.mainScreen} element={<AppLayout />}>
        <Route
          index
          element={
            <Protected>
              <MainScreen />
            </Protected>
          }
        />
        {protectedRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Protected>{route.element}</Protected>}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default RootRoute;
