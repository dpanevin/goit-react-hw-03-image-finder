import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {
    url: null,
    tags: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  OverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, tags } = this.props.data;

    return createPortal(
      <div className="Overlay" onClick={this.OverlayClick}>
        <div className="Modal">
          <img src={url} alt={tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
