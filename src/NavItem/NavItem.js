import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledNavItem } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const NavItem = (props) => {
  const {
    className,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <StyledNavItem {...attributes} className={classes} />
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
