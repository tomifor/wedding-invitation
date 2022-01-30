import React, { useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import CountdownSection from '../modules/CountdownSection/CountdownSection'
import SocialSection from '../modules/SocialSection/SocialSection'
import SecretModal from '../elements/SecretModal/SecretModal'
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
    rsvpEnabled
  } = CONFIG.sectionsEnabled;

  const {countdown, location, gift, rsvp, social, phrase} = SECTIONS;
  return (
    <div>
      {welcomeEnabled && <Welcome/>}
      {countdownEnabled &&
        <section>
          <CountdownSection date={countdown.date}/>
        </section>}
      {locationEnabled &&
        <section className={'section-container'}>
          <LocationSection
            ceremonyDescription={location.ceremonyDescription}
            ceremonyUrl={location.ceremonyUrl}
            partyDescription={location.partyDescription}
            partyUrl={location.partyUrl}
          />
        </section>}
      {giftEnabled &&
        <section className={'section-container'}>
          <GiftSection description={gift.description}/>
        </section>}
      {rsvpEnabled &&
        <section className={'section-container'}>
          <RsvpSection
            description={rsvp.description}
            redirect={rsvp.redirect}
          />
        </section>}
      {socialEnabled &&
        <section>
          <SocialSection
            hashtag={social.hashtag}
            description={social.description}/>
        </section>}
      {phraseEnabled &&
        <section>
          <PhraseSection mainText={phrase.mainText}
                         secondaryText={phrase.secondaryText}/>
        </section>}
    </div>
  )
}

export default FullLayout;
