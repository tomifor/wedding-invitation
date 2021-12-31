import React, { useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import CountdownSection from '../elements/CountdownSection/CountdownSection'
import { BiChurch, BiDrink, BiGift } from 'react-icons/bi'
import SocialSection from '../elements/SocialSection/SocialSection'
import GiftModal from '../elements/GiftModal/GiftModal'

const FullLayout = () => {
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);

  // dorado #d79235
  return (
    <div>
      <Welcome/>
      <section>
        <CountdownSection/>
      </section>
      <section className={'section-container'}>
        <div className={'grid'}>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Ceremonia'}
                     icon={<BiChurch size={48} color={'#c3b38f'}/>}
                     description={'La ceremonia se realizará el 19 de Febrero a las 17:00 horas en la Parroquia San Francisco Solano, Bella Vista.'}
                     redirect={'https://goo.gl/maps/DniBzfSNiwQ2W35f8'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Fiesta'}
                     icon={<BiDrink size={48} color={'#c3b38f'}/>}
                     description={'Después de la ceremonia festejaremos en la Quinta Los Diez, Villa de Mayo. '}
                     redirect={'https://goo.gl/maps/6tVzwmAFaPs25h6i6'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>

        </div>
      </section>
      <section className={'section-container gift'}>
        <Section
          icon={<BiGift size={48} color={'#d4efc8'}/>}
          secondaryButton
          description={'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...'}
          onClick={() => setGiftModalVisible(true)}
          buttonLabel={'Ver datos'}/>
        <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
      </section>
      <section className={'section-container assistance'}>
        <Section
          description={'Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!'}
          title={'CONFIRMACIÓN DE ASISTENCIA'}
          redirect={'https://docs.google.com/forms/d/e/1FAIpQLSdaG6talvl9Q_btgpGMevFZFCXNNNunPFLOUVUhTy01zbem4Q/viewform'}
          buttonLabel={'Confirmar asistencia'}/>
      </section>
      <section>
        <SocialSection/>
      </section>
      <section className={'section-container thank-phrase'}>
        <p>¡Gracias por estar en este momento tan importante!</p>
        <p> Los queremos 😁</p>
      </section>
      <footer>
        <p>Made with ♥ by <a href={'https://www.instagram.com/tomifor/'} target={'_blank'}
                             rel="noopener noreferrer">@tomifor</a></p>
      </footer>
    </div>
  )
}

export default FullLayout;
