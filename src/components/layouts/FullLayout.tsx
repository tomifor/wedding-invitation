import React, { useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import CountdownSection from '../modules/CountdownSection/CountdownSection'
import SocialSection from '../modules/SocialSection/SocialSection'
import GiftSection from '../modules/GiftSection/GiftSection'
import PhraseSection from '../modules/PhraseSection/PhraseSection'
import LocationSection from '../modules/LocationSection/LocationSection'
import RsvpSection from '../modules/rsvpSection/rsvpSection'
import { CONFIG, SECTIONS } from '../../config/config'

const FullLayout = () => {


  const {
    welcomeEnabled,
    countdownEnabled,
    locationEnabled,
    phraseEnabled,
    socialEnabled,
    giftEnabled,
    rsvpEnabled,
  } = CONFIG.sectionsEnabled;

  const {countdown, location, gift, rsvp, social, phrase} = SECTIONS;
  return (
    <div>
      {welcomeEnabled && <Welcome enableTextGesture={false} />}
      {countdownEnabled &&
        <section>
          <CountdownSection date={countdown.date} bgColor={'#939F9F'} textColor={'#FFF'} />
        </section>}
      {locationEnabled &&
        <section className={'section-container'}>
          <LocationSection
            ceremonyDescription={location.ceremonyDescription}
            ceremonyUrl={location.ceremonyUrl}
            ceremonyUrlLabel={'cómo llegar'}
            partyUrlLabel={'cómo llegar'}
            partyDescription={location.partyDescription}
            partyUrl={location.partyUrl}
          />
        </section>}
      {giftEnabled &&
        <section className={'section-container'}>
          <GiftSection
            description={gift.description}
            bgColor={'#939F9F'}
            buttonLabel={'ver datos'}
            iconColor={'#f7f7ff'}/>
        </section>}
      {rsvpEnabled &&
        <section className={'section-container'}>
          <RsvpSection
            title={rsvp.title}
            description={rsvp.description}
            redirect={rsvp.redirect}
          />
        </section>}
      {socialEnabled &&
        <section>
          <SocialSection
            hashtag={social.hashtag}
            url={social.url}
            bgColor={'#eaeaea'}
            textColor={'#1C3739'}
            btnUrlLabel={social.buttonLabel}
            description={social.description}/>
        </section>}
      {phraseEnabled &&
        <section>
          <PhraseSection mainText={phrase.mainText}
                         bgColor={'#fff'}
                         textColor={'#1C3739'}
                         secondaryText={phrase.secondaryText}/>
        </section>}
    </div>
  )
}

export default FullLayout;
