import styled from 'styled-components';
import { Layout } from '../../constants';

export const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media only screen and (min-width: ${Layout.largeDevice}) {
    flex-flow: row nowrap;
  }
`;
