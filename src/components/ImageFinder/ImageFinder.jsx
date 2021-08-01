import { Component } from 'react';
import Loader from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ImagesApi from 'utils/ImagesApi';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

const imagesApi = new ImagesApi();

export class ImageFinder extends Component {
  state = {
    images: [],
    status: 'idle',
    modalData: null,
  };

  fetchImagesApi = async () => {
    this.setState({ status: 'pending' });

    const response = await imagesApi.fetchImages();
    this.setState({ status: 'resloved' });
    return response.hits;
  };

  onSubmit = async query => {
    imagesApi.resetPage();
    imagesApi.query = query;

    const images = await this.fetchImagesApi();
    this.setState({ images });
  };

  onMoreBtnClick = async () => {
    imagesApi.incrementPage();

    const images = await this.fetchImagesApi();
    this.setState(prevState => ({ images: [...prevState.images, ...images] }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openModal = (url, tags) => {
    this.setState({ modalData: { url, tags } });
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { images, status, modalData } = this.state;
    console.log(status);

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          images={images}
          onMoreBtnClick={this.onMoreBtnClick}
          openModal={this.openModal}
        />
        {status === 'pending' && (
          <Loader
            className="Loader"
            type="Oval"
            color="rgb(0, 224, 217)"
            height={100}
            width={100}
          />
        )}

        {modalData && <Modal data={modalData} closeModal={this.closeModal} />}
      </>
    );

    // if (status === 'idle') {
    //     return (
    //         <>
    //     <Searchbar onSubmit={this.onSubmit} />
    //     <Loader
    //         type="TailSpin"
    //         color="#00BFFF"
    //         height={100}
    //         width={100}
    //     />
    //             </>);

    // };

    // if (status === 'resloved') {
    //     return (
    //         <>
    //             <Searchbar onSubmit={this.onSubmit} />

    //             <ImageGallery images={images} />
    //             { images.length !== 0 && <LoadMoreButton onClick={this.onMoreBtnClick} />}
    //         </>
    //     )
    // };
  }
}
