import React from "react";

const ImageItem = ({ image }) => {
  return (
    <div className="image-item">
      <img
        src={image.url}
        alt={image.alt || "Imagem"}
        className="rounded-lg"
      />
      <p>{image.caption}</p>
    </div>
  );
};

export default ImageItem;
