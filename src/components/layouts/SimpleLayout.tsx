import React from 'react';
import Welcome from '../elements/Welcome/Welcome'
import CountdownSection from '../modules/CountdownSection/CountdownSection'
import GiftSection from '../modules/GiftSection/GiftSection'
import SocialSection from '../modules/SocialSection/SocialSection'
import PhraseSection from '../modules/PhraseSection/PhraseSection'
import { SECTIONS } from '../../config/config'

const SimpleLayout = () => {

  const {countdown, gift, social, phrase} = SECTIONS;

  return (
    <div>
      <Welcome enableTextGesture={false} bgColor={'#000000'} />
        <section>
          <CountdownSection date={countdown.date} bgColor={'#939F9F'} textColor={'#FFF'} />
        </section>
        <section className={'section-container'}>
          <GiftSection
            description={gift.description}
            bgColor={'#939F9F'}
            buttonLabel={'ver datos'}
            iconColor={'#f7f7ff'}/>
        </section>
        <section>
          <SocialSection
            hashtag={social.hashtag}
            url={social.url}
            bgColor={'#eaeaea'}
            textColor={'#1C3739'}
            btnUrlLabel={social.buttonLabel}
            description={social.description}/>
        </section>
        <section>
          <PhraseSection mainText={phrase.mainText}
                         bgColor={'#fff'}
                         textColor={'#1C3739'}
                         secondaryText={phrase.secondaryText}/>
        </section>
    </div>
  )
}

export default SimpleLayout;
