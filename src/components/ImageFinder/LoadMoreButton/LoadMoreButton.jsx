import { Component } from 'react';

export class LoadMoreButton extends Component {
  render() {
    return (
      <button type="button" className="Button" onClick={this.props.onClick}>
        Загрузить ещё
      </button>
    );
  }
}
