import React from 'react';
import styles from './PhraseSection.module.scss';

type Props = {
  mainText: string;
  secondaryText?: string;
  textColor?: string;
  bgColor?: string;
}

const PhraseSection = ({mainText, secondaryText, textColor = '#6e7b62', bgColor = '#f6f7f5'}: Props) => {

  return (
    <div className={styles.phraseContainer} style={{color: textColor, backgroundColor: bgColor}}>
      <p className={styles.main}>{mainText}</p>
      <p className={styles.secondary}>{secondaryText}</p>
    </div>
  )
}

export default PhraseSection;
