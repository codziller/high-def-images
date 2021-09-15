import React from "react";
import { CloseIcon, Download } from "../icons";
import "./styles.scss";
const ImageModal = ({ loading, src, author, caption, onClick }) => {
  return (
    <>
      <div className="backdrop" onClick={onClick}></div>
      {(loading && (
        <div className="image_placeholder image_card">
          <div className="author" />
          <div className="caption" />
        </div>
      )) || (
        <div className="modal-body">
          <button onClick={onClick}>
            <CloseIcon fill="brown" />
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
              <div>
                <figcaption className="author">{author}</figcaption>
                <figcaption className="caption">{caption}</figcaption>
              </div>
              <a
                href={src}
                download={caption + ".jpg"}
                target="_blank"
                rel="noreferrer"
              >
                <Download fill="gold" />
              </a>
            </section>
          </figure>
        </div>
      )}
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">
          dmitri13
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default ImageModal;
