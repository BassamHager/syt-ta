import { useState, useContext, useCallback, useEffect } from "react";
import { YachtGalleryContext } from "../../context/YachtContext";
/* mocked */
import MOCKED_YACHT_DATA from "../../mock/mockedYachtData.json";
import { TARGETED_CATEGORIES } from "../../mock/constants";

export const useFetchAndSortYachtGalleryData = () => {
  /* context */
  const {
    primaryPhoto,
    interiorPhotos,
    setPrimaryPhoto,
    exteriorPhotos,
    setInteriorPhotos,
    setExteriorPhotos,
    yachtGridPhotos,
    setYachtGridPhotos,
    photosCount,
    setPhotosCount,
    mappedInterior,
    mappedExterior,
  } = useContext(YachtGalleryContext);

  /* internal state */
  const [isTimeToCombine, setIsTimeToCombine] = useState(false);

  /* methods */
  const findAndSetPrimaryPhoto = useCallback(() => {
    const foundPrimaryPhoto = MOCKED_YACHT_DATA.photos.find(
      (photo) => photo.primary
    );

    setPrimaryPhoto(foundPrimaryPhoto);
  }, [setPrimaryPhoto]);

  /* helper - prevent duplications */
  const addUniqueArrayItem = (array, item) =>
    array && item && !array.includes(item) && array.push(item);

  /* check interior => bool */
  const checkIfInteriorCategory = useCallback(
    (categoryName) => TARGETED_CATEGORIES.interior.includes(categoryName),
    []
  );

  const storePhotosPerTargetedCategories = useCallback(() => {
    // loop
    MOCKED_YACHT_DATA.photos.forEach((photo) => {
      // optimize
      if (mappedInterior.length > 1 && mappedExterior.length > 1) return;

      // sort & update photosMap
      photo.categories.forEach((categoryName) =>
        checkIfInteriorCategory(categoryName)
          ? addUniqueArrayItem(mappedInterior, photo)
          : addUniqueArrayItem(mappedExterior, photo)
      );
    });

    // optimize updating interior & exterior photos
    if (mappedInterior.length > 1)
      setInteriorPhotos(mappedInterior.splice(0, 2));
    if (mappedExterior.length > 1)
      setExteriorPhotos(mappedExterior.splice(0, 2));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mappedInterior, mappedExterior]);

  useEffect(() => {
    findAndSetPrimaryPhoto();
    storePhotosPerTargetedCategories();
    setIsTimeToCombine(true);
    setPhotosCount(MOCKED_YACHT_DATA.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // combine the needed gallery data in one array
  useEffect(() => {
    const orderedPhotos = [...interiorPhotos, ...exteriorPhotos];
    isTimeToCombine && setYachtGridPhotos(orderedPhotos);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeToCombine, interiorPhotos, exteriorPhotos]);

  return {
    primaryPhoto,
    yachtGridPhotos,
    MOCKED_YACHT_DATA,
    photosCount,
  };
};
