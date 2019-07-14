import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledNavbarToggler, StyledNavbarTogglerIcon } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  className: null,
  children: null,
};

const NavbarToggler = (props) => {
  const {
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <StyledNavbarToggler {...attributes} className={classes}>
      {children || <StyledNavbarTogglerIcon />}
    </StyledNavbarToggler>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
