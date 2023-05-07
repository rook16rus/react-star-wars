import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import store from "@store/store";
import '@styles/index.css';
import App from '@containers/App';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
