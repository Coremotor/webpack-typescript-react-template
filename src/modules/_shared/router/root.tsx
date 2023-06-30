import React from 'react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoFound from 'modules/no-found/no-found';
import Authorization from 'modules/authorization/authorization';
import { RoutesEnum } from 'modules/_shared/router/routes';
import MainScreen from 'modules/main-screen/main-screen';
import AccountsContracts from 'modules/accounts-contracts/accounts-contracts';
import DocumentFlow from 'modules/document-flow/document-flow';
import PaymentMethods from 'modules/payment-methods/payment-methods';
import PaymentTransactions from 'modules/payment-transactions/payment-transactions';
import Protected from 'modules/_shared/router/protected';
import AppLayout from 'modules/_shared/layout';
import Registration from 'modules/registration/registration';
import AccommodationFacilities from 'modules/accommodation-facilities/accommodation-facilities';

const Root: FC = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.authorization} element={<Authorization />} />
      <Route path={RoutesEnum.registration} element={<Registration />} />
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

export default Root;
