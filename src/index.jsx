import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalProvider } from './Components/utils/global.context';




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

