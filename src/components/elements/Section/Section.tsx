import React, { ReactElement } from 'react';
import styles from './Section.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  icon?: ReactElement;
  description?: string;
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
                   onClick,
                   secondaryButton
                 }: Props) => {

  return (
    <div className={styles.container}>
      {icon}
      {title && <p className={styles.title}>{title}</p>}
      {subtitle && <p className={'bold'}>{subtitle}</p>}
      {description && <p className={styles.description}>{description}</p>}
      {redirect && <a href={redirect} target={'_blank'} rel="noopener noreferrer">
        <button type={'button'} className={secondaryButton ? 'btn-secondary' : 'btn-primary'}>{buttonLabel}</button>
      </a>}
      {onClick && <button type={'button'} className={secondaryButton ? 'btn-secondary' : 'btn-primary'}
                          onClick={onClick}>{buttonLabel}</button>}
    </div>
  )
}

export default Section;
