import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

// import our App component
import AppPage from './containers/AppPage';
// import our global styles
import './styles/global';
// import our site's theme
import config from './config';
const theme = require(`./styles/themes/${config.theme}`).default;

/**
 * This is the top level render function
 * 
 * Our initial page is the `AppPage`. It's wrapped inside
 * a `ThemeProvider` so that all the children styled using
 * `styled-components` will automatically be able to inherit
 * from the current site theme.
 */
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppPage />
  </ThemeProvider>,
  document.getElementById('root')
);
