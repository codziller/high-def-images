import React, { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar";
import ImageCard from "../../components/imageCard";
import ImageModal from "../../components/imageModal";
import Unsplash, { toJson } from "unsplash-js";
import { CloseIcon } from "../../components/icons";
import "./styles.scss";
const LandingPage = () => {
  const unsplash = new Unsplash({
    accessKey: "dSKsLKPTUg-IAsppiQ3Rvu_hqggbVBZqISzIoZXNW48",
  });

  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [searchDisplay, setSearchDisplay] = useState("expanded");
  const [statusDisplay, setStatusDisplay] = useState("collapsed");

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async (e) => {
    setLoading(true);
    await unsplash.search
      .photos("African", 1, 8, "latest")
      .then(toJson)
      .then((json) => {
        setImages(json.results);
      })
      .catch((error) => {
        setSearchText("Unable to Get Images");
        alert(error);
      })
      .finally(() => setLoading(false));
  };
  const searchPhotos = async (e) => {
    e.preventDefault();
    setSearchText("Searching for");
    setStatusDisplay("expanded");
    setSearchDisplay("collapsed");
    setLoading(true);
    await unsplash.search
      .photos(searchValue, 1, 8)
      .then(toJson)
      .then((json) => {
        setImages(json.results);
        if (json.results.length === 0) {
          setSearchText("No Results Found for");
        } else {
          setSearchText("Search Results for");
        }
      })
      .catch((error) => {
        setSearchText("Unable to Complete Search for");
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleSearchStatus = () => {
    setStatusDisplay(statusDisplay === "expanded" ? "collapsed" : "expanded");
    setSearchDisplay(searchDisplay === "expanded" ? "collapsed" : "expanded");
  };
  return (
    <div className="container">
      <header>
        <SearchBar
          className={searchDisplay}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          arrowClass={(searchValue && "slide_out") || "slide_in"}
          onSubmit={(e) => searchPhotos(e)}
          disabled={!searchValue || loading}
        />
        <h1 className={`search_status ${statusDisplay}`}>
          {searchText} <span className="faded">{` "${searchValue}"`}</span>{" "}
          <span onClick={() => toggleSearchStatus()}>
            <CloseIcon fill="black" />
          </span>
        </h1>
      </header>

      <div className="body_section">
        {images &&
          images.map((image, i) => {
            return (
              <ImageCard
                loading={loading}
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                author={image.user.name}
                caption={image.user.location || "City, Country"}
                className={`image_card${i}`}
                onClick={async () => {
                  setCurrentImage(image);

                  setShowModal(true);
                  document.body.style.overflowY = "hidden";
                }}
              />
            );
          })}
      </div>

      {showModal && (
        <ImageModal
          src={currentImage.urls.full}
          alt={currentImage.alt_description}
          author={currentImage.user.name}
          caption={currentImage.user.location || "City, Country"}
          onClick={() => {
            setShowModal(false);
            document.body.style.overflowY = "unset";
          }}
        />
      )}
    </div>
  );
};

export default LandingPage;
