import React from 'react';
import { Box } from '@chakra-ui/react'
import Section from '../../elements/Section/Section'
import { BiChurch, BiDrink } from 'react-icons/bi'
import Image from 'next/image'

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
    <Box className={'grid  w-full'}>
      <div className={'col-12 sm:col-12 md:col-6'}>
        <Section title={ceremonyTitle ?? 'Ceremonia'}
                 icon={<Image  src={'/icons/ring.svg'} priority height={100} width={100}  alt={'Ceremonia'}/>}
                 description={ceremonyDescription}
                 subtitle={'Sábado 11 de marzo de 2023 - 17 hs.'}
                 description2={'Villanueva 905, Las Cañitas.'}
                 redirect={ceremonyUrl}
                 buttonLabel={ceremonyUrlLabel ?? 'Ver en Google Maps'}/>
      </div>
      <div className={'col-12 sm:col-12 md:col-6'}>
        <Section title={partyTitle ?? 'Fiesta'}
                 onClick={onClickEasterEgg}
                 icon={<Image  src={'/icons/copa.svg'} priority height={100} width={100}  alt={'Fiesta'}/>}
                 description={partyDescription}
                 redirect={partyUrl}
                 description2={'Av. Márquez 504, San Isidro.'}
                 subtitle={'Te esperamos a partir de las 19 hs.'}
                 buttonLabel={partyUrlLabel ?? 'Ver en Google Maps'}/>
      </div>
    </Box>
  )
}

export default LocationSection;
