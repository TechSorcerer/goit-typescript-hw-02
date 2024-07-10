import styles from "./ImageModal.module.css";
import Modal from "react-modal";
import { useEffect } from "react";
import { Image } from "../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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
        {user?.name && <p>Photo by {user.name}</p>}
        <p>{likes} likes</p>
        {alt_description && <p>{alt_description}</p>}
      </div>
    </Modal>
  );
};

export default ImageModal;
