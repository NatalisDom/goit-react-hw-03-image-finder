import css from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, toggleModal, showModal }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem
        images={images}
        toggleModal={toggleModal}
        showModal={showModal}
      />
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
