import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import styles from './GiftModal.module.scss';
import { Box, Heading, useToast } from '@chakra-ui/react'
import { copyToClipboard } from '../../../utils/copyToClipboard'
import { FiCopy } from 'react-icons/fi';
import Image from 'next/image';

type Props = {
  visible: boolean;
  onClose (): void;
}

const GiftModal = ({visible, onClose}: Props) => {
  const toast = useToast();
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
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent style={{maxWidth: '95%', width: '400px'}}>
        <ModalCloseButton/>
        <ModalBody>
          <div className={styles.container}>
            <section>
              <Heading as={'h2'} size={'md'} className={styles.title}>Datos bancarios</Heading>
              <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Heading as={'h3'} size={'sm'} marginRight={'5px'}><strong>Cuenta HSBC</strong></Heading>
                {/*<Image src={'/brubank.png'} height={15} width={13} alt={'Logo brubank'}/>*/}

              </Box>
              <p>Titular: Hertelendy Maria Teresa Julieta</p>
              <div className={styles.row}>
                <p>CBU: {CBU}</p>
                <span className={styles.btnCopy} onClick={() => copy(CBU, 'CBU')}><FiCopy/></span>
              </div>
              <div className={styles.row}>
                <p>Alias: {ALIAS}</p>
                <span className={styles.btnCopy} onClick={() => copy(ALIAS, 'Alias')}><FiCopy/></span>
              </div>
              <p>Caja de ahorro: 3036065005</p>
            </section>
            {/*<section className={styles.giftList}>*/}
            {/*  <Heading as={'h2'} size={'md'} className={styles.title}>Lista de regalos</Heading>*/}
            {/*  <a>Fravega</a>*/}
            {/*</section>*/}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GiftModal
