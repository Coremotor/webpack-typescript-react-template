import React, { Suspense } from 'react';
import { App, ConfigProvider, Spin, theme } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Root from 'router/root';
import {
  getDirection,
  getIsDarkMode,
  getLocale,
} from 'store/modules/app/selectors';
import styles from './application.module.css';

import 'dayjs/locale/en';
import 'dayjs/locale/ru';

const { defaultAlgorithm, darkAlgorithm } = theme;

const Application: React.FC = () => {
  const isDarkMode = useSelector(getIsDarkMode);
  const locale = useSelector(getLocale);
  const direction = useSelector(getDirection);

  return (
    <React.StrictMode>
      <Suspense
        fallback={
          <div className={styles.appLoader}>
            <Spin size='large' />
          </div>
        }
      >
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
    </React.StrictMode>
  );
};

export default Application;
