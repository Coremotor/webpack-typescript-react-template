import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'modules/_shared/components/app/app';
import { store } from 'modules/_shared/store/store';
import { Provider } from 'react-redux';
import { LocaleSwitcher } from 'modules/_shared/components';
import 'assets/fonts/Gilroy-Regular.woff';
import 'assets/styles/global.css';
import 'assets/styles/colors.css';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}>
        <LocaleSwitcher />
      </div>
      <App />
    </Provider>
  </React.StrictMode>,
);
