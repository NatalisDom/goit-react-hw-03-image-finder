import { createPortal } from 'react-dom';
import { Component } from 'react';
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';

const modalRoor = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className={css.overlay}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoor
    );
  }
}

 Modal.propTypes = {
   componentDidMount: PropTypes.func,
   componentWillUnmount: PropTypes.func,
   handleKeyDown: PropTypes.bool,
   handleBackdropClick: PropTypes.func,
   children: PropTypes.element,
 };