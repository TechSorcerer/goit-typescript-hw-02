import React from "react";
import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
