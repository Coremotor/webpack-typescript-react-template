import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'modules/_shared/components/app/app';
import { store } from 'modules/_shared/store/store';
import { Provider } from 'react-redux';
import 'assets/fonts/Gilroy-Regular.woff';
import 'assets/fonts/Gilroy-Medium.woff';
import 'assets/styles/global.css';
import 'assets/styles/colors.css';

const root = document.getElementById('app');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
