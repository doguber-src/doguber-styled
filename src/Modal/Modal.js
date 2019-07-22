import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledModal,
  StyledContent,
} from './StyledComponents';

const propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  onClose: false,
  show: false,
  children: null,
};

class Modal extends Component {
  render() {
    const {
      onClose,
      show,
      children,
      ...attributes
    } = this.props;

    if (!show) {
      return null;
    }
    return (
      <StyledModal {...attributes}>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledModal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
