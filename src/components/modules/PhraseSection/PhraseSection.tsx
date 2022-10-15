import React from 'react';
import styles from './PhraseSection.module.scss';

type Props = {
  mainText: string;
  secondaryText?: string;
  textColor?: string;
  bgColor?: string;
  onClickEaster?(): void
}

const PhraseSection = ({mainText, secondaryText, onClickEaster, textColor = '#6e7b62', bgColor = '#f6f7f5'}: Props) => {

  return (
    <div className={styles.phraseContainer} style={{color: textColor, backgroundColor: bgColor}}>
      <p className={styles.main}>{mainText}<span onClick={onClickEaster}>❣️!</span></p>
      <p className={styles.secondary}>{secondaryText}</p>
    </div>
  )
}

export default PhraseSection;
