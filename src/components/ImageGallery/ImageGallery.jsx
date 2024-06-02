import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import css from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <ul className={css['gallery-list']}>
      {images.map((image) => (
        <li
          key={image.id}
          className={css['gallery-item']}
        >
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
