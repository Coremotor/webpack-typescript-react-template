import React, { Suspense } from 'react';
import { App, ConfigProvider, theme } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Root from 'router/root';
import {
  getDirection,
  getIsDarkMode,
  getIsLoading,
  getLocale,
} from 'store/modules/app/selectors';
import Notification from 'components/notification';
import Loader from 'components/loader';
import styles from './application.module.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n/i18n';

const { defaultAlgorithm, darkAlgorithm } = theme;

const Application: React.FC = () => {
  const isLoading = useSelector(getIsLoading);
  const isDarkMode = useSelector(getIsDarkMode);
  const locale = useSelector(getLocale);
  const direction = useSelector(getDirection);

  return (
    <React.StrictMode>
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          }}
          locale={locale}
          direction={direction}
        >
          <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            <App className={styles.app}>
              <BrowserRouter>
                <Root />
              </BrowserRouter>
            </App>
          </I18nextProvider>
        </ConfigProvider>
      </Suspense>
      <Notification />
    </React.StrictMode>
  );
};

export default Application;
