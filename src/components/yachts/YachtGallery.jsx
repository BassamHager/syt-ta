import React, { useEffect } from "react";
import "./YachtGallery.scss";
// utils
import { useFetchAndSortYachtGalleryData } from "./yachtGalleryUtils";
// mocked
import MOCKED_YACHT_DATA from "../../mock/mockedYachtData.json";

const YachtGallery = () => {
  // utils
  const {
    primaryPhoto,
    // interiorPhotos,
    // exteriorPhotos,
    yachtGridPhotos,
  } = useFetchAndSortYachtGalleryData();

  useEffect(() => {
    // calcRemainingPhotosCount();
  }, []);

  return (
    <div className="yacht-pictures-grid">
      {/* loading... */}
      {/* Error Message... */}

      {
        yachtGridPhotos && yachtGridPhotos.length > 0
          ? yachtGridPhotos.map((photoObj, ind) => {
              // const categories = photoObj?.categories ?? ["yacht"];

              return (
                <div key={ind}>
                  <img src={photoObj?.url?.medium} alt="hi" />
                </div>
              );
            })
          : null /* spinner */
      }

      <img src={primaryPhoto?.url?.medium} alt="hi" />
    </div>
  );
};

export default YachtGallery;
