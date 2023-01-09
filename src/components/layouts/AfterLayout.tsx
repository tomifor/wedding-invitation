import React from 'react';
import Welcome from '../elements/Welcome/Welcome'
import CountdownSection from '../modules/CountdownSection/CountdownSection'
import LocationSection from '../modules/LocationSection/LocationSection'
import GiftSection from '../modules/GiftSection/GiftSection'
import RsvpSection from '../modules/rsvpSection/rsvpSection'
import SocialSection from '../modules/SocialSection/SocialSection'
import PhotoGallery from '../modules/PhotoGallery/PhotoGallery'
import PhraseSection from '../modules/PhraseSection/PhraseSection'
import { SECTIONS } from '../../config/config'

const AfterLayout = () => {


  const {countdown, location, gift, rsvp, social, phrase} = SECTIONS;

  return (
    <div>
      <div>
        <Welcome enableTextGesture={false} bgColor={'#000000'} />
        <section>
          <CountdownSection date={countdown.date} bgColor={'#939F9F'} textColor={'#FFF'} />
          </section>
          <section className={'section-container'}>
            <LocationSection
              ceremonyDescription={location.ceremonyDescription}
              ceremonyUrl={location.ceremonyUrl}
              ceremonyUrlLabel={'cómo llegar'}
              partyUrlLabel={'cómo llegar'}
              partySubtitle={'Te esperamos a partir de las 23 hs.'}
              partyDescription={location.partyDescription}
              partyUrl={location.partyUrl}
            />
          </section>
          <section className={'section-container'}>
            <GiftSection
              description={gift.description}
              bgColor={'#939F9F'}
              buttonLabel={'ver datos'}
              iconColor={'#f7f7ff'}/>
          </section>
          <section className={'section-container'}>
            <RsvpSection
              title={rsvp.title}
              description={rsvp.description}
              redirect={rsvp.redirect}
            />
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
    </div>
  )
}

export default AfterLayout;
