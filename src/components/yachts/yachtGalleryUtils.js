import { useContext, useCallback, useEffect } from "react";
import { YachtGalleryContext } from "../../context/YachtContext";
// mocked
import MOCKED_YACHT_DATA from "../../mock/mockedYachtData.json";

export const useFetchAndSortYachtGalleryData = () => {
  // context
  const {
    primaryPhoto,
    interiorPhotos,
    setPrimaryPhoto,
    exteriorPhotos,
    setInteriorPhotos,
    setExteriorPhotos,
    yachtGridPhotos,
    setYachtGridPhotos,
  } = useContext(YachtGalleryContext);

  // methods
  const findAndSetPrimaryPhoto = useCallback(() => {
    const foundPrimaryPhoto = MOCKED_YACHT_DATA.photos.find(
      (photo) => photo.primary
    );

    setPrimaryPhoto(foundPrimaryPhoto);
  }, []);

  const categoriesTargeted = {
    interior: [
      "saloon",
      "jacuzzi_and_pool",
      "dining",
      "stateroom",
      "fitness_&_wellnes",
    ],
    exterior: ["anchored", "profile", "at_shipyard", "exterior_detail"],
  };

  const findAndSetPhotosPerTargetedCategories = useCallback(
    (categoriesType) => {
      // dynamic select between interior/exterior
      const selectedCategories =
        categoriesType === "interior"
          ? categoriesTargeted.interior
          : categoriesTargeted.exterior;

      // initialize a map for storing & sorting photos per category
      const photosMap = new Map();
      photosMap.set("interior", []);
      photosMap.set("exterior", []);
      const interior = photosMap.get("interior");
      const exterior = photosMap.get("exterior");

      // loop, sort & store
      MOCKED_YACHT_DATA.photos.forEach((curPhoto) => {
        if (interior.length > 1 && exterior.length > 1) return;

        curPhoto.categories.forEach((category) =>
          selectedCategories.includes(category)
            ? interior.push(curPhoto)
            : exterior.push(curPhoto)
        );
      });

      const sortedPhotos = photosMap.get("interior").splice(0, 2);

      categoriesType === "interior"
        ? setInteriorPhotos(sortedPhotos)
        : setExteriorPhotos(sortedPhotos);
    },
    [categoriesTargeted.interior, categoriesTargeted.exterior]
  );

  const combineYachtGridPhotos = () => {
    findAndSetPrimaryPhoto();
    findAndSetPhotosPerTargetedCategories("interior");
    findAndSetPhotosPerTargetedCategories();

    const gridPhotos = [primaryPhoto, ...interiorPhotos, ...exteriorPhotos];

    setYachtGridPhotos(gridPhotos);
  };

  useEffect(() => {
    if (
      primaryPhoto.name &&
      interiorPhotos.length > 0 &&
      exteriorPhotos.length > 0
    ) {
      combineYachtGridPhotos();
      console.log("useef", primaryPhoto);
    }
  }, [primaryPhoto, interiorPhotos, exteriorPhotos]);

  // const calcRemainingPhotosCount = () =>
  //   setRemainingPhotosCount(MOCKED_YACHT_DATA.photos.length - 5);

  return {
    primaryPhoto,
    interiorPhotos,
    exteriorPhotos,
    yachtGridPhotos,

    findAndSetPrimaryPhoto,
    findAndSetPhotosPerTargetedCategories,
    combineYachtGridPhotos,
  };
};
