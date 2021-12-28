import React from 'react';
import styles from './Welcome.module.scss';
import Image from 'next/image';

const Welcome = () => {

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image src={'/background-example.jpg'} priority layout="fill" objectFit="cover" alt={'Fondo de invitación'}/>
      </div>
    </div>
  )
}

export default Welcome;
