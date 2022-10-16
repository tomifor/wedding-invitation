export const CONFIG = {
  title: 'Vicky y Santi',
  description: 'Invitación de casamiento',
  metaImagePreview: 'https://i.ibb.co/Xyqmjpr/Captura-de-Pantalla-2022-10-16-a-la-s-15-07-03.png',
  sectionsEnabled: {
    welcomeEnabled: true,
    countdownEnabled: true,
    locationEnabled: true,
    giftEnabled: true,
    socialEnabled: true,
    rsvpEnabled: true,
    phraseEnabled: true,
    photoGallery: true,
  },
  color: {
    primary: '',
    primaryBackground: '',
    secondary: '',
    secondaryBackground: ''
  }
}

export const SECTIONS = {
  countdown: {
    date: '2022-11-20T21:00:00'
  },
  location: {
    ceremonyDescription: 'La ceremonia se realizará el 30 de Febrero a las 18:00 horas en la Parroquia San Francisco Solano, Bella Vista.',
    ceremonyUrl: 'https://goo.gl/maps/DniBzfSNiwQ2W35f8',
    partyDescription: 'La fiesta se realizará el 20 de noviembre a las 20:30 en el Buenos Aires Rowing Club, Tigre.',
    partyUrl: 'https://g.page/buenosairesrowing?share',
  },
  gift: {
    description: 'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...',
    accounts: [
      {cbu: '15003038-00030361002478', alias: 'vickygarcea', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3036100247', accountType: 'pesos'},
      {cbu: '15003038-00030380705596', alias: 'vickygarceausd', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3038070559', accountType: 'dólares'}
    ]
  },
  rsvp: {
    description: 'Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!',
    redirect: 'https://forms.gle/345AMr3D87R5NahDA',
  },
  social: {
    hashtag: '@vickysanti20.11',
    url: 'https://instagram.com/vickysanti20.11',
    description: 'Seguinos y etiquetanos cuando subas algo del casamiento! Vamos a estar compartiendo todo.'
  },
  phrase: {
    mainText: '¡Gracias por acompañarnos ',
    secondaryText: '',
  }
}
