import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Preview from '../Preview';
import config from '../../config';

const theme = require(`../../styles/themes/${config.theme}`).default;


it('renders empty preview component', () => {
  const preview = renderer.create(
    <ThemeProvider theme={theme}>
      <Preview/>
    </ThemeProvider>
  );
  let tree = preview.toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders preview component with content', () => {
  const text = 'hello world!';
  const preview = renderer.create(
    <ThemeProvider theme={theme}>
      <Preview markdown={text}/>
    </ThemeProvider>
  );
  let tree = preview.toJSON();
  expect(tree).toMatchSnapshot();
});
