import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './app/Application';

import './theme/theme.css';
import './global.css';

console.log('Renderer execution started');

const app = <Application />;

createRoot(document.getElementById('app')).render(app);
