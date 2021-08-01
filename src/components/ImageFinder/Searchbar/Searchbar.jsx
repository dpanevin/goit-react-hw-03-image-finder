import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Введите поисковый запрос.');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Поиск изображений и фото"
            onChange={this.onChange}
            value={this.state.query}
          />
        </form>
        <Toaster />
      </header>
    );
  }
}
