import { useContext, useCallback } from "react";
// context
import { LightboxContext } from "../../context/LightboxContext";

export const useYachtPhoto = () => {
  // context
  const {
    isShowLightbox,
    setIsShowLightbox,
    curDisplayedIndex,
    setCurDisplayedIndex,
  } = useContext(LightboxContext);

  // inner state

  // methods
  const clickYacht = useCallback((ind) => {
    !isShowLightbox && setCurDisplayedIndex(ind);
    setIsShowLightbox(true);
  }, []);

  return {
    curDisplayedIndex,
    /* methods */
    clickYacht,
  };
};
