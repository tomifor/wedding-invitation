export const CONFIG = {
  title: 'Vicky y Nacho',
  description: 'Invitación de casamiento',
  metaImagePreview: 'https://i.ibb.co/yN1R1jJ/Captura-de-pantalla-2022-12-08-a-la-s-19-54-04.png',
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
    date: '2023-03-11T19:30:00'
  },
  location: {
    ceremonyDescription: 'Los invitamos a acompañarnos en la ceremonia religiosa el día 11 de marzo a las 19:30 hs en la Basílica del Santísimo Sacramento',
    ceremonyUrl: 'https://goo.gl/maps/DECd9KGqtce9kEiW8',
    partyDescription: 'Los esperamos después de la ceremonia en "La Escondida de Olivos"',
    partyUrl: 'https://goo.gl/maps/95Lz5iQaVSkFuG1V7',
  },
  gift: {
    description: 'Lista de regalos - AYNIC',
    accounts: [
      // {cbu: '15003038-00030361002478', alias: 'vickygarcea', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3036100247', accountType: 'pesos'},
      // {cbu: '15003038-00030380705596', alias: 'vickygarceausd', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3038070559', accountType: 'dólares'}
    ]
  },
  rsvp: {
    title: 'RSVP',
    description: '¡Nos gustaría que seas parte de este momento!',
    redirect: 'https://forms.gle/fQ8LZVQrtBFBBFVN6',
  },
  social: {
    hashtag: '#VickyNacho',
    url: 'https://www.instagram.com/explore/tags/vickynacho/',
    description: '',
    buttonLabel: ''
  },
  phrase: {
    mainText: '¡Gracias por acompañarnos!',
    secondaryText: '',
  }
}
