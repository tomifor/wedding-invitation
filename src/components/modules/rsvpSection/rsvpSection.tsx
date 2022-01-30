import React from 'react';
import Section from '../../elements/Section/Section';

type Props = {
  title?: string;
  description?: string;
  redirect?: string;
  btnRedirectLabel?: string;
  textColor?: string;
  bgColor?: string;
}

const RsvpSection = ({title, description, redirect, btnRedirectLabel, textColor, bgColor}: Props) => {


  return (
    <div>
      <Section
        description={description}
        title={title ?? 'CONFIRMACIÓN DE ASISTENCIA'}
        redirect={redirect}
        buttonLabel={btnRedirectLabel ?? 'Confirmar asistencia'}/>
    </div>
  )
}

export default RsvpSection;
