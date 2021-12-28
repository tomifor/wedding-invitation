import React from 'react';
import Welcome from '../elements/Welcome/Welcome'
import Section from '../elements/Section/Section'
import CountdownSection from '../elements/CountdownSection/CountdownSection'
import { BiChurch, BiGift, BiDrink } from 'react-icons/bi'

const FullLayout = () => {

  return (
    <div>
      <Welcome/>
      <section>
        <CountdownSection/>
      </section>
      <section>
        <div className={'grid'}>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Ceremonia'}
                     icon={<BiChurch size={48} color={'#d79235'}/>}
                     description={'La ceremonia se realizará el 12 de Marzo a las 19:00 horas en la Parroquia Ntra. Sra. del Carmen, Tigre.'}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>
          <div className={'col-12 sm:col-12 md:col-6'}>
            <Section title={'Fiesta'}
                     icon={<BiDrink size={48} color={'#d79235'}/>}
                     description={'Después de la ceremonia festejaremos en Astilleros Milberg, Nordelta. '}
                     buttonLabel={'Ver en Google Maps'}/>
          </div>

        </div>


      </section>
      <section>
        <Section
          icon={<BiGift/>}
          description={'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...'}
          buttonLabel={'Ver Datos'}/>
      </section>
    </div>
  )
}

export default FullLayout;
