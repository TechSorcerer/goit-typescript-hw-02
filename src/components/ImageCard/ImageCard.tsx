import { Image } from "../../types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <li onClick={() => onClick(image)}>
      <div className={styles.imageCont}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
