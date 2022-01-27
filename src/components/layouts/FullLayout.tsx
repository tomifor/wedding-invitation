import React, { useState } from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import CountdownSection from '../elements/CountdownSection/CountdownSection'
import { BiChurch, BiDrink } from 'react-icons/bi'
import SocialSection from '../elements/SocialSection/SocialSection'
import SecretModal from '../elements/SecretModal/SecretModal'
import GiftSection from '../modules/GiftSection/GiftSection'
import Footer from '../modules/Footer/Footer'

const FullLayout = () => {
  const [imageSelected, setImageSelected] = useState<{ image: string, order: number }>({image: '', order: 0});


  return (
    <div>
      <Welcome enableTextGesture onClickNames={() => setImageSelected({image: '/images/formal.jpg', order: 0})}/>
      <section>
        <CountdownSection onClickEasterEgg={() => setImageSelected({image: '/images/campo.jpg', order: 1})} />
      </section>
      <section className={'section-container'}>
        <div className={'grid'}>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Ceremonia'}
                     icon={<BiChurch size={48} color={'#c3b38f'} onClick={() => setImageSelected({image: '/images/propuesta.jpg', order: 2})}/>}
                     description={'La ceremonia se realizará el 19 de Febrero a las 17:00 horas en la Parroquia San Francisco Solano, Bella Vista.'}
                     redirect={'https://goo.gl/maps/DniBzfSNiwQ2W35f8'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Fiesta'}
                     icon={<BiDrink size={48} color={'#c3b38f'}/>}
                     description={'Después de la ceremonia festejaremos en la Quinta Los Diez, Villa de Mayo. 18:30 horas.'}
                     redirect={'https://goo.gl/maps/6tVzwmAFaPs25h6i6'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
        </div>
      </section>
      <section className={'section-container gift'}>
        <GiftSection description={'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...'}/>
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
        <p> Los queremos <span onClick={() => setImageSelected({image: '/images/sur-3.jpg', order: 4})}>😁</span></p>
      </section>
      <SecretModal order={imageSelected.order} image={imageSelected.image ? imageSelected.image : '/undraw_wedding.svg'}
                   visible={!!imageSelected.image}
                   onClose={() => setImageSelected({image: '', order: 0})}/>
      <Footer/>
    </div>
  )
}

export default FullLayout;
