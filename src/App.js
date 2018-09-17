import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import Grid from "hedron";

import Editor from "./containers/Editor/Async";
import Header from "./components/Header";
import { downloadMarkdown } from "./utils";

// import our global styles
import GlobalStyle from "./styles/global";

// Load the active theme from the config
// TODO: Allow users to change the theme
// The theme in the config should be the default fallback
const config = require("./config").default;

/**
 * This is the main component for the application.
 *
 * @class App
 * @extends {PureComponent}
 */
export default class App extends PureComponent {
  // this gets run once, when the component initially mounts.
  componentWillMount() {
    // Load the last used theme if stored, otherwise load the default theme
    const theme = localStorage.getItem("theme") || config.default_theme;

    // set the initial state
    this.state = {
      // write some sample markdown to our state
      markdown: "",
      theme,
      // TODO: implement a less ugly method to handle this require
      theme_data: require(`./styles/themes/${theme}`).default
    };

    // bind(this) allows `this` to be used from within our functions
    this.download = this.download.bind(this);
    this.editorChanged = this.editorChanged.bind(this);
  }

  componentDidMount() {
    // TODO: Find a better way to import the markdown file
    // This is done because when using SSR, express doesn't
    // understand how to import markdown files.
    const README = require("./translations/README/en.md");
    fetch(README)
      .then(response => response.text())
      .then(markdown => {
        this.setState({ markdown });
      });
  }

  changeActiveTheme = theme => {
    console.log("changing theme to", theme);
    this.setState(
      {
        theme: theme.value,
        theme_data: require(`./styles/themes/${theme.value}`).default
      },
      () => localStorage.setItem("theme", theme.value)
    );
  };

  /**
   * This gets triggered the user pressed the save button.
   *
   * @memberOf App
   */
  download() {
    return downloadMarkdown(this.state.markdown);
  }

  /**
   * Callback for the editor's `onChange` action.
   *
   * @param {string} newVal
   *
   * @memberOf App
   */
  editorChanged(newVal) {
    this.setState({ markdown: newVal });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme_data}>
        <Grid.Provider>
          <Grid.Bounds fluid>
            <GlobalStyle />
            <Grid.Bounds direction="vertical" fill>
              <Grid.Box fluid>
                <Header
                  onSave={this.download}
                  themes={config.themes}
                  activeTheme={this.state.theme}
                  onThemeChange={this.changeActiveTheme}
                />
              </Grid.Box>
              <Grid.Box fluid>
                <Editor
                  themes={config.themes}
                  onChange={this.editorChanged}
                  code={this.state.markdown}
                />
              </Grid.Box>
            </Grid.Bounds>
          </Grid.Bounds>
        </Grid.Provider>
      </ThemeProvider>
    );
  }
}
