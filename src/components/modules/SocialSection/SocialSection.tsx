import React from 'react';
import styles from './SocialSection.module.scss';

type Props = {
  hashtag: string;
  description?: string;
  url?: string;
  btnUrlLabel?: string;
  textColor?: string;
  bgColor?: string;
}

const SocialSection = ({hashtag, url, btnUrlLabel, description, textColor = '#563f1c', bgColor = '#fcefcf'}: Props) => {

  return (
    <div className={styles.container} style={{color: textColor, backgroundColor: bgColor}}>
      <a href={url} className={styles.hashtag} target={'_blank'} rel="noopener noreferrer">{hashtag}</a>
      {description && <p className={styles.description}>{description}</p>}
      {url && <a href={url} target={'_blank'} className={`${styles.link} btn-primary`} type={'button'}
          rel="noopener noreferrer">{btnUrlLabel ?? 'Ver fotos de Instagram'}</a>}
    </div>
  )
}

export default SocialSection;
