import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';

type Props = {
  visible: boolean;
  image: string;
  order: number;
  onClose (): void;
}

const SecretModal = ({image, order, visible, onClose}: Props) => {
  const PHRASE = ['¡Gracias', 'por', 'compartir', 'con', 'nosotros!', ''];

  return (
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent style={{maxWidth: '95%', width: '500px'}}>
        <ModalCloseButton/>
        <ModalBody>
          <Box marginTop={'40px'}>
            <Heading as={'h2'} size={'md'} color={'#a9913c'} textAlign={'center'} marginBottom={'15px'}>Esaaaa!
              Encontraste una de las fotos ocultas.</Heading>
            <Text textAlign={'center'} marginBottom={'8px'} fontWeight={300}>El primero que encuentre las 5 fotos y arme bien la frase,
              recibirá un regalo.</Text>
            <Box display={'flex'} justifyContent={'center'}>
              <Image src={image} height={420} width={420} alt={'Easter egg'}/>
            </Box>
            <Text textAlign={'center'}
                  fontWeight={'bold'}
                  borderRadius={'4px'}
                  margin={'10px'} backgroundColor={'#fcf5ea'} padding={'8px 0'}
                  textTransform={'uppercase'}>{PHRASE[order !== undefined ? order : 5]}</Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SecretModal;
