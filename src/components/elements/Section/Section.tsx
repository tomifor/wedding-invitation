import React, { ReactElement } from 'react';
import styles from './Section.module.scss';
import Link from 'next/link';

type Props = {
  title?: string;
  icon?: ReactElement;
  description?: string;
  buttonLabel?: string;
  redirect?: string;
}

const Section = ({title, buttonLabel, redirect, icon, description}: Props) => {

  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {redirect && <Link href={redirect}>
        <button>{buttonLabel}</button>
      </Link>}
    </div>
  )
}

export default Section;
