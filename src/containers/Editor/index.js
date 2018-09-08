import AceEditor from "react-ace";
import base64 from "base-64";
import React, { PureComponent } from "react";
import styled, { withTheme } from "styled-components";
import Grid from "hedron";

// import our site's theme
import Dropzone from "./Dropzone";
import Preview from "../../components/Preview";
import { processMarkdown } from "../../utils";

// import the required dependencies for our [br]ace editor.
import "brace/mode/markdown";
import "brace/keybinding/vim";

/**
 * This is the container for the dual pane markdown editor
 *
 * @class Editor
 * @extends {PureComponent}
 */
class Editor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      code: null,
    };
  }
  componentWillMount() {
    // bind(this) allows `this` to be used from within the onDrop() function
    this.onDrop = this.onDrop.bind(this);
  }

  setTheme = theme => {
    require(`brace/theme/${theme}`);
  };

  /**
   * This gets triggered the user drops a file in the window.
   *
   * @param {[]} files
   *
   * @memberOf Editor
   */
  onDrop(files) {
    const blob = files[0];
    const reader = new FileReader();

    reader.addEventListener("loadend", e => {
      this.setState({ code: e.target.result });
    });
    reader.readAsText(blob);
  }

  render() {
    let options = {
      fontFamily: "Monaco, monospace",
      showLineNumbers: false,
      showGutter: false,
    };
    return (
      <Dropzone onDrop={this.onDrop} disableClick activeClassName="active">
        <Grid.Bounds fill>
          <Grid.Box fluid width="50%">
            {window && (
              <AceEditor
                mode="markdown"
                theme={this.props.theme.editor_theme}
                onChange={this.props.onChange}
                value={this.state.code || this.props.code}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                keyboardHandler="vim"
                width="100%"
                height={`calc(100vh - ${this.props.theme.header_height})`}
                fontSize={18}
                setOptions={options}
                wrapEnabled
              />
            )}
          </Grid.Box>
          <Preview
            width="50%"
            dangerouslySetInnerHTML={{
              __html: processMarkdown(this.props.code),
            }}
          />
        </Grid.Bounds>
      </Dropzone>
    );
  }
}

export default withTheme(Editor);
