import React from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import CountdownSection from '../elements/CountdownSection/CountdownSection'
import { BiChurch, BiGift, BiDrink } from 'react-icons/bi'
import Link from 'next/link'

const FullLayout = () => {

  const showBankData = () => {

  }

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
                     icon={<BiChurch size={48} color={'#d79235'}/>}
                     description={'La ceremonia se realizará el 12 de Marzo a las 19:00 horas en la Parroquia Ntra. Sra. del Carmen, Tigre.'}
                     redirect={'https://www.google.com.ar/maps'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Fiesta'}
                     icon={<BiDrink size={48} color={'#d79235'}/>}
                     description={'Después de la ceremonia festejaremos en Astilleros Milberg, Nordelta. '}
                     redirect={'https://www.google.com.ar/maps'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>

        </div>
      </section>
      <section className={'section-container gift'}>
        <Section
          icon={<BiGift size={48} color={'#d79235'}/>}
          description={'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...'}
          onClick={showBankData}
          buttonLabel={'Ver datos'}/>
      </section>
      <section className={'section-container'}>
        <Section
          description={'Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!'}
          title={'CONFIRMACIÓN DE ASISTENCIA'}
          redirect={'https://forms.gle/5SCh7nYv61WodoKW8'}
          buttonLabel={'Confirmar asistencia'}/>
      </section>
      <section className={'section-container thank-phrase'}>
        <p>¡Gracias por estar en este momento tan importante! Los queremos 😁 !</p>
      </section>
      <footer>
       <p>Made with ♥ by <Link href={'https://www.instagram.com/tomifor/'}>@tomifor</Link></p>
      </footer>
    </div>
  )
}

export default FullLayout;
