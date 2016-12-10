import Dropzone from 'react-dropzone';
import styled from 'styled-components';

export default styled(Dropzone)`
  opacity: 1;
  &.active {
    opacity: .6;
  }
`;
