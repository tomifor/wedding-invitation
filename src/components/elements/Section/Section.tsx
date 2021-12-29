import React, { ReactElement } from 'react';
import styles from './Section.module.scss';
import Link from 'next/link';

type Props = {
  title?: string;
  icon?: ReactElement;
  description?: string;
  buttonLabel?: string;
  secondaryButton?: boolean;
  redirect?: string;
  onClick? (): void;
}

const Section = ({
                   title,
                   buttonLabel,
                   redirect,
                   icon,
                   description,
                   onClick,
                   secondaryButton
                 }: Props) => {

  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {redirect && <Link href={redirect}>
        <button type={'button'} className={secondaryButton ? 'btn-secondary' : 'btn-primary'}>{buttonLabel}</button>
      </Link>}
      {onClick && <button type={'button'} className={secondaryButton ? 'btn-secondary' : 'btn-primary'}
                          onClick={onClick}>{buttonLabel}</button>}
    </div>
  )
}

export default Section;
