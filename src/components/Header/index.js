/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Box } from 'hedron';

import Brand from './Brand';
import Button from './Button';
import Navigation from './Navigation';
import Icon from '../Icon';
import Wrapper from './Wrapper';
import type { HeaderProps } from './types';

const Col = styled(Box)`
  padding: 3px;
`;

/**
 * The `Header` component is responsible for rendering the top bar
 * with the brand name and menu navigation. The background color
 * and height can be set from within the `base.js` theme file.
 * 
 * @param {HeaderProps} props
 * @returns React.node
 */
export default function Header(props: HeaderProps) {
  const buttons = [
    <Icon key='bug' name='bug' href='https://github.com/jsbros/vimd/issues'/>,
    <Icon key='github' name='github' href='https://github.com/jsbros/vimd'/>,
    <Button key='save' onClick={props.onSave}>Save</Button>,
  ];
  return (
    <Wrapper>
      <Col>
        <Brand>Vi<b>MD</b></Brand>
      </Col>
      <Col noFlex xsShift='auto'>
        <Navigation buttons={buttons}/>
      </Col>
    </Wrapper>
  );
}
