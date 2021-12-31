import React, { useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import CountdownSection from '../elements/CountdownSection/CountdownSection'
import { BiChurch, BiGift } from 'react-icons/bi'
import GiftModal from '../elements/GiftModal/GiftModal'

const CommonLayout = () => {
  const [giftModalVisible, setGiftModalVisible] = useState<boolean>(false);

  return (
    <div>
      <Welcome/>
      <section>
        <CountdownSection />
      </section>
      <section className={'section-container'}>
        <div className={'grid'}>
          <div className={'col-12'}>
            <Section title={'Ceremonia'}
                     icon={<BiChurch size={48} color={'#c3b38f'}/>}
                     description={'La ceremonia se realizará el 19 de Febrero a las 17:00 horas en la Parroquia San Francisco Solano, Bella Vista.'}
                     redirect={'https://goo.gl/maps/DniBzfSNiwQ2W35f8'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
        </div>
      </section>
      <section className={'section-container gift'}>
        <Section
          icon={<BiGift size={48} color={'#d4efc8'} />}
          secondaryButton
          description={'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...'}
          onClick={() => setGiftModalVisible(true)}
          buttonLabel={'Ver datos'}/>
        <GiftModal visible={giftModalVisible} onClose={() => setGiftModalVisible(false)}/>
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

export default CommonLayout;
