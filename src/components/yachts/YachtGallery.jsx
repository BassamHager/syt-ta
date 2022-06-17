import React from "react";
import YachtPhoto from "../photos/YachtPhoto";
import "./YachtGallery.scss";
// utils
import { useFetchAndSortYachtGalleryData } from "./yachtGalleryUtils";

const YachtGallery = () => {
  // utils
  const { primaryPhoto, yachtGridPhotos } = useFetchAndSortYachtGalleryData();

  return (
    <div className="yacht-all-grid">
      <YachtPhoto photo={primaryPhoto} primary />
      <div className="yacht-secondary-grid">
        {yachtGridPhotos && yachtGridPhotos.length ? (
          yachtGridPhotos.map((photo, ind) => (
            <YachtPhoto photo={photo} key={ind} />
          ))
        ) : (
          <h2>Waiting...</h2>
        )}
      </div>
    </div>
  );
};

export default YachtGallery;
