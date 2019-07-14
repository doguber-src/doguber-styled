import styled from 'styled-components';
import { Layout } from '../../constants';

const NavbarCollapseMobile = {
  display: props => (props.isOpen ? 'block' : 'none'),
};

export const StyledCollapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  ${NavbarCollapseMobile}
  @media only screen and (min-width: ${Layout.largeDevice}) {
    display: flex;
  }
`;
