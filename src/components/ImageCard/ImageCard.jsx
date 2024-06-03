import PropTypes from "prop-types";
import css from '../ImageCard/ImageCard.module.css'

const ImageCard = ({ image, openModal }) => {
  return (
    <div>
      <div>
        <img
          className={css["gallery-img"]}
          src={image.urls.small}
          alt={image.description}
          onClick={() => openModal(image)}
        />
        <p className={css["description-img"]}>Likes:{image.likes}</p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
    likes:PropTypes.number,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
