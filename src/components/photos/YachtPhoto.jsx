import "./YachtPhoto.scss";
// utils
import { useYachtPhoto } from "./yachtPhotoUtils";

const YachtPhoto = ({ photo, primary, last, ind }) => {
  // utils
  const { clickYacht } = useYachtPhoto();

  return (
    <div
      onClick={() => clickYacht(ind)}
      style={{ backgroundImage: `url(${photo?.url?.medium})` }}
      className={`yacht-photo  ${primary ? "primary" : "secondary"}`}
    >
      {last && <div className="photos-count-overlay">{last}</div>}
    </div>
  );
};

export default YachtPhoto;
