import Modal from "react-modal";
import PropTypes from "prop-types";
import css from "../ImageModal/ImageModal.module.css";

const ImageModal = ({ isOpen, image, onRequestClose }) => {
  return (
    <Modal
      className={css["modal"]}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button className={css["modal-button"]} onClick={onRequestClose}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.description} />
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
  }).isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ImageModal;
