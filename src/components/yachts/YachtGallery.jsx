import React, { useCallback, useEffect, useState } from "react";
import "./YachtGallery.scss";
// mocked
import MOCKED_YACHT_DATA from "../../mock/mockedYachtData.json";

const targetedCategories = {
  interior: [
    "saloon",
    "jacuzzi_and_pool",
    "dining",
    "stateroom",
    "fitness_&_wellnes",
  ],
  exterior: ["anchored", "profile", "at_shipyard", "exterior_detail"],
};

const YachtGallery = () => {
  // const [primary, setPrimary] = useState({});
  // const [yachtGridPhotos, setYachtGridPhotos] = useState([]);
  const [interiorPhotos, setInteriorPhotos] = useState([]);
  const photosMap = new Map();
  photosMap.set("interior", []);
  photosMap.set("exterior", []);
  const interior = photosMap.get("interior");
  const exterior = photosMap.get("exterior");

  // const findAndSetPrimaryPhoto = () => {
  //   const foundPrimaryPhoto = MOCKED_YACHT_DATA.photos.find(
  //     (photo) => photo.primary
  //   );

  //   setPrimary(foundPrimaryPhoto);
  // };

  const sortAndSetSecondaryPhotos = useCallback(() => {
    MOCKED_YACHT_DATA.photos.forEach((photo) => {
      // exclude primary then sort
      if (!photo.primary)
        photo.categories.forEach((category) => {
          identifyIsInterior(category)
            ? addPhotoToCorrespondentCategory(interior, photo)
            : addPhotoToCorrespondentCategory(exterior, photo);
        });
    });
  }, [interior, exterior]);

  const identifyIsInterior = (categoryName) =>
    targetedCategories.interior.includes(categoryName);

  const addPhotoToCorrespondentCategory = (array, photo) => array.push(photo);
  // const findAndSecondaryPhoto = useCallback(() => {
  //   const foundPhotos = MOCKED_YACHT_DATA.photos.filter(
  //     (photo) => !photo.primary
  //   );
  // }, [MOCKED_YACHT_DATA]);

  useEffect(() => {
    // findAndSetPrimaryPhoto();
    sortAndSetSecondaryPhotos();
    // console.log("one...", fetchPhoto());
    // calcRemainingPhotosCount();
  }, [sortAndSetSecondaryPhotos]);

  useEffect(() => {
    setInteriorPhotos(interior);
  }, []);

  return (
    <div className="yacht-pictures-grid">
      {interiorPhotos && interiorPhotos.length ? (
        interiorPhotos.map((photoObj, ind) => (
          <div key={ind}>
            <img
              src={photoObj?.url?.medium || photoObj?.url?.large}
              alt={photoObj.name}
            />
          </div>
        ))
      ) : (
        <h2>Waiting...</h2>
      )}
      {/* {interior && interior.length > 0 ? (
        interior.map((photoObj, ind) => (
          <div key={ind}>
            <img
              src={photoObj?.url?.medium || photoObj?.url?.large}
              alt={photoObj.name}
            />
          </div>
        ))
      ) : (
        <h2>waiting...</h2>
      )} */}
    </div>
  );
};

export default YachtGallery;
