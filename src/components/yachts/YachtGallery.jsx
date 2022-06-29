import React, { useEffect } from "react";
import YachtPhoto from "../photos/YachtPhoto";
import "./YachtGallery.scss";
// utils
import { useFetchAndSortYachtGalleryData } from "./yachtGalleryUtils";

const YachtGallery = () => {
  // utils

  const {
    fetchYachtData,
    allYachtPhotos,
    yachtGridPhotos,
    photosCount,
    displayLightbox,
    setDisplayLightbox,
    curDisplayedIndex,
  } = useFetchAndSortYachtGalleryData();

  // methods
  useEffect(() => fetchYachtData()); /* initial yacht data fetch */

  return (
    <>
      {displayLightbox ? (
        <div onClick={() => setDisplayLightbox(false)} className="lightbox">
          <YachtPhoto photo={allYachtPhotos[curDisplayedIndex]} />
        </div>
      ) : (
        <div className="yacht-all-grid">
          <YachtPhoto photo={allYachtPhotos[0]} primary ind={0} />

          <div className="yacht-secondary-grid">
            {yachtGridPhotos && yachtGridPhotos.length ? (
              yachtGridPhotos.map((photo, ind) => {
                if (ind === 0) return null;

                let count = ind === 4 ? photosCount : null;

                return (
                  <YachtPhoto photo={photo} key={ind} last={count} ind={ind} />
                );
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
