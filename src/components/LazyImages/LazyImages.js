import React, { useEffect, useState, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";

const LazyImages = () => {
  const [images, setImages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const getImages = useCallback(() => {
    axios
      .get("https://picsum.photos/v2/list", {
        params: {
          page: pageCount,
          limit: 10,
        },
      })
      .then((result) => {
        setImages((imagesList) => [...imagesList, ...result.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageCount]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const showMore = () => {
    setPageCount((currentPage) => currentPage + 1);
  };

  const renderImages = () => {
    return images.map((image) => {
      return (
        <div className="image-box" key={image.id}>
          <LazyLoadImage
            effect="blur"
            src={image.download_url}
            alt={image.author}
            height="300px"
          />
        </div>
      );
    });
  };

  return (
    <div className="main-wrapper">
      <h2>Image Gallery</h2>
      <div className="image-list">{renderImages()}</div>
      <div className="button-box">
        <button type="button" onClick={showMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default LazyImages;
