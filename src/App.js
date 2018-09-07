import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

// import our App component
import AppPage from "./containers/AppPage";
// import our global styles
import GlobalStyle from "./styles/global";

// Load the active theme from the config
// TODO: Allow users to change the theme
// The theme in the config should be the default fallback
const config = require("./config").default;
const theme = require(`./styles/themes/${config.theme}`).default;

/**
 * This is the top level render function
 *
 * Our initial page is the `AppPage`. It's wrapped inside
 * a `ThemeProvider` so that all the children styled using
 * `styled-components` will automatically be able to inherit
 * from the current site theme.
 */
export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <AppPage />
    </div>
  </ThemeProvider>
);
