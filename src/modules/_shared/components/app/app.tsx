import React, { Suspense } from 'react';
import { App as AntDApp, Button, ConfigProvider } from 'modules/_shared/ui';
import { BrowserRouter } from 'react-router-dom';
import RootRoute from 'modules/_shared/router/rootRoute';
import {
  getDirection,
  getLocale,
} from 'modules/_shared/store/global/selectors';
import { LocaleSwitcher, Notification } from 'modules/_shared/components/index';
import { colors } from 'assets/styles/colors';
import styles from 'modules/_shared/components/app/app.module.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'modules/_shared/i18n/i18n';
import ErrorBoundary from 'modules/_shared/components/error-boundary/error-boundary';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setIsAuth } from 'modules/authorization/store/reduser';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector(getLocale);
  const direction = useAppSelector(getDirection);

  const logout = () => dispatch(setIsAuth(false));

  return (
    <>
      <Suspense>
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

      <div style={{ position: 'fixed', left: 10, bottom: 10 }}>
        <LocaleSwitcher />
        <Button style={{ marginLeft: 10 }} onClick={logout}>
          Выйти
        </Button>
      </div>
    </>
  );
};

export default App;
