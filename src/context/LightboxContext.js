import { createContext, useState } from "react";

export const LightboxContext = createContext();

export const LightboxContextProvider = ({ children }) => {
  // state
  const [isShowLightbox, setIsShowLightbox] = useState(false); /* bool */
  const [curDisplayedIndex, setCurDisplayedIndex] = useState(); /* number */

  const value = {
    isShowLightbox,
    setIsShowLightbox,

    curDisplayedIndex,
    setCurDisplayedIndex,
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  );
};
