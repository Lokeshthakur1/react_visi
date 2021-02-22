import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import { renderRoutes } from 'react-router-config'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(
  <BrowserRouter>
    <App initialData={window.initialData}/>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();