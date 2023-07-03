import React, { Suspense } from 'react';
import { App as AntDApp, ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RootRoute from 'modules/_shared/router/rootRoute';
import {
  getDirection,
  getIsLoading,
  getLocale,
} from 'modules/_shared/store/global/selectors';
import { Notification, Loader } from 'modules/_shared/components/index';
import { colors } from 'assets/styles/colors';
import styles from 'modules/_shared/components/app/app.module.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'modules/_shared/i18n/i18n';
import ErrorBoundary from 'modules/_shared/utils/error-boundary';

const App: React.FC = () => {
  const isLoading = useSelector(getIsLoading);
  const locale = useSelector(getLocale);
  const direction = useSelector(getDirection);

  return (
    <>
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <ConfigProvider
            locale={locale}
            direction={direction}
            theme={{
              token: {
                colorPrimary: colors.colorPrimary,
                fontFamily: 'Gilroy',
              },
            }}
          >
            <I18nextProvider i18n={i18n} defaultNS={'translation'}>
              <AntDApp className={styles.app}>
                <BrowserRouter>
                  <RootRoute />
                </BrowserRouter>
              </AntDApp>
            </I18nextProvider>
          </ConfigProvider>
        </ErrorBoundary>
      </Suspense>
      <Notification />
    </>
  );
};

export default App;
