import { createContext, useState } from "react";

export const YachtGalleryContext = createContext({});

export const YachtGalleryContextProvider = ({ children }) => {
  // state
  const [primaryPhoto, setPrimaryPhoto] = useState({}); // photo = {}
  const [interiorPhotos, setInteriorPhotos] = useState([]); // array of two photos [{},{}]
  const [exteriorPhotos, setExteriorPhotos] = useState([]); // array of two photos [{},{}]
  const [yachtGridPhotos, setYachtGridPhotos] = useState([]); // array of 5 photos = [{},....]
  // const [remainingPhotosCount, setRemainingPhotosCount] = useState(0); // number

  const value = {
    primaryPhoto,
    setPrimaryPhoto,

    interiorPhotos,
    setInteriorPhotos,

    exteriorPhotos,
    setExteriorPhotos,

    yachtGridPhotos,
    setYachtGridPhotos,
  };

  return (
    <YachtGalleryContext.Provider value={value}>
      {children}
    </YachtGalleryContext.Provider>
  );
};
