import React, { useEffect } from "react";
import YachtPhoto from "../photos/YachtPhoto";
import "./YachtGallery.scss";
// utils
import { useFetchAndSortYachtGalleryData } from "./yachtGalleryUtils";

const YachtGallery = () => {
  // utils

  const {
    fetchYachtData,
    primaryPhoto,
    yachtGridPhotos,
    photosCount,
    displayLightbox,
    setDisplayLightbox,
  } = useFetchAndSortYachtGalleryData();

  // methods
  useEffect(() => fetchYachtData()); /* initial yacht data fetch */

  return (
    <>
      {displayLightbox ? (
        <div onClick={() => setDisplayLightbox(false)} className="lightbox">
          hello
        </div>
      ) : (
        <div className="yacht-all-grid">
          <YachtPhoto photo={primaryPhoto} primary />

          <div className="yacht-secondary-grid">
            {yachtGridPhotos && yachtGridPhotos.length ? (
              yachtGridPhotos.map((photo, ind) => {
                let count = ind === 3 ? photosCount : null;

                return <YachtPhoto photo={photo} key={ind} last={count} />;
              })
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default YachtGallery;
