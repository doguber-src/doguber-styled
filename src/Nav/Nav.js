import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledNav } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

const defaultProps = {
  className: null,
  vertical: false,
};

const Nav = (props) => {
  const {
    className,
    vertical,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <StyledNav {...attributes} className={classes} vertical={vertical} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
