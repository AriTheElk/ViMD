import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import styled, { ThemeProvider } from 'styled-components';

import Wrapper from './Wrapper';
import config from '../../config';

const theme = require(`../../styles/themes/${config.theme}`).default;


it('renders wrapper component', () => {
  const wrapper = renderer.create(
    <ThemeProvider theme={theme}>
      <Wrapper>My content</Wrapper>
    </ThemeProvider>
  );
  let tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});
