import React, { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar";
import ImageCard from "../../components/imageCard";
import ImageModal from "../../components/imageModal";
import Unsplash, { toJson } from "unsplash-js";
import Sticky from "react-sticky-el";
import Logo from "../../components/logo";

import "./styles.scss";
const LandingPage = () => {
  const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  });

  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
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
      .photos("African", 1, 24, "latest")
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
      .photos(searchValue, 1, 24)
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
        window.scrollTo({
          top: 0,
        });
      });
  };

  const toggleSearchStatus = () => {
    setStatusDisplay(statusDisplay === "expanded" ? "collapsed" : "expanded");
    setSearchDisplay(searchDisplay === "expanded" ? "collapsed" : "expanded");
  };
  return (
    <div className="container">
      <header>
        <Logo />

        <Sticky stickyClassName={"sticky-searchbar"}>
          <SearchBar
            className={searchDisplay}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            arrowClass={(searchValue && "slide_out") || "slide_in"}
            onSubmit={(e) => searchPhotos(e)}
            disabled={!searchValue || loading}
            statusDisplay={statusDisplay}
            searchText={searchText}
            searchValue={searchValue}
            toggleSearchStatus={() => toggleSearchStatus()}
          />
        </Sticky>
      </header>

      <div className="body_section">
        {images &&
          images.map((image, i) => {
            return (
              <ImageCard
                loading={loading}
                key={image?.id || "" + i + i}
                src={image?.urls?.small}
                alt={image?.alt_description}
                author={image?.user?.name}
                caption={image?.user?.location || "City, Country"}
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

      {showModal ? (
        <ImageModal
          src={currentImage?.urls?.small}
          alt={currentImage?.alt_description}
          author={currentImage?.user?.name}
          caption={currentImage?.user?.location || "City, Country"}
          onClick={() => {
            setShowModal(false);
            document.body.style.overflowY = "unset";
          }}
        />
      ) : null}
    </div>
  );
};

export default LandingPage;
