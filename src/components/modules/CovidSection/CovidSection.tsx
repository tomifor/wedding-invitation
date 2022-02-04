import React from 'react';
import Section from '../../elements/Section/Section'
import { BiInfoCircle } from 'react-icons/bi'

type Props = {
}

const CovidSection = ({}: Props) => {

  return (
    <div>
      <Section title={'COVID-19'}
               bgColor={'#ffe4e1'}
               icon={<BiInfoCircle size={48} color={'#3f1e1b'}/>}
               textColor={'#3f1e1b'}
               description={'En el ingreso se deberá presentar el carnet de vacunación, pase sanitario o un PCR negativo menor a 72 hs.'}/>
    </div>
  )
}

export default CovidSection;
