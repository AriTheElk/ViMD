import styled from 'styled-components';
import { Row } from 'hedron';

/**
 * Define styles for the header wrapper
 */
export default styled(Row)`
  background: ${(props) => props.theme.header.background};
  line-height: 34px;
  height: ${(props) => props.theme.header.height};
  max-height: ${(props) => props.theme.header.height};
`;
