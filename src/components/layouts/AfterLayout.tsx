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
        <Welcome />
          <section>
            <CountdownSection date={countdown.date} bgColor={'#faf7ee'} textColor={'#9b8a66'} />
          </section>
          <section className={'section-container'}>
            <LocationSection
              ceremonyDescription={location.ceremonyDescription}
              ceremonyUrl={location.ceremonyUrl}
              partyTitle={''}
              ceremonyTitle={''}
              partyDescription={'Los esperamos después de las 00:00 en "La Escondida de Olivos"'}
              partyUrl={location.partyUrl}
            />
          </section>
          <section className={'section-container'}>
            <GiftSection
              description={gift.description}
              bgColor={'#787159'}
              buttonLabel={'Ver lista de regalo'}
              iconColor={'#f7f7ff'}/>          </section>
          <section className={'section-container'}>
            <RsvpSection
              title={rsvp.title}
              description={rsvp.description}
              redirect={'https://forms.gle/ARrgvBzAGG58YxE46'}/>
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
    </div>
  )
}

export default AfterLayout;
