import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import styles from './GiftModal.module.scss';
import { Box, Heading, useToast } from '@chakra-ui/react'
import { copyToClipboard } from '../../../utils/copyToClipboard'
import { SECTIONS } from '../../../config/config'
import Image from 'next/image';
import { FiCopy } from 'react-icons/fi'

type Props = {
  visible: boolean;
  onClose (): void;
}

const GiftModal = ({visible, onClose}: Props) => {
  const toast = useToast();
  const ACCOUNTS = SECTIONS.gift.accounts;

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
              {ACCOUNTS.map(account => (
                <Box key={account.alias} marginBottom={'20px'}>
                  <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'} marginBottom={'8px'}>
                    <Heading as={'h3'} size={'sm'} marginRight={'5px'}><strong>Cuenta {account.accountType} {account.bank}</strong></Heading>
                    <Image src={`/banks/${account.logo}`} height={25} width={25} alt={`Logo ${account.bank}`}/>
                  </Box>
                  <p>Titular: {account.accountHolder}</p>
                  <div className={styles.row}>
                    <p>CBU: {account.cbu}</p>
                    <span className={styles.btnCopy} onClick={() => copy(account.cbu, 'CBU')}><FiCopy/></span>
                  </div>
                  <div className={styles.row}>
                    <p>Alias: {account.alias}</p>
                    <span className={styles.btnCopy} onClick={() => copy(account.alias, 'Alias')}><FiCopy/></span>
                  </div>
                  {/*<p>Nº de cuenta: {account.accountNumber}</p>*/}
                </Box>
              ))}
            </section>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GiftModal

/**
 *    {ACCOUNTS.map(account => (
 *                 <Box key={account.alias} marginBottom={'20px'}>
 *                   <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
 *                     <Heading as={'h3'} size={'sm'} marginRight={'5px'}><strong>Cuenta {account.accountType} {account.bank}</strong></Heading>
 *                     <Image src={`/banks/${account.logo}`} height={25} width={35} alt={`Logo ${account.bank}`}/>
 *                   </Box>
 *                   <p>Titular: {account.accountHolder}</p>
 *                   <div className={styles.row}>
 *                     <p>CBU: {account.cbu}</p>
 *                     <span className={styles.btnCopy} onClick={() => copy(account.cbu, 'CBU')}><FiCopy/></span>
 *                   </div>
 *                   <div className={styles.row}>
 *                     <p>Alias: {account.alias}</p>
 *                     <span className={styles.btnCopy} onClick={() => copy(account.alias, 'Alias')}><FiCopy/></span>
 *                   </div>
 *                   <p>Nº de cuenta: {account.accountNumber}</p>
 *                 </Box>
 *               ))}
 */
