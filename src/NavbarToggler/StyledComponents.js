import styled from 'styled-components';
import { Layout } from '../../constants';

export const StyledNavbarToggler = styled.button`
  display: block;
  padding: 0.25rem 0.75rem;
  font-size: ${Layout.defaultFontSize};
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  &:hover, &:focus {
    text-decoration: none;
  }
  @media only screen and (min-width: ${Layout.largeDevice}) {
    display: none;
  }
`;

export const StyledNavbarTogglerIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-size: 100% 100%;
`;
