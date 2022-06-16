import React from "react";
import "./YachtGallery.scss";
// utils
import { useFetchAndSortYachtGalleryData } from "./yachtGalleryUtils";

const YachtGallery = () => {
  // utils
  const { yachtGridPhotos } = useFetchAndSortYachtGalleryData();

  return (
    <div className="yacht-pictures-grid">
      {yachtGridPhotos && yachtGridPhotos.length ? (
        yachtGridPhotos.map((photo, ind) => (
          <img key={ind} src={photo?.url?.medium} alt="hi" />
        ))
      ) : (
        <h2>Waiting...</h2>
      )}
    </div>
  );
};

export default YachtGallery;
