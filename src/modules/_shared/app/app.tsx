import React, { Suspense } from 'react';
import { App as AntDApp, ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Root from 'modules/_shared/router/root';
import {
  getDirection,
  getIsLoading,
  getLocale,
} from 'modules/_shared/app/store/app/selectors';
import Notification from 'modules/_shared/components/notification';
import Loader from 'modules/_shared/components/loader';
import styles from 'modules/_shared/app/app.module.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'modules/_shared/i18n/i18n';

const App: React.FC = () => {
  const isLoading = useSelector(getIsLoading);
  const locale = useSelector(getLocale);
  const direction = useSelector(getDirection);

  return (
    <>
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <ConfigProvider locale={locale} direction={direction}>
          <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            <AntDApp className={styles.app}>
              <BrowserRouter>
                <Root />
              </BrowserRouter>
            </AntDApp>
          </I18nextProvider>
        </ConfigProvider>
      </Suspense>
      <Notification />
    </>
  );
};

export default App;
