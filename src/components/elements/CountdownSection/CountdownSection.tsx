import React from 'react';
import Countdown from 'react-countdown';
import styles from './CountdownSection.module.scss';

type Props = {
  onClickEasterEgg?(): void;
}

const CountdownSection = ({onClickEasterEgg}: Props) => {

  const date = new Date('2022-02-19T17:00:00');
  return (
    <div className={styles.container}>
      <Countdown date={date} renderer={({formatted, completed}) => {
        const {days, hours, minutes, seconds} = formatted;
        if (completed) {
          return <p>Es HOY!</p>;
        }
        return (
          <div>
            <p className={styles.title}>Faltan</p>
            <div className={styles.counterContainer}>
              <div className={styles.timeContainer}>
                <p className={styles.timeValue}>{days}</p>
                <p className={styles.timeLabel}>Días</p>
              </div>
              <div className={styles.timeContainer}>
                <p className={styles.timeValue}>{hours}</p>
                <p className={styles.timeLabel}>Horas</p>
              </div>
              <div className={styles.timeContainer}>
                <p className={styles.timeValue}>{minutes}</p>
                <p className={styles.timeLabel}>Minutos</p>
              </div>
              <div className={styles.timeContainer}>
                <p className={styles.timeValue} onClick={onClickEasterEgg}>{seconds}</p>
                <p className={styles.timeLabel}>Segundos</p>
              </div>
            </div>
          </div>
        )
      }}/>
    </div>
  )
}


export default CountdownSection;
