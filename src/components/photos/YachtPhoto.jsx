import "./YachtPhoto.scss";
// utils
import { useYachtPhoto } from "./yachtPhotoUtils";

const YachtPhoto = ({ photo }) => {
  const { imgRef, isPortrait } = useYachtPhoto();

  return (
    <img
      ref={imgRef}
      src={photo?.url?.medium}
      alt="hi"
      className={`${isPortrait ? "portrait" : "landscape"}`}
    />
  );
};

export default YachtPhoto;
