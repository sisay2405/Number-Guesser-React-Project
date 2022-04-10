import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import App from './App-Old-Syntax';
import './styles/index.scss';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
