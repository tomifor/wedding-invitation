import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import styles from './GiftModal.module.scss';
import { Box, Heading, Image, Text, useToast } from '@chakra-ui/react'
import { copyToClipboard } from '../../../utils/copyToClipboard'
import { FiCopy } from 'react-icons/fi';

type Props = {
  visible: boolean;
  onClose (): void;
}

const GiftModal = ({visible, onClose}: Props) => {
  const toast = useToast();
  const CBU = '0150501601000221763989';
  const ALIAS = 'pablof.icbc';
  const CBU_USD = '0150501611000136525226';
  const ALIAS_USD = 'pablof.icbc.usd';

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
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent style={{maxWidth: '95%', width: '400px'}}>
        <ModalCloseButton/>
        <ModalBody>
          <div className={styles.container}>
            <section>
              <Heading as={'h2'} size={'md'} className={styles.title}>Datos bancarios</Heading>
              <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Heading as={'h3'} size={'sm'} marginRight={'5px'}><strong>Cuenta en pesos</strong></Heading>
              </Box>
              <p>Titular:</p>
              <div className={styles.row}>
                <p>CBU: {CBU}</p>
                <span className={styles.btnCopy} onClick={() => copy(CBU, 'CBU')}><FiCopy/></span>
              </div>
              <div className={styles.row}>
                <p>Alias: {ALIAS}</p>
                <span className={styles.btnCopy} onClick={() => copy(ALIAS, 'Alias')}><FiCopy/></span>
              </div>
              <p>Nº de cuenta: 0501/01221763/98</p>
              <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}
                   marginTop={'12px'}>
                <Heading as={'h3'} size={'sm'} marginRight={'5px'}><strong>Cuenta en dolares</strong></Heading>
              </Box>
              <p>Titular:</p>
              <div className={styles.row}>
                <p>CBU: {CBU_USD}</p>
                <span className={styles.btnCopy} onClick={() => copy(CBU_USD, 'CBU')}><FiCopy/></span>
              </div>
              <div className={styles.row}>
                <p>Alias: {ALIAS_USD}</p>
                <span className={styles.btnCopy} onClick={() => copy(ALIAS_USD, 'Alias')}><FiCopy/></span>
              </div>
              <p>Nº de cuenta: 0501/11136525/22</p>
            </section>
            {/*<section className={styles.giftList}>*/}
            {/*  <Heading as={'h2'} size={'md'} className={styles.title}>Lista de regalos</Heading>*/}
            {/*  <a>Fravega</a>*/}
            {/*</section>*/}
            <section>
              <Text textAlign={'center'} fontWeight={'bold'} marginTop={'20px'}>Sino podes encontrar una alcancía en la
                recepción del salón</Text>
              <Image src={'/pig.svg'} height={100} width={200} margin={'10px auto'} alt={'Dibujo de alcancia'}/>
            </section>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GiftModal
