import React from 'react';
import { Box } from '@chakra-ui/react'
import Section from '../../elements/Section/Section'
import { BiChurch, BiDrink } from 'react-icons/bi'

type Props = {
  ceremonyTitle?: string;
  ceremonyDescription?: string;
  ceremonyUrl?: string;
  ceremonyUrlLabel?: string;
  partyTitle?: string;
  partyDescription?: string;
  partyUrl?: string;
  partyUrlLabel?: string;
  onClickEasterEgg?(): void;
}

const LocationSection = ({ceremonyDescription, ceremonyUrl, ceremonyTitle, onClickEasterEgg, ceremonyUrlLabel, partyDescription, partyUrl, partyTitle, partyUrlLabel}: Props) => {

  return (
    <Box className={'grid'}>
      <div className={'col-12 sm:col-12 md:col-6'}>
        <Section title={ceremonyTitle ?? 'Ceremonia'}
                 icon={<BiChurch size={48} color={'#c3958f'} onClick={onClickEasterEgg}/>}
                 description={ceremonyDescription}
                 redirect={ceremonyUrl}
                 buttonLabel={ceremonyUrlLabel ?? 'Ver en Google Maps'}/>
      </div>
      <div className={'col-12 sm:col-12 md:col-6'}>
        <Section title={partyTitle ?? 'Fiesta'}
                 icon={<BiDrink size={48} color={'#c3958f'}/>}
                 description={partyDescription}
                 redirect={partyUrl}
                 buttonLabel={partyUrlLabel ?? 'Ver en Google Maps'}/>
      </div>
    </Box>
  )
}

export default LocationSection;
