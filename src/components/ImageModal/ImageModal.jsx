import styles from "./ImageModal.module.css";
import Modal from "react-modal";
import { useEffect } from "react";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <button onClick={onClose} className={styles.closeModalBtn}>
        X
      </button>
      <img
        src={urls.regular}
        alt={alt_description}
        className={styles.modalImage}
      />
      <div className={styles.modalInfo}>
        <p>Photo by {user.name}</p>
        <p>{likes} likes</p>
        {alt_description && <p>{alt_description}</p>}
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
