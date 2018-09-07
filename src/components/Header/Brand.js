import styled, { keyframes } from "styled-components";

import { fadeInLeft } from "../../styles/animations";

/**
 * Define styles for the brand name
 */
export default styled.h1`
  animation: ${fadeInLeft} 0.5s normal forwards;
  animation-delay: 0.5s;
  animation-timing-function: ease-out;
  color: #fff;
  font-size: 1.75em;
  font-style: italic;
  font-weight: 100;
  margin: 0 0 0 0px;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  b {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 100;
  }
`;
