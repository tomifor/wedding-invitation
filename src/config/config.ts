export const CONFIG = {
  title: 'Vicky y Nacho',
  description: 'Invitación de casamiento',
  metaImagePreview: '', // TODO
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
    ceremonyDescription: 'La ceremonia se realizará el 11 de marzo a las 19:30 horas en la Basílica del Santísimo Sacramento, CABA.',
    ceremonyUrl: 'https://goo.gl/maps/DECd9KGqtce9kEiW8',
    partyDescription: 'Después de la ceremonia festejaremos en La Escondida de Olivos.',
    partyUrl: 'https://goo.gl/maps/95Lz5iQaVSkFuG1V7',
  },
  gift: {
    description: 'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...',
    accounts: [
      // {cbu: '15003038-00030361002478', alias: 'vickygarcea', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3036100247', accountType: 'pesos'},
      // {cbu: '15003038-00030380705596', alias: 'vickygarceausd', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3038070559', accountType: 'dólares'}
    ]
  },
  rsvp: {
    description: 'Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!',
    redirect: 'https://forms.gle/345AMr3D87R5NahDA',
  },
  social: {
    hashtag: '#VickyNacho',
    url: 'https://www.instagram.com/explore/tags/vickynacho/',
    description: 'No olvides etiquetarnos en tus fotos o videos de Instagram con nuestro hashtag!',
    buttonLabel: 'Ver #VickyNacho'
  },
  phrase: {
    mainText: '¡Gracias por acompañarnos ',
    secondaryText: '',
  }
}
