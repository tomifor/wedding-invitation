import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery'
import { PHOTOS } from '../../../config/gallery'
import styles from './PhotoGallery.module.scss';
import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css";

type Props = {
  onClickEasterEgg?(): void;
}


const PhotoGallery = ({onClickEasterEgg}: Props) => {
  const [index, setIndex] = useState(-1);

  const currentImage = PHOTOS[index];
  const nextIndex = (index + 1) % PHOTOS.length;
  const nextImage = PHOTOS[nextIndex] || currentImage;
  const prevIndex = (index + PHOTOS.length - 1) % PHOTOS.length;
  const prevImage = PHOTOS[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);


  return (
    <div className={styles.container}>
      <p className={styles.title} ><span onClick={onClickEasterEgg}>Fotos</span></p>
      <div className={styles.galleryContainer}>
        <Gallery
          images={PHOTOS}
          onClick={handleClick}
          enableImageSelection={false}
      />
      </div>
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          enableZoom={false}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}

export default PhotoGallery;
