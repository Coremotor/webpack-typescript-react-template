import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from 'app/Application';
import 'global.css';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const app = (
  <Provider store={store}>
    <Application />
  </Provider>
);

createRoot(document.getElementById('app')).render(app);
