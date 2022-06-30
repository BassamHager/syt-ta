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
    allYachtPhotos,
    setAllYachtPhotos,
    yachtGridPhotos,
    setYachtGridPhotos,
    interiorPhotos,
    setInteriorPhotos,
    exteriorPhotos,
    setExteriorPhotos,
    photosCount,
    setPhotosCount,
  } = useContext(YachtGalleryContext);

  const { displayLightbox, setDisplayLightbox, curDisplayedIndex } =
    useContext(LightboxContext);

  // internal state

  // methods
  const fetchYachtData = useCallback(() => {
    setAllYachtPhotos(MOCKED_YACHT_DATA.photos);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [MOCKED_YACHT_DATA.photos]);

  // update allYachtPhotos for logical lightbox behaviour
  const reorderYachtPhotos = useCallback(
    (arr, desiredIndex) => {
      const modifiedCopy = [...allYachtPhotos];
      arr?.forEach((el) => {
        const foundIndex = modifiedCopy.findIndex((photo) => photo === el);
        if (foundIndex) {
          modifiedCopy.splice(foundIndex, 1); /* remove element */
          modifiedCopy.splice(desiredIndex, 0, el); /* insert element */
          setAllYachtPhotos(modifiedCopy);
        }
      });
    },
    [allYachtPhotos]
  );

  // find the primary photo
  const findAndSetPrimaryPhoto = useCallback(() => {
    // console.log("bf1", allYachtPhotos);
    const foundPrimaryPhoto = allYachtPhotos.find((photo) => photo?.primary);
    reorderYachtPhotos([foundPrimaryPhoto], 0);
  }, [allYachtPhotos]);

  // prevent duplications in arr.push()
  const addUniquePhoto = useCallback(
    (category, photoArg) => {
      if (category === "int") {
        if (!interiorPhotos.includes(photoArg)) {
          setInteriorPhotos([photoArg, ...interiorPhotos]);
        }
      } else {
        if (!exteriorPhotos.includes(photoArg)) {
          setExteriorPhotos([photoArg, ...exteriorPhotos]);
        }
      }
    },
    [exteriorPhotos, interiorPhotos]
  );

  // check interior => bool
  const checkIfInteriorCategory = useCallback(
    (categoryName) => TARGETED_CATEGORIES.interior.includes(categoryName),
    []
  );

  // sort photos per category
  const sortPhotosPerCategory = useCallback(() => {
    allYachtPhotos.forEach((photo) => {
      photo?.categories?.forEach((categoryName) =>
        checkIfInteriorCategory(categoryName)
          ? addUniquePhoto("int", photo)
          : categoryName !== "general_arrangement" &&
            addUniquePhoto("ext", photo)
      );
    });
  }, [allYachtPhotos]);

  // find & sort photos according to their categories
  useEffect(() => {
    findAndSetPrimaryPhoto();
    sortPhotosPerCategory();
  }, [findAndSetPrimaryPhoto, sortPhotosPerCategory]);

  // fill in order the yacht photos displayed grid
  useEffect(() => {
    const primary = allYachtPhotos[0];
    const exterior = exteriorPhotos.splice(0, 2);
    const interior = interiorPhotos.splice(0, 2);
    const orderedPhotos = [primary, ...exterior, ...interior];
    setYachtGridPhotos(orderedPhotos);
  }, [allYachtPhotos, exteriorPhotos, interiorPhotos]);

  useEffect(() => {
    setPhotosCount(allYachtPhotos.length);
  }, [allYachtPhotos]);

  return {
    fetchYachtData,
    allYachtPhotos /* [{},{},....] */,
    yachtGridPhotos /* [{},{},....] */,
    MOCKED_YACHT_DATA /* {} */,
    photosCount /* 0 */,
    displayLightbox /* bool */,
    setDisplayLightbox /* () => {} */,
    curDisplayedIndex,
    setAllYachtPhotos,
  };
};
