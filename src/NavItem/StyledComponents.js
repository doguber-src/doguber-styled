import styled from 'styled-components';
import { Colors, Layout } from '../../constants';

export const StyledNavItem = styled.li`
  color: ${Colors.secondaryColor};
  background-color: transparent;
  @media(min-width: ${Layout.largeDevice}) {
    align-self: center;
  }
`;
