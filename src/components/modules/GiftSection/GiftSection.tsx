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
  iconColor?: string;
  onClickIcon?(): void;
}

const GiftSection = ({description, buttonLabel, onClickIcon, bgColor, textColor, iconColor}: Props) => {
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);


  return (
    <div style={{backgroundColor: bgColor ?? '#657559', color: textColor ?? '#fff'}}>
      <Section
        icon={<BiGift size={48} color={iconColor} onClick={onClickIcon}/>}
        secondaryButton
        description={description}
        onClick={() => setGiftModalVisible(true)}
        buttonLabel={buttonLabel ?? 'Ver datos'}/>
      <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
    </div>
  )
}

export default GiftSection;

GiftSection.defaultProps = {
  iconColor: '#d4efc8'
}
