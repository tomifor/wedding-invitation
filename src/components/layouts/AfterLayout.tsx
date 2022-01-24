import React, { useEffect, useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import CountdownSection from '../elements/CountdownSection/CountdownSection'
import { BiChurch, BiDrink, BiGift } from 'react-icons/bi'
import SocialSection from '../elements/SocialSection/SocialSection'
import GiftModal from '../elements/GiftModal/GiftModal'
import SecretModal from '../elements/SecretModal/SecretModal'

const FullLayout = () => {
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);


  return (
    <div>
      <Welcome />
      <section>
        <CountdownSection  />
      </section>
      <section className={'section-container'}>
        <div className={'grid'}>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Ceremonia'}
                     icon={<BiChurch size={48} color={'#c3b38f'} />}
                     description={'La ceremonia es el 5 de Marzo a las 16:00 horas en la Parroquia San Francisco Solano, Bella Vista.'}
                     redirect={'https://goo.gl/maps/DniBzfSNiwQ2W35f8'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Fiesta'}
                     icon={<BiDrink size={48} color={'#c3b38f'}/>}
                     description={'Después de la ceremonia te esperamos en La Quinta de Bella Vista. 22:00 horas.'}
                     redirect={'https://goo.gl/maps/KQDrvz1CkL9RxTHx5'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
        </div>
      </section>
      <section className={'section-container gift'}>
        <Section
          icon={<BiGift size={48} color={'#d4efc8'} />}
          secondaryButton
          description={'El mejor regalo es que nos acompañes en este día tan especial, pero si además nos querés hacer un regalo, podés ayudarnos con la Luna de Miel'}
          onClick={() => setGiftModalVisible(true)}
          buttonLabel={'Ver datos'}/>
        <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
      </section>
      <section className={'section-container assistance'}>
        <Section
          description={'¡Ojalá puedas venir!'}
          title={'RSVP'}
          redirect={'https://docs.google.com/forms/d/e/1FAIpQLScY_vanKoIq0eEwTBXVIWYETWRgGReUVc5Pl-9OzaAg6eSzfg/viewform?usp=sf_link'}
          buttonLabel={'Confirmar asistencia'}/>
      </section>
      <footer>
        <p>Desarrollado por <a href={'https://www.instagram.com/tomifor/'} target={'_blank'}
                               rel="noopener noreferrer">@tomifor</a></p>
      </footer>
    </div>
  )
}

export default FullLayout;
