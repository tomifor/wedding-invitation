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
          <CountdownSection date={countdown.date} bgColor={'#eef1fa'} textColor={'#667f9b'} />
        </section>
        <section className={'section-container'}>
          <GiftSection description={gift.description} bgColor={'#595B78'} iconColor={'#f7f7ff'}/>
        </section>
        <section>
          <SocialSection
            hashtag={social.hashtag}
            url={social.url}
            bgColor={'#e8e8f3'}
            textColor={'#595B78'}
            description={social.description}/>
        </section>
      <PhotoGallery/>
        <section>
          <PhraseSection mainText={phrase.mainText}
                         bgColor={'#fafbff'}
                         textColor={'#667f9b'}
                         secondaryText={phrase.secondaryText}/>
        </section>
    </div>
  )
}

export default SimpleLayout;
