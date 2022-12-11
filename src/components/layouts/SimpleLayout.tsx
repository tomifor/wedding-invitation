import React from 'react';
import Welcome from '../elements/Welcome/Welcome'
import CountdownSection from '../modules/CountdownSection/CountdownSection'
import GiftSection from '../modules/GiftSection/GiftSection'
import SocialSection from '../modules/SocialSection/SocialSection'
import PhotoGallery from '../modules/PhotoGallery/PhotoGallery'
import PhraseSection from '../modules/PhraseSection/PhraseSection'
import { SECTIONS } from '../../config/config'

const SimpleLayout = () => {

  const {countdown, gift, social, phrase} = SECTIONS;

  return (
    <div>
      <Welcome hideScrollGesture />
        <section>
          <CountdownSection date={countdown.date} bgColor={'#faf7ee'} textColor={'#9b8a66'} />
        </section>
        <section className={'section-container'}>
          <GiftSection
            description={gift.description}
            bgColor={'#787159'}
            buttonLabel={'Ver lista de regalos'}
            iconColor={'#f7f7ff'}/>
        </section>
        <section>
          <SocialSection
            hashtag={social.hashtag}
            url={social.url}
            bgColor={'#efebde'}
            textColor={'#787159'}
            btnUrlLabel={social.buttonLabel}
            description={social.description}/>
        </section>
        <section>
          <PhraseSection mainText={phrase.mainText}
                         bgColor={'#fffefa'}
                         textColor={'#9b9266'}
                         secondaryText={phrase.secondaryText}/>
        </section>
    </div>
  )
}

export default SimpleLayout;
