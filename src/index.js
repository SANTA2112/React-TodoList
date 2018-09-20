import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from "react-redux";

import './_assets/css/global.css';
import './_assets/css/fonts.css';

import App from './App';

window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
