import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/modal'
import styles from './GiftModal.module.scss';
import { Heading, useToast } from '@chakra-ui/react'
import { copyToClipboard } from '../../../utils/copyToClipboard'
import {FiCopy} from 'react-icons/fi';

type Props = {
  visible: boolean;
  onClose(): void;
}

const GiftModal = ({visible, onClose}: Props) => {
  const toast = useToast();
  const CBU = 'XXXX213123123123';
  const ALIAS = 'sofiymaxi';

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
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody >
          <div className={styles.container}>
            <section>
              <Heading as={'h2'} size={'md'} className={styles.title}>Datos bancarios</Heading>
              <Heading as={'h3'} size={'sm'}><strong>Cuenta Brubank</strong></Heading>
              <p>Titular: Sofia Della Vecchia</p>
              <div className={styles.row}>
                <p>CBU: {CBU}</p>
                <span className={styles.btnCopy} onClick={() => copy(CBU, 'CBU')}><FiCopy/></span>
              </div>
              <div className={styles.row}>
                <p>Alias: {ALIAS}</p>
                <span className={styles.btnCopy} onClick={() => copy(ALIAS, 'Alias')}><FiCopy/></span>
              </div>
              <p>DNI: 23213333</p>
            </section>
           <section className={styles.giftList}>
             <Heading as={'h2'} size={'md'} className={styles.title}>Lista de regalos</Heading>
             <a>Fravega</a>
           </section>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GiftModal
