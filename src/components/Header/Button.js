import styled from 'styled-components';

import Button from '../Button';

/**
 * Override the `Button` component with header specific styles
 * 
 * TODO: make the underline animate to the opposite side on mouseOut
 */
export default styled(Button)`
  border: none;
  margin: 0 10px;
  padding: 0 0 2px 0;
  position: relative;
  &::before {
    background: #fff;
    bottom: 0;
    color: transparent;
    content: ' ';
    height: 2px;
    position: absolute;
    transition: all .2s ease-in-out;
    width: 0;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
