import styled from "styled-components";
import Grid from "hedron";
import { fadeIn } from "../../styles/animations";

export default styled(Grid.Box)`
  animation-delay: 0.25s;
  animation-timing-function: ease-out;
  animation: ${fadeIn} 2s normal forwards;
  max-height: calc(100vh - ${props => props.theme.header.height});
  opacity: 0;
  overflow: auto;
  word-wrap: break-word;
  padding: 5px 25px;
`;
