import styled, { keyframes } from "styled-components";

import ButtonGroup from "../ButtonGroup";
import { fadeInTop } from "../../styles/animations";

/**
 * Add a fadeInTop animation to our navigation links
 */
export default styled(ButtonGroup)`
  animation: ${fadeInTop} 0.6s normal forwards;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  opacity: 0;
`;
