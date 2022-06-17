import { createContext } from "react";

export const YachtPhotoContext = createContext();

export const YachtPhotoContextProvider = ({ children }) => {
  // state

  const value = {};

  return (
    <YachtPhotoContext.Provider value={value}>
      {children}
    </YachtPhotoContext.Provider>
  );
};
