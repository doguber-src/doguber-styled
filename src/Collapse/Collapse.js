import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { StyledCollapse } from './StyledComponents';

const propTypes = {
  ...Transition,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

const defaultProps = {
  ...Transition.defaultProps,
  isOpen: false,
  children: null,
  className: null,
  navbar: false,
  innerRef: null,
};

class Collapse extends Component {
  render() {
    const {
      isOpen,
      className,
      navbar,
      children,
      innerRef,
      ...attributes
    } = this.props;

    return (
      <Transition
        {...attributes}
        in={isOpen}
      >
        {() => {
          const classes = classNames(
            className,
            navbar
          );
          return (
            <StyledCollapse
              {...attributes}
              className={classes}
              isOpen={isOpen}
              navbar
              ref={this.props.innerRef}
            >
              {children}
            </StyledCollapse>
          );
        }}
      </Transition>
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
