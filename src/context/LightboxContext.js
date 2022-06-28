import { createContext, useState } from "react";

export const LightboxContext = createContext();

export const LightboxContextProvider = ({ children }) => {
  // state
  const [displayLightbox, setDisplayLightbox] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const value = {
    displayLightbox,
    setDisplayLightbox,

    imageToShow,
    setImageToShow,
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  );
};
