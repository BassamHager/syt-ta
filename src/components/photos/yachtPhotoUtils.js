import { useEffect, useRef, useState } from "react";

export const useYachtPhoto = () => {
  // context

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

  return { imgRef, isPortrait };
};
