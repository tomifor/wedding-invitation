import React from 'react';
import styles from './PhraseSection.module.scss';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

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
      <Box d={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Image src={'/avatar-ella.png'} width={100} height={150}/>
        <Image src={'/avatar-el.png'} width={100} height={150}/>
      </Box>
    </div>
  )
}

export default PhraseSection;
