import React from "react";
import "./styles.scss";
const ImageCard = ({ loading, src, author, caption, onClick, className }) => {
  return (
    (loading && (
      <div className="image_placeholder image_card">
        <div className="author" />
        <div className="caption" />
      </div>
    )) || (
      <figure
        className={`image_card image_card_gradient ${className}`}
        onClick={onClick}
      >
        <div
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        />
        <figcaption className="author">{author}</figcaption>
        <figcaption>{caption}</figcaption>
      </figure>
    )
  );
};

export default ImageCard;
