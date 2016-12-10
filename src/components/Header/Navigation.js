import styled, { keyframes } from 'styled-components';

import ButtonGroup from '../ButtonGroup';
import { fadeInTop } from '../../styles/animations';

/**
 * Add a fadeInTop animation to our navigation links
 */
export default styled(ButtonGroup)`
  animation: ${fadeInTop} .6s normal forwards;
  animation-timing-function: ease-out;
  animation-delay: 2s;
  opacity: 0;
`;
