import css from "./ImageCard.module.css";
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageCardProps {
  item: Image;
}

const ImageCard: FC<ImageCardProps> = ({ item }) => {
  return (
    <div className={css.card}>
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
};

export default ImageCard;
