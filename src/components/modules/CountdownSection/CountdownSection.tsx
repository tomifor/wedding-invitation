import React from 'react';
import Countdown from 'react-countdown';
import styles from './CountdownSection.module.scss';

type Props = {
  onClickEasterEgg?(): void;
  date: string;
  title?: string;
  bgColor?: string;
  textColor?: string;
}

const CountdownSection = ({date, onClickEasterEgg, title = 'Faltan', bgColor = '#f8f9f7', textColor = '#69755e'}: Props) => {

  const dateParsed = new Date(date);
  return (
    <div className={styles.container} style={{backgroundColor: bgColor, color: textColor}}>
      <Countdown date={dateParsed} renderer={({formatted, completed}) => {
        const {days, hours, minutes, seconds} = formatted;
        if (completed) {
          return <p className={styles.completed}>Es HOY!</p>;
        }
        return (
          <div>
            <p className={styles.title}>{title}</p>
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
              {/*<div className={styles.timeContainer}>*/}
              {/*  <p className={styles.timeValue}>{seconds}</p>*/}
              {/*  <p className={styles.timeLabel}>Segundos</p>*/}
              {/*</div>*/}
            </div>
          </div>
        )
      }}/>
    </div>
  )
}


export default CountdownSection;
