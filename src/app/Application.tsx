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

const { defaultAlgorithm, darkAlgorithm } = theme;

const Application: React.FC = () => {
  const isDarkMode = useSelector(getIsDarkMode);
  const isLoading = useSelector(getIsLoading);
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
          <App className={styles.app}>
            <BrowserRouter>
              <Root />
            </BrowserRouter>
          </App>
        </ConfigProvider>
      </Suspense>
      <Notification />
    </React.StrictMode>
  );
};

export default Application;
