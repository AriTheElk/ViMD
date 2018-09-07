import base64 from "base-64";
import Dropzone from "react-dropzone";
import React, { PureComponent } from "react";
import Grid from "hedron";

import Editor from "../Editor";
import Header from "../../components/Header";
import { downloadMarkdown } from "../../utils";

// TODO: resolve the below 'module not found' flow error

// const parts = ReadMe.split(",");
// const Docs = base64.decode(parts[parts.length - 1]);

/**
 * This is the main component for the application.
 *
 * @class App
 * @extends {PureComponent}
 */
export default class AppPage extends PureComponent {
  // this gets run once, when the component initially mounts.
  componentWillMount() {
    // set the initial state
    this.state = {
      // write some sample markdown to our state
      markdown: "",
    };
    // bind(this) allows `this` to be used from within our functions
    this.download = this.download.bind(this);
    this.editorChanged = this.editorChanged.bind(this);
  }

  componentDidMount() {
    // TODO: Find a better way to import the markdown file
    // This is done because when using SSR, express doesn't
    // understand how to import markdown files.
    const README = require("../../translations/README/en.md");
    fetch(README)
      .then(response => response.text())
      .then(markdown => {
        this.setState({ markdown });
      });
  }

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
   * @memberOf AppPage
   */
  editorChanged(newVal) {
    this.setState({ markdown: newVal });
  }

  render() {
    return (
      <Grid.Provider>
        <Grid.Bounds fluid>
          <Grid.Bounds direction="vertical" fill>
            <Grid.Box fluid>
              <Header onSave={this.download} />
            </Grid.Box>
            <Grid.Box fluid>
              <Editor
                onChange={this.editorChanged}
                code={this.state.markdown}
              />
            </Grid.Box>
          </Grid.Bounds>
        </Grid.Bounds>
      </Grid.Provider>
    );
  }
}
