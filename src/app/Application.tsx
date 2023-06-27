import React, { Suspense } from 'react';
import { App, ConfigProvider, Spin } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import styles from './application.module.css';
import Root from 'router/root';

const Application: React.FC = () => {
  return (
    <React.StrictMode>
      <Suspense
        fallback={
          <div className={styles.appLoader}>
            <Spin size='large' />
          </div>
        }
      >
        <ConfigProvider>
          <Provider store={store}>
            <App className={styles.app}>
              <BrowserRouter>
                <Root />
              </BrowserRouter>
            </App>
          </Provider>
        </ConfigProvider>
      </Suspense>
    </React.StrictMode>
  );
};

export default Application;
