import { useContext, useEffect, useRef, useState } from "react";
// context
import { LightboxContext } from "../../context/LightboxContext";
import { YachtPhotoContext } from "../../context/YachtPhotoContext";

export const useYachtPhoto = () => {
  // context
  const {
    displayLightbox,
    setDisplayLightbox,
    curDisplayedIndex,
    setCurDisplayedIndex,
  } = useContext(LightboxContext);
  const { allYachtPhotos } = useContext(YachtPhotoContext);

  // inner state
  const imgRef = useRef();
  const [photoWidth, setPhotoWidth] = useState(); // number
  const [photoHeight, setPhotoHeight] = useState(); // number
  const [isPortrait, setIsPortrait] = useState(false);

  // methods
  useEffect(() => {
    imgRef.current.addEventListener("load", () => {
      setPhotoWidth(imgRef.current.width);
      setPhotoHeight(imgRef.current.height);
    });
    setIsPortrait(photoWidth < photoHeight);
  }, [photoWidth, photoHeight]);

  return {
    imgRef,
    isPortrait,
    displayLightbox,
    setDisplayLightbox,
    allYachtPhotos,
    curDisplayedIndex,
    setCurDisplayedIndex,
  };
};
