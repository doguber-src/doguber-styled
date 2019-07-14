import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledNavbar } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const Navbar = (props) => {
  const {
    className,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <StyledNavbar {...attributes} className={classes} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
