import { keyframes } from 'styled-components';

/**
 * CSS animation for fading in without moving
 */
export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

/**
 * CSS animation for fading in from the top
 */
export const fadeInTop = keyframes`
0% {
  opacity: 0;
  margin-top: -25px;
}
100% {
  opacity: 1;
  margin-top: 0;
}
`;

/**
 * CSS animation for fading in from the bottom
 */
export const fadeInBottom = keyframes`
0% {
  opacity: 0;
  margin-bottom: -25px;
}
100% {
  opacity: 1;
  margin-bottom: 0;
}
`;

/**
 * CSS animation for fading in from the left
 */
export const fadeInLeft = keyframes`
0% {
  opacity: 0;
  margin-left: -25px;
}
100% {
  opacity: 1;
  margin-left: 0;
}
`;

/**
 * CSS animation for fading in from the right
 */
export const fadeInRight = keyframes`
0% {
  opacity: 0;
  margin-right: -25px;
}
100% {
  opacity: 1;
  margin-right: 0;
}
`;
