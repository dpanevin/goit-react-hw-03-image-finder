import { Component } from 'react';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, onMoreBtnClick, openModal } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                imageUrl={webformatURL}
                largeImageUrl={largeImageURL}
                tags={tags}
                openModal={openModal}
              />
            );
          })}
        </ul>
        {images.length !== 0 && <LoadMoreButton onClick={onMoreBtnClick} />}
      </>
    );
  }
}
