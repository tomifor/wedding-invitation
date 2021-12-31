import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/modal'

type Props = {
  visible: boolean;
  onClose(): void;
}

const SecretModal = ({visible, onClose}: Props) => {

  return (
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={{maxWidth: '95%', width: '400px'}}>
        <ModalCloseButton />
        <ModalBody >
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SecretModal;
