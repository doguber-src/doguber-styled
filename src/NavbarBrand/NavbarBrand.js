import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledNavbarBrand } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const NavbarBrand = (props) => {
  const {
    className,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <StyledNavbarBrand {...attributes} className={classes} />
  );
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
