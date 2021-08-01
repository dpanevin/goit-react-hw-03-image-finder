import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    imageUrl: '',
    largeImageUrl: '',
    tags: '',
  };

  componentDidMount() {
    const { imageUrl, largeImageUrl, tags } = this.props;
    this.setState({ imageUrl, largeImageUrl, tags });
  }

  onClick = () => {
    const { openModal } = this.props;
    const { largeImageUrl, tags } = this.state;

    openModal(largeImageUrl, tags);
  };

  render() {
    const { imageUrl, tags } = this.state;

    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.onClick}
          src={imageUrl}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
