import React, { useEffect, useState } from 'react';
import styles from './Welcome.module.scss';
import Image from 'next/image';

type Props = {
  bgColor?: string;
  onClickNames?(): void;
  enableTextGesture?: boolean;
  hideScrollGesture?: boolean;
}

const Welcome = ({bgColor, onClickNames, enableTextGesture, hideScrollGesture}: Props) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [showGesture, setShowGesture] = useState<boolean>(false);

  useEffect(() => {
    const {innerHeight, innerWidth} = window;
    setIsMobile(innerHeight > innerWidth && innerWidth < 768);
    setTimeout(() => {
      setShowGesture(true);
    }, 5000);
  }, [])




  return (
    <div className={styles.container} style={{backgroundColor: bgColor ?? '#f5efea'}}>
      <div className={`${styles.backgroundImage} gradient-border`}>
        {isMobile === false && <Image src={'/wedding-background-desktop.png'} priority layout="fill" objectFit="cover" alt={'Fondo de invitación'}/>}
        {isMobile === true && <Image src={'/wedding-background-mobile.png'} priority layout="fill" objectFit="cover" alt={'Fondo de invitación'}/>}
        <div className={styles.names}>
          {showGesture && enableTextGesture && <span className={'touch-gesture'}/>}
          <Image onClick={onClickNames}  src={'/names.png'} priority height={500} width={300}  alt={'Vicky y Santi - 20/11/22'}/>
        </div>
      </div>
      {!hideScrollGesture && <div className={'scrollDown'}/>}
    </div>
  )
}

export default Welcome;
