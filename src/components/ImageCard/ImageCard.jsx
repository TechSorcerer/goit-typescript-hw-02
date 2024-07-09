import styles from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ image, onClick }) => {
  return (
    <li onClick={() => onClick(image)}>
      <div className={styles.imageCont}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
