import styled from "styled-components";
import Grid from "hedron";
import { fadeIn } from "../../styles/animations";

export default styled(Grid.Box)`
  opacity: 0;
  animation: ${fadeIn} 2s normal forwards;
  animation-delay: 0.75s;
  animation-timing-function: ease-out;
  max-height: calc(100vh - ${props => props.theme.header_height});
  overflow: auto;
  word-wrap: break-word;
  padding: 5px 25px;
`;
