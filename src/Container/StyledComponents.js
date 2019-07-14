import styled from 'styled-components';
import { Layout } from '../../constants';

export const StyledContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: ${Layout.smallDevice}) {
    width: 80%;
  }
  @media only screen and (min-width: ${Layout.largeDevice}) {
    width: 75%;
    max-width: 60rem;
  }
`;

export const StyledFullContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
