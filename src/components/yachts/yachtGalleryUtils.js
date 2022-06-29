import { useState, useContext, useCallback, useEffect } from "react";
// context
import { YachtGalleryContext } from "../../context/YachtContext";
import { LightboxContext } from "../../context/LightboxContext";
// mocked
import MOCKED_YACHT_DATA from "../../mock/mockedYachtData.json";
import { TARGETED_CATEGORIES } from "../../mock/constants";

export const useFetchAndSortYachtGalleryData = () => {
  // context
  const {
    setAllYachtPhotos,
    allYachtPhotos,
    interiorPhotos,
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

  const { displayLightbox, setDisplayLightbox, curDisplayedIndex } =
    useContext(LightboxContext);

  // internal state
  const [isTimeToCombine, setIsTimeToCombine] = useState(false);

  // methods
  const fetchYachtData = useCallback(() => {
    setAllYachtPhotos(MOCKED_YACHT_DATA.photos);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  // update allYachtPhotos for logical lightbox behaviour
  const reorderAllYachtPhotos = (arr, desiredIndex) => {
    const modifiedCopy = allYachtPhotos;
    arr?.forEach((el) => {
      const foundIndex = modifiedCopy.findIndex((photo) => photo === el);
      if (foundIndex) {
        modifiedCopy.splice(foundIndex, 1); /* remove element */
        modifiedCopy.splice(desiredIndex, 0, el); /* insert element */
        setAllYachtPhotos(modifiedCopy);
      }
    });
  };

  // find the primary photo
  const findAndSetPrimaryPhoto = useCallback(() => {
    const foundPrimaryPhoto = allYachtPhotos.find((photo) => photo.primary);
    reorderAllYachtPhotos([foundPrimaryPhoto], 0);
  }, [allYachtPhotos]);

  // prevent duplications in arr.push()
  const addUniqueArrayItem = (array, item) =>
    array && item && !array.includes(item) && array.push(item);

  // check interior => bool
  const checkIfInteriorCategory = useCallback(
    (categoryName) => TARGETED_CATEGORIES.interior.includes(categoryName),
    []
  );

  // find & store interior & exterior photos
  const storePhotosPerTargetedCategories = useCallback(() => {
    /* loop */
    allYachtPhotos.forEach((photo) => {
      /* optimize */
      if (mappedInterior.length > 1 && mappedExterior.length > 1) return;

      /* sort & update photosMap */
      photo?.categories?.forEach((categoryName) =>
        checkIfInteriorCategory(categoryName)
          ? addUniqueArrayItem(mappedInterior, photo)
          : addUniqueArrayItem(mappedExterior, photo)
      );
    });

    /* optimize updating interior & exterior photos */
    if (mappedInterior.length > 1) {
      const displayedInterior = mappedInterior.splice(0, 2);
      setInteriorPhotos(displayedInterior);
      reorderAllYachtPhotos(displayedInterior, 3);
    }

    if (mappedExterior.length > 1) {
      /* as primary is also an exterior, it's been skipped */
      const displayedExterior = mappedExterior.splice(1, 2);
      setExteriorPhotos(displayedExterior);
      reorderAllYachtPhotos(displayedExterior, 1);
    }

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [mappedInterior, mappedExterior, allYachtPhotos]);

  // sort & update allYachtPhotos
  useEffect(() => {
    findAndSetPrimaryPhoto();
    storePhotosPerTargetedCategories();
    setIsTimeToCombine(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [allYachtPhotos]);

  // combine the needed gallery data in one array
  useEffect(() => {
    const copiedPhotos = [...allYachtPhotos];
    const orderedPhotos = copiedPhotos.splice(0, 5);
    isTimeToCombine && setYachtGridPhotos(orderedPhotos);
    setPhotosCount(allYachtPhotos.length);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isTimeToCombine, interiorPhotos, exteriorPhotos]);

  return {
    fetchYachtData,
    allYachtPhotos /* [{},{},....] */,
    yachtGridPhotos /* [{},{},....] */,
    MOCKED_YACHT_DATA /* {} */,
    photosCount /* 0 */,
    displayLightbox /* bool */,
    setDisplayLightbox /* () => {} */,
    curDisplayedIndex,
  };
};
