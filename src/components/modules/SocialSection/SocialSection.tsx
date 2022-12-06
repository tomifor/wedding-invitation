import React from 'react';
import styles from './SocialSection.module.scss';
import instagramLogo from '../../../../public/instagram.png';
import Image from 'next/image'

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
      <div className={'flex align-items-center justify-content-center mb-2'}>
        {/*<Image src={instagramLogo} height={40} width={40} alt={'Instagram logo'}/>*/}
        <a href={url} className={styles.hashtag} target={'_blank'} rel="noopener noreferrer">{hashtag}</a>
      </div>
      {description && <p className={styles.description}>{description}</p>}
      {url && btnUrlLabel && <a href={url} target={'_blank'} className={`${styles.link} btn-secondary`} type={'button'}
          rel="noopener noreferrer">{btnUrlLabel}</a>}
    </div>
  )
}

export default SocialSection;
