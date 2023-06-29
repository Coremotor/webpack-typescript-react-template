import React from 'react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoFound from 'pages/noFound';
import Authorization from 'pages/authorization';
import { routes } from 'router/routes';
import Main from 'pages/main';
import AccommodationFacilities from 'pages/accommodationFacilities';
import AccountsContracts from 'pages/accountsContracts';
import DocumentFlow from 'pages/documentFlow';
import PaymentMethods from 'pages/paymentMethods';
import PaymentTransactions from 'pages/paymentTransactions';
import Protected from 'router/protected';
import AppLayout from 'shared/layout';
import Registration from 'pages/registration';

const Root: FC = () => {
  return (
    <Routes>
      <Route path={routes.authorization} element={<Authorization />} />
      <Route path={routes.registration} element={<Registration />} />
      <Route path={routes.noMatch} element={<NoFound />} />
      <Route path={routes.main} element={<AppLayout />}>
        <Route
          index
          element={
            <Protected>
              <Main />
            </Protected>
          }
        />
        <Route
          path={routes.accommodationFacilities}
          element={
            <Protected>
              <AccommodationFacilities />
            </Protected>
          }
        />
        <Route
          path={routes.accountsContracts}
          element={
            <Protected>
              <AccountsContracts />
            </Protected>
          }
        />
        <Route
          path={routes.documentFlow}
          element={
            <Protected>
              <DocumentFlow />
            </Protected>
          }
        />
        <Route
          path={routes.paymentMethods}
          element={
            <Protected>
              <PaymentMethods />
            </Protected>
          }
        />
        <Route
          path={routes.paymentTransactions}
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

export default Root;
