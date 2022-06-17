import { createContext, useState } from "react";

export const YachtGalleryContext = createContext({});

export const YachtGalleryContextProvider = ({ children }) => {
  // state
  const [primaryPhoto, setPrimaryPhoto] = useState({}); // photo = {}
  const [interiorPhotos, setInteriorPhotos] = useState([]); // array of two photos [{},{}]
  const [exteriorPhotos, setExteriorPhotos] = useState([]); // array of two photos [{},{}]
  const [yachtGridPhotos, setYachtGridPhotos] = useState([]); // array of 5 photos = [{},....]
  const [photosCount, setPhotosCount] = useState(0);

  // initialized a map for easy sorting & storing photos by its categories
  const photosMap = new Map();
  photosMap.set("interior", []);
  photosMap.set("exterior", []);
  const mappedInterior = photosMap.get("interior");
  const mappedExterior = photosMap.get("exterior");

  const value = {
    primaryPhoto,
    setPrimaryPhoto,

    interiorPhotos,
    setInteriorPhotos,

    exteriorPhotos,
    setExteriorPhotos,

    yachtGridPhotos,
    setYachtGridPhotos,

    photosCount,
    setPhotosCount,

    mappedInterior,
    mappedExterior,
  };

  return (
    <YachtGalleryContext.Provider value={value}>
      {children}
    </YachtGalleryContext.Provider>
  );
};
