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
            <CountdownSection date={countdown.date} bgColor={'#eef1fa'} textColor={'#667f9b'}/>
          </section>
          <section className={'section-container'}>
            <LocationSection
              ceremonyDescription={location.ceremonyDescription}
              ceremonyUrl={location.ceremonyUrl}
              partyDescription={'La fiesta se realizará el 20 de noviembre a las 00:00 en el Buenos Aires Rowing Club, Tigre.'}
              partyUrl={location.partyUrl}
            />
          </section>
          <section className={'section-container'}>
            <GiftSection description={gift.description} bgColor={'#595B78'} iconColor={'#f7f7ff'}/>
          </section>
          <section className={'section-container'}>
            <RsvpSection
              description={rsvp.description}
              redirect={'https://forms.gle/mZvN9xnp4R8RFu877'}
            />
          </section>
          <section>
            <SocialSection
              hashtag={social.hashtag}
              url={social.url}
              bgColor={'#e8e8f3'}
              textColor={'#595B78'}
              description={social.description}/>
          </section>
       <section>
         <PhotoGallery/>
       </section>
          <section>
            <PhraseSection mainText={phrase.mainText}
                           bgColor={'#fafbff'}
                           textColor={'#667f9b'}
                           secondaryText={phrase.secondaryText}/>
          </section>
      </div>
    </div>
  )
}

export default AfterLayout;
