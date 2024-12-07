// src/index.tsx

import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // Uncomment if you intend to use App instead of ThemedApp
import { Provider } from 'react-redux';
import { store } from './store/store';
import ThemedApp from './ThemedApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
    </React.StrictMode>
);
