import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// TODO: create real tests for the `Editor` container
// I cannot currently figure out how to properly test
// the editor with jest. The brace editor throws an error
// due to `window` not being defined.

// import Editor from '../Editor';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<Editor code='hello world' />, div);

  // const header = renderer.create(<Editor />);
  // let tree = header.toJSON();
  // expect(tree).toMatchSnapshot();
});
