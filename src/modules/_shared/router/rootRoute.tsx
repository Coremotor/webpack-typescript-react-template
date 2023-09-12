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
  { path: RoutesEnum.Company, element: <Company /> },
  { path: RoutesEnum.EditCompany, element: <CompanyEdit /> },
  { path: RoutesEnum.Employee + '/:employeeId?', element: <CompanyEmployee /> },
  { path: RoutesEnum.Founder + '/:founderId?', element: <CompanyFounder /> },
  { path: RoutesEnum.Manager + '/:managerId?', element: <CompanyManager /> },
  {
    path: RoutesEnum.AccommodationFacilities,
    element: <AccommodationFacilities />,
  },
  { path: RoutesEnum.AccountsContracts, element: <AccountsContracts /> },
  { path: RoutesEnum.DocumentFlow, element: <DocumentFlow /> },
  { path: RoutesEnum.PaymentMethods, element: <PaymentMethods /> },
  { path: RoutesEnum.PaymentTransactions, element: <PaymentTransactions /> },
] as const;

const RootRoute: FC = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Authorization} element={<Authorization />} />
      <Route path={RoutesEnum.Registration} element={<Registration />} />
      <Route
        path={RoutesEnum.EmailConfirmation}
        element={<EmailConfirmation />}
      />
      <Route path={RoutesEnum.NoMatch} element={<NoFound />} />
      <Route path={RoutesEnum.MainScreen} element={<AppLayout />}>
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
