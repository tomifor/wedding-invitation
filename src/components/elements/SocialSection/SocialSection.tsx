import React from 'react';
import styles from  './SocialSection.module.scss';


const SocialSection = () => {
  const hashtagUrl = 'https://www.instagram.com/explore/tags/sofiymaxi/';

  return (
    <div className={styles.container}>
      <a href={hashtagUrl} className={styles.hashtag} target={'_blank'} rel="noopener noreferrer">#SOFIYMAXI</a>
      <p className={styles.description}>Ya podés etiquetarnos en Instagram con nuestro hashtag en tus fotos o videos.</p>
      <a href={hashtagUrl} target={'_blank'} className={`${styles.link} btn-primary`} type={'button'} rel="noopener noreferrer">Ver fotos de instagram</a>
    </div>
  )
}

export default SocialSection;
