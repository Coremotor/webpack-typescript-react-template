import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'modules/_shared/components/app/app';
import { store } from 'modules/_shared/store/store';
import { Provider } from 'react-redux';
import 'assets/fonts/Gilroy-Regular.woff';
import 'assets/styles/global.css';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
