import { useContext, useCallback } from "react";
// context
import { LightboxContext } from "../../context/LightboxContext";

export const useYachtPhoto = () => {
  // context
  const { setIsShowLightbox, curDisplayedIndex, setCurDisplayedIndex } =
    useContext(LightboxContext);

  // inner state

  // methods
  const clickYacht = useCallback((ind) => {
    setCurDisplayedIndex(ind);
    setIsShowLightbox(true);
  }, []);

  return {
    curDisplayedIndex,
    /* methods */
    clickYacht,
  };
};
