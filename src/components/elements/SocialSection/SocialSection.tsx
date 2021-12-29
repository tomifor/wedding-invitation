import React from 'react';
import styles from  './SocialSection.module.scss';
import Link from 'next/link';


const SocialSection = () => {
  const hashtagUrl = 'https://www.instagram.com/explore/tags/sofiymaxi/';

  return (
    <div className={styles.container}>
      <Link href={hashtagUrl}><p className={styles.hashtag}>#SOFIYMAXI</p></Link>
      <p className={styles.description}>Ya podés etiquetarnos en Instagram con nuestro hashtag en tus fotos o videos.</p>
      <Link href={hashtagUrl}><button className={'btn-secondary'} type={'button'}>Ver fotos de instagram</button></Link>
    </div>
  )
}

export default SocialSection;
