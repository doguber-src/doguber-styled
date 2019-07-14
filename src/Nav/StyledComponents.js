import styled from 'styled-components';
import { Layout } from '../../constants';

export const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  @media only screen and (min-width: ${Layout.largeDevice}) {
    flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  }
`;
