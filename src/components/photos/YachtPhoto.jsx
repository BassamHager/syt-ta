import { useEffect, useRef, useState } from "react";

const YachtPhoto = ({ photo }) => {
  // state
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

  useEffect(() => {
    console.log("portrait?", isPortrait);
  }, [isPortrait]);

  return (
    <img ref={imgRef} src={photo?.url?.medium} alt="hi" className="primary" />
  );
};

export default YachtPhoto;
