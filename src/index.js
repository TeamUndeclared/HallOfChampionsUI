import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store/';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-4zbaxg9b.us.auth0.com"
    clientId="szqzPq37DJGEMQk3eiqMEwp0t6JKcZQj"
    redirectUri={window.location.origin}audience="https://dev-4zbaxg9b.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
