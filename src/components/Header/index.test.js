// import chai from 'chai'
// import chaiEnzyme from 'chai-enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Brand from './Brand';
import config from '../../config';

const theme = require(`../../styles/themes/${config.theme}`).default;


it('renders header component', () => {
  const header = renderer.create(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
  let tree = header.toJSON();
  expect(tree).toMatchSnapshot();
});
