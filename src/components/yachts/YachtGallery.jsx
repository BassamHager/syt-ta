import YachtPhoto from "../photos/YachtPhoto";
import "./YachtGallery.scss";
// utils
import { useFetchAndSortYachtGalleryData } from "./yachtGalleryUtils";

const YachtGallery = () => {
  // utils

  const {
    // LightboxContext
    isShowLightbox,
    setIsShowLightbox,
    // YachtContext
    allYachtPhotos,
    yachtGridPhotos,
    photosCount,
    // other utils
    curDisplayedIndex,
  } = useFetchAndSortYachtGalleryData();

  return (
    <>
      {isShowLightbox ? (
        // lightbox
        <div onClick={() => setIsShowLightbox(false)} className="lightbox">
          <YachtPhoto photo={allYachtPhotos[curDisplayedIndex]} />
        </div>
      ) : (
        // onMount
        <div className="yacht-all-grid">
          <YachtPhoto photo={yachtGridPhotos[0]} primary ind={0} />

          <div className="yacht-secondary-grid">
            {yachtGridPhotos && yachtGridPhotos.length ? (
              yachtGridPhotos.map((photo, index) => {
                if (index === 0) return null;

                let count = index === 4 ? photosCount : null;

                return (
                  <YachtPhoto
                    photo={photo}
                    key={index}
                    last={count}
                    ind={index}
                  />
                );
              })
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default YachtGallery;
