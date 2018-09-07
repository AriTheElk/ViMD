import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

// import our App component
import AppPage from "./containers/AppPage";
// import our global styles
import GlobalStyle from "./styles/global";
// import our site's theme
import config from "./config";
import theme from "./styles/themes/cobalt";

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
    <div>
      <GlobalStyle />
      <AppPage />
    </div>
  </ThemeProvider>,
  document.getElementById("root")
);
