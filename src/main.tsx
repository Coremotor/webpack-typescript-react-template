import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from 'app/Application';
import 'global.css';

const app = <Application />;

createRoot(document.getElementById('app')).render(app);
