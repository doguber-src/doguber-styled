import styled from 'styled-components';
import { Colors } from '../../constants';

const disabled = {
  color: Colors.disabledColor,
  pointerEvents: 'none',
  cursor: 'default',
};

export const StyledNavLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  ${props => (props.disabled && disabled)};
  &:hover, &:focus {
    text-decoration: none;
  }
`;
