import "./YachtPhoto.scss";
// utils
import { useYachtPhoto } from "./yachtPhotoUtils";

const YachtPhoto = ({ photo, primary }) => {
  const { imgRef, isPortrait } = useYachtPhoto();

  return (
    <img
      ref={imgRef}
      src={photo?.url?.medium}
      alt="hi"
      height={primary ? 400 : 150}
      className={`yacht-photo ${isPortrait ? "portrait" : "landscape"} ${
        primary ? "primary" : ""
      }`}
    />
  );
};

export default YachtPhoto;
