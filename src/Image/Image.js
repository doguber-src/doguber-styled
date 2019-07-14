import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledImage } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const Image = (props) => {
  const {
    className,
    ...attributes
  } = props;

  const classes = classNames(
    className
  );

  return (
    <StyledImage {...attributes} className={classes} />
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
