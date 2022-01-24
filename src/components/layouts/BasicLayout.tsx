import React, { useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import { BiChurch, BiGift } from 'react-icons/bi'
import styles2 from '../elements/GiftModal/GiftModal.module.scss';
import GiftModal from '../elements/GiftModal/GiftModal'
import { Box, Heading, useToast } from '@chakra-ui/react'
import { FiCopy } from 'react-icons/fi'
import { copyToClipboard } from '../../utils/copyToClipboard'

const BasicLayout = () => {
  const toast = useToast();
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);
  const CBU = '1500303800030360650050';
  const ALIAS = 'marcosytessy';

  const copy = (value: string, type: string) => {
    copyToClipboard(value);
    toast({
      title: `${type} copiado!`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <div>
      <Welcome/>
      <section className={'section-container'}>
        <Section title={'Ceremonia'}
                 icon={<BiChurch size={48} color={'#c3b38f'}/>}
                 description={'La ceremonia es el 5 de Marzo a las 16:00 horas en la Parroquia San Francisco Solano (Ameghino 649), Bella Vista.'}
          // redirect={'https://goo.gl/maps/DniBzfSNiwQ2W35f8'}
                 buttonLabel={'Ver en Google Maps'}/>
      </section>
      <section className={'section-container gift'}>
        <Section
          icon={<BiGift size={48} color={'#d4efc8'}/>}
          secondaryButton
          description={'El mejor regalo es que nos acompañes en este día tan especial, pero si además nos querés hacer un regalo, podés ayudarnos con la Luna de Miel'}
          // onClick={() => setGiftModalVisible(true)}
          buttonLabel={'Ver datos'}/>
        <section>
          <Box textAlign={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Heading as={'h2'} size={'md'} className={styles2.title}>Datos bancarios</Heading>
            <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
              <Heading as={'h3'} size={'sm'} marginRight={'5px'}><strong>Cuenta HSBC</strong></Heading>
              {/*<Image src={'/brubank.png'} height={15} width={13} alt={'Logo brubank'}/>*/}

            </Box>
            <p>Titular: Hertelendy Maria Teresa Julieta</p>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <p>CBU: {CBU}</p>
            </Box>
            <div className={styles2.row}>
              <p>Alias: {ALIAS}</p>
            </div>
            <p>Caja de ahorro: 3036065005</p>
          </Box>
        </section>
        <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
      </section>
    </div>
  )
}

export default BasicLayout;
