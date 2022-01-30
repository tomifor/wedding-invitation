import React, { useState } from 'react';
import Section from '../../elements/Section/Section'
import { BiGift } from 'react-icons/bi'
import GiftModal from '../../elements/GiftModal/GiftModal'
import { Box } from '@chakra-ui/react'

type Props = {
  description?: string;
  buttonLabel?: string;
  bgColor?: string;
  textColor?: string;
  onClickIcon?(): void;
}

const GiftSection = ({description, buttonLabel, onClickIcon, bgColor, textColor}: Props) => {
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);


  return (
    <div style={{backgroundColor: bgColor ?? '#657559', color: textColor ?? '#fff'}}>
      <Section
        icon={<BiGift size={48} color={'#d4efc8'} onClick={onClickIcon}/>}
        secondaryButton
        description={description}
        onClick={() => setGiftModalVisible(true)}
        buttonLabel={buttonLabel ?? 'Ver datos'}/>
      <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
    </div>
  )
}

export default GiftSection
