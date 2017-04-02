/* @flow */
import base64 from 'base-64';
import Dropzone from 'react-dropzone';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Section } from 'hedron';

import config from '../../config';
import Editor from '../Editor';
import Header from '../../components/Header';
import Preview from '../../components/Preview';
import { processMarkdown, downloadMarkdown } from '../../utils';

// import the site's theme parameters
const theme = require(`../../styles/themes/${config.theme}`).default;

// import the required dependencies for our [br]ace editor.
import 'brace/mode/markdown';
// unfortunately the import statement doesn't allow variables
// to be used with it. So we need to use `require` to import
// the dynamically-set ace editor theme.
require(`brace/theme/${theme.editor.theme}`);
import 'brace/keybinding/vim';

// TODO: resolve the below 'module not found' flow error
const ReadMe = require('../../translations/README/en.md');
const parts = ReadMe.split(',');
const Docs = base64.decode(parts[parts.length-1]);

/**
 * This is the main component for the application.
 *
 * @class App
 * @extends {PureComponent}
 */
export default class AppPage extends PureComponent {
  // define our state types
  state: {
    markdown: string,
  };
  // this gets run once, when the component initially mounts.
  componentWillMount() {
    // set the initial state
    this.state = {
      // write some sample markdown to our state
      markdown: Docs,
    };
    // bind(this) allows `this` to be used from within our functions
    this.download = this.download.bind(this);
    this.editorChanged = this.editorChanged.bind(this);
  }
  download: () => {};
  editorChanged: (newVal: string) => {};

  /**
   * This gets triggered the user pressed the save button.
   *
   * @memberOf App
   */
  download(): void {
    return downloadMarkdown(this.state.markdown);
  }

  /**
   * Callback for the editor's `onChange` action.
   * 
   * @param {string} newVal
   * 
   * @memberOf AppPage
   */
  editorChanged(newVal: string): void {
    this.setState({ markdown: newVal });
  }

  render() {
    return (
      <Section fluid>
        <Header onSave={this.download}/>
        <Editor onChange={this.editorChanged} code={this.state.markdown} />
      </Section>
    );
  }
}
