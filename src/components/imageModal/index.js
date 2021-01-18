import React from "react";
import { CloseIcon } from "../icons";
import "./styles.scss";
const ImageModal = ({ loading, src, alt, author, caption, onClick }) => {
  return (
    <div className="backdrop" onClick={onClick}>
      {(loading && (
        <div className="image_placeholder image_card">
          <div className="author" />
          <div className="caption" />
        </div>
      )) || (
        <div>
          <button onClick={onClick}>
            <CloseIcon fill="white" />
          </button>
          <figure className="modal_image">
            <div
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            />
            <section className="captions">
              <figcaption className="author">{author}</figcaption>
              <figcaption className="caption">{caption}</figcaption>
            </section>
          </figure>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
