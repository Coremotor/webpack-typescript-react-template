import React, { Suspense } from 'react';
import { App as AntDApp, Button, ConfigProvider } from 'modules/_shared/ui';
import { BrowserRouter } from 'react-router-dom';
import RootRoute from 'modules/_shared/router/rootRoute';
import { getDirection, getLocale } from 'modules/_shared/app-store/selectors';
import { LocaleSwitcher, Notification } from 'modules/_shared/components/index';
import styles from './app.module.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'modules/_shared/i18n/i18n';
import ErrorBoundary from 'modules/_shared/components/error-boundary/error-boundary';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { setIsAuth } from 'modules/authorization/store/reducer';
import basicTheme from 'modules/_shared/theme/basic.json';

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
            theme={basicTheme}
          >
            <I18nextProvider i18n={i18n}>
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
