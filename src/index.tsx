import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider } from './contexts/AuthContext';

import './reset.scss'
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);