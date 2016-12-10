/* @flow */
import AceEditor from 'react-ace';
import base64 from 'base-64';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';

// import our site's theme
import Dropzone from './Dropzone';
import Preview from '../../components/Preview';
import config from '../../config';
import { processMarkdown, downloadMarkdown } from '../../utils';

const theme = require(`../../styles/themes/${config.theme}`).default;

/**
 * This is the container for the dual pane markdown editor
 *
 * @class Editor
 * @extends {PureComponent}
 */
export default class Editor extends PureComponent {
  componentWillMount() {
    // bind(this) allows `this` to be used from within the onDrop() function
    this.onDrop = this.onDrop.bind(this);
  }
  // define our component's flow types
  onDrop: () => {};
  props: {
    code: string,
    onChange: (string) => {},
  };

  /**
   * This gets triggered the user drops a file in the window.
   *
   * @param {[]} files
   * 
   * @memberOf Editor
   */
  onDrop(files: []): void {
    const blob = files[0];
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      this.setState({ code: e.target.result });
    });
    reader.readAsText(blob);
  }

  render() {
    let options = {
      fontFamily: 'Monaco, monospace',
      showLineNumbers: false,
      showGutter: false,
    };
    return (
      <Dropzone onDrop={this.onDrop} disableClick activeClassName='active'>
        <Row>
          <Column fluid xs={6}>
            <AceEditor
              mode='markdown'
              theme={theme.editor.theme}
              onChange={this.props.onChange}
              value={this.props.code}
              name='editor'
              editorProps={{ $blockScrolling: true }}
              keyboardHandler='vim'
              width='100%'
              height={`calc(100vh - ${theme.header.height})`}
              fontSize={18}
              setOptions={options}
              wrapEnabled
            />
          </Column>
          <Preview xs={6} dangerouslySetInnerHTML={{ __html: processMarkdown(this.props.code) }} />
        </Row>
      </Dropzone>
    );
  }
}
