import React, { useEffect, useState } from 'react';
import styles from './Welcome.module.scss';
import Image from 'next/image';

type Props = {
  bgColor?: string;
  onClickNames? (): void;
  enableTextGesture?: boolean;
}

const Welcome = ({bgColor, onClickNames, enableTextGesture}: Props) => {
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
    <div className={styles.container} style={{backgroundColor: bgColor ?? '#f8f5f3'}}>
      <div>
        <div className={`${styles.backgroundImage}`}>
          {isMobile === false &&
            <Image src={'/welcome-desktop.png'} priority layout="responsive" width={5002} height={3335}
                   objectFit="cover" alt={'Invitación'}/>}
          {isMobile === true &&
            <Image src={'/welcome-mobile.png'} priority layout="fill" objectFit="cover" alt={'Invitación'}/>}
        </div>
      </div>
      <div className={'scrollDown'}/>
    </div>
  )
}

export default Welcome;
