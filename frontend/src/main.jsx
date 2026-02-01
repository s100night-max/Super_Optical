import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { registerServiceWorker } from './app/serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register service worker for offline support
registerServiceWorker();