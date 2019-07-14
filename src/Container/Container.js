import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledContainer, StyledFullContainer } from './StyledComponents';

const propTypes = {
  full: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  full: false,
  className: null,
};

const Container = (props) => {
  const {
    className,
    full,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  if (full) {
    return <StyledFullContainer {...attributes} className={classes} />;
  }
  return (
    <StyledContainer {...attributes} className={classes} />
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
