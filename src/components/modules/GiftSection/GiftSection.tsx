import React, { useState } from 'react';
import Section from '../../elements/Section/Section'
import { BiGift } from 'react-icons/bi'
import GiftModal from '../../elements/GiftModal/GiftModal'

type Props = {
  description?: string;
  buttonLabel?: string;
  onClickIcon?(): void;
}

const GiftSection = ({description, buttonLabel, onClickIcon}: Props) => {
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);


  return (
    <React.Fragment>
      <Section
        icon={<BiGift size={48} color={'#d4efc8'} onClick={onClickIcon}/>}
        secondaryButton
        description={description}
        onClick={() => setGiftModalVisible(true)}
        buttonLabel={buttonLabel ?? 'Ver datos'}/>
      <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
    </React.Fragment>
  )
}

export default GiftSection
