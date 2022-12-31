import React, { ReactElement } from 'react';
import styles from './Section.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  icon?: ReactElement;
  description?: string;
  description2?: string;
  buttonLabel?: string;
  secondaryButton?: boolean;
  redirect?: string;
  onClick? (): void;
}

const Section = ({
                   title,
                   subtitle,
                   buttonLabel,
                   redirect,
                   icon,
                   description,
                   description2,
                   onClick,
                   secondaryButton
                 }: Props) => {

  return (
    <div className={styles.container}>
      {icon}
      {title && <p className={styles.title}>{title}</p>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {description && <p className={styles.description}>{description}</p>}
      {description2 && <p className={styles.description}>{description2}</p>}
      {redirect && <a className={'mt-4'} href={redirect} target={'_blank'} rel="noopener noreferrer">
        <button type={'button'} className={secondaryButton ? 'btn-secondary' : 'btn-primary'}>{buttonLabel}</button>
      </a>}
      {onClick && <button type={'button'} className={`mt-4 ${secondaryButton ? 'btn-secondary' : 'btn-primary'}`}
                          onClick={onClick}>{buttonLabel}</button>}
    </div>
  )
}

export default Section;
