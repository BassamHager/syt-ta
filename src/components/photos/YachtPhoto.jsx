import "./YachtPhoto.scss";
// utils
import { useYachtPhoto } from "./yachtPhotoUtils";

const YachtPhoto = ({ photo, primary, last, ind }) => {
  const { imgRef, isPortrait, setDisplayLightbox, setCurDisplayedIndex } =
    useYachtPhoto();

  return (
    <div
      ref={imgRef}
      onClick={() => {
        setCurDisplayedIndex(ind);
        setDisplayLightbox(true);
      }}
      style={{ backgroundImage: `url(${photo?.url?.medium})` }}
      className={`yacht-photo ${isPortrait ? "portrait" : "landscape"} ${
        primary ? "primary" : "secondary"
      }`}
    >
      {last && <div className="photos-count-overlay">{last}</div>}
    </div>
  );
};

export default YachtPhoto;
