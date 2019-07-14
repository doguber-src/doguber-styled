import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledRow } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const Row = (props) => {
  const {
    className,
    noGutters,
    ...attributes
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <StyledRow {...attributes} className={classes} />
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
