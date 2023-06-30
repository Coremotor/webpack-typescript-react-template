import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'modules/_shared/app/app';
import { store } from 'modules/_shared/store/store';
import { Provider } from 'react-redux';
import 'assets/styles/global.css';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
