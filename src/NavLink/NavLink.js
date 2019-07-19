import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledNavLink } from './StyledComponents';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  href: PropTypes.any,
};

const defaultProps = {
  className: null,
  disabled: false,
  innerRef: null,
  onClick: null,
  href: null,
};

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      className,
      disabled,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
    );

    return (
      <StyledNavLink
        {...attributes}
        ref={innerRef}
        onClick={this.onClick}
        className={classes}
        disabled={disabled}
      />
    );
  }
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
