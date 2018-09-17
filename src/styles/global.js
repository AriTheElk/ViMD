import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter UI', sans-serif;
    font-weight: 300;
    background: ${props => props.theme.header_background};
  }

  /* Prevent flicker when loading ace theme */
  .ace_scroller {
    background: ${props => props.theme.header_background} !important;
  }
`;
