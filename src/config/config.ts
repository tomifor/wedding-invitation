export const CONFIG = {
  title: 'Vicky y Santi',
  description: 'Invitación de casamiento',
  metaImagePreview: 'https://i.ibb.co/X87R0Qg/Captura-de-Pantalla-2021-12-30-a-la-s-22-39-00-2.png', // TODO
  sectionsEnabled: {
    welcomeEnabled: true,
    countdownEnabled: true,
    locationEnabled: true,
    giftEnabled: true,
    socialEnabled: true,
    rsvpEnabled: true,
    phraseEnabled: true,
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
    hashtag: '#VICKYySANTI',
    url: 'https://www.instagram.com/explore/tags/vickyysanti',
    description: 'No olvides etiquetarnos en tus fotos o videos de Instagram con nuestro hashtag!'
  },
  phrase: {
    mainText: '¡Gracias por acompañarnos ',
    secondaryText: '',
  }
}
