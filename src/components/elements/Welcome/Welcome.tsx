import React, { useEffect, useState } from 'react';
import styles from './Welcome.module.scss';
import Image from 'next/image';

const Welcome = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const {innerHeight, innerWidth} = window;
    setIsMobile(innerHeight > innerWidth);
  }, [])




  return (
    <div className={styles.container}>
      <div className={`${styles.backgroundImage} gradient-border`}>
        {isMobile === false && <Image src={'/background-example.jpg'} priority layout="fill" objectFit="cover" alt={'Fondo de invitación'}/>}
        <div className={styles.names}>
          <Image  src={'/names.png'} priority height={500} width={300}  alt={'Sofi y Maxi - 19/02/22'}/>
        </div>
      </div>
      <div className={'scrollDown'}/>
    </div>
  )
}

export default Welcome;
