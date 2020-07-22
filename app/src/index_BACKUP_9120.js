import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import './config/axios';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
=======
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
>>>>>>> feature/exchange
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
