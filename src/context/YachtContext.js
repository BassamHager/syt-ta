import { createContext, useState } from "react";

export const YachtGalleryContext = createContext({});

export const YachtGalleryContextProvider = ({ children }) => {
  // state
  const [allYachtPhotos, setAllYachtPhotos] = useState(
    []
  ); /* all ordered photos [{},{},....] */

  const [interiorPhotos, setInteriorPhotos] = useState(
    []
  ); /* array of two photos [{},{}] */
  const [exteriorPhotos, setExteriorPhotos] = useState(
    []
  ); /* array of two photos [{},{}] */
  const [yachtGridPhotos, setYachtGridPhotos] = useState(
    []
  ); /* array of 5 photos = [{},....] */
  const [photosCount, setPhotosCount] = useState(0);

  const value = {
    allYachtPhotos,
    setAllYachtPhotos,

    interiorPhotos,
    setInteriorPhotos,

    exteriorPhotos,
    setExteriorPhotos,

    yachtGridPhotos,
    setYachtGridPhotos,

    photosCount,
    setPhotosCount,
  };

  return (
    <YachtGalleryContext.Provider value={value}>
      {children}
    </YachtGalleryContext.Provider>
  );
};
