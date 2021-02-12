import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store/';
import { Auth0Provider } from "@auth0/auth0-react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/league-spartan';
import './index.css';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'League Spartan',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4zbaxg9b.us.auth0.com"
      clientId="szqzPq37DJGEMQk3eiqMEwp0t6JKcZQj"
      redirectUri={window.location.origin}
      audience="https://hall-of-fame-uf-dev.herokuapp.com/"
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
