import { createContext, useState } from "react";
// mocked
import MOCKED_YACHT_DATA from "../mock/mockedYachtData.json";

export const YachtPhotoContext = createContext();

export const YachtPhotoContextProvider = ({ children }) => {
  // state
  const [allYachtPhotos] = useState(MOCKED_YACHT_DATA.photos);

  const value = { allYachtPhotos };

  return (
    <YachtPhotoContext.Provider value={value}>
      {children}
    </YachtPhotoContext.Provider>
  );
};
