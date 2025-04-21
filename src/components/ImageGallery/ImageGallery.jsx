import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ sendImages, handleClick }) => {
  return (
    <ul className={s.imageGallery}>
      {sendImages.map((item) => (
        <li key={item.id}>
          <ImageCard sendImg={item} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
