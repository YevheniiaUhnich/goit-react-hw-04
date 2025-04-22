import s from "./ImageCard.module.css";
import React from "react";

const ImageCard = ({ handleClick, sendImg }) => {
  return (
    <div className={s.imageCard}>
      <img
        onClick={() => handleClick(sendImg)}
        src={sendImg.urls.small}
        alt={sendImg.alt_description || "Image"}
        width={280}
        height={280}
      />
    </div>
  );
};

export default ImageCard;
