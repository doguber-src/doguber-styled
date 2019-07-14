import styled from 'styled-components';
import { Layout } from '../../constants';

export const StyledNavbarBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: ${Layout.defaultFontSize};
  text-decoration: none;
  line-height: inherit;
  white-space: nowrap;
  &:hover, &:focus {
    text-decoration: none;
  }
`;
