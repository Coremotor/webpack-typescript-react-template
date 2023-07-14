import React from 'react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import Protected from 'modules/_shared/router/protected';
import { AppLayout } from 'modules/_shared/layout';
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
import { CompanyEdit } from 'modules/company/components/company-info/components';

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
        <Route
          path={RoutesEnum.company}
          element={
            <Protected>
              <Company />
            </Protected>
          }
        />
        <Route
          path={RoutesEnum.editCompany}
          element={
            <Protected>
              <CompanyEdit />
            </Protected>
          }
        />
        <Route
          path={RoutesEnum.accommodationFacilities}
          element={
            <Protected>
              <AccommodationFacilities />
            </Protected>
          }
        />
        <Route
          path={RoutesEnum.accountsContracts}
          element={
            <Protected>
              <AccountsContracts />
            </Protected>
          }
        />
        <Route
          path={RoutesEnum.documentFlow}
          element={
            <Protected>
              <DocumentFlow />
            </Protected>
          }
        />
        <Route
          path={RoutesEnum.paymentMethods}
          element={
            <Protected>
              <PaymentMethods />
            </Protected>
          }
        />
        <Route
          path={RoutesEnum.paymentTransactions}
          element={
            <Protected>
              <PaymentTransactions />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
};

export default RootRoute;
