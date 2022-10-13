import React from 'react';
import { Box } from '@chakra-ui/react'
import Section from '../../elements/Section/Section'
import { BiDrink } from 'react-icons/bi'

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
    <Box className={'flex justify-content-center'}>
      {/*<div className={'col-12 sm:col-12 md:col-6'}>*/}
      {/*  <Section title={ceremonyTitle ?? 'Ceremonia'}*/}
      {/*           icon={<BiChurch size={48} color={'#c3b38f'} onClick={onClickEasterEgg}/>}*/}
      {/*           description={ceremonyDescription}*/}
      {/*           redirect={ceremonyUrl}*/}
      {/*           buttonLabel={ceremonyUrlLabel ?? 'Ver en Google Maps'}/>*/}
      {/*</div>*/}
        <Section title={partyTitle ?? 'Fiesta'}
                 onClick={onClickEasterEgg}
                 icon={<BiDrink size={48} color={'#c3b38f'}/>}
                 description={partyDescription}
                 redirect={partyUrl}
                 buttonLabel={partyUrlLabel ?? 'Ver en Google Maps'}/>
    </Box>
  )
}

export default LocationSection;
