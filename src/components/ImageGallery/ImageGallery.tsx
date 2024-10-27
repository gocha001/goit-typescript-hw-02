import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageGalleryProps {
  images: Image[];
  openModal: (item: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((item) => (
        <li key={item.id} onClick={() => openModal(item)}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
